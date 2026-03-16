import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProducersSection } from "@/components/producers-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { SpotifySection } from "@/components/spotify-section"
import { UnreleasedSection } from "@/components/unreleased-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProducersSection />
      <ServicesSection />
      <GallerySection />
      <SpotifySection />
      <UnreleasedSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
