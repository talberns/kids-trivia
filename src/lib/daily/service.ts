import "server-only";
import { PUBLISHED_QUESTIONS } from "@/content/index";
import type { Question } from "@/content/schema";
import {
  ANSWER_GRACE_MS,
  compareEntries,
  DAILY_QUESTION_COUNT,
  dailyChoiceOrder,
  dailyPoints,
  FEEDBACK_MS,
  pickDailyQuestions,
  QUESTION_TIME_MS,
} from "@/game/daily";
import type { DailyAnswer, DailyAttempt, Repo } from "@/lib/data/types";

/**
 * The daily challenge is scored on the server: questions are sent one at a time without the answer,
 * and the clock is the server's. This keeps the public leaderboard fair.
 */

const byId = new Map(PUBLISHED_QUESTIONS.map((q) => [q.id, q]));

export interface PublicQuestion {
  readonly index: number;
  readonly total: number;
  readonly prompt: string;
  readonly choices: readonly string[];
  readonly category: string;
  readonly difficulty: number;
  /** Milliseconds until the clock starts (the pause after the previous answer). */
  readonly startsInMs: number;
  /** Milliseconds on the clock once it starts. */
  readonly limitMs: number;
}

export interface ReviewItem {
  readonly prompt: string;
  readonly yourAnswer: string | null;
  readonly correctAnswer: string;
  readonly correct: boolean;
  readonly points: number;
  readonly seconds: number;
}

export type DailyState =
  | { readonly status: "not-started"; readonly day: string; readonly total: number }
  | {
      readonly status: "playing";
      readonly day: string;
      readonly question: PublicQuestion;
      readonly score: number;
      readonly correct: number;
      readonly answered: number;
    }
  | {
      readonly status: "finished";
      readonly day: string;
      readonly score: number;
      readonly correct: number;
      readonly total: number;
      readonly totalMs: number;
      readonly review: readonly ReviewItem[];
    };

export function questionsForDay(day: string): Question[] {
  return pickDailyQuestions(PUBLISHED_QUESTIONS, day);
}

function shownChoices(day: string, q: Question): string[] {
  return dailyChoiceOrder(day, q.id, q.choices.length).map((i) => q.choices[i]!);
}

/** Index of the correct answer in the order shown to players. */
function shownAnswer(day: string, q: Question): number {
  return dailyChoiceOrder(day, q.id, q.choices.length).indexOf(q.answer);
}

function publicQuestion(attempt: DailyAttempt, now: number): PublicQuestion | null {
  const index = attempt.answers.length;
  const q = byId.get(attempt.questionIds[index] ?? "");
  if (!q) return null;
  const startsAt = Date.parse(attempt.currentStartedAt);
  return {
    index,
    total: attempt.questionIds.length,
    prompt: q.prompt,
    choices: q.format === "true-false" ? q.choices : shownChoices(attempt.day, q),
    category: q.category,
    difficulty: q.difficulty,
    startsInMs: Math.max(0, startsAt - now),
    limitMs: Math.max(0, Math.min(QUESTION_TIME_MS, QUESTION_TIME_MS - Math.max(0, now - startsAt))),
  };
}

const correctIndexShown = (day: string, q: Question) => (q.format === "true-false" ? q.answer : shownAnswer(day, q));
const choiceText = (day: string, q: Question, shown: number) =>
  shown < 0 ? null : ((q.format === "true-false" ? q.choices : shownChoices(day, q))[shown] ?? null);

function review(attempt: DailyAttempt): ReviewItem[] {
  return attempt.answers.map((a) => {
    const q = byId.get(a.questionId)!;
    return {
      prompt: q.prompt,
      yourAnswer: choiceText(attempt.day, q, a.choice),
      correctAnswer: q.choices[q.answer]!,
      correct: a.correct,
      points: a.points,
      seconds: Math.round(a.ms / 100) / 10,
    };
  });
}

export function stateOf(attempt: DailyAttempt | null, day: string, now = Date.now()): DailyState {
  if (!attempt) return { status: "not-started", day, total: DAILY_QUESTION_COUNT };
  if (attempt.finishedAt) {
    return {
      status: "finished",
      day,
      score: attempt.score,
      correct: attempt.correct,
      total: attempt.questionIds.length,
      totalMs: attempt.totalMs,
      review: review(attempt),
    };
  }
  const question = publicQuestion(attempt, now);
  if (!question) throw new Error("daily attempt has no current question");
  return { status: "playing", day, question, score: attempt.score, correct: attempt.correct, answered: attempt.answers.length };
}

