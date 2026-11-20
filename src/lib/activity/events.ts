/**
 * The activity events the game records. Shared by the browser (which sends them)
 * and the server (which validates and stores them), so both agree on the shape.
 */
import { z } from "zod";

const shortText = z.string().max(120);
const mode = z.enum(["level", "daily"]);

/** Events a browser may send to /api/events. Login events are only ever written by the server. */
export const clientEventSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("page_view"), path: z.string().startsWith("/").max(300) }),
  z.object({
    type: z.literal("round_start"),
    mode,
    era: shortText.optional(),
    level: z.number().int().min(1).max(20).optional(),
  }),
  z.object({
    type: z.literal("answer"),
    mode,
    era: shortText.optional(),
    level: z.number().int().min(1).max(20).optional(),
    questionId: z.string().regex(/^[a-z]{3}-\d{3}$/),
    correct: z.boolean(),
    usedFiftyFifty: z.boolean(),
  }),
  z.object({
    type: z.literal("insight_read"),
    mode,
    era: shortText.optional(),
    level: z.number().int().min(1).max(20).optional(),
    questionId: z.string().regex(/^[a-z]{3}-\d{3}$/),
    /** Seconds between seeing the explanation and moving on. */
    seconds: z.number().int().min(0).max(3600),
    /** Whether the reader scrolled to the end of the explanation. */
    reachedEnd: z.boolean(),
  }),
  z.object({
    type: z.literal("round_complete"),
    mode,
    era: shortText.optional(),
    level: z.number().int().min(1).max(20).optional(),
    score: z.number().int().min(0).max(100_000),
    stars: z.number().int().min(0).max(3),
    correct: z.number().int().min(0).max(50),
    total: z.number().int().min(1).max(50),
  }),
]);
export type ClientEvent = z.infer<typeof clientEventSchema>;

export type ServerEvent =
  | { type: "signup" }
  | { type: "login" }
  | { type: "login_failed" }
  | { type: "logout" }
  | { type: "password_reset" }
  | { type: "daily_start"; day: string }
  | { type: "daily_complete"; day: string; score: number; correct: number; total: number; seconds: number };
export type ActivityEvent = ClientEvent | ServerEvent;

export const EVENT_LABEL: Record<ActivityEvent["type"], string> = {
  signup: "Created account",
  login: "Logged in",
  password_reset: "Password reset by admin",
  daily_start: "Started daily",
  daily_complete: "Finished daily",
  login_failed: "Wrong password",
  logout: "Logged out",
  page_view: "Opened page",
  round_start: "Started",
  answer: "Answered",
  insight_read: "Read explanation",
  round_complete: "Finished",
};

/** One-line human description of an event's details, for the admin table. */
export function describeEvent(type: string, data: Record<string, unknown>): string {
  const where =
    data.mode === "daily"
      ? "Daily challenge"
      : typeof data.era === "string"
        ? `${data.era}${typeof data.level === "number" ? ` · level ${data.level}` : ""}`
        : "";
  switch (type) {
    case "page_view":
      return String(data.path ?? "");
    case "round_start":
      return where;
    case "answer":
      return `${where} · ${String(data.questionId ?? "")} · ${data.correct ? "✓ correct" : "✗ wrong"}${data.usedFiftyFifty ? " (50/50)" : ""}`;
    case "insight_read":
      return `${where} · ${String(data.questionId ?? "")} · ${String(data.seconds)}s${data.reachedEnd ? " · read to the end" : " · skipped ahead"}`;
    case "daily_start":
      return `Daily challenge ${String(data.day ?? "")}`;
    case "daily_complete":
      return `Daily challenge ${String(data.day ?? "")} · ${String(data.correct)}/${String(data.total)} correct · ${String(data.score)} pts · ${String(data.seconds)}s`;
    case "round_complete":
      return `${where} · ${String(data.correct)}/${String(data.total)} correct · ${String(data.stars)}★ · ${String(data.score)} pts`;
    default:
      return "";
  }
}

/** Case- and accent-insensitive key, so "dana levi" and "Dana Levi" count as the same player. */
export function playerKey(firstName: string, lastName: string): string {
  const fold = (s: string) => s.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().trim();
  return `${fold(firstName)}|${fold(lastName)}`;
}
