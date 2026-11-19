import { NextResponse, type NextRequest } from "next/server";
import { getPlayer } from "@/lib/auth/current";
import { clientEventSchema } from "@/lib/activity/events";
import { recordEvent } from "@/lib/activity/store";

const MAX_BODY_BYTES = 2_000;

/** Receives game activity from the browser. The player's identity comes from the signed cookie, never the body. */
export async function POST(request: NextRequest) {
  const player = await getPlayer();
  if (!player) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return NextResponse.json({ error: "too large" }, { status: 413 });

  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  const parsed = clientEventSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "invalid event" }, { status: 400 });

  await recordEvent({ firstName: player.firstName, lastName: player.lastName, sessionId: player.sid }, parsed.data, request);
  return new NextResponse(null, { status: 204 });
}
