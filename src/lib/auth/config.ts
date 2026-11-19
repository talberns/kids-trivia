import "server-only";

/**
 * Login settings, read from environment variables set in Vercel (never committed: the repo is public).
 *   SITE_PASSWORD   shared password every player types
 *   ADMIN_PASSWORD  password for the /admin activity page
 *   SESSION_SECRET  long random key used to sign login cookies
 * If any is missing the site fails closed: nobody can log in.
 */
export interface AuthConfig {
  readonly sitePassword: string;
  readonly adminPassword: string;
  readonly sessionSecret: string;
}

export function getAuthConfig(): AuthConfig | null {
  const sitePassword = process.env.SITE_PASSWORD ?? "";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "";
  const sessionSecret = process.env.SESSION_SECRET ?? "";
  if (!sitePassword || !adminPassword || sessionSecret.length < 32) return null;
  return { sitePassword, adminPassword, sessionSecret };
}

/** Browsers accept Secure cookies on http://localhost, so this is safe for local e2e runs too. */
export const secureCookies = process.env.NODE_ENV === "production";
