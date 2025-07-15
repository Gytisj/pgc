"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import pgcLogo from "./assets/pgc.jpg";

export default function HeroSection() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
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
        <div className="w-48 h-48 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-2xl">
            <Image
              src={pgcLogo}
              alt="Pain Game Club"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse" />
        </div>
        <h1 className="pgc-header text-4xl md:text-6xl font-bold mb-4 tracking-wider">
          Welcome to the game
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
