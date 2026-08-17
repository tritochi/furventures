import PawMark, { PawPrint } from './PawMark.jsx'

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
        Suit up for good eats — we feed furry conventions from morning munchies
        to midnight snacks.
      </p>
      <ul className="hero-flair" aria-hidden="true">
        {FLAVOR_CHIPS.map((chip) => (
          <li key={chip}>{chip}</li>
        ))}
      </ul>
      <div className="paw-trail" aria-hidden="true">
        <PawPrint size={16} />
        <PawPrint size={24} />
        <PawPrint size={34} />
        <PawPrint size={24} />
        <PawPrint size={16} />
      </div>
      <a href="#portfolio" className="btn btn-primary">
        View Our Work
      </a>
    </section>
  )
}

export default Hero