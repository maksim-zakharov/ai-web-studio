import { AboutSection } from "@/components/landing/AboutSection"
import { CalculatorSection } from "@/components/landing/CalculatorSection"
import { CasesSection } from "@/components/landing/CasesSection"
import { ContactSection } from "@/components/landing/ContactSection"
import { FaqSection } from "@/components/landing/FaqSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { ProcessSection } from "@/components/landing/ProcessSection"
import { ServicesSection } from "@/components/landing/ServicesSection"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { TrustSection } from "@/components/landing/TrustSection"
import { WhySection } from "@/components/landing/WhySection"
import { WorkflowSection } from "@/components/landing/WorkflowSection"

/**
 * Коммерческий лендинг: одна indexable страница с якорными секциями.
 */
export function App() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <WhySection />
        <WorkflowSection />
        <CasesSection />
        <ProcessSection />
        <CalculatorSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
