import "server-only";
import { cookies } from "next/headers";
import { getAuthConfig } from "./config";
import { ADMIN_COOKIE, PLAYER_COOKIE, verifyAdminToken, verifyPlayerToken } from "./session";

/** The logged-in player for this request, or null. */
export async function getPlayer() {
  const config = getAuthConfig();
  if (!config) return null;
  const jar = await cookies();
  return verifyPlayerToken(jar.get(PLAYER_COOKIE)?.value, config.sessionSecret);
}

/** True when the request carries a valid admin cookie. Checked again in each admin page, not only in the proxy. */
export async function isAdmin(): Promise<boolean> {
  const config = getAuthConfig();
  if (!config) return false;
  const jar = await cookies();
  return (await verifyAdminToken(jar.get(ADMIN_COOKIE)?.value, config.sessionSecret)) !== null;
}
