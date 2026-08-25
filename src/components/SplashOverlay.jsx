import PawMark from './PawMark.jsx'

/**
 * Cinematic anime-style intro splash shown once on load.
 * Pure decoration: aria-hidden, pointer-events none, auto-dismissed by App.
 */
function SplashOverlay() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-inner">
        <div className="splash-ring" />
        <PawMark className="splash-paw" size={96} />
        <div className="splash-text">FURVENTURES</div>
        <div className="splash-stamp">SUIT UP!</div>
      </div>
    </div>
  )
}

export default SplashOverlay