import type { Question } from "@/content/schema";
import { hashString, mulberry32, shuffle } from "./rng";

export const DAILY_QUESTION_COUNT = 10;

/** Seconds on the clock for each daily question. */
export const QUESTION_TIME_MS = 20_000;
/** Extra time allowed for network delay before an answer counts as timed out. */
export const ANSWER_GRACE_MS = 3_000;
/** Pause after each answer (showing right/wrong) that is not counted against the clock. */
export const FEEDBACK_MS = 1_500;
export const BASE_POINTS = 100;
export const MAX_SPEED_BONUS = 100;
/** Daily score → XP: the leaderboard score is bigger than level scores, so it is scaled down for XP. */
export const DAILY_XP_RATE = 0.25;

/**
 * Points for one daily answer: wrong or out of time = 0; correct = 100 plus a speed bonus that falls
 * from 100 (instant) to 0 (when the clock runs out). Maximum 200 per question, 2,000 per day.
 */
export function dailyPoints(correct: boolean, elapsedMs: number): number {
  if (!correct || elapsedMs > QUESTION_TIME_MS) return 0;
  const remaining = Math.max(0, QUESTION_TIME_MS - Math.max(0, elapsedMs)) / QUESTION_TIME_MS;
  return BASE_POINTS + Math.round(MAX_SPEED_BONUS * remaining);
}

export interface RankedEntry {
  readonly score: number;
  readonly totalMs: number;
  readonly finishedAt: string;
}

/** Leaderboard order: highest score, then fastest total time, then whoever finished first. */
export function compareEntries(a: RankedEntry, b: RankedEntry): number {
  return b.score - a.score || a.totalMs - b.totalMs || a.finishedAt.localeCompare(b.finishedAt);
}

/** Calendar date in the game's home time zone (Toronto), so the daily challenge changes at midnight there. */
export function dailyDateKey(now: Date = new Date(), timeZone = "America/Toronto"): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** Choice order shown to everyone for a question on a given day (the same for all players, so it's fair). */
export function dailyChoiceOrder(day: string, questionId: string, count: number): number[] {
  return shuffle(
    Array.from({ length: count }, (_, i) => i),
    mulberry32(hashString(`daily-choices:${day}:${questionId}`)),
  );
}

/** Bump to reshuffle the whole rotation (e.g. after a large content change). */
const ROTATION_SEED = "daily-rotation-v1";

/** Whole days since 1970-01-01 for a "YYYY-MM-DD" key, independent of time zone. */
export function dayNumber(dateKey: string): number {
  const [y, m, d] = dateKey.split("-").map(Number);
  return Math.floor(Date.UTC(y ?? 1970, (m ?? 1) - 1, d ?? 1) / 86_400_000);
}

/**
 * The daily challenge walks through one fixed shuffle of the whole pool, ten questions a day.
 * Everyone gets the same set on a given date, consecutive days never share a question,
 * and nothing repeats until the pool has been used up (pool size ÷ 10 days).
 */
export function pickDailyQuestions(pool: readonly Question[], dateKey: string): Question[] {
  if (pool.length === 0) return [];
  const ordered = [...pool].sort((a, b) => a.id.localeCompare(b.id));
  const rotation = shuffle(ordered, mulberry32(hashString(ROTATION_SEED)));
  const count = Math.min(DAILY_QUESTION_COUNT, rotation.length);
  const start = (((dayNumber(dateKey) * count) % rotation.length) + rotation.length) % rotation.length;
  const picked = Array.from({ length: count }, (_, i) => rotation[(start + i) % rotation.length]!);
  return picked.sort((a, b) => a.difficulty - b.difficulty);
}
