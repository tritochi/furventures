# Architecture

## Build Shape

Content-led site — one-page portfolio for furventures, an F&B business.

## Stack Decision

- **Vite** — fast dev server and build tool.
- **React** — component-based UI.
- **Plain CSS** — hand-written styles, no Tailwind (not currently used in this session).
- **No backend, auth, database, payments, or live APIs** — confirmed in the brief.
- **No localStorage** — not needed; this is content-led, not a browser-local tool.

## Structure Overview

One page with one-page navigation:

1. Header / navigation — sticky, compact.
2. Hero — business name + one-line intro.
3. About — what furventures is and does.
4. Portfolio — grid of example cards with short descriptions.
5. Footer — contact form that shows a sample "thank you" message (no real sending).

## Component Map

- `App` — layout shell, assembles sections.
- `Header` — site name as logo text + nav links (smooth scroll).
- `Hero` — h1 business name, one-line intro.
- `About` — short factual paragraphs about furventures.
- `Portfolio` — map component over a list of sample items.
- `PortfolioCard` — one example card: title, short description, "sample" label.
- `Footer` — contact form block.
- `ContactForm` — fields (name, email, message) + submit that shows a sample "thank you" message; no backend.

## Data / State Model

- Portfolio items: static array of 4 sample objects, each with `{ title, description, sample: true }`.
- Contact form: React state for `submitted` (boolean) — toggles between form and "thank you" message.
- No other application state needed.

## Storage Logic

None. No localStorage, no database, no backend. All content is static markup/data in the source files.

## User Flow

1. Visitor lands on the page → sees hero with business name and intro.
2. Scans nav → about, portfolio, contact.
3. Scrolls or clicks nav → About explains the business.
4. Views Portfolio grid → 4 clearly-labelled sample cards.
5. Scrolls to footer → fills contact form → sees sample "thank you" message (honest behavior, nothing is sent).

## File Expectations

Default Vite + React structure:

```
furventures/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   ├── data/
│   │   └── portfolio.js
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Portfolio.jsx
│       ├── PortfolioCard.jsx
│       ├── Footer.jsx
│       └── ContactForm.jsx
```

## Constraints

- One page only; sections on the same page.
- One primary action: view the portfolio.
- Portfolio examples must be clearly labelled as samples.
- Contact form is honest — shows a sample "thank you", sends nothing.
- Responsive and mobile-first.
- No login, payments, database, backend, live APIs, or secret keys.
- No multiple pages or complex navigation in version one.

## Technical Non-Goals

- No routing / multiple pages.
- No backend or server code.
- No database or localStorage.
- No authentication or admin.
- No analytics or invented metrics.
- No live API integration.

## Verification Notes

- `npm run dev` starts the site locally.
- Page renders all 5 sections on one page.
- Nav links smooth-scroll to each section.
- Portfolio grid shows 4 sample-labelled cards.
- Contact form shows "thank you" on submit; nothing is sent.
- Mobile check: first screen shows compact header + hero, no horizontal scroll; grid stacks to 1 column on small phones.
- Desktop check: grid expands to 2 columns on tablet, 3–4 on desktop.