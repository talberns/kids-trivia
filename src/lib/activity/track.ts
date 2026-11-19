import type { ClientEvent } from "./events";

/** Fire-and-forget: send one activity event. Never throws and never delays the game. */
export function track(event: ClientEvent): void {
  if (typeof window === "undefined") return;
  try {
    void fetch("/api/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(event),
      keepalive: true,
      credentials: "same-origin",
    }).catch(() => undefined);
  } catch {
    // Logging is best-effort.
  }
}
