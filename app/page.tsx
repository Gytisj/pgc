import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ParallaxSection from "@/components/parallax-section";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ParallaxSection />
      <ContactSection />
    </main>
  );
}
