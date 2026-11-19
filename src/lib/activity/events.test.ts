import { describe, expect, it } from "vitest";
import { clientEventSchema, describeEvent, playerKey } from "./events";

describe("clientEventSchema", () => {
  it("accepts the events the game sends", () => {
    const events = [
      { type: "page_view", path: "/museum" },
      { type: "round_start", mode: "level", era: "exodus", level: 2 },
      { type: "answer", mode: "daily", questionId: "rom-004", correct: true, usedFiftyFifty: false },
      { type: "round_complete", mode: "level", era: "patriarchs", level: 1, score: 420, stars: 3, correct: 5, total: 5 },
      { type: "insight_read", mode: "level", era: "exodus", level: 1, questionId: "exo-001", seconds: 42, reachedEnd: true },
    ];
    for (const event of events) expect(clientEventSchema.safeParse(event).success).toBe(true);
  });

  it("refuses events only the server may write, and junk", () => {
    expect(clientEventSchema.safeParse({ type: "login" }).success).toBe(false);
    expect(clientEventSchema.safeParse({ type: "page_view", path: "https://x" }).success).toBe(false);
    expect(clientEventSchema.safeParse({ type: "answer", mode: "level", questionId: "DROP TABLE", correct: true, usedFiftyFifty: false }).success).toBe(false);
    expect(clientEventSchema.safeParse({ type: "round_complete", mode: "level", score: -1, stars: 9, correct: 0, total: 0 }).success).toBe(false);
    expect(clientEventSchema.safeParse({ type: "insight_read", mode: "level", questionId: "exo-001", seconds: 99999, reachedEnd: true }).success).toBe(false);
  });
});

describe("playerKey", () => {
  it("ignores case, accents and surrounding spaces", () => {
    expect(playerKey("Zoë ", "LEVI")).toBe(playerKey("zoe", "levi"));
    expect(playerKey("Dana", "Levi")).not.toBe(playerKey("Dana", "Cohen"));
  });
});

describe("describeEvent", () => {
  it("summarises a finished level", () => {
    expect(
      describeEvent("round_complete", { mode: "level", era: "exodus", level: 2, correct: 4, total: 5, stars: 2, score: 310 }),
    ).toBe("exodus · level 2 · 4/5 correct · 2★ · 310 pts");
    expect(describeEvent("answer", { mode: "daily", questionId: "pat-001", correct: false, usedFiftyFifty: true })).toBe(
      "Daily challenge · pat-001 · ✗ wrong (50/50)",
    );
    expect(describeEvent("insight_read", { mode: "level", era: "exodus", level: 1, questionId: "exo-001", seconds: 4, reachedEnd: false })).toBe(
      "exodus · level 1 · exo-001 · 4s · skipped ahead",
    );
  });
});
