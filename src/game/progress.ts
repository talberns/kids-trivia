import { z } from "zod";
import type { Stars } from "./engine";

/**
 * Player progress, stored on the device. Pure functions only — persistence
 * lives in src/lib/progress-store.ts.
 */

export const RANKS = [
  { name: "Wanderer", minXp: 0 },
  { name: "Shepherd", minXp: 500 },
  { name: "Scribe", minXp: 1500 },
  { name: "Elder", minXp: 3500 },
  { name: "Sage", minXp: 7000 },
  { name: "Keeper of Scrolls", minXp: 12000 },
] as const;

export type Rank = (typeof RANKS)[number];

const progressSchema = z.object({
  version: z.literal(1),
  xp: z.number().int().nonnegative(),
  levels: z.record(
    z.string(),
    z.object({ stars: z.number().int().min(0).max(3), bestScore: z.number().int().nonnegative() }),
  ),
  artifacts: z.array(z.string()),
  streak: z.object({ count: z.number().int().nonnegative(), lastPlayed: z.string().nullable() }),
  daily: z.object({ lastCompleted: z.string().nullable(), bestScore: z.number().int().nonnegative() }),
  stats: z.object({ answered: z.number().int().nonnegative(), correct: z.number().int().nonnegative() }),
  settings: z.object({ sound: z.boolean() }),
});

export type Progress = z.infer<typeof progressSchema>;

export const INITIAL_PROGRESS: Progress = Object.freeze({
  version: 1,
  xp: 0,
  levels: {},
  artifacts: [],
  streak: { count: 0, lastPlayed: null },
  daily: { lastCompleted: null, bestScore: 0 },
  stats: { answered: 0, correct: 0 },
  settings: { sound: true },
}) as Progress;

/** Anything unreadable or from an unknown version falls back to a fresh start. */
export function parseProgress(raw: unknown): Progress {
  const result = progressSchema.safeParse(raw);
  return result.success ? result.data : INITIAL_PROGRESS;
}

export const levelKey = (era: string, level: number): string => `${era}:${level}`;

/** Local calendar date as YYYY-MM-DD. */
export function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addDays(dateKey: string, delta: number): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  return toDateKey(new Date(y ?? 1970, (m ?? 1) - 1, (d ?? 1) + delta));
}

/** The streak as it stands today: it lapses if the player missed yesterday. */
export function currentStreak(progress: Progress, today: string): number {
  const { lastPlayed, count } = progress.streak;
  if (lastPlayed === today || lastPlayed === addDays(today, -1)) return count;
  return 0;
}

export function withStreak(progress: Progress, today: string): Progress {
  const { lastPlayed, count } = progress.streak;
  if (lastPlayed === today) return progress;
  const next = lastPlayed === addDays(today, -1) ? count + 1 : 1;
  return { ...progress, streak: { count: next, lastPlayed: today } };
}

export function levelStars(progress: Progress, era: string, level: number): number {
  return progress.levels[levelKey(era, level)]?.stars ?? 0;
}

/** Level 1 of every playable era is open; later levels need 1+ star on the one before. */
export function isLevelUnlocked(progress: Progress, era: string, level: number): boolean {
  return level <= 1 || levelStars(progress, era, level - 1) >= 1;
}

export interface RankInfo {
  readonly current: Rank;
  readonly next: Rank | null;
  /** 0–1 progress towards the next rank. */
  readonly progress: number;
}

export function rankFor(xp: number): RankInfo {
  let index = 0;
  RANKS.forEach((rank, i) => {
    if (xp >= rank.minXp) index = i;
  });
  const current = RANKS[index]!;
  const next = RANKS[index + 1] ?? null;
  const progress = next ? (xp - current.minXp) / (next.minXp - current.minXp) : 1;
  return { current, next, progress: Math.min(1, Math.max(0, progress)) };
}

export interface RoundOutcome {
  readonly score: number;
  readonly stars: Stars;
  readonly answered: number;
  readonly correct: number;
}

export interface ProgressUpdate {
  readonly progress: Progress;
  readonly xpGained: number;
  readonly newArtifact: string | null;
  readonly rankUp: Rank | null;
}

function finish(before: Progress, after: Progress, xpGained: number, newArtifact: string | null): ProgressUpdate {
  const oldRank = rankFor(before.xp).current;
  const newRank = rankFor(after.xp).current;
  return { progress: after, xpGained, newArtifact, rankUp: newRank.name !== oldRank.name ? newRank : null };
}

function withStats(progress: Progress, outcome: RoundOutcome): Progress {
  return {
    ...progress,
    stats: {
      answered: progress.stats.answered + outcome.answered,
      correct: progress.stats.correct + outcome.correct,
    },
  };
}

export function applyLevelResult(
  progress: Progress,
  input: { era: string; level: number; outcome: RoundOutcome; artifactId: string | null; today: string },
): ProgressUpdate {
  const { era, level, outcome, artifactId, today } = input;
  const key = levelKey(era, level);
  const previous = progress.levels[key];
  const earnedArtifact =
    outcome.stars >= 1 && artifactId !== null && !progress.artifacts.includes(artifactId) ? artifactId : null;

  let next: Progress = {
    ...progress,
    xp: progress.xp + outcome.score,
    levels: {
      ...progress.levels,
      [key]: {
        stars: Math.max(previous?.stars ?? 0, outcome.stars),
        bestScore: Math.max(previous?.bestScore ?? 0, outcome.score),
      },
    },
    artifacts: earnedArtifact ? [...progress.artifacts, earnedArtifact] : progress.artifacts,
  };
  next = withStreak(withStats(next, outcome), today);
  return finish(progress, next, outcome.score, earnedArtifact);
}

/** The first daily challenge each day earns double XP. */
export function applyDailyResult(progress: Progress, outcome: RoundOutcome, today: string): ProgressUpdate {
  const firstToday = progress.daily.lastCompleted !== today;
  const xpGained = firstToday ? outcome.score * 2 : outcome.score;
  let next: Progress = {
    ...progress,
    xp: progress.xp + xpGained,
    daily: { lastCompleted: today, bestScore: Math.max(progress.daily.bestScore, outcome.score) },
  };
  next = withStreak(withStats(next, outcome), today);
  return finish(progress, next, xpGained, null);
}

export function withSound(progress: Progress, sound: boolean): Progress {
  return { ...progress, settings: { ...progress.settings, sound } };
}
