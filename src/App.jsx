import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import LanguagesSection from './components/LanguagesSection'
import PricingSection from './components/PricingSection'
import AboutSection from './components/AboutSection'
import HowItWorks from './components/HowItWorks'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <LanguagesSection />
        <PricingSection />
        <AboutSection />
        <HowItWorks />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
