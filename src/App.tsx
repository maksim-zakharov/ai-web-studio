import { ContactSection } from "@/components/landing/ContactSection"
import { FaqSection } from "@/components/landing/FaqSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { ProcessSection } from "@/components/landing/ProcessSection"
import { ServicesSection } from "@/components/landing/ServicesSection"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { WhySection } from "@/components/landing/WhySection"

/**
 * Корневая страница лендинга AI Web Studio.
 */
export function App() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
