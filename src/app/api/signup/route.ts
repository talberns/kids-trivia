import { NextResponse, type NextRequest } from "next/server";
import { recordEvent } from "@/lib/activity/store";
import { getAuthConfig } from "@/lib/auth/config";
import { failureDelay, redirectSignedIn } from "@/lib/auth/issue";
import { hashPassword, normalizeUsername, validatePassword } from "@/lib/auth/password";
import { normalizeName, safeNextPath, secretsMatch } from "@/lib/auth/session";
import { getRepo } from "@/lib/data/repo";

function backToSignup(request: NextRequest, error: string, keep: Record<string, string>) {
  const url = new URL("/signup", request.url);
  url.searchParams.set("error", error);
  for (const [key, value] of Object.entries(keep)) if (value) url.searchParams.set(key, value.slice(0, 40));
  return NextResponse.redirect(url, 303);
}

/**
 * Create an account. While the site is private, the shared invite code (SITE_PASSWORD) is required,
 * so only invited testers can sign up. Passwords are personal and stored only as scrypt hashes.
 */
export async function POST(request: NextRequest) {
  const form = await request.formData().catch(() => null);
  const config = getAuthConfig();
  const repo = getRepo();
  const text = (key: string) => (typeof form?.get(key) === "string" ? String(form.get(key)) : "");
  const keep = { first: text("firstName"), last: text("lastName"), username: text("username"), next: text("next") };
  if (!form || !config || !repo) return backToSignup(request, "unavailable", keep);

  if (!(await secretsMatch(text("inviteCode"), config.sitePassword))) {
    await failureDelay();
    return backToSignup(request, "invite", keep);
  }

  const firstName = normalizeName(form.get("firstName"));
  const lastName = normalizeName(form.get("lastName"));
  if (!firstName || !lastName) return backToSignup(request, "name", keep);

  const username = normalizeUsername(form.get("username"));
  if (!username) return backToSignup(request, "username", keep);

  const password = validatePassword(form.get("password"));
  if (!password) return backToSignup(request, "password", keep);
  if (text("password") !== text("passwordConfirm")) return backToSignup(request, "mismatch", keep);

  const created = await repo.createUser({ username, firstName, lastName, passwordHash: await hashPassword(password) });
  if (created === "taken") return backToSignup(request, "taken", { ...keep, username: "" });

  const next = safeNextPath(keep.next);
  const { response, session } = await redirectSignedIn(created, new URL(next, request.url), config);
  await repo.touchLogin(created.id);
  await recordEvent(
    { userId: created.id, firstName, lastName, sessionId: session.sid },
    { type: "signup" },
    request,
  );
  return response;
}
