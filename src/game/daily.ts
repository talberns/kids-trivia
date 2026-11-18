import type { Question } from "@/content/schema";
import { hashString, mulberry32, shuffle } from "./rng";

export const DAILY_QUESTION_COUNT = 5;

/** Same five questions for everyone on a given day, easiest first. */
export function pickDailyQuestions(pool: readonly Question[], dateKey: string): Question[] {
  const random = mulberry32(hashString(`daily:${dateKey}`));
  return shuffle(pool, random)
    .slice(0, DAILY_QUESTION_COUNT)
    .sort((a, b) => a.difficulty - b.difficulty);
}
