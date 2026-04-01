import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TrustIndicators from "@/components/trust-indicators";
import PortfolioShowcase from "@/components/portfolio-showcase";
import ProcessSection from "@/components/process-section";
import SocialProof from "@/components/social-proof";
import ArtistsWithGallery from "@/components/artists-with-gallery";
import CtaSection from "@/components/cta-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingCta from "@/components/floating-cta";

import "@/globalStyles/index.css";

export default function Home() {
  return (
    <main className="bg-pgc-black text-pgc-white">
      <Navigation />
      <HeroSection />
      <TrustIndicators />
      <PortfolioShowcase />
      <ProcessSection />
      <SocialProof />
      <ArtistsWithGallery />
      <CtaSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingCta />
    </main>
  );
}
