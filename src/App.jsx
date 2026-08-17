import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import FursuitFriendly from './components/FursuitFriendly.jsx'
import FeaturedTreats from './components/FeaturedTreats.jsx'
import Gallery from './components/Gallery.jsx'
import Portfolio from './components/Portfolio.jsx'
import Pack from './components/Pack.jsx'
import EventPartners from './components/EventPartners.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <FursuitFriendly />
        <FeaturedTreats />
        <Gallery />
        <Portfolio />
        <Pack />
        <EventPartners />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App