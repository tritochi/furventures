# Work Card 03 — Core Behaviour

## Goal

Build the core content sections: About and the Portfolio grid, showing all 4 sample-labelled cards, so the site delivers its main value (understand the business + view the work).

## Inputs

- `design.md` — layout rules, card/content block style, section rhythm.
- `architecture.md` — component map, data model.
- `build-blueprint.md` — scope lock (Now items), implementation rules.

## Files likely touched

- `src/components/About.jsx`
- `src/components/Portfolio.jsx`
- `src/components/PortfolioCard.jsx`
- `src/App.jsx`

## Instructions for the coding agent

1. Build `About.jsx`: an `id="about"` section with an `h2` and a short factual description of furventures as an F&B business.
2. Build `PortfolioCard.jsx`: renders one portfolio item — `h3` title, description, and a small "Sample" label/chip.
3. Build `Portfolio.jsx`: an `id="portfolio"` section with an `h2`, importing `src/data/portfolio.js` and mapping each item to a `PortfolioCard`. Lay out as a grid (structure/classes now; full responsive CSS in Work Card 05).
4. Wire `About` and `Portfolio` into `App.jsx` in order, between `Hero` and where `Footer` will go.
5. Confirm the Header nav links now actually scroll to the `About` and `Portfolio` section ids.

## What not to do

- Do not build the Footer or Contact form yet.
- Do not present the sample portfolio items as real client testimonials or invented real stats.
- Do not add more or fewer than 4 portfolio cards.
- Do not add a backend, database, or API.

## Done when

- About section renders with factual content about furventures.
- Portfolio section renders all 4 cards, each clearly labelled "Sample".
- Nav links from Header scroll correctly to About and Portfolio.

## Verification steps

- Run `npm run dev` and confirm About and Portfolio sections are visible.
- Click each nav link and confirm it scrolls to the correct section.
- Confirm each portfolio card shows a "Sample" label.
- Design check: card/content block style and section rhythm follow `design.md` (rounded cards, spacing, no heavy shadows).

## Localhost test before continuing

After this card, the learner should test:

- [ ] The About section is visible with real factual text about furventures.
- [ ] The Portfolio section shows exactly 4 cards, each labelled "Sample".
- [ ] Clicking the "About" and "Portfolio" nav links scrolls to the correct section.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the Portfolio grid does not render all 4 sample cards correctly after a reasonable attempt, stop and describe the exact error before continuing.

## Status

Not started
