import "server-only";
import { cookies } from "next/headers";
import { getAuthConfig } from "./config";
import { ADMIN_COOKIE, PLAYER_COOKIE, verifyAdminToken, verifyPlayerToken } from "./session";

/** The logged-in player for this request, or null. */
export async function getPlayer() {
  // Read cookies first: it marks the page as per-request even when auth isn't configured (e.g. at build time).
  const jar = await cookies();
  const config = getAuthConfig();
  if (!config) return null;
  return verifyPlayerToken(jar.get(PLAYER_COOKIE)?.value, config.sessionSecret);
}

/** True when the request carries a valid admin cookie. Checked again in each admin page, not only in the proxy. */
export async function isAdmin(): Promise<boolean> {
  const jar = await cookies();
  const config = getAuthConfig();
  if (!config) return false;
  return (await verifyAdminToken(jar.get(ADMIN_COOKIE)?.value, config.sessionSecret)) !== null;
}
