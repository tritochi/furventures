# Build Blueprint

## Source Files

- `project-brief.md` — identity, user, scope, success target.
- `architecture.md` — stack, structure, logic, storage decisions.
- `design.md` — inspiration, style rules, anti-slop rules.

## Project Identity

**furventures** — a one-page portfolio site for a furry-convention-focused F&B (food & beverage) business.

## Build Shape

Content-led site (confirmed).

## Version-One Promise

A responsive one-page site where visitors quickly understand furventures' furry-convention F&B offerings and story, and can view clearly-labelled example work. Includes placeholder story/history content, a placeholder email + phone in the footer, an honest contact form (sample "thank you" message, nothing sent), and themed visuals. Deployable to Vercel.

## Scope Lock

### Now

- One page, 5 sections: Header / Hero / About / Portfolio / Footer.
- Primary action: "View Our Work" button in the hero that smooth-scrolls to the portfolio.
- Header nav: smooth-scroll links (About, Portfolio, Contact).
- About: short factual description of furventures plus placeholder Our Story and Our History, and a What We Serve list.
- Portfolio: 4 sample-labelled cards (title + emoji tile + short description), themed to furry-convention F&B.
- Footer: contact form (name, email, message) that shows a sample "thank you" message on submit, plus placeholder email (hello@furventures.example) and phone (+60 12-345 6789) marked "Placeholder".
- Hero/header themed visuals: inline SVG paw mark, flavor chips, card emoji tiles.
- Responsive mobile-first layout; grid 1 col mobile → 2 cols tablet → 3–4 cols desktop.
- Accessible: contrast, focus states, labels, 44px tap targets.

### Later

- Multiple pages.
- Real client testimonials or reviews.
- Live menu or ordering.
- Blog or news section.

### Never

- No login.
- No payments.
- No database.
- No backend.
- No live APIs or secret keys.
- No invented/fake project examples — samples clearly labelled.
- No fake testimonials, stats, or invented real numbers.
- Placeholder content (story/history/email/phone) must be clearly marked placeholder.
- No multiple pages or complex navigation in version one.

## Architecture Summary

- **Stack**: Vite + React + plain CSS.
- **Storage**: None — no localStorage, no database, no backend.
- **State**: Static portfolio array (4 sample items); contact form `submitted` boolean only.
- **Components**: `App`, `Header`, `Hero`, `About`, `Portfolio`, `PortfolioCard`, `Footer`, `ContactForm`.
- **User flow**: Hero → About → Portfolio → Contact form → sample thank-you.

## Data / State / Storage Rules

- Portfolio items: static array of 4 objects `{ title, description, sample: true }` in `src/data/portfolio.js`.
- Contact form: local React state `submitted` toggles form ↔ thank-you message.
- No localStorage, no backend calls, no API keys, no secret values anywhere in code.
- All examples must be explicitly marked "Sample".
- Placeholder contact (email + phone) stored as static constants in the Footer, each marked "Placeholder".

## Design Direction Summary

- **Inspiration URL**: https://designmd.ai/faruqqqz/manuvox-rencana-desain-ui-lengkap-per-layar (inspiration only).
- **Borrow**: light airy background, generous spacing (64–96px section padding), clean sans-serif type with bold headings, rounded cards/buttons (12–16px), one deep appetizing accent color, mobile-first stacking.
- **Do NOT copy**: the reference brand name, logo, content, photos, stats, testimonials, or screen-by-screen layout.
- **Mood**: official + premium + calm with bold accents plus warm, playful furry-convention energy (paw mark motif, food/theme emoji, con-vibe ambiance).
- **Anti-slop**: no fake logos, testimonials, or stats; no lorem ipsum in final proof; no random gradient blobs; one primary action; readable on phone width; no heavy shadows/glows/animation.

## Implementation Rules

