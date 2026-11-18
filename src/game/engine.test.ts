import { describe, expect, it } from "vitest";
import type { Question } from "@/content/schema";
import {
  canUseFiftyFifty,
  comboMultiplier,
  createRound,
  currentItem,
  pointsFor,
  roundReducer,
  starsFor,
  type RoundState,
} from "./engine";

function makeQuestion(id: string, overrides: Partial<Question> = {}): Question {
  return {
    id,
    era: "patriarchs",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: `Prompt ${id}`,
    choices: ["A", "B", "C", "D"],
    answer: 2,
    explanation: { textSays: "text", theirEyes: "eyes" },
    confidence: "settled",
    references: [],
    sources: [{ kind: "reference", citation: "ref" }],
    review: { status: "published", reviewedOn: "2026-11-18" },
    ...overrides,
  };
}

const questions = [makeQuestion("tst-001"), makeQuestion("tst-002", { difficulty: 2 }), makeQuestion("tst-003")];

function answerCorrectly(state: RoundState): RoundState {
  return roundReducer(state, { type: "answer", choice: currentItem(state).question.answer });
}

describe("createRound", () => {
  it("rejects an empty round", () => {
    expect(() => createRound([], 1)).toThrow();
  });

  it("shuffles multiple-choice options deterministically by seed", () => {
    const a = createRound(questions, 42);
    const b = createRound(questions, 42);
    expect(a.items.map((i) => i.order)).toEqual(b.items.map((i) => i.order));
    for (const item of a.items) expect([...item.order].sort()).toEqual([0, 1, 2, 3]);
  });

  it("keeps true/false in natural order", () => {
    const tf = makeQuestion("tst-009", { format: "true-false", choices: ["True", "False"], answer: 1 });
    expect(createRound([tf], 7).items[0]?.order).toEqual([0, 1]);
  });
});

describe("scoring", () => {
  it("scales the combo multiplier and caps it at 3x", () => {
    expect([1, 2, 3, 4, 5, 9].map(comboMultiplier)).toEqual([1, 1.5, 2, 2.5, 3, 3]);
  });

  it("halves points when 50/50 was used", () => {
    expect(pointsFor(2, 1, false)).toBe(200);
    expect(pointsFor(2, 1, true)).toBe(100);
  });
});

describe("roundReducer", () => {
  it("awards points and builds a combo for correct answers", () => {
    let state = createRound(questions, 1);
    state = answerCorrectly(state);
    expect(state.phase).toBe("revealed");
    expect(state.score).toBe(100);
    expect(state.combo).toBe(1);

    state = roundReducer(state, { type: "next" });
    state = answerCorrectly(state); // difficulty 2, streak 2 → 200 × 1.5
    expect(state.score).toBe(400);
    expect(state.bestCombo).toBe(2);
  });

  it("resets the combo on a wrong answer and records it", () => {
    let state = answerCorrectly(createRound(questions, 1));
    state = roundReducer(state, { type: "next" });
    state = roundReducer(state, { type: "answer", choice: 0 });
    expect(state.combo).toBe(0);
    expect(state.bestCombo).toBe(1);
    expect(state.records.at(-1)).toEqual({ questionId: "tst-002", correct: false, points: 0 });
  });

  it("ignores answers after reveal and 'next' before reveal", () => {
    const start = createRound(questions, 1);
    expect(roundReducer(start, { type: "next" })).toBe(start);
    const revealed = answerCorrectly(start);
    expect(roundReducer(revealed, { type: "answer", choice: 0 })).toBe(revealed);
  });

  it("completes after the last question", () => {
    let state = createRound(questions, 1);
    for (let i = 0; i < questions.length; i++) {
      state = roundReducer(answerCorrectly(state), { type: "next" });
    }
    expect(state.phase).toBe("complete");
    expect(state.records).toHaveLength(3);
  });

  it("50/50 removes exactly two wrong answers, once per round", () => {
    let state = createRound(questions, 1);
    expect(canUseFiftyFifty(state)).toBe(true);
    state = roundReducer(state, { type: "fifty-fifty", seed: 99 });
    expect(state.eliminated).toHaveLength(2);
    expect(state.eliminated).not.toContain(2);
    expect(state.fiftyFiftyLeft).toBe(0);
    expect(roundReducer(state, { type: "answer", choice: state.eliminated[0]! })).toBe(state);
    state = roundReducer(answerCorrectly(state), { type: "next" });
    expect(canUseFiftyFifty(state)).toBe(false);
  });

  it("does not allow 50/50 on true/false", () => {
    const tf = makeQuestion("tst-010", { format: "true-false", choices: ["True", "False"], answer: 0 });
    expect(canUseFiftyFifty(createRound([tf], 3))).toBe(false);
  });
});

describe("starsFor", () => {
  it.each([
    [5, 5, 3],
    [4, 5, 2],
    [3, 5, 1],
    [2, 5, 0],
    [0, 0, 0],
  ])("%i of %i → %i stars", (correct, total, stars) => {
    expect(starsFor(correct, total)).toBe(stars);
  });
});
