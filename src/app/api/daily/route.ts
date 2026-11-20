import { NextResponse } from "next/server";
import { dailyDateKey } from "@/game/daily";
import { getPlayer } from "@/lib/auth/current";
import { loadState } from "@/lib/daily/service";
import { getRepo } from "@/lib/data/repo";

export const dynamic = "force-dynamic";

/** Today's daily challenge as this player sees it: not started, the current question, or the result. */
export async function GET() {
  const player = await getPlayer();
  if (!player) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const repo = getRepo();
  if (!repo) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  const { state } = await loadState(repo, player.userId, dailyDateKey());
  return NextResponse.json(state, { headers: { "cache-control": "no-store" } });
}
