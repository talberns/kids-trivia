import "server-only";
import { memoryRepo } from "./memory";
import { neonRepo } from "./neon";
import type { Repo } from "./types";

/**
 * The data store for this request: Neon when DATABASE_URL is set; the in-memory test store only when
 * AQ_MEMORY_DB=1 (automated tests). Otherwise null, and features that need storage report "unavailable".
 */
export function getRepo(): Repo | null {
  const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
  if (url) return neonRepo(url);
  if (process.env.AQ_MEMORY_DB === "1") return memoryRepo;
  return null;
}
