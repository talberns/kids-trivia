import { describe, expect, it } from "vitest";
import {
  addDays,
  applyDailyResult,
  applyLevelResult,
  currentStreak,
  INITIAL_PROGRESS,
  isLevelUnlocked,
  parseProgress,
  rankFor,
  withStreak,
} from "./progress";

const outcome = { score: 600, stars: 3, answered: 5, correct: 5 } as const;

describe("dates and streaks", () => {
  it("adds days across month and year boundaries", () => {
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });

  it("extends a streak on consecutive days and resets after a gap", () => {
    let p = withStreak(INITIAL_PROGRESS, "2026-11-18");
    expect(p.streak.count).toBe(1);
    p = withStreak(p, "2026-11-18");
    expect(p.streak.count).toBe(1);
    p = withStreak(p, "2026-11-19");
    expect(p.streak.count).toBe(2);
    expect(currentStreak(p, "2026-11-20")).toBe(2);
    expect(currentStreak(p, "2026-11-21")).toBe(0);
    p = withStreak(p, "2026-11-22");
    expect(p.streak.count).toBe(1);
  });
});

describe("unlocking", () => {
  it("opens level 1 and requires a star to progress", () => {
    expect(isLevelUnlocked(INITIAL_PROGRESS, "exodus", 1)).toBe(true);
    expect(isLevelUnlocked(INITIAL_PROGRESS, "exodus", 2)).toBe(false);
    const { progress } = applyLevelResult(INITIAL_PROGRESS, {
      era: "exodus",
      level: 1,
      outcome: { ...outcome, stars: 1 },
      artifactId: null,
      today: "2026-11-18",
    });
    expect(isLevelUnlocked(progress, "exodus", 2)).toBe(true);
  });
});

describe("applyLevelResult", () => {
  it("keeps the best stars and score, and awards an artifact once", () => {
    const first = applyLevelResult(INITIAL_PROGRESS, {
      era: "patriarchs",
      level: 1,
      outcome,
      artifactId: "balance-weights",
      today: "2026-11-18",
    });
    expect(first.newArtifact).toBe("balance-weights");
    expect(first.progress.xp).toBe(600);

    const second = applyLevelResult(first.progress, {
      era: "patriarchs",
      level: 1,
      outcome: { score: 100, stars: 1, answered: 5, correct: 3 },
      artifactId: "balance-weights",
      today: "2026-11-18",
    });
    expect(second.newArtifact).toBeNull();
    expect(second.progress.levels["patriarchs:1"]).toEqual({ stars: 3, bestScore: 600 });
    expect(second.progress.stats).toEqual({ answered: 10, correct: 8 });
  });

  it("does not award an artifact for a failed level", () => {
    const { newArtifact } = applyLevelResult(INITIAL_PROGRESS, {
      era: "patriarchs",
      level: 1,
      outcome: { score: 0, stars: 0, answered: 5, correct: 1 },
      artifactId: "balance-weights",
      today: "2026-11-18",
    });
    expect(newArtifact).toBeNull();
  });

  it("reports a rank-up", () => {
    const { rankUp } = applyLevelResult(INITIAL_PROGRESS, {
      era: "patriarchs",
      level: 1,
      outcome: { ...outcome, score: 500 },
      artifactId: null,
      today: "2026-11-18",
    });
    expect(rankUp?.name).toBe("Shepherd");
  });
});

describe("applyDailyResult", () => {
  it("doubles XP only on the first completion of the day", () => {
    const first = applyDailyResult(INITIAL_PROGRESS, outcome, "2026-11-18");
    expect(first.xpGained).toBe(1200);
    const again = applyDailyResult(first.progress, outcome, "2026-11-18");
    expect(again.xpGained).toBe(600);
  });
});

describe("rankFor", () => {
  it("reports progress towards the next rank", () => {
    expect(rankFor(0).current.name).toBe("Wanderer");
    expect(rankFor(1000).progress).toBeCloseTo(0.5);
    expect(rankFor(50_000).next).toBeNull();
  });
});

describe("parseProgress", () => {
  it("falls back to a fresh start on corrupt data", () => {
    expect(parseProgress({ version: 99 })).toBe(INITIAL_PROGRESS);
    expect(parseProgress("garbage")).toBe(INITIAL_PROGRESS);
  });
});
