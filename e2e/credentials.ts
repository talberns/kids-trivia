/** Test-only login settings for the local server. Real values live only in Vercel. */
export const E2E_AUTH = {
  SITE_PASSWORD: process.env.E2E_SITE_PASSWORD ?? "e2e-player-password",
  ADMIN_PASSWORD: process.env.E2E_ADMIN_PASSWORD ?? "e2e-admin-password",
  SESSION_SECRET: "e2e-session-secret-only-used-in-local-tests-0123456789",
};
