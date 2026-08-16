import { portfolio } from '../data/portfolio.js'
import PortfolioCard from './PortfolioCard.jsx'

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <h2>Our Work</h2>
      <div className="section-body">
        <p>Examples of furventures work, shown as sample items.</p>
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio