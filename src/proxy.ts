import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, PLAYER_COOKIE, verifyAdminToken, verifyPlayerToken } from "@/lib/auth/session";

/**
 * Login gate. Every page needs a signed player cookie, except the login screens themselves.
 * /admin pages need the separate admin cookie instead (Tal can open them without a player login).
 * Fails closed: with no SESSION_SECRET configured, nothing but the login page loads.
 */
const PUBLIC_PATHS = new Set(["/login", "/api/login", "/signup", "/api/signup", "/admin/login", "/api/admin/login", "/icon.svg", "/manifest.webmanifest"]);

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (PUBLIC_PATHS.has(pathname)) return NextResponse.next();

  const secret = process.env.SESSION_SECRET ?? "";
  const isApi = pathname.startsWith("/api/");

  if (pathname === "/admin" || pathname.startsWith("/admin/") || pathname.startsWith("/api/admin/")) {
    if (await verifyAdminToken(request.cookies.get(ADMIN_COOKIE)?.value, secret)) return NextResponse.next();
    if (isApi) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (await verifyPlayerToken(request.cookies.get(PLAYER_COOKIE)?.value, secret)) return NextResponse.next();
  if (isApi) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const login = new URL("/login", request.url);
  if (pathname !== "/") login.searchParams.set("next", pathname + search);
  return NextResponse.redirect(login);
}

export const config = {
  // Skip Next.js internals and static assets; everything else goes through the gate.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