/** Applies one answer (or a timeout, choice -1) to the attempt and returns the updated attempt. */
export function applyAnswer(attempt: DailyAttempt, shownChoice: number, now: number): { attempt: DailyAttempt; answer: DailyAnswer } {
  const index = attempt.answers.length;
  const q = byId.get(attempt.questionIds[index] ?? "");
  if (!q) throw new Error("no current question");
  const elapsed = Math.max(0, now - Date.parse(attempt.currentStartedAt));
  const timedOut = elapsed > QUESTION_TIME_MS + ANSWER_GRACE_MS || shownChoice < 0;
  const ms = Math.min(elapsed, QUESTION_TIME_MS);
  const correct = !timedOut && shownChoice === correctIndexShown(attempt.day, q);
  const points = timedOut ? 0 : dailyPoints(correct, Math.min(elapsed, QUESTION_TIME_MS));
  const answer: DailyAnswer = { questionId: q.id, choice: timedOut ? -1 : shownChoice, correct, ms, points };
  const answers = [...attempt.answers, answer];
  const finished = answers.length >= attempt.questionIds.length;
  return {
    answer,
    attempt: {
      ...attempt,
      answers,
      score: attempt.score + points,
      correct: attempt.correct + (correct ? 1 : 0),
      totalMs: attempt.totalMs + ms,
      currentStartedAt: new Date(now + FEEDBACK_MS).toISOString(),
      finishedAt: finished ? new Date(now).toISOString() : null,
    },
  };
}

/** Questions whose clock ran out while the player was away count as timed out. */
export function expireTimeouts(attempt: DailyAttempt, now: number): DailyAttempt {
  let current = attempt;
  while (!current.finishedAt) {
    const startedAt = Date.parse(current.currentStartedAt);
    if (now - startedAt <= QUESTION_TIME_MS + ANSWER_GRACE_MS) break;
    const expiredAt = startedAt + QUESTION_TIME_MS + ANSWER_GRACE_MS + 1;
    current = applyAnswer(current, -1, expiredAt).attempt;
    // The next question starts when the player is back, not while they were away.
    if (!current.finishedAt) current = { ...current, currentStartedAt: new Date(Math.max(now, expiredAt)).toISOString() };
  }
  return current;
}

export async function loadState(repo: Repo, userId: string, day: string): Promise<{ attempt: DailyAttempt | null; state: DailyState }> {
  const now = Date.now();
  let attempt = await repo.getAttempt(userId, day);
  if (attempt && !attempt.finishedAt) {
    const expired = expireTimeouts(attempt, now);
    if (expired !== attempt && (await repo.updateAttempt(expired, attempt.answers.length))) attempt = expired;
  }
  return { attempt, state: stateOf(attempt, day, now) };
}

export function newAttempt(userId: string, day: string, now = Date.now()): DailyAttempt {
  return {
    userId,
    day,
    questionIds: questionsForDay(day).map((q) => q.id),
    answers: [],
    currentStartedAt: new Date(now).toISOString(),
    score: 0,
    correct: 0,
    totalMs: 0,
    finishedAt: null,
  };
}

export interface LeaderboardEntry {
  readonly rank: number;
  readonly name: string;
  readonly score: number;
  readonly correct: number;
  readonly seconds: number;
  readonly isMe: boolean;
}

/** First name and last initial, e.g. "Dana L." */
export function displayName(firstName: string, lastName: string): string {
  return lastName ? `${firstName} ${lastName.charAt(0).toUpperCase()}.` : firstName;
}

export async function leaderboardFor(repo: Repo, day: string, userId: string | null): Promise<LeaderboardEntry[]> {
  const rows = (await repo.leaderboard(day)).sort(compareEntries);
  return rows.map((r, i) => ({
    rank: i + 1,
    name: displayName(r.firstName, r.lastName),
    score: r.score,
    correct: r.correct,
    seconds: Math.round(r.totalMs / 1000),
    isMe: r.userId === userId,
  }));
}

export { correctIndexShown };
