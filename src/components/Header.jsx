import PawMark from './PawMark.jsx'

function Header({ theme = 'warm', onToggleTheme }) {
  const isCool = theme === 'cool'
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
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={isCool ? 'Switch to the warm fur palette' : 'Switch to the cool ice palette'}
        title={isCool ? 'Warm fur palette' : 'Cool ice palette'}
      >
        <span aria-hidden="true">{isCool ? '🌶️' : '❄️'}</span>
        <span className="theme-toggle-label">{isCool ? 'Warm' : 'Cool'}</span>
      </button>
    </header>
  )
}

export default Header