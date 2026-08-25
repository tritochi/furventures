import PawMark, { PawPrint } from './PawMark.jsx'

const FLAVOR_CHIPS = [
  '🌭 Con Food Court',
  '☕ Fursuit-Friendly Café',
  '🍪 Catering & Afterparties',
]

const TITLE = 'furventures'

function Hero() {
  return (
    <section id="top" className="hero">
      <PawMark className="hero-mark" size={72} />
      <h1 className="fur-title" aria-label="furventures">
        {TITLE.split('').map((ch, i) => (
          <span key={i} style={{ '--i': i }}>
            {ch}
          </span>
        ))}
      </h1>
      <p className="hero-intro">
        Suit up for good eats — we feed furry conventions from morning munchies
        to midnight snacks.
      </p>
      <ul className="hero-flair">
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
      <div className="hero-floats" aria-hidden="true">
        <PawPrint size={22} className="float-a" />
        <PawPrint size={30} className="float-b" />
        <PawPrint size={16} className="float-c" />
      </div>
      <div className="hero-speedlines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero-sparkles" aria-hidden="true">
        <span style={{ top: '12%', left: '12%', fontSize: '1.4rem' }}>✨</span>
        <span style={{ top: '24%', left: '82%', fontSize: '1.1rem', animationDelay: '-0.7s' }}>⭐</span>
        <span style={{ top: '42%', left: '8%', fontSize: '1rem', animationDelay: '-1.3s' }}>✨</span>
        <span style={{ top: '70%', left: '88%', fontSize: '1.3rem', animationDelay: '-0.4s' }}>🌟</span>
        <span style={{ top: '84%', left: '18%', fontSize: '1rem', animationDelay: '-1.8s' }}>✨</span>
        <span style={{ top: '58%', left: '93%', fontSize: '0.9rem', animationDelay: '-2.2s' }}>⭐</span>
      </div>
      <span className="hero-pop" aria-hidden="true">SUIT UP!</span>
    </section>
  )
}

export default Hero