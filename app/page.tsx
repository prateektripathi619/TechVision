import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TechShowcaseSection } from "@/components/sections/tech-showcase-section"
import { CtaSection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <FeaturesSection />
      <PortfolioSection />
      <TechShowcaseSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