- Mobile-first CSS; min body font 16px.
- One `h1` (hero), `h2` per section, `h3` for card titles.
- Primary button: filled accent, white text, min 44px tap height; "View Our Work" is the only primary action.
- Cards: light fill, subtle border, rounded 12–16px; no heavy shadow.
- Form inputs: full-width on mobile, visible labels, visible focus outline.
- Nav links smooth-scroll to sections.
- Contact form on submit: show sample "thank you" message; do not attempt to send anywhere.
- No importing external UI libraries; plain CSS only.

## File and Folder Expectations

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
│       ├── ContactForm.jsx
│       └── PawMark.jsx
```

## Work Card Plan

1. **Work Card 01 — Scaffold Vite + React project** — create project structure, install dev deps, clean default template, `npm run dev` starts with a blank page.
2. **Work Card 02 — Data + Header + Hero** — portfolio sample data file, Header with nav links, Hero with "View Our Work" button.
3. **Work Card 03 — About + Portfolio grid** — About section, Portfolio grid with 4 sample-labelled cards.
4. **Work Card 04 — Footer + Contact form** — Footer, ContactForm with sample thank-you behavior.
5. **Work Card 05 — Styles, responsive, accessibility pass** — full plain-CSS styling, mobile-first rules, focus states, final responsive check.
6. **Work Card 06 — GitHub + Vercel proof** — push to GitHub and deploy live on Vercel.
7. **Work Card 07 — Content & visual enhancement** — furry-convention theme: placeholder Our Story/History in About, placeholder email + phone in the footer, paw-mark + flavor-chip + emoji-tile visuals, themed portfolio copy; run the review mirror.

## Review Mirror

After each work card, check against:

- The chat is not the source of truth; build-status.md and the work card are.
- Only the current work card is implemented — no jumping ahead.
- Portfolio examples are labelled "Sample".
- Contact form sends nothing; shows sample thank-you.
- No backend, auth, database, API keys, or secrets.
- No invented claims, testimonials, logos, or real numbers; placeholder content (story/history/email/phone) is clearly marked placeholder.
- Mobile width readable, no horizontal scroll, taps ≥ 44px.
- `npm run dev` runs; page matches the design direction without cloning the reference.

## Proof Ladder

1. `npm run dev` starts without errors.
2. Page renders all 5 sections on one page.
3. Nav links smooth-scroll to About, Portfolio, Contact.
4. "View Our Work" scrolls to the portfolio.
5. Portfolio shows 4 sample-labelled cards.
6. Contact form shows sample "thank you"; nothing sent.
7. Placeholder content present and labelled: About story/history, footer placeholder email + phone, themed visuals, con-themed portfolio cards.
8. Mobile (phone width): header + hero on first screen, no horizontal scroll.
9. Desktop: grid 2 cols tablet / 3–4 cols desktop.
10. Deployed to Vercel (GitHub + Vercel connected).

## 60-Second Explanation Template

"This is furventures — a one-page portfolio for our furry-convention F&B business. Visitors land on a warm, playful hero, read a short intro, scroll to About for our story and history, and view the portfolio to see examples of our work. The footer has placeholder contact details and a form that shows a thank-you message without sending, because version one has no backend. It's built with Vite and React, styled with plain CSS, works on phone and desktop, and is deployed on Vercel."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing.
- Implement only the current work card.
- Do not jump ahead.
- Stop after verification.
- Update `build-status.md` after each work card.
- Do not add backend/auth/database/API unless the blueprint explicitly allows it.
- Do not add secrets or keys to code.
- Do not invent claims, testimonials, logos, or real numbers; mark placeholder content (story, history, email, phone) as placeholder.
- Apply the guardrails for the confirmed build shape (content-led site).
- Content-led site guardrails: one page or very small site; factual content in clear sections; one clear primary action; responsive layout and mobile check; working links and honest form behavior.
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.
- No lorem ipsum in final proof. Placeholder copy is permitted only when clearly labelled as placeholder (story/history/email/phone); portfolio items stay clearly labelled as samples.