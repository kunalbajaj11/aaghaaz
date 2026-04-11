import { Seo } from './components/seo/Seo'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { EventCategories } from './components/sections/EventCategories'
import { FeaturedEvents } from './components/sections/FeaturedEvents'
import { Services } from './components/sections/Services'
import { Community } from './components/sections/Community'
import { Gallery } from './components/sections/Gallery'
import { Testimonials } from './components/sections/Testimonials'
import { PartnershipCTA } from './components/sections/PartnershipCTA'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Seo />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <EventCategories />
        <FeaturedEvents />
        <Services />
        <Community />
        <Gallery />
        <Testimonials />
        <PartnershipCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
