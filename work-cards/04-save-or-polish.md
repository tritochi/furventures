# Work Card 04 — Footer and Contact Form

## Goal

Build the Footer with the honest Contact form: fields for name, email, and message, and a submit action that shows a sample "thank you" message without sending anything anywhere.

## Inputs

- `design.md` — component style (inputs, buttons), mobile rules, anti-slop rules.
- `architecture.md` — data/state model (contact form `submitted` boolean).
- `build-blueprint.md` — data/state/storage rules, implementation rules.

## Files likely touched

- `src/components/Footer.jsx`
- `src/components/ContactForm.jsx`
- `src/App.jsx`

## Instructions for the coding agent

1. Build `ContactForm.jsx`: controlled inputs for name, email, and message, each with a visible label. Use local React state (e.g., `useState`) to hold form values and a `submitted` boolean.
2. On submit: prevent default form submission, set `submitted` to `true`, and render a sample "thank you" message in place of the form (e.g., "Thanks for reaching out! This is a sample response — no message was actually sent."). Do not call any API, backend, or mailto.
3. Build `Footer.jsx`: an `id="contact"` section with an `h2`, the `ContactForm`, and a small copyright line ("© furventures" + current year, static text is fine).
4. Wire `Footer` into `App.jsx` as the last section.
5. Confirm the Header's "Contact" nav link scrolls to the Footer/contact section.

## What not to do

- Do not connect the form to any backend, email service, or third-party API.
- Do not store form data in localStorage or any persistent storage.
- Do not add fake success metrics (e.g., "1000+ messages sent").
- Do not add a backend, database, or API of any kind.

## Done when

- Footer renders with the contact form and copyright line.
- Submitting the form (with any input) shows the sample "thank you" message instead of the form.
- The "Contact" nav link scrolls to the Footer.

## Verification steps

- Run `npm run dev`, fill in the contact form, and submit it.
- Confirm the form is replaced by the sample "thank you" message.
- Confirm no network request is made on submit (check browser dev tools Network tab — nothing should fire on submit).
- Click the "Contact" nav link and confirm it scrolls to the Footer.
- Design check: input, button, and label style follow `design.md` component style and mobile rules (full-width inputs on mobile, visible focus states).

## Localhost test before continuing

After this card, the learner should test:

- [ ] The Footer is visible with a contact form (name, email, message fields) and a copyright line.
- [ ] Filling in the form and submitting shows a sample "thank you" message, not a real submission.
- [ ] No network request fires when the form is submitted (check the browser Network tab).
- [ ] Clicking the "Contact" nav link scrolls to the Footer.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the contact form cannot be made to show the sample thank-you message without a real submission, stop and describe the exact issue before continuing.

## Status

Not started
