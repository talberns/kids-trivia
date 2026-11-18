# Agent instructions

- Read `README.md` for the architecture and `docs/CONTENT_GUIDE.md` before touching anything in `src/content/`.
- Keep `src/game/` pure: no React, no browser APIs. Add unit tests for any rule change.
- Never set a question to `"published"` without an independent fact-check pass. See the content guide.
- Bible quotations must match the World English Bible exactly.
- No monetisation, ads, loot boxes or chance-based rewards: players can be 13.
- Before committing, run `npm run check` and `npm run build`, and run `npm run test:e2e` for UI changes.
