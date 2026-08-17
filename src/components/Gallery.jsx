const TILES = [
  { emoji: '🍦', label: 'Booth setup' },
  { emoji: '🥐', label: 'Morning line' },
  { emoji: '🎪', label: 'Con hall' },
  { emoji: '🦊', label: 'Paw prints' },
]

function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <h2>Gallery</h2>
      <p className="section-lead">
        A peek at what a furventures corner looks like — placeholder visuals to
        be replaced with real photos.
      </p>
      <div className="gallery-grid">
        {TILES.map((tile) => (
          <figure key={tile.label} className="gallery-tile">
            <span className="gallery-emoji" aria-hidden="true">
              {tile.emoji}
            </span>
            <figcaption>{tile.label}</figcaption>
            <span className="chip">Placeholder</span>
          </figure>
        ))}
      </div>
      <p className="placeholder-note">[Placeholder visuals — replace with real photos.]</p>
    </section>
  )
}

export default Gallery