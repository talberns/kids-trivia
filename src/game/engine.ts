import type { Question } from "@/content/schema";
import { mulberry32, shuffle } from "./rng";

/**
 * Pure state machine for one round (a level or the daily challenge).
 * No React, no I/O — everything here is unit-tested.
 */

export const FIFTY_FIFTY_PER_ROUND = 1;

export interface RoundItem {
  readonly question: Question;
  /** Display order: position → original choice index. */
  readonly order: readonly number[];
}

export type Phase = "answering" | "revealed" | "complete";

export interface AnswerRecord {
  readonly questionId: string;
  readonly correct: boolean;
  readonly points: number;
}

export interface RoundState {
  readonly items: readonly RoundItem[];
  readonly index: number;
  readonly phase: Phase;
  /** Original index of the chosen answer, once answered. */
  readonly selected: number | null;
  /** Original indices hidden by the 50/50 lifeline on the current question. */
  readonly eliminated: readonly number[];
  readonly fiftyFiftyLeft: number;
  readonly combo: number;
  readonly bestCombo: number;
  readonly score: number;
  readonly records: readonly AnswerRecord[];
}

export type RoundAction =
  | { readonly type: "answer"; readonly choice: number }
  | { readonly type: "fifty-fifty"; readonly seed: number }
  | { readonly type: "next" };

/** Multiplier for the streak *including* the answer just given. */
export function comboMultiplier(streak: number): number {
  if (streak >= 5) return 3;
  if (streak === 4) return 2.5;
  if (streak === 3) return 2;
  if (streak === 2) return 1.5;
  return 1;
}

export function pointsFor(difficulty: number, streak: number, usedFiftyFifty: boolean): number {
  const raw = 100 * difficulty * comboMultiplier(streak);
  return Math.round(usedFiftyFifty ? raw / 2 : raw);
}

export function createRound(questions: readonly Question[], seed: number): RoundState {
  if (questions.length === 0) throw new Error("A round needs at least one question");
  const random = mulberry32(seed);
  const items = questions.map((question) => {
    const indices = question.choices.map((_, i) => i);
    return {
      question,
      // True/False keeps its natural order; multiple choice is shuffled so the answer moves around.
      order: question.format === "true-false" ? indices : shuffle(indices, random),
    };
  });
  return {
    items,
    index: 0,
    phase: "answering",
    selected: null,
    eliminated: [],
    fiftyFiftyLeft: FIFTY_FIFTY_PER_ROUND,
    combo: 0,
    bestCombo: 0,
    score: 0,
    records: [],
  };
}

export function currentItem(state: RoundState): RoundItem {
  const item = state.items[state.index];
  if (!item) throw new Error(`No question at index ${state.index}`);
  return item;
}

export function canUseFiftyFifty(state: RoundState): boolean {
  if (state.phase !== "answering" || state.fiftyFiftyLeft <= 0 || state.eliminated.length > 0) return false;
  return currentItem(state).question.format === "multiple-choice";
}

export function roundReducer(state: RoundState, action: RoundAction): RoundState {
  switch (action.type) {
    case "answer": {
      if (state.phase !== "answering") return state;
      const { question } = currentItem(state);
      if (action.choice < 0 || action.choice >= question.choices.length) return state;
      if (state.eliminated.includes(action.choice)) return state;

      const correct = action.choice === question.answer;
      const combo = correct ? state.combo + 1 : 0;
      const points = correct ? pointsFor(question.difficulty, combo, state.eliminated.length > 0) : 0;
      return {
        ...state,
        phase: "revealed",
        selected: action.choice,
        combo,
        bestCombo: Math.max(state.bestCombo, combo),
        score: state.score + points,
        records: [...state.records, { questionId: question.id, correct, points }],
      };
    }
    case "fifty-fifty": {
      if (!canUseFiftyFifty(state)) return state;
      const { question } = currentItem(state);
      const wrong = question.choices.map((_, i) => i).filter((i) => i !== question.answer);
      const eliminated = shuffle(wrong, mulberry32(action.seed)).slice(0, 2);
      return { ...state, eliminated, fiftyFiftyLeft: state.fiftyFiftyLeft - 1 };
    }
    case "next": {
      if (state.phase !== "revealed") return state;
      if (state.index + 1 >= state.items.length) return { ...state, phase: "complete" };
      return { ...state, index: state.index + 1, phase: "answering", selected: null, eliminated: [] };
    }
  }
}

export type Stars = 0 | 1 | 2 | 3;

export function starsFor(correct: number, total: number): Stars {
  if (total <= 0) return 0;
  const ratio = correct / total;
  if (ratio === 1) return 3;
  if (ratio >= 0.8) return 2;
  if (ratio >= 0.6) return 1;
  return 0;
}

export function correctCount(state: RoundState): number {
  return state.records.filter((r) => r.correct).length;
}
