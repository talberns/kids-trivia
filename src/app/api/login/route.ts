import { NextResponse, type NextRequest } from "next/server";
import { recordEvent } from "@/lib/activity/store";
import { getAuthConfig } from "@/lib/auth/config";
import { failureDelay, redirectSignedIn } from "@/lib/auth/issue";
import { normalizeUsername, verifyPassword } from "@/lib/auth/password";
import { safeNextPath } from "@/lib/auth/session";
import { getRepo } from "@/lib/data/repo";

function backToLogin(request: NextRequest, error: string, next: string, username = "") {
  const url = new URL("/login", request.url);
  url.searchParams.set("error", error);
  if (next !== "/") url.searchParams.set("next", next);
  if (username) url.searchParams.set("username", username);
  return NextResponse.redirect(url, 303);
}

/** Sign in with username + personal password. */
export async function POST(request: NextRequest) {
  const form = await request.formData().catch(() => null);
  const next = safeNextPath(form?.get("next"));
  const config = getAuthConfig();
  const repo = getRepo();
  if (!form || !config || !repo) return backToLogin(request, "unavailable", next);

  const username = normalizeUsername(form.get("username"));
  const password = form.get("password");
  if (!username || typeof password !== "string") {
    await failureDelay();
    return backToLogin(request, "credentials", next);
  }

  const user = await repo.findUserByUsername(username);
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    await recordEvent(
      { userId: user?.id ?? null, firstName: user?.firstName ?? `@${username}`, lastName: user?.lastName ?? "", sessionId: null },
      { type: "login_failed" },
      request,
    );
    await failureDelay();
    return backToLogin(request, "credentials", next, username);
  }

  const { response, session } = await redirectSignedIn(user, new URL(next, request.url), config);
  await repo.touchLogin(user.id);
  await recordEvent(
    { userId: user.id, firstName: user.firstName, lastName: user.lastName, sessionId: session.sid },
    { type: "login" },
    request,
  );
  return response;
}
