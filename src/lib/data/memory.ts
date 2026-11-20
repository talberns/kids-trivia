import type { DailyAttempt, LeaderboardRow, Repo, UserRecord } from "./types";

/**
 * In-memory store for automated tests (AQ_MEMORY_DB=1). Lives in one server process and is lost on restart.
 * Never used in production: see getRepo().
 */
interface MemoryState {
  users: Map<string, UserRecord>;
  progress: Map<string, unknown>;
  attempts: Map<string, DailyAttempt>;
}

const globalState = globalThis as typeof globalThis & { __aqMemory?: MemoryState };
const state: MemoryState = (globalState.__aqMemory ??= { users: new Map(), progress: new Map(), attempts: new Map() });

const attemptKey = (userId: string, day: string) => `${userId}|${day}`;

export const memoryRepo: Repo = {
  async createUser(input) {
    for (const user of state.users.values()) if (user.username === input.username) return "taken";
    const user: UserRecord = { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString(), lastLoginAt: null };
    state.users.set(user.id, user);
    return user;
  },
  async findUserByUsername(username) {
    for (const user of state.users.values()) if (user.username === username) return user;
    return null;
  },
  async findUserById(id) {
    return state.users.get(id) ?? null;
  },
  async setPassword(id, passwordHash) {
    const user = state.users.get(id);
    if (user) state.users.set(id, { ...user, passwordHash });
  },
  async touchLogin(id) {
    const user = state.users.get(id);
    if (user) state.users.set(id, { ...user, lastLoginAt: new Date().toISOString() });
  },
  async listUsers() {
    return [...state.users.values()].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  },
  async getProgress(userId) {
    return state.progress.get(userId) ?? null;
  },
  async saveProgress(userId, data) {
    state.progress.set(userId, data);
  },
  async getAttempt(userId, day) {
    return state.attempts.get(attemptKey(userId, day)) ?? null;
  },
  async createAttempt(attempt) {
    const key = attemptKey(attempt.userId, attempt.day);
    const existing = state.attempts.get(key);
    if (existing) return existing;
    state.attempts.set(key, attempt);
    return attempt;
  },
  async updateAttempt(attempt, expectedAnswers) {
    const key = attemptKey(attempt.userId, attempt.day);
    const existing = state.attempts.get(key);
    if (!existing || existing.answers.length !== expectedAnswers) return false;
    state.attempts.set(key, attempt);
    return true;
  },
  async leaderboard(day) {
    const rows: LeaderboardRow[] = [];
    for (const attempt of state.attempts.values()) {
      if (attempt.day !== day || !attempt.finishedAt) continue;
      const user = state.users.get(attempt.userId);
      if (!user) continue;
      rows.push({
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        score: attempt.score,
        correct: attempt.correct,
        totalMs: attempt.totalMs,
        finishedAt: attempt.finishedAt,
      });
    }
    return rows;
  },
};
