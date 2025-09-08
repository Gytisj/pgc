import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AppointmentSection from "@/components/appointment-section";
import AboutSection from "@/components/about-section";
import ArtistsWithGallery from "@/components/artists-with-gallery";
import ContactSection from "@/components/contact-section";
import ParallaxSection from "@/components/parallax-section";
import CtaButton from "@/components/cta-button";
import Footer from "@/components/footer";

import "@/globalStyles/index.css";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <HeroSection />
      <AppointmentSection />
      <AboutSection />
      <ArtistsWithGallery />
      <ParallaxSection />
      <ContactSection />
      <Footer />

      {/* Fixed CTA Button */}
      <CtaButton />
    </main>
  );
}
