# Work Card 02 — First Visible Version

## Goal

Build the first visible version of the page: the sample portfolio data, the Header with navigation, and the Hero section with the primary action button.

## Inputs

- `design.md` — layout rules, hero/first-screen layout, component style, mobile rules.
- `architecture.md` — component map, data model.
- `build-blueprint.md` — scope lock, implementation rules.

## Files likely touched

- `src/data/portfolio.js`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/App.jsx`

## Instructions for the coding agent

1. Create `src/data/portfolio.js` exporting an array of 4 sample objects: `{ title, description, sample: true }`. Use realistic F&B-style placeholder content clearly framed as furventures' own work (not lorem ipsum, not another brand's content).
2. Build `Header.jsx`: furventures name/logo text, nav links (About, Portfolio, Contact) that smooth-scroll to each section's id.
3. Build `Hero.jsx`: `h1` with the business name, one-line intro, and one primary button "View Our Work" that smooth-scrolls to the Portfolio section.
4. Wire `Header` and `Hero` into `App.jsx` in order.
5. Follow `design.md` for spacing, mood (official + premium + calm + bold accents), and button style — no styling framework, plain CSS classes only (full styling pass happens in Work Card 05, but basic structure/classes should be in place).

## What not to do

- Do not build About, Portfolio grid, or Footer yet.
- Do not add real client testimonials, fake stats, or fake logos.
- Do not copy the design inspiration's brand, logo, or content.
- Do not add a backend, database, or API.

## Done when

- Header and Hero render on the page with working nav links.
- "View Our Work" button exists (target section doesn't need to exist yet, but the link/anchor should be wired for when it does).
- Portfolio sample data file exists with 4 items.

## Verification steps

- Run `npm run dev` and confirm Header and Hero are visible.
- Confirm nav links point to section ids (About, Portfolio, Contact) even if those sections don't exist yet.
- Confirm no console errors.
- Design check: hero/first-screen layout, spacing, and CTA style follow `design.md` mood, spacing, and button rules.

## Localhost test before continuing

After this card, the learner should test:

- [ ] The page shows a header with the furventures name and nav links.
- [ ] The hero shows a business name, one-line intro, and a "View Our Work" button.
- [ ] Clicking nav links or the button does not throw a console error (even if nothing to scroll to yet).

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the Header or Hero cannot render without errors after a reasonable attempt, stop and describe the exact error before continuing.

## Status

Not started
