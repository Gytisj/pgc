"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import pgcLogo from "./assets/pgc.jpg";

export default function HeroSection() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [scrollButtonVisible, setScrollButtonVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Hide scroll button when user scrolls more than 10% of viewport height
      setScrollButtonVisible(scrollPosition < windowHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      const elementRect = appointmentSection.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const elementHeight = appointmentSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate the scroll position to center the element
      const scrollToPosition =
        absoluteElementTop - windowHeight / 2 + elementHeight / 2;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="opacity-40"
          src="https://www.youtube.com/embed/QLMqfKPOL6w?autoplay=1&mute=1&loop=1&playlist=QLMqfKPOL6w&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=10"
          title="Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120vw",
            height: "120vh",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Animated Logo */}
      <div
        className={`relative z-10 text-center transition-all duration-2000 ${
          logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <div className="space-y-8 text-center">
          <div
            className={`transition-all duration-1000 ${
              logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } mb-8`}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl relative mx-auto">
              <Image
                src={pgcLogo}
                alt="Pain Game Club"
                width={120}
                height={120}
                className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse" />
            </div>
          </div>
          <h1 className="pgc-header text-3xl md:text-4xl lg:text-6xl font-bold mb-4 tracking-wider px-4">
            Welcome to the game
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500 ${
          scrollButtonVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2 tracking-wider">SCROLL</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
}
