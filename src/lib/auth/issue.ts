import "server-only";
import { NextResponse } from "next/server";
import { secureCookies, type AuthConfig } from "./config";
import { newPlayerSession, PLAYER_COOKIE, PLAYER_SESSION_DAYS, signToken, type SessionUser } from "./session";

/** Redirects to `to` with a fresh signed player cookie for `user`. */
export async function redirectSignedIn(user: SessionUser, to: URL, config: AuthConfig) {
  const session = newPlayerSession(user);
  const response = NextResponse.redirect(to, 303);
  response.cookies.set(PLAYER_COOKIE, await signToken(session, config.sessionSecret), {
    httpOnly: true,
    secure: secureCookies,
    sameSite: "lax",
    path: "/",
    maxAge: PLAYER_SESSION_DAYS * 86_400,
  });
  return { response, session };
}

/** Slows down repeated guesses a little. */
export const failureDelay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));
