"use client";

import { useSyncExternalStore } from "react";
import { INITIAL_PROGRESS, mergeProgress, parseProgress, sameProgress, toDateKey, type Progress } from "@/game/progress";

/**
 * Player progress lives in the player's account on the server, with a copy on the device so the game
 * starts instantly and keeps working offline. Every change is saved locally at once and sent to the
 * server shortly after; the server merges, so nothing earned on another device is lost.
 *
 * localStorage can be missing, full or blocked (private mode), so every access is guarded.
 */

const STORAGE_KEY = "tte:progress:v1";
/** Which account the device copy belongs to. Missing = progress from before accounts existed. */
const OWNER_KEY = "tte:progress:owner";
const SAVE_DELAY_MS = 800;

const listeners = new Set<() => void>();
let cache: Progress | null = null;
let ownerId: string | null = null;
let saveTimer: ReturnType<typeof setTimeout> | null = null;
let syncStarted = false;

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

function writeLocal(next: Progress) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    if (ownerId) window.localStorage.setItem(OWNER_KEY, ownerId);
  } catch {
    // Storage unavailable: progress lives in memory and on the server.
  }
  emit();
}

function emit() {
  for (const listener of listeners) listener();
}

async function pushToServer(progress: Progress): Promise<void> {
  if (!ownerId) return;
  try {
    const response = await fetch("/api/progress", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(progress),
      keepalive: true,
      credentials: "same-origin",
    });
    if (!response.ok) return;
    const { progress: merged } = (await response.json()) as { progress: unknown };
    const server = parseProgress(merged);
    const local = read();
    // Adopt anything the server had that this device didn't (e.g. a level cleared on another phone).
    if (!sameProgress(local, mergeProgress(local, server))) writeLocal(mergeProgress(local, server));
  } catch {
    // Offline: the next save or the next visit will catch up.
  }
}

function scheduleSave() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveTimer = null;
    void pushToServer(read());
  }, SAVE_DELAY_MS);
}

/** Loads the account's saved progress once per visit and merges it with this device's copy. */
async function syncFromServer(): Promise<void> {
  try {
    const response = await fetch("/api/progress", { credentials: "same-origin", cache: "no-store" });
    if (!response.ok) return;
    const { userId, progress } = (await response.json()) as { userId: string; progress: unknown | null };
    let deviceOwner: string | null = null;
    try {
      deviceOwner = window.localStorage.getItem(OWNER_KEY);
    } catch {
      deviceOwner = null;
    }
    ownerId = userId;
    // Keep this device's copy only if it is this player's (or from before accounts); never mix accounts.
    const device = deviceOwner === null || deviceOwner === userId ? read() : { ...INITIAL_PROGRESS, settings: read().settings };
    const merged = progress === null ? device : mergeProgress(device, parseProgress(progress));
    writeLocal(merged);
    if (progress === null || !sameProgress(merged, parseProgress(progress))) await pushToServer(merged);
  } catch {
    // Offline or signed out: keep playing on the device copy.
  }
}

export function getProgress(): Progress {
  return read();
}

export function setProgress(next: Progress): void {
  writeLocal(next);
  scheduleSave();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  if (!syncStarted) {
    syncStarted = true;
    void syncFromServer();
  }
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

/** Progress for the signed-in player. Renders the initial state on the server, then the saved state. */
export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, read, getServerProgress);
}

/** Forget this device's copy (used on sign-out, so the next player on a shared device starts clean). */
export function clearDeviceProgress(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(OWNER_KEY);
  } catch {
    // ignore
  }
  cache = null;
  ownerId = null;
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
