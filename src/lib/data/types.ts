/** Storage contract for accounts, saved progress and daily attempts. Implemented by Neon and by an in-memory test store. */

export interface UserRecord {
  readonly id: string;
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly passwordHash: string;
  readonly createdAt: string;
  readonly lastLoginAt: string | null;
}

export interface DailyAnswer {
  readonly questionId: string;
  /** Index in the order shown to the player; -1 when time ran out. */
  readonly choice: number;
  readonly correct: boolean;
  readonly ms: number;
  readonly points: number;
}

export interface DailyAttempt {
  readonly userId: string;
  readonly day: string;
  readonly questionIds: readonly string[];
  readonly answers: readonly DailyAnswer[];
  /** When the current (unanswered) question was shown, ISO time. */
  readonly currentStartedAt: string;
  readonly score: number;
  readonly correct: number;
  readonly totalMs: number;
  readonly finishedAt: string | null;
}

export interface LeaderboardRow {
  readonly userId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly score: number;
  readonly correct: number;
  readonly totalMs: number;
  readonly finishedAt: string;
}

export interface Repo {
  createUser(input: Omit<UserRecord, "id" | "createdAt" | "lastLoginAt">): Promise<UserRecord | "taken">;
  findUserByUsername(username: string): Promise<UserRecord | null>;
  findUserById(id: string): Promise<UserRecord | null>;
  setPassword(id: string, passwordHash: string): Promise<void>;
  touchLogin(id: string): Promise<void>;
  listUsers(): Promise<UserRecord[]>;

  getProgress(userId: string): Promise<unknown | null>;
  saveProgress(userId: string, data: unknown): Promise<void>;

  getAttempt(userId: string, day: string): Promise<DailyAttempt | null>;
  /** Creates the attempt unless one exists for that user and day; returns whichever is stored. */
  createAttempt(attempt: DailyAttempt): Promise<DailyAttempt>;
  /** Saves an attempt only if it still has `expectedAnswers` answers (guards against double submits). */
  updateAttempt(attempt: DailyAttempt, expectedAnswers: number): Promise<boolean>;
  leaderboard(day: string): Promise<LeaderboardRow[]>;
}
