const FAQS = [
  {
    q: 'Do you cater to fursuits?',
    a: 'Absolutely — everything is built to be suit-friendly: straw-friendly drinks, easy finger food, and calm booth lines. [Placeholder]',
  },
  {
    q: 'Can you serve at our convention?',
    a: 'Yes. We work with organizers on stalls, catering, and afterparties. [Placeholder]',
  },
  {
    q: 'Is the menu customizable?',
    a: 'We tailor the menu to your event, crowd, and schedule. [Placeholder]',
  },
]

function Faq() {
  return (
    <section id="faq" className="section faq">
      <h2>Common Questions</h2>
      <div className="faq-list">
        {FAQS.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
      <p className="placeholder-note">[Placeholder answers — replace with the real details.]</p>
    </section>
  )
}

export default Faq