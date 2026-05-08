import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Pricing from '@/components/sections/Pricing'
import BentoGrid from '@/components/sections/BentoGrid'
import Industries from '@/components/sections/Industries'
import Clients from '@/components/sections/Clients'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="bg-background overflow-hidden">
      <Navbar />

      <Hero />

      <Stats />

      {/* Clients Logo Scrolling */}
      <Clients />

      <Services />

      <About />

      <Process />

      {/* <Pricing /> */}

      {/* Projects Showcase */}
      <Projects />

      <BentoGrid />

      <Industries />

      {/* <Testimonials /> */}

      <CTA />

      <Footer />
    </main>
  )
}