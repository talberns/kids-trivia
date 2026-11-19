import { NextResponse, type NextRequest } from "next/server";
import { getAuthConfig, secureCookies } from "@/lib/auth/config";
import { ADMIN_COOKIE, ADMIN_SESSION_HOURS, newAdminSession, secretsMatch, signToken } from "@/lib/auth/session";

export async function POST(request: NextRequest) {
  const config = getAuthConfig();
  const form = await request.formData().catch(() => null);
  const password = form?.get("password");

  if (!config || typeof password !== "string" || !(await secretsMatch(password, config.adminPassword))) {
    await new Promise((resolve) => setTimeout(resolve, 800)); // slow down guessing
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url), 303);
  }

  const response = NextResponse.redirect(new URL("/admin", request.url), 303);
  response.cookies.set(ADMIN_COOKIE, await signToken(newAdminSession(), config.sessionSecret), {
    httpOnly: true,
    secure: secureCookies,
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_HOURS * 3_600,
  });
  return response;
}
