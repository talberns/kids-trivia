# Through Their Eyes

A Bible-history trivia game for ages 13+. It teaches the Hebrew Bible / Old Testament and the New Testament **through the eyes of the people who lived them**: their history, cultures and beliefs, and how Jewish and Christian traditions read them.

Every answer opens a **“Window into the time”** card:

- 📜 **The text says**: the verse, quoted from the World English Bible (public domain)
- 🏛️ **The world around it**: history, archaeology and ancient sources
- 👁️ **Through their eyes**: the moment from inside the ancient world
- ✡️ **Jewish tradition in Jesus' day**: how Jews of the late Second Temple period read the story
- ✝️ **Christian tradition**: the New Testament and church reading
- ⚖️ **Scholars debate**: shown wherever there's no consensus
- **Sources**: a citation for every claim, plus a button to report errors

Engagement comes from a journey map, stars, combos, XP ranks, daily streaks, a double-XP daily challenge and collectible artifacts. Everything is earned by learning. There are **no purchases, no ads and no chance-based rewards**, and progress stays on the player's device.

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript (strict, `noUncheckedIndexedAccess`) |
| Styling | Tailwind CSS v4 with design tokens in `src/app/globals.css` |
| Content validation | Zod schemas; invalid content fails the build |
| Tests | Vitest (unit) and Playwright (end-to-end, mobile and desktop) |
| Hosting | Vercel; every page is statically pre-rendered |

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see "Login and activity log")
npm run dev          # http://localhost:3000
npm run check        # typecheck + lint + unit tests
npm run build && npm run test:e2e
```

## Architecture

```
src/
  app/                 Routes (server components by default)
    play/[era]/[level] Static level pages (generateStaticParams)
    daily/             Daily challenge (picked in the browser by the player's local date)
    museum/            Artifact collection
    about/             Sources & method
  content/             The question bank — data, not code
    schema.ts          Zod schema + editorial rules (the source of truth)
    questions/*.ts     Questions per era
    eras.ts, artifacts.ts
    index.ts           Loads + validates the bank (server-only)
  game/                Pure, framework-free logic, fully unit-tested
    engine.ts          Round state machine: answer, 50/50, combo, scoring, stars
    progress.ts        XP, ranks, streaks, unlocks, artifacts; versioned schema
    daily.ts, rng.ts   Deterministic daily pick and seeded shuffles
  lib/                 Browser adapters
    progress-store.ts  localStorage via useSyncExternalStore (guarded, falls back to memory)
    sound.ts           Web Audio synth (no audio files)
  components/          UI; game/ holds the play screen
```

Design principles:

- **Logic is pure.** `game/` has no React and no I/O, so the rules are easy to test and reason about.
- **Content is data, validated at build time.** A question with no sources, no review date, a debated claim with no debate section, or a scripture reference with no scripture source cannot be loaded.
- **Little ships to the client.** The question bank and its validator are `server-only`. Each level page sends the browser only its five questions.
- **State changes happen in event handlers, not effects.** Progress is written once, when a round completes.
- **Accessibility:** keyboard play (1–4 / A–D, Enter), screen-reader announcements, focus moves to the explanation, and `prefers-reduced-motion` is respected.

## Adding content

Read [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md). In short, write from sources, have the question checked independently, then set `review.status` to `"published"` with a `reviewedOn` date. Each playable level needs exactly five published questions; a test enforces this.

## Login and activity log

Every page sits behind a login (first name, last name, shared password), enforced in `src/proxy.ts`.
The organiser's activity page is `/admin`, behind a separate admin password.

| Variable | Purpose |
| --- | --- |
| `SITE_PASSWORD` | Shared password players type |
| `ADMIN_PASSWORD` | Password for `/admin` |
| `SESSION_SECRET` | Random key (32+ characters) that signs login cookies |
| `DATABASE_URL` | Neon Postgres, added by the Vercel Marketplace integration |

These live only in Vercel's environment variables. **Never commit them: this repository is public.**
If a password or the secret is missing, nobody can log in (the site fails closed). Without `DATABASE_URL`,
activity is printed to the server log instead of stored.

Recorded events: login, wrong password, logout, page views, round start, every answer, and round results.
No IP addresses are stored. The table (`activity_events`) is created automatically on first use.

## Deployment

Pushing to `main` deploys production on Vercel. Every branch and pull request gets a preview deployment.
