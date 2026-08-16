function PortfolioCard({ item }) {
  return (
    <article className="card">
      <div className="card-inner">
        <div className="card-visual" aria-hidden="true">
          {item.emoji}
        </div>
        <h3>{item.title}</h3>
        <p className="card-description">{item.description}</p>
        <span className="chip">Sample</span>
      </div>
    </article>
  )
}

export default PortfolioCard