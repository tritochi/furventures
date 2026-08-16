import PawMark from './PawMark.jsx'

const FLAVOR_CHIPS = [
  '🌭 Con Food Court',
  '☕ Fursuit-Friendly Café',
  '🍪 Catering & Afterparties',
]

function Hero() {
  return (
    <section id="top" className="hero">
      <PawMark className="hero-mark" size={72} />
      <h1>furventures</h1>
      <p className="hero-intro">
        A furry-convention food &amp; beverage business serving warm, playful eats
        across a season of events.
      </p>
      <ul className="hero-flair" aria-hidden="true">
        {FLAVOR_CHIPS.map((chip) => (
          <li key={chip}>{chip}</li>
        ))}
      </ul>
      <a href="#portfolio" className="btn btn-primary">
        View Our Work
      </a>
    </section>
  )
}

export default Hero