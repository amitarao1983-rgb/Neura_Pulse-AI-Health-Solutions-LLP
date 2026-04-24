import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { IndustriesSection } from './components/IndustriesSection'
import { ProductsSection } from './components/ProductsSection'
import { TechSection, ValueSection, VisionSection } from './components/ValueTechVision'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <IndustriesSection />
        <ValueSection />
        <TechSection />
        <VisionSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
