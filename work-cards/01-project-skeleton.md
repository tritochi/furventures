# Work Card 01 — Project Skeleton

## Goal

Scaffold the Vite + React project structure for furventures so the dev server runs cleanly, with the folders in place for the components and data that later cards will fill in.

## Inputs

- `architecture.md` — stack decision and file expectations.
- `build-blueprint.md` — file and folder expectations, implementation rules.

## Files likely touched

- `package.json`, `vite.config.js`, `index.html`
- `src/main.jsx`, `src/App.jsx`, `src/styles.css`
- `src/data/` (empty or placeholder `portfolio.js`)
- `src/components/` (empty folder, no components yet)

## Instructions for the coding agent

1. Scaffold a Vite + React project (JavaScript, not TypeScript) at the project root.
2. Remove default Vite/React boilerplate content (sample counter, default logos, default CSS).
3. Create the folder structure: `src/components/` and `src/data/`.
4. `App.jsx` should render a minimal placeholder shell (e.g., a single empty root element or a simple "furventures" text) — no real sections yet.
5. Confirm `npm run dev` starts without errors.

## What not to do

- Do not build the Header, Hero, About, Portfolio, or Footer sections yet.
- Do not add real content or copy yet.
- Do not install any UI library, CSS framework, or extra dependency beyond Vite + React defaults.
- Do not add a backend, database, or API of any kind.

## Done when

- `npm run dev` starts without errors.
- A blank/minimal page loads at the localhost URL with no console errors.
- Folder structure matches the File and Folder Expectations in `build-blueprint.md`.

## Verification steps

- Run `npm install`.
- Run `npm run dev`.
- Open the localhost URL and confirm the page loads with no red error screen.
- Confirm `src/components/` and `src/data/` folders exist.
- Design check: confirm `design.md` exists and is specific — no visual implementation happens in this card yet.

## Localhost test before continuing

After this card, the learner should test:

- [ ] `npm run dev` starts and prints a localhost URL (usually `http://localhost:5173`).
- [ ] Opening that URL shows a blank/minimal page with no red error screen.
- [ ] No console errors appear in the browser dev tools.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If `npm run dev` fails to start or shows errors that cannot be resolved in a few minutes, stop and describe the exact error before continuing.

## Status

Not started
