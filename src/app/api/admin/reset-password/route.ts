import { NextResponse, type NextRequest } from "next/server";
import { recordEvent } from "@/lib/activity/store";
import { secureCookies } from "@/lib/auth/config";
import { isAdmin } from "@/lib/auth/current";
import { hashPassword, temporaryPassword } from "@/lib/auth/password";
import { ADMIN_FLASH_COOKIE } from "@/lib/auth/session";
import { getRepo } from "@/lib/data/repo";

/**
 * Admin-only: give a player a new temporary password. The password is shown once on /admin
 * (via a 60-second cookie, so it never appears in a URL or a log) and is stored only as a hash.
 */
export async function POST(request: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const repo = getRepo();
  const form = await request.formData().catch(() => null);
  const userId = form?.get("userId");
  const back = NextResponse.redirect(new URL("/admin#accounts", request.url), 303);
  if (!repo || typeof userId !== "string") return back;

  const user = await repo.findUserById(userId);
  if (!user) return back;
  const password = temporaryPassword();
  await repo.setPassword(user.id, await hashPassword(password));
  await recordEvent({ userId: user.id, firstName: user.firstName, lastName: user.lastName, sessionId: null }, { type: "password_reset" }, request);

  back.cookies.set(ADMIN_FLASH_COOKIE, JSON.stringify({ username: user.username, password }), {
    httpOnly: true,
    secure: secureCookies,
    sameSite: "strict",
    path: "/admin",
    maxAge: 60,
  });
  return back;
}
