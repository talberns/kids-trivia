import "server-only";
import { PLAYABLE_ERAS } from "./eras";
import { dailyA } from "./questions/daily-a";
import { dailyB } from "./questions/daily-b";
import { dailyC } from "./questions/daily-c";
import { dailyD } from "./questions/daily-d";
import { dividedKingdom2 } from "./questions/divided-kingdom-2";
import { dividedKingdom3 } from "./questions/divided-kingdom-3";
import { dividedKingdom4 } from "./questions/divided-kingdom-4";
import { dividedKingdom } from "./questions/divided-kingdom";
import { earlyChurch2 } from "./questions/early-church-2";
import { earlyChurch3 } from "./questions/early-church-3";
import { earlyChurch4 } from "./questions/early-church-4";
import { earlyChurch } from "./questions/early-church";
import { exile2 } from "./questions/exile-2";
import { exile3 } from "./questions/exile-3";
import { exile4 } from "./questions/exile-4";
import { exile } from "./questions/exile";
import { exodus2 } from "./questions/exodus-2";
import { exodus3 } from "./questions/exodus-3";
import { exodus4 } from "./questions/exodus-4";
import { exodus } from "./questions/exodus";
import { hellenistic2 } from "./questions/hellenistic-2";
import { hellenistic3 } from "./questions/hellenistic-3";
import { hellenistic4 } from "./questions/hellenistic-4";
import { hellenistic } from "./questions/hellenistic";
import { judges1 } from "./questions/judges-1";
import { judges2 } from "./questions/judges-2";
import { judges3 } from "./questions/judges-3";
import { judges4 } from "./questions/judges-4";
import { patriarchs2 } from "./questions/patriarchs-2";
import { patriarchs3 } from "./questions/patriarchs-3";
import { patriarchs4 } from "./questions/patriarchs-4";
import { patriarchs } from "./questions/patriarchs";
import { persian1 } from "./questions/persian-1";
import { persian2 } from "./questions/persian-2";
import { persian3 } from "./questions/persian-3";
import { persian4 } from "./questions/persian-4";
import { primeval1 } from "./questions/primeval-1";
import { primeval2 } from "./questions/primeval-2";
import { primeval3 } from "./questions/primeval-3";
import { primeval4 } from "./questions/primeval-4";
import { romanJudea2 } from "./questions/roman-judea-2";
import { romanJudea3 } from "./questions/roman-judea-3";
import { romanJudea4 } from "./questions/roman-judea-4";
import { romanJudea } from "./questions/roman-judea";
import { unitedMonarchy2 } from "./questions/united-monarchy-2";
import { unitedMonarchy3 } from "./questions/united-monarchy-3";
import { unitedMonarchy4 } from "./questions/united-monarchy-4";
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
  ...dailyA,
  ...dailyB,
  ...dailyC,
  ...dailyD,
  ...dividedKingdom2,
  ...dividedKingdom3,
  ...dividedKingdom4,
  ...dividedKingdom,
  ...earlyChurch2,
  ...earlyChurch3,
  ...earlyChurch4,
  ...earlyChurch,
  ...exile2,
  ...exile3,
  ...exile4,
  ...exile,
  ...exodus2,
  ...exodus3,
  ...exodus4,
  ...exodus,
  ...hellenistic2,
  ...hellenistic3,
  ...hellenistic4,
  ...hellenistic,
  ...judges1,
  ...judges2,
  ...judges3,
  ...judges4,
  ...patriarchs2,
  ...patriarchs3,
  ...patriarchs4,
  ...patriarchs,
  ...persian1,
  ...persian2,
  ...persian3,
  ...persian4,
  ...primeval1,
  ...primeval2,
  ...primeval3,
  ...primeval4,
  ...romanJudea2,
  ...romanJudea3,
  ...romanJudea4,
  ...romanJudea,
  ...unitedMonarchy2,
  ...unitedMonarchy3,
  ...unitedMonarchy4,
  ...unitedMonarchy,
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
