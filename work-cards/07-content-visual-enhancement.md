# Work Card 07 — Content & Visual Enhancement

## Goal

Add furry-convention F&B content and visuals to the shipped furventures site: placeholder About story/history, placeholder email + phone in the footer, and themed visuals (paw mark, flavor chips, emoji card tiles) — with all placeholder content clearly labelled as placeholder.

## Inputs

- `project-brief.md` — furry-convention F&B identity, scope, placeholder rules.
- `design.md` — visual mood, layout rules, component style, anti-slop rules.
- `build-blueprint.md` — scope lock, implementation rules, guardrails.

## Files likely touched

- `src/data/portfolio.js`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/PortfolioCard.jsx`
- `src/components/Footer.jsx`
- `src/components/PawMark.jsx` (new — inline SVG)
- `src/styles.css`

## Instructions for the coding agent

1. Create `src/components/PawMark.jsx` — a small inline SVG paw print used as a decorative brand mark (uses `currentColor` so it inherits the accent color).
2. `Header.jsx`: add the PawMark next to the brand text.
3. `Hero.jsx`: add the PawMark above the `h1`, keep a clear one-line intro themed to furry-convention F&B, and add a row of playful flavor chips (e.g., Con Food Court, Fursuit-Friendly Café, Catering). Keep "View Our Work" as the one primary action.
4. `About.jsx`: expand into placeholder sub-sections "Our Story" and "Our History", plus a "What We Serve" list. Mark placeholder copy with a visible "[Placeholder]" note.
5. `PortfolioCard.jsx`: add a small emoji tile (from `item.emoji`) at the top of each card.
6. `portfolio.js`: retheme the 4 sample items to furry-convention F&B (café booth, snack line, food-court stall, afterparty catering) and add an `emoji` field; keep `sample: true`.
7. `Footer.jsx`: add placeholder email (`hello@furventures.example`) and phone (`+60 12-345 6789`) above/below the form, each clearly marked "Placeholder". Keep the honest contact form (sample thank-you, nothing sent).
8. `styles.css`: add styles for the hero paw mark, flavor chips, card emoji tile, About sub-sections, contact meta, and placeholder note.
9. Run the build and the Review Mirror (`prompts/07-review-mirror.md`) against the updated site.

## What not to do

- Do not add a backend, database, API, or real message sending.
- Do not use real contact details — keep the clearly-placeholder email/phone marked "Placeholder".
- Do not invent real claims, testimonials, stats, or numbers.
- Do not copy the design reference's brand, logo, content, or identity.
- Do not add external image libraries or image assets — inline SVG + emoji + plain CSS only.
- Do not start another work card.

## Done when

- Furry-convention themed content and visuals are in place.
- About shows placeholder story/history; the footer shows placeholder email + phone labelled "Placeholder".
- Portfolio shows 4 con-themed sample cards, each with an emoji tile and a "Sample" label.
- `npm run build` passes, and the Review Mirror returns PASS with all placeholder content clearly labelled.

## Verification steps

- Run `npm run build` — must succeed with no errors.
- Server render check: PawMark appears in header/hero; About shows Our Story + Our History; footer shows placeholder email + phone; all 4 cards render with emoji tiles and "Sample" labels.
- Run the Review Mirror checklist (`prompts/07-review-mirror.md`) and record PASS / NEEDS FIX / REDRAFT plus the top issues found.
- Design check: hero first screen, card tiles, footer placeholder contact, and mobile rules follow `design.md`; nothing clones the reference.

## Localhost test before continuing

After this card, the learner should test:

- [ ] Hero shows the paw mark, a furry-convention F&B intro, flavor chips, and the "View Our Work" button.
- [ ] About shows "Our Story" and "Our History" (placeholder) and a "What We Serve" list.
- [ ] Footer shows the placeholder email and phone, each labelled "Placeholder", and the form still shows the sample thank-you on submit.
- [ ] Each portfolio card shows an emoji tile and a con-themed description labelled "Sample".
- [ ] At phone width the page has no horizontal scroll and nothing is cut off.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the build fails, or the Review Mirror flags that placeholder content reads as real claims (unlabelled), stop and fix the labelling before continuing.

## Status

Not started