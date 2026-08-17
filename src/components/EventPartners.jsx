const STEPS = [
  {
    emoji: '📝',
    title: 'Book a stall',
    text: 'Reserve a food stall, booth, or catering slot for your event dates.',
  },
  {
    emoji: '🍽️',
    title: 'Plan the menu',
    text: 'We shape a menu around your crowd, venue, and schedule.',
  },
  {
    emoji: '🤝',
    title: 'We run the day',
    text: 'Our team handles setup, service, and clean break-down.',
  },
]

function EventPartners() {
  return (
    <section id="events" className="section events">
      <h2>For Event Organizers</h2>
      <p className="section-lead">
        A simple, three-step way to bring furventures to your convention.
      </p>
      <ol className="events-steps">
        {STEPS.map((step) => (
          <li key={step.title} className="event-step">
            <span className="event-emoji" aria-hidden="true">
              {step.emoji}
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <p className="placeholder-note">[Placeholder content — replace with real booking details.]</p>
    </section>
  )
}

export default EventPartners