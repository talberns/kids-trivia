import { NextResponse, type NextRequest } from "next/server";
import { getPlayer } from "@/lib/auth/current";
import { PLAYER_COOKIE } from "@/lib/auth/session";
import { recordEvent } from "@/lib/activity/store";

export async function POST(request: NextRequest) {
  const player = await getPlayer();
  if (player) {
    await recordEvent(
      { firstName: player.firstName, lastName: player.lastName, sessionId: player.sid },
      { type: "logout" },
      request,
    );
  }
  const response = NextResponse.redirect(new URL("/login", request.url), 303);
  response.cookies.delete(PLAYER_COOKIE);
  return response;
}
