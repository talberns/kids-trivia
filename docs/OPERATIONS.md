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
| `SITE_PASSWORD` | Invite code needed to create an account (no longer a sign-in password) |
| `ADMIN_PASSWORD` | Password for `/admin` |
| `SESSION_SECRET` | 32+ random characters that sign login cookies (`openssl rand -base64 48`) |
| `DATABASE_URL` | Neon connection string (set by the integration) |

- Store them as **Sensitive** in Vercel. They can't be read back, only replaced.
- Redeploy after changing a variable.
- Rotating `SESSION_SECRET` signs everyone out.
- If any of the first three is missing, nobody can sign in.

## Accounts

- Players create an account at `/signup` with first and last name, a username, a personal password and the invite code (`SITE_PASSWORD`). They sign in at `/login` with username and password.
- Passwords are stored as scrypt hashes (`src/lib/auth/password.ts`). There is no email, so there is no self-service reset: the admin presses **Reset** on `/admin` and gets a one-time temporary password to pass on privately.
- Tables (created on first use by `src/lib/data/neon.ts`): `users`, `player_progress` (one JSON record per user, merged by `mergeProgress`), `daily_attempts` (one per user per Toronto day).
- Tests use an in-memory store instead (`AQ_MEMORY_DB=1`); production always needs `DATABASE_URL`.

## Daily challenge

- 10 daily-only questions per Toronto day, the same for everyone, walking a fixed shuffle so nothing repeats until the pool is used up (`src/game/daily.ts`).
- Scored on the server: 20 s per question; a right answer is 100 points plus up to 100 for speed. The browser only sends the chosen index; timing and correctness are checked in `src/lib/daily/service.ts`.
- One attempt per player per day. The leaderboard shows everyone who played that day as "First L." with score and time.

## Login gate

- `src/proxy.ts` sends every request without a valid signed player cookie to `/login`.
- `/admin` and `/api/admin/*` need the separate admin cookie.
- Admin pages check the admin cookie again on the server.
- To launch publicly, remove the player check in `src/proxy.ts`, keep the admin check, and add a visible privacy notice.

## Activity log

- **Table:** `activity_events`, created on first use by `src/lib/activity/store.ts`.
- **Events:**
  - `login`, `login_failed`, `logout`, `signup`, `password_reset`, `daily_start`, `daily_complete`: written by the server only.
  - `page_view`, `round_start`, `answer`, `insight_read`, `round_complete`: sent by the browser, validated by `clientEventSchema`. The player's identity always comes from the signed cookie, never from the request body.
- **Not stored:** IP addresses and passwords.
- **Without a database:** if `DATABASE_URL` is unset, events are printed to the server log instead.
- **Deleting one person's data:** events from accounts use `player_key = 'user:<id>'`; older events use `'first|last'`. Delete from `activity_events`, `daily_attempts`, `player_progress` and then `users` for that id.

## Dependencies and CI

- `.github/workflows/ci.yml` runs typecheck, lint, unit tests, build and Playwright tests on every push.
- `.github/workflows/lockfile.yml` regenerates `package-lock.json` when `package.json` changes on `main`.
- Versions are pinned exactly. Upgrade on purpose and run the full checks (see `AGENTS.md`).
- Before upgrading TypeScript beyond 6.x, check that `typescript-eslint` supports the new version.
