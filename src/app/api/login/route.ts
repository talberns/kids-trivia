import { NextResponse, type NextRequest } from "next/server";
import { getAuthConfig, secureCookies } from "@/lib/auth/config";
import {
  newPlayerSession,
  normalizeName,
  PLAYER_COOKIE,
  PLAYER_SESSION_DAYS,
  safeNextPath,
  secretsMatch,
  signToken,
} from "@/lib/auth/session";
import { recordEvent } from "@/lib/activity/store";

function backToLogin(request: NextRequest, error: string, next: string, firstName = "", lastName = "") {
  const url = new URL("/login", request.url);
  url.searchParams.set("error", error);
  if (next !== "/") url.searchParams.set("next", next);
  if (firstName) url.searchParams.set("first", firstName);
  if (lastName) url.searchParams.set("last", lastName);
  return NextResponse.redirect(url, 303);
}

export async function POST(request: NextRequest) {
  const form = await request.formData().catch(() => null);
  const next = safeNextPath(form?.get("next"));
  const config = getAuthConfig();
  if (!form || !config) return backToLogin(request, "unavailable", next);

  const firstName = normalizeName(form.get("firstName"));
  const lastName = normalizeName(form.get("lastName"));
  const password = form.get("password");
  const typedFirst = typeof form.get("firstName") === "string" ? String(form.get("firstName")).slice(0, 40) : "";
  const typedLast = typeof form.get("lastName") === "string" ? String(form.get("lastName")).slice(0, 40) : "";

  if (!firstName || !lastName) return backToLogin(request, "name", next, typedFirst, typedLast);

  if (typeof password !== "string" || !(await secretsMatch(password, config.sitePassword))) {
    // Never log the password itself; record only that a named attempt failed.
    await recordEvent({ firstName, lastName, sessionId: null }, { type: "login_failed" }, request);
    await new Promise((resolve) => setTimeout(resolve, 600)); // slow down guessing
    return backToLogin(request, "password", next, firstName, lastName);
  }

  const session = newPlayerSession(firstName, lastName);
  await recordEvent({ firstName, lastName, sessionId: session.sid }, { type: "login" }, request);

  const response = NextResponse.redirect(new URL(next, request.url), 303);
  response.cookies.set(PLAYER_COOKIE, await signToken(session, config.sessionSecret), {
    httpOnly: true,
    secure: secureCookies,
    sameSite: "lax",
    path: "/",
    maxAge: PLAYER_SESSION_DAYS * 86_400,
  });
  return response;
}
