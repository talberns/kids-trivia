import { NextResponse, type NextRequest } from "next/server";
import { dailyDateKey } from "@/game/daily";
import { getPlayer } from "@/lib/auth/current";
import { leaderboardFor } from "@/lib/daily/service";
import { getRepo } from "@/lib/data/repo";

export const dynamic = "force-dynamic";

/** The daily leaderboard (today by default, or ?day=YYYY-MM-DD). Visible to every signed-in player. */
export async function GET(request: NextRequest) {
  const player = await getPlayer();
  if (!player) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const repo = getRepo();
  if (!repo) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  const requested = request.nextUrl.searchParams.get("day");
  const day = requested && /^\d{4}-\d{2}-\d{2}$/.test(requested) ? requested : dailyDateKey();
  const entries = await leaderboardFor(repo, day, player.userId);
  return NextResponse.json({ day, entries }, { headers: { "cache-control": "no-store" } });
}
