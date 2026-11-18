"use client";

import { useSyncExternalStore } from "react";
import { INITIAL_PROGRESS, parseProgress, toDateKey, type Progress } from "@/game/progress";

/**
 * On-device persistence for player progress. localStorage can be missing,
 * full or blocked (private mode, embedded views), so every access is guarded
 * and the game keeps working in memory if storage fails.
 */

const STORAGE_KEY = "tte:progress:v1";
const listeners = new Set<() => void>();
let cache: Progress | null = null;

function read(): Progress {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    cache = raw ? parseProgress(JSON.parse(raw)) : INITIAL_PROGRESS;
  } catch {
    cache = INITIAL_PROGRESS;
  }
  return cache;
}

function emit() {
  for (const listener of listeners) listener();
}

export function getProgress(): Progress {
  return read();
}

export function setProgress(next: Progress): void {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable: progress lives in memory for this visit.
  }
  emit();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const getServerProgress = () => INITIAL_PROGRESS;

/** Progress from the device. Renders the initial state on the server, then the saved state after hydration. */
export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, read, getServerProgress);
}

const noopSubscribe = () => () => {};
const getToday = () => toDateKey(new Date());
const getNoDate = () => null;

/** The player's local date (YYYY-MM-DD), or null during server rendering. */
export function useToday(): string | null {
  return useSyncExternalStore(noopSubscribe, getToday, getNoDate);
}

/** True once running in the browser (after hydration). */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
