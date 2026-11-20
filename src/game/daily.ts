import type { Question } from "@/content/schema";
import { hashString, mulberry32, shuffle } from "./rng";

export const DAILY_QUESTION_COUNT = 5;

/** Bump to reshuffle the whole rotation (e.g. after a large content change). */
const ROTATION_SEED = "daily-rotation-v1";

/** Whole days since 1970-01-01 for a "YYYY-MM-DD" key, independent of time zone. */
export function dayNumber(dateKey: string): number {
  const [y, m, d] = dateKey.split("-").map(Number);
  return Math.floor(Date.UTC(y ?? 1970, (m ?? 1) - 1, d ?? 1) / 86_400_000);
}

/**
 * The daily challenge walks through one fixed shuffle of the whole pool, five questions a day.
 * Everyone gets the same set on a given date, consecutive days never share a question,
 * and nothing repeats until the pool has been used up (pool size ÷ 5 days).
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
