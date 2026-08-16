# Work Card 05 — Styles, Responsive, and Review Pass

## Goal

Apply the full plain-CSS styling from `design.md`, make the layout responsive and mobile-first, add accessibility basics, then run the Review Mirror and fix the single smallest useful issue found.

## Inputs

- `design.md` — full design direction (color, typography, component style, mobile rules, accessibility basics, anti-slop rules).
- `build-blueprint.md` — implementation rules, Review Mirror checklist.
- `prompts/07-review-mirror.md` — review checklist to run after styling.

## Files likely touched

- `src/styles.css`
- All components in `src/components/` (class names / minor markup tweaks only, no new features)

## Instructions for the coding agent

1. Write `src/styles.css` implementing `design.md`: light/airy background, one deep accent color, rounded cards/buttons (12–16px), generous section spacing (64–96px), clean sans-serif typography with bold headings.
2. Make the layout mobile-first: sections stack vertically; Portfolio grid is 1 column on phones, 2 on tablets, 3–4 on desktop, using CSS media queries or a responsive grid.
3. Ensure the primary button ("View Our Work") and form inputs meet minimum 44px tap height, with visible focus states on all interactive elements.
4. Ensure body text is at least 16px and contrast between text and background meets accessibility basics from `design.md`.
5. Run the Review Mirror checklist (`prompts/07-review-mirror.md`) against the built site.
6. If the review finds any issues, apply only the single smallest useful fix — do not redesign the whole project.

## What not to do

- Do not add a UI framework or CSS library.
- Do not add animations, glows, or heavy shadows beyond what `design.md` allows.
- Do not add new features or sections beyond what Work Cards 01–04 built.
- Do not add a backend, database, or API.

## Done when

- The site visually matches `design.md`'s mood (official, premium, calm, bold accents) without cloning the reference.
- The layout is fully responsive: correct on phone, tablet, and desktop widths.
- The Review Mirror returns PASS, or the single smallest fix has been applied and re-verified.

## Verification steps

- Run `npm run dev` and visually check the whole page against `design.md`.
- Resize the browser (or use dev tools device toolbar) to phone width (~375px) and confirm no horizontal scroll, no cut-off text/buttons.
- Resize to tablet and desktop widths and confirm the Portfolio grid changes column count as expected.
- Tab through the page with the keyboard and confirm visible focus states on links, buttons, and inputs.
- Run the Review Mirror checklist from `prompts/07-review-mirror.md` and record PASS / NEEDS FIX / REDRAFT plus the top issues found.
- Design check: color, typography, component style, mobile rules, and accessibility basics all follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- [ ] At phone width (~375px), the page has no horizontal scroll and all text/buttons are fully visible.
- [ ] At tablet and desktop widths, the Portfolio grid shows 2 and 3–4 columns respectively.
- [ ] Tabbing through the page with the keyboard shows a visible focus outline on links, buttons, and form inputs.
- [ ] The overall look matches the official/premium/calm/bold-accent mood described in `design.md` without copying the reference design.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the Review Mirror returns REDRAFT (major rework needed) rather than PASS/NEEDS FIX, stop and describe the issue before continuing — do not attempt a full redesign alone.

## Status

Not started
