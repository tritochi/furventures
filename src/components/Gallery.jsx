import PlaceholderImage from './PlaceholderImage.jsx'

const TILES = [
  { label: 'Booth setup', emoji: '🍦', from: '#f6e3c8', to: '#c08a3e' },
  { label: 'Morning line', emoji: '🥐', from: '#f3d9d4', to: '#b15f52' },
  { label: 'Con hall', emoji: '🎪', from: '#dcebe7', to: '#5f8f8a' },
  { label: 'Paw prints', emoji: '🦊', from: '#ecd7c6', to: '#9c4b26' },
]

function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <h2>Gallery</h2>
      <p className="section-lead">
        A peek at what a furventures corner looks like — placeholder photos to be
        replaced with real shots.
      </p>
      <div className="gallery-grid">
        {TILES.map((tile) => (
          <figure key={tile.label} className="gallery-tile">
            <PlaceholderImage
              label={tile.label}
              emoji={tile.emoji}
              from={tile.from}
              to={tile.to}
            />
            <figcaption>{tile.label}</figcaption>
            <span className="chip">Placeholder</span>
          </figure>
        ))}
      </div>
      <p className="placeholder-note">[Placeholder photos — replace with real photos.]</p>
    </section>
  )
}

export default Gallery