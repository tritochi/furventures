import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import FursuitFriendly from './components/FursuitFriendly.jsx'
import FeaturedTreats from './components/FeaturedTreats.jsx'
import Gallery from './components/Gallery.jsx'
import Portfolio from './components/Portfolio.jsx'
import Pack from './components/Pack.jsx'
import EventPartners from './components/EventPartners.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import SplashOverlay from './components/SplashOverlay.jsx'
import ConfettiBurst from './components/ConfettiBurst.jsx'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showConfetti, setShowConfetti] = useState(true)
  const [theme, setTheme] = useState('warm')

  // Apply the selected theme to the <html> element (persists for the session).
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 2100)
    const confettiTimer = setTimeout(() => setShowConfetti(false), 3000)
    return () => {
      clearTimeout(splashTimer)
      clearTimeout(confettiTimer)
    }
  }, [])

  // Scroll-in reveal for sections.
  useEffect(() => {
    const targets = document.querySelectorAll('.section')
    const cleanup = () => {
      targets.forEach((el) => el.classList.remove('reveal', 'in-view'))
    }
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in-view'))
      return cleanup
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    targets.forEach((el) => {
      el.classList.add('reveal')
      io.observe(el)
    })
    return cleanup
  }, [])

  return (
    <div className="app">
      {showSplash && <SplashOverlay />}
      {showConfetti && <ConfettiBurst />}
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'warm' ? 'cool' : 'warm'))}
      />
      <main>
        <Hero />
        <Marquee />
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