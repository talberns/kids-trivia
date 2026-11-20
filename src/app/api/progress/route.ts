import { NextResponse, type NextRequest } from "next/server";
import { mergeProgress, parseProgress } from "@/game/progress";
import { getPlayer } from "@/lib/auth/current";
import { getRepo } from "@/lib/data/repo";

const MAX_BODY_BYTES = 200_000;

/** The signed-in player's saved progress. */
export async function GET() {
  const player = await getPlayer();
  if (!player) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const repo = getRepo();
  if (!repo) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  const saved = await repo.getProgress(player.userId);
  return NextResponse.json(
    { userId: player.userId, progress: saved === null ? null : parseProgress(saved) },
    { headers: { "cache-control": "no-store" } },
  );
}

/**
 * Saves progress. The server merges with what it already has, so a stale device can never wipe out
 * stars or XP earned elsewhere. Returns the merged record for the device to adopt.
 */
export async function PUT(request: NextRequest) {
  const player = await getPlayer();
  if (!player) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const repo = getRepo();
  if (!repo) return NextResponse.json({ error: "unavailable" }, { status: 503 });

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return NextResponse.json({ error: "too large" }, { status: 413 });
  let incoming: unknown;
  try {
    incoming = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const saved = await repo.getProgress(player.userId);
  const merged = saved === null ? parseProgress(incoming) : mergeProgress(parseProgress(incoming), parseProgress(saved));
  await repo.saveProgress(player.userId, merged);
  return NextResponse.json({ progress: merged }, { headers: { "cache-control": "no-store" } });
}
