  import Navbar from './components/Navbar'
  import Hero from './components/Hero'
  import Marquee from './components/Marquee'
  import SocialProof from './components/SocialProof'
  import Features from './components/Features'
  import Process from './components/Process'
  import Planes from './components/Planes'
  import FAQ from './components/FAQ'
  import FinalCTA from './components/FinalCTA'
  import Footer from './components/Footer'
  import About from './components/About'

  function App() {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <SocialProof />
          <Features />
          <Process />
          <About />
          <Planes />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    )
  }

  export default App
