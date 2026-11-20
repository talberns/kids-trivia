import { NextResponse, type NextRequest } from "next/server";
import { dailyDateKey } from "@/game/daily";
import { recordEvent } from "@/lib/activity/store";
import { getPlayer } from "@/lib/auth/current";
import { loadState, newAttempt, stateOf } from "@/lib/daily/service";
import { getRepo } from "@/lib/data/repo";

/** Starts today's challenge (or returns the one already under way). One attempt per player per day. */
export async function POST(request: NextRequest) {
  const player = await getPlayer();
  if (!player) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const repo = getRepo();
  if (!repo) return NextResponse.json({ error: "unavailable" }, { status: 503 });

  const day = dailyDateKey();
  const existing = await loadState(repo, player.userId, day);
  if (existing.attempt) return NextResponse.json(existing.state, { headers: { "cache-control": "no-store" } });

  const attempt = await repo.createAttempt(newAttempt(player.userId, day));
  await recordEvent(
    { userId: player.userId, firstName: player.firstName, lastName: player.lastName, sessionId: player.sid },
    { type: "daily_start", day },
    request,
  );
  return NextResponse.json(stateOf(attempt, day), { headers: { "cache-control": "no-store" } });
}
