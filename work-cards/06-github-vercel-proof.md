# Work Card 06 — GitHub and Vercel Proof

## Goal

Push the finished furventures site to GitHub and deploy it to Vercel, then capture proof (live URL, repo URL, and a short explanation).

## Inputs

- `prompts/08-github-vercel-proof.md` — GitHub push and Vercel deploy guidance.
- `build-blueprint.md` — 60-Second Explanation Template, proof ladder.

## Files likely touched

- `.gitignore` (create if missing, should exclude `node_modules`, `dist`)
- No application source files should change in this card.

## Instructions for the coding agent

1. Confirm Git works: `git --version`. Confirm Git identity is set (`git config --global user.name` / `user.email`); set it if missing.
2. Ensure a `.gitignore` exists excluding `node_modules/` and `dist/`.
3. Initialize git if not already: `git init`, `git add .`, `git commit -m "build: complete furventures kdbm lite site"`.
4. Guide the learner to create an empty GitHub repository (no README/license/gitignore added on GitHub's side).
5. Add the remote and push: `git branch -M main`, `git remote add origin <repo-url>`, `git push -u origin main`.
6. Guide the learner to open Vercel, add a new project, import the GitHub repo, and deploy with build command `npm run build` and output directory `dist`.
7. Once deployed, open the live URL and re-test the main flow (nav, hero CTA, portfolio, contact form, mobile width).
8. Update `build-status.md` with the proof used, links, and set `Current KDBM Lite stage: Shipped`.

## What not to do

- Do not change application code or features in this card.
- Do not commit `node_modules` or any secrets/API keys.
- Do not skip re-testing the live URL after deploy.

## Done when

- The project is pushed to GitHub.
- The project is deployed and live on Vercel.
- The live URL has been tested and works.
- `build-status.md` reflects the Shipped stage with proof links recorded.

## Verification steps

- Run `git status` to confirm a clean working tree after push.
- Open the GitHub repo URL and confirm the files are present.
- Open the live Vercel URL and click through: nav links, "View Our Work", Portfolio cards, Contact form submission, mobile width.
- Confirm no secrets or `.env` files were committed (`git log`, check repo contents).

## Localhost test before continuing

After this card, the learner should test:

- [ ] The GitHub repository is visible online and contains the project files.
- [ ] The Vercel live URL opens and shows the same site as localhost.
- [ ] On the live URL: nav links, "View Our Work" button, Portfolio cards, and the Contact form (sample thank-you) all work as expected.
- [ ] The live site is readable and usable at mobile width with no horizontal scroll.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If GitHub or Vercel access is blocked and cannot be resolved in five minutes, fall back to the proof options in `prompts/08-github-vercel-proof.md` (localhost screenshot/recording + explanation) and record that in `build-status.md`.

## Status

Not started
