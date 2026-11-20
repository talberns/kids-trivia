import "server-only";
import { neon } from "@neondatabase/serverless";
import type { DailyAnswer, DailyAttempt, LeaderboardRow, Repo, UserRecord } from "./types";

type Sql = ReturnType<typeof neon>;
type Row = Record<string, unknown>;

let client: Sql | null = null;
let schemaReady: Promise<void> | null = null;

function sql(url: string): Sql {
  client ??= neon(url);
  return client;
}

/** Creates tables on first use. Each statement is idempotent, so concurrent cold starts are safe. */
function ensureSchema(db: Sql): Promise<void> {
  schemaReady ??= (async () => {
    await db`CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username TEXT NOT NULL UNIQUE,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      last_login_at TIMESTAMPTZ
    )`;
    await db`CREATE TABLE IF NOT EXISTS player_progress (
      user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
    await db`CREATE TABLE IF NOT EXISTS daily_attempts (
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      day DATE NOT NULL,
      question_ids TEXT[] NOT NULL,
      answers JSONB NOT NULL DEFAULT '[]'::jsonb,
      current_started_at TIMESTAMPTZ NOT NULL,
      score INTEGER NOT NULL DEFAULT 0,
      correct INTEGER NOT NULL DEFAULT 0,
      total_ms INTEGER NOT NULL DEFAULT 0,
      finished_at TIMESTAMPTZ,
      PRIMARY KEY (user_id, day)
    )`;
    await db`CREATE INDEX IF NOT EXISTS daily_attempts_day_idx ON daily_attempts (day, score DESC)`;
  })().catch((error: unknown) => {
    schemaReady = null;
    throw error;
  });
  return schemaReady;
}

const iso = (value: unknown): string => (value instanceof Date ? value.toISOString() : String(value));
const isoOrNull = (value: unknown): string | null => (value == null ? null : iso(value));
const dayKey = (value: unknown): string => (value instanceof Date ? value.toISOString().slice(0, 10) : String(value).slice(0, 10));

function toUser(r: Row): UserRecord {
  return {
    id: String(r.id),
    username: String(r.username),
    firstName: String(r.first_name),
    lastName: String(r.last_name),
    passwordHash: String(r.password_hash),
    createdAt: iso(r.created_at),
    lastLoginAt: isoOrNull(r.last_login_at),
  };
}

function toAttempt(r: Row): DailyAttempt {
  return {
    userId: String(r.user_id),
    day: dayKey(r.day),
    questionIds: (r.question_ids as string[]) ?? [],
    answers: (r.answers as DailyAnswer[]) ?? [],
    currentStartedAt: iso(r.current_started_at),
    score: Number(r.score),
    correct: Number(r.correct),
    totalMs: Number(r.total_ms),
    finishedAt: isoOrNull(r.finished_at),
  };
}

export function neonRepo(url: string): Repo {
  const db = sql(url);
  const ready = () => ensureSchema(db);
  const rows = async (query: Promise<unknown>) => (await query) as Row[];

  return {
    async createUser(input) {
      await ready();
      const result = await rows(db`INSERT INTO users (username, first_name, last_name, password_hash)
        VALUES (${input.username}, ${input.firstName}, ${input.lastName}, ${input.passwordHash})
        ON CONFLICT (username) DO NOTHING
        RETURNING *`);
      return result[0] ? toUser(result[0]) : "taken";
    },
    async findUserByUsername(username) {
      await ready();
      const result = await rows(db`SELECT * FROM users WHERE username = ${username}`);
      return result[0] ? toUser(result[0]) : null;
    },
    async findUserById(id) {
      await ready();
      const result = await rows(db`SELECT * FROM users WHERE id = ${id}::uuid`);
      return result[0] ? toUser(result[0]) : null;
    },
    async setPassword(id, passwordHash) {
      await ready();
      await db`UPDATE users SET password_hash = ${passwordHash} WHERE id = ${id}::uuid`;
    },
    async touchLogin(id) {
      await ready();
      await db`UPDATE users SET last_login_at = now() WHERE id = ${id}::uuid`;
    },
    async listUsers() {
      await ready();
      return (await rows(db`SELECT * FROM users ORDER BY created_at`)).map(toUser);
    },
    async getProgress(userId) {
      await ready();
      const result = await rows(db`SELECT data FROM player_progress WHERE user_id = ${userId}::uuid`);
      return result[0]?.data ?? null;
    },
    async saveProgress(userId, data) {
      await ready();
      await db`INSERT INTO player_progress (user_id, data, updated_at)
        VALUES (${userId}::uuid, ${JSON.stringify(data)}::jsonb, now())
        ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()`;
    },
    async getAttempt(userId, day) {
      await ready();
      const result = await rows(db`SELECT * FROM daily_attempts WHERE user_id = ${userId}::uuid AND day = ${day}::date`);
      return result[0] ? toAttempt(result[0]) : null;
    },
    async createAttempt(a) {
      await ready();
      await db`INSERT INTO daily_attempts (user_id, day, question_ids, answers, current_started_at)
        VALUES (${a.userId}::uuid, ${a.day}::date, ${a.questionIds as string[]}, '[]'::jsonb, ${a.currentStartedAt}::timestamptz)
        ON CONFLICT (user_id, day) DO NOTHING`;
      const stored = await rows(db`SELECT * FROM daily_attempts WHERE user_id = ${a.userId}::uuid AND day = ${a.day}::date`);
      return toAttempt(stored[0]!);
    },
    async updateAttempt(a, expectedAnswers) {
      await ready();
      const result = await rows(db`UPDATE daily_attempts
        SET answers = ${JSON.stringify(a.answers)}::jsonb,
            current_started_at = ${a.currentStartedAt}::timestamptz,
            score = ${a.score}, correct = ${a.correct}, total_ms = ${a.totalMs},
            finished_at = ${a.finishedAt}::timestamptz
        WHERE user_id = ${a.userId}::uuid AND day = ${a.day}::date
          AND jsonb_array_length(answers) = ${expectedAnswers}
        RETURNING user_id`);
      return result.length > 0;
    },
    async leaderboard(day) {
      await ready();
      const result = await rows(db`SELECT a.user_id, u.first_name, u.last_name, a.score, a.correct, a.total_ms, a.finished_at
        FROM daily_attempts a JOIN users u ON u.id = a.user_id
        WHERE a.day = ${day}::date AND a.finished_at IS NOT NULL`);
      return result.map(
        (r): LeaderboardRow => ({
          userId: String(r.user_id),
          firstName: String(r.first_name),
          lastName: String(r.last_name),
          score: Number(r.score),
          correct: Number(r.correct),
          totalMs: Number(r.total_ms),
          finishedAt: iso(r.finished_at),
        }),
      );
    },
  };
}
