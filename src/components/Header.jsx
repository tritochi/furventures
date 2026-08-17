import PawMark from './PawMark.jsx'

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand">
        <PawMark size={24} />
        <span>furventures</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#treats">Treats</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#events">Events</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header