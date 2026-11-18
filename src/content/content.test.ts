import { describe, expect, it } from "vitest";
import { ARTIFACTS } from "./artifacts";
import { LEVELS_PER_ERA, PLAYABLE_ERAS } from "./eras";
import { pickDailyQuestions } from "@/game/daily";
import { findCoverageGaps, loadQuestionBank, PUBLISHED_QUESTIONS, QUESTION_BANK } from "./index";
import type { QuestionInput } from "./schema";

const valid: QuestionInput = {
  id: "tst-001",
  era: "patriarchs",
  level: 1,
  category: "story",
  difficulty: 1,
  format: "multiple-choice",
  prompt: "Prompt",
  choices: ["A", "B", "C", "D"],
  answer: 0,
  explanation: { textSays: "Text", theirEyes: "Eyes" },
  confidence: "settled",
  references: ["Genesis 1:1"],
  sources: [{ kind: "scripture", citation: "Genesis" }],
  review: { status: "published", reviewedOn: "2026-11-18" },
};

describe("question schema", () => {
  it("accepts a valid question", () => {
    expect(loadQuestionBank([valid])).toHaveLength(1);
  });

  it.each<[string, Partial<QuestionInput>]>([
    ["answer out of range", { answer: 4 }],
    ["duplicate choices", { choices: ["A", "a", "C", "D"] }],
    ["three-choice multiple choice", { choices: ["A", "B", "C"] }],
    ["debated without a debate section", { confidence: "debated" }],
    ["published without a review date", { review: { status: "published" } }],
    ["no sources", { sources: [] }],
    ["references without scripture source", { sources: [{ kind: "reference", citation: "x" }] }],
    ["bad true/false choices", { format: "true-false", choices: ["Yes", "No"] }],
  ])("rejects %s", (_name, override) => {
    expect(() => loadQuestionBank([{ ...valid, ...override }])).toThrow(/tst-001/);
  });

  it("rejects duplicate ids", () => {
    expect(() => loadQuestionBank([valid, valid])).toThrow(/Duplicate/);
  });
});

describe("question bank", () => {
  it("loads every authored question", () => {
    expect(QUESTION_BANK.length).toBeGreaterThan(0);
  });

  it("has exactly five published questions for every playable level", () => {
    expect(findCoverageGaps()).toEqual([]);
  });

  it("has an artifact for every playable level", () => {
    for (const era of PLAYABLE_ERAS) {
      for (let level = 1; level <= LEVELS_PER_ERA; level++) {
        expect(ARTIFACTS.some((a) => a.era === era.id && a.level === level), `${era.id}:${level}`).toBe(true);
      }
    }
  });

  it("has no duplicate prompts", () => {
    const prompts = new Set(QUESTION_BANK.map((q) => q.prompt));
    expect(prompts.size).toBe(QUESTION_BANK.length);
  });
});

describe("pickDailyQuestions", () => {
  it("is deterministic per day and changes between days", () => {
    const a = pickDailyQuestions(PUBLISHED_QUESTIONS, "2026-11-18").map((q) => q.id);
    const b = pickDailyQuestions(PUBLISHED_QUESTIONS, "2026-11-18").map((q) => q.id);
    const c = pickDailyQuestions(PUBLISHED_QUESTIONS, "2026-11-19").map((q) => q.id);
    expect(a).toEqual(b);
    expect(a).toHaveLength(5);
    expect(a).not.toEqual(c);
  });
});
