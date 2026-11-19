# Operations

How to run, deploy and maintain the site. This repository is public: no passwords, keys or account details belong here.

## Hosting

- Vercel project `through-their-eyes`. Pushing to `main` deploys production, and every other branch gets a private preview.
- Custom domain: apostlequiz.com, with `www` redirecting to the apex. Vercel's Deployment Protection is set to "All except custom domains", so `*.vercel.app` URLs need a Vercel login.
- Database: Neon Postgres (Free plan), connected through the Vercel Marketplace, which sets `DATABASE_URL`.
- To roll back, go to Vercel → Deployments, pick an earlier production build, then choose ⋯ → Promote to Production.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `SITE_PASSWORD` | Shared player password |
| `ADMIN_PASSWORD` | Password for `/admin` |
| `SESSION_SECRET` | 32+ random characters that sign login cookies (`openssl rand -base64 48`) |
| `DATABASE_URL` | Neon connection string (set by the integration) |

- Store them as **Sensitive** in Vercel. They can't be read back, only replaced.
- Redeploy after changing a variable.
- Rotating `SESSION_SECRET` signs everyone out.
- If any of the first three is missing, nobody can sign in.

## Login gate

- `src/proxy.ts` sends every request without a valid signed player cookie to `/login`.
- `/admin` and `/api/admin/*` need the separate admin cookie.
- Admin pages check the admin cookie again on the server.
- To launch publicly, remove the player check in `src/proxy.ts`, keep the admin check, and add a visible privacy notice.

## Activity log

- **Table:** `activity_events`, created on first use by `src/lib/activity/store.ts`.
- **Events:**
  - `login`, `login_failed`, `logout`: written by the server only.
  - `page_view`, `round_start`, `answer`, `round_complete`: sent by the browser, validated by `clientEventSchema`. The player's identity always comes from the signed cookie, never from the request body.
- **Not stored:** IP addresses and passwords.
- **Without a database:** if `DATABASE_URL` is unset, events are printed to the server log instead.
- **Deleting one person's data:** run `DELETE FROM activity_events WHERE player_key = 'first|last';`. The key is lower-case with accents removed; see `playerKey()`.

## Dependencies and CI

- `.github/workflows/ci.yml` runs typecheck, lint, unit tests, build and Playwright tests on every push.
- `.github/workflows/lockfile.yml` regenerates `package-lock.json` when `package.json` changes on `main`.
- Versions are pinned exactly. Upgrade on purpose and run the full checks (see `AGENTS.md`).
- Before upgrading TypeScript beyond 6.x, check that `typescript-eslint` supports the new version.
