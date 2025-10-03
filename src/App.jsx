import './fonts.css'
import { Hero } from './components/Hero'
import { Flavors } from './components/Flavors'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-orange-500/30 selection:text-white">
      <Hero />
      <Flavors />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default App
