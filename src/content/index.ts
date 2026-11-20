import "server-only";
import { PLAYABLE_ERAS } from "./eras";
import { dailyA } from "./questions/daily-a";
import { dailyB } from "./questions/daily-b";
import { dailyC } from "./questions/daily-c";
import { dividedKingdom } from "./questions/divided-kingdom";
import { earlyChurch } from "./questions/early-church";
import { exile } from "./questions/exile";
import { exodus } from "./questions/exodus";
import { hellenistic } from "./questions/hellenistic";
import { patriarchs } from "./questions/patriarchs";
import { romanJudea } from "./questions/roman-judea";
import { romanJudea2 } from "./questions/roman-judea-2";
import { unitedMonarchy } from "./questions/united-monarchy";
import { questionSchema, type Question, type QuestionInput } from "./schema";

export const QUESTIONS_PER_LEVEL = 5;

/**
 * Validates every question and the bank as a whole. Throws with a precise
 * message on the first problem, so bad content fails the build instead of
 * reaching players.
 */
export function loadQuestionBank(raw: readonly QuestionInput[]): Question[] {
  const seen = new Set<string>();
  return raw.map((input) => {
    const result = questionSchema.safeParse(input);
    if (!result.success) {
      const issues = result.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
      throw new Error(`Invalid question ${String((input as { id?: unknown }).id)}: ${issues}`);
    }
    if (seen.has(result.data.id)) throw new Error(`Duplicate question id ${result.data.id}`);
    seen.add(result.data.id);
    return result.data;
  });
}

export const QUESTION_BANK: readonly Question[] = loadQuestionBank([
  ...patriarchs,
  ...exodus,
  ...unitedMonarchy,
  ...dividedKingdom,
  ...exile,
  ...hellenistic,
  ...romanJudea,
  ...romanJudea2,
  ...earlyChurch,
  ...dailyA,
  ...dailyB,
  ...dailyC,
]);

export const PUBLISHED_QUESTIONS: readonly Question[] = QUESTION_BANK.filter(
  (q) => q.review.status === "published",
);

/** Daily-only questions (no level). The daily challenge draws from every published question. */
export const DAILY_ONLY_QUESTIONS: readonly Question[] = PUBLISHED_QUESTIONS.filter((q) => q.daily === true);

/** Published questions for one level, easiest first. */
export function getLevelQuestions(era: string, level: number): Question[] {
  return PUBLISHED_QUESTIONS.filter((q) => q.era === era && q.level === level).sort(
    (a, b) => a.difficulty - b.difficulty || a.id.localeCompare(b.id),
  );
}

/** Problems that would make a playable level unplayable. Used by tests and the content report. */
export function findCoverageGaps(bank: readonly Question[] = PUBLISHED_QUESTIONS): string[] {
  const gaps: string[] = [];
  for (const era of PLAYABLE_ERAS) {
    for (let level = 1; level <= era.levels; level++) {
      const count = bank.filter((q) => q.era === era.id && q.level === level).length;
      if (count !== QUESTIONS_PER_LEVEL) {
        gaps.push(`${era.id} level ${level}: ${count} published questions (need ${QUESTIONS_PER_LEVEL})`);
      }
    }
  }
  return gaps;
}
