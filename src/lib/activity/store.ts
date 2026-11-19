import "server-only";
import { neon } from "@neondatabase/serverless";
import { playerKey, type ActivityEvent } from "./events";

/**
 * Activity log, stored in the free Neon Postgres database connected through the Vercel Marketplace
 * (DATABASE_URL). Without a database (local dev, CI) events go to the server console instead.
 * We store names as typed, the event, a coarse country and the browser string. No IP addresses.
 */
type Sql = ReturnType<typeof neon>;

let client: Sql | null | undefined;
let schemaReady: Promise<void> | null = null;

function db(): Sql | null {
  if (client === undefined) {
    const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
    client = url ? neon(url) : null;
  }
  return client;
}

async function ensureSchema(sql: Sql): Promise<void> {
  schemaReady ??= (async () => {
    await sql`CREATE TABLE IF NOT EXISTS activity_events (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      player_key TEXT NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      session_id TEXT,
      type TEXT NOT NULL,
      data JSONB NOT NULL DEFAULT '{}'::jsonb,
      country TEXT,
      user_agent TEXT
    )`;
    await sql`CREATE INDEX IF NOT EXISTS activity_events_created_idx ON activity_events (created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS activity_events_player_idx ON activity_events (player_key, created_at DESC)`;
  })().catch((error: unknown) => {
    schemaReady = null; // retry on the next call
    throw error;
  });
  return schemaReady;
}

export interface Actor {
  readonly firstName: string;
  readonly lastName: string;
  readonly sessionId: string | null;
}

/** Records one event. Never throws: logging must not break the game. */
export async function recordEvent(actor: Actor, event: ActivityEvent, request?: Request): Promise<void> {
  const { type, ...data } = event;
  const country = request?.headers.get("x-vercel-ip-country")?.slice(0, 8) ?? null;
  const userAgent = request?.headers.get("user-agent")?.slice(0, 300) ?? null;
  const sql = db();
  if (!sql) {
    if (process.env.NODE_ENV !== "test") {
      console.info("[activity]", type, actor.firstName, actor.lastName, JSON.stringify(data));
    }
    return;
  }
  try {
    await ensureSchema(sql);
    await sql`INSERT INTO activity_events (player_key, first_name, last_name, session_id, type, data, country, user_agent)
      VALUES (${playerKey(actor.firstName, actor.lastName)}, ${actor.firstName}, ${actor.lastName}, ${actor.sessionId},
              ${type}, ${JSON.stringify(data)}::jsonb, ${country}, ${userAgent})`;
  } catch (error) {
    console.error("[activity] failed to record event", type, error);
  }
}

export interface PlayerSummary {
  readonly playerKey: string;
  readonly name: string;
  readonly firstSeen: string;
  readonly lastSeen: string;
  readonly logins: number;
  readonly failedLogins: number;
  readonly rounds: number;
  readonly answers: number;
  readonly correct: number;
  /** Median seconds spent on explanations, or null if none recorded. */
  readonly medianReadSeconds: number | null;
  /** Share of explanations read to the end (0–1), or null. */
  readonly readShare: number | null;
}

export interface EventRow {
  readonly id: string;
  readonly createdAt: string;
  readonly playerKey: string;
  readonly name: string;
  readonly sessionId: string | null;
  readonly type: string;
  readonly data: Record<string, unknown>;
  readonly country: string | null;
  readonly userAgent: string | null;
}

export type ActivityReport =
  | { readonly ok: true; readonly players: readonly PlayerSummary[]; readonly events: readonly EventRow[] }
  | { readonly ok: false; readonly reason: "no-database" | "error" };

const iso = (value: unknown) => (value instanceof Date ? value.toISOString() : String(value));

export async function loadActivity(options: { player?: string; limit?: number } = {}): Promise<ActivityReport> {
  const sql = db();
  if (!sql) return { ok: false, reason: "no-database" };
  const limit = Math.min(Math.max(options.limit ?? 300, 1), 5000);
  const player = options.player ?? null;
  try {
    await ensureSchema(sql);
    const [players, events] = await Promise.all([
      sql`SELECT player_key,
                 (array_agg(first_name || ' ' || last_name ORDER BY created_at DESC))[1] AS name,
                 min(created_at) AS first_seen,
                 max(created_at) AS last_seen,
                 count(*) FILTER (WHERE type = 'login') AS logins,
                 count(*) FILTER (WHERE type = 'login_failed') AS failed_logins,
                 count(*) FILTER (WHERE type = 'round_complete') AS rounds,
                 count(*) FILTER (WHERE type = 'answer') AS answers,
                 count(*) FILTER (WHERE type = 'answer' AND data->>'correct' = 'true') AS correct,
                 percentile_cont(0.5) WITHIN GROUP (ORDER BY (data->>'seconds')::numeric)
                   FILTER (WHERE type = 'insight_read') AS median_read,
                 avg(CASE WHEN data->>'reachedEnd' = 'true' THEN 1.0 ELSE 0.0 END)
                   FILTER (WHERE type = 'insight_read') AS read_share
          FROM activity_events
          GROUP BY player_key
          ORDER BY max(created_at) DESC`,
      sql`SELECT id, created_at, player_key, first_name, last_name, session_id, type, data, country, user_agent
          FROM activity_events
          WHERE ${player}::text IS NULL OR player_key = ${player}
          ORDER BY created_at DESC
          LIMIT ${limit}`,
    ]);
    return {
      ok: true,
      players: (players as Record<string, unknown>[]).map((r) => ({
        playerKey: String(r.player_key),
        name: String(r.name),
        firstSeen: iso(r.first_seen),
        lastSeen: iso(r.last_seen),
        logins: Number(r.logins),
        failedLogins: Number(r.failed_logins),
        rounds: Number(r.rounds),
        answers: Number(r.answers),
        correct: Number(r.correct),
        medianReadSeconds: r.median_read == null ? null : Math.round(Number(r.median_read)),
        readShare: r.read_share == null ? null : Number(r.read_share),
      })),
      events: (events as Record<string, unknown>[]).map((r) => ({
        id: String(r.id),
        createdAt: iso(r.created_at),
        playerKey: String(r.player_key),
        name: `${String(r.first_name)} ${String(r.last_name)}`,
        sessionId: r.session_id == null ? null : String(r.session_id),
        type: String(r.type),
        data: (r.data ?? {}) as Record<string, unknown>,
        country: r.country == null ? null : String(r.country),
        userAgent: r.user_agent == null ? null : String(r.user_agent),
      })),
    };
  } catch (error) {
    console.error("[activity] failed to load", error);
    return { ok: false, reason: "error" };
  }
}
