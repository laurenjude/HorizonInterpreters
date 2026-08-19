import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustLogos from './components/TrustLogos'
import ServicesSection from './components/ServicesSection'
import LanguagesSection from './components/LanguagesSection'
import HowItWorks from './components/HowItWorks'
import PricingSection from './components/PricingSection'
import Testimonials from './components/Testimonials'
import Accreditations from './components/Accreditations'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        {/* trust before any selling */}
        <TrustLogos />
        <ServicesSection />
        <LanguagesSection />
        {/* process before pricing: explain the service, then ask for money */}
        <HowItWorks />
        <PricingSection />
        <Testimonials />
        <Accreditations />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
