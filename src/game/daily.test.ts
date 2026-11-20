import { describe, expect, it } from "vitest";
import { compareEntries, dailyChoiceOrder, dailyDateKey, dailyPoints, QUESTION_TIME_MS } from "./daily";

describe("dailyPoints", () => {
  it("gives nothing for a wrong or late answer", () => {
    expect(dailyPoints(false, 1000)).toBe(0);
    expect(dailyPoints(true, QUESTION_TIME_MS + 1)).toBe(0);
  });
  it("rewards speed on correct answers", () => {
    expect(dailyPoints(true, 0)).toBe(200);
    expect(dailyPoints(true, QUESTION_TIME_MS / 2)).toBe(150);
    expect(dailyPoints(true, QUESTION_TIME_MS)).toBe(100);
    expect(dailyPoints(true, 3000)).toBeGreaterThan(dailyPoints(true, 9000));
  });
});

describe("compareEntries", () => {
  it("ranks by score, then total time, then finish time", () => {
    const rows = [
      { id: "slow", score: 1500, totalMs: 90_000, finishedAt: "2026-11-20T10:00:00Z" },
      { id: "top", score: 1800, totalMs: 120_000, finishedAt: "2026-11-20T12:00:00Z" },
      { id: "fast", score: 1500, totalMs: 60_000, finishedAt: "2026-11-20T11:00:00Z" },
      { id: "early", score: 1500, totalMs: 60_000, finishedAt: "2026-11-20T09:00:00Z" },
    ];
    expect([...rows].sort(compareEntries).map((r) => r.id)).toEqual(["top", "early", "fast", "slow"]);
  });
});

describe("dailyDateKey", () => {
  it("uses Toronto's calendar day", () => {
    // 03:00 UTC on Nov 21 is still Nov 20 in Toronto.
    expect(dailyDateKey(new Date("2026-11-21T03:00:00Z"))).toBe("2026-11-20");
    expect(dailyDateKey(new Date("2026-11-21T06:00:00Z"))).toBe("2026-11-21");
  });
});

describe("dailyChoiceOrder", () => {
  it("is a stable permutation for everyone on the same day", () => {
    const a = dailyChoiceOrder("2026-11-20", "pat-001", 4);
    expect(a).toEqual(dailyChoiceOrder("2026-11-20", "pat-001", 4));
    expect([...a].sort()).toEqual([0, 1, 2, 3]);
  });
});
