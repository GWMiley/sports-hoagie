import Nav from './components/Nav'
import Masthead from './components/Masthead'
import DateBar from './components/DateBar'
import Hero from './components/Hero'
import Columns from './components/Columns'
import Podcast from './components/Podcast'
import Scoreboard from './components/Scoreboard'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Masthead />
      <DateBar />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
        <Hero />
        <Columns />
        <Podcast />
        <Scoreboard />
        <About />
      </div>
      <Footer />
    </main>
  )
}