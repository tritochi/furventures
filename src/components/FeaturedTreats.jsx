const TREATS = [
  { emoji: '🥤', name: 'Frost Paws Lemon Mist', note: 'A frozen citrus cooler' },
  { emoji: '🍫', name: 'Midnight Fur Brownie', note: 'A gooey chocolate square' },
  { emoji: '🥧', name: 'Den Slider Trio', note: 'Three mini savoury sliders' },
  { emoji: '🍿', name: 'Fur-Pile Popcorn', note: 'Sweet & salty hand-mixed' },
]

function FeaturedTreats() {
  return (
    <section id="treats" className="section treats">
      <h2>Signature Treats</h2>
      <p className="section-lead">
        A taste of what we serve — placeholder menu items to be replaced with the
        real menu.
      </p>
      <div className="treats-grid">
        {TREATS.map((treat) => (
          <article key={treat.name} className="treat-card">
            <span className="treat-emoji" aria-hidden="true">
              {treat.emoji}
            </span>
            <h3>{treat.name}</h3>
            <p>{treat.note}</p>
            <span className="chip">Sample</span>
          </article>
        ))}
      </div>
      <p className="placeholder-note">[Placeholder menu — replace with the real menu.]</p>
    </section>
  )
}

export default FeaturedTreats