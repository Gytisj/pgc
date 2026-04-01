"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import pgcLogo from "./assets/pgc.jpg";

export default function HeroSection() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [scrollButtonVisible, setScrollButtonVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollButtonVisible(window.scrollY < window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-pgc-black"
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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-2000 ${
          logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Logo */}
        <div className="mb-6">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-pgc-white rounded-full flex items-center justify-center shadow-2xl relative mx-auto">
            <Image
              src={pgcLogo}
              alt="Pain Game Club"
              width={120}
              height={120}
              className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse" />
          </div>
        </div>

        {/* Positioning */}
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-pgc-400 mb-3 font-semibold">
          Premium Tattoo Studio in Vilnius
        </p>

        {/* Value Proposition */}
        <h1 className="pgc-header text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wider text-pgc-white">
          Where Art Meets Skin
        </h1>

        <p className="text-base md:text-lg text-pgc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          8 professional artists. Thousands of stories turned into permanent art.
          Your vision, our craft.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/booking"
            className="bg-pgc-white text-pgc-black font-bold px-8 py-4 rounded-full text-base md:text-lg uppercase hover:bg-gray-100 hover:scale-105 transition-all duration-300 tracking-wider shadow-2xl"
            style={{
              boxShadow:
                "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
            }}
          >
            Book a Consultation
          </Link>
          <a
            href="#portfolio"
            className="border border-white/30 text-pgc-white px-8 py-4 rounded-full text-base md:text-lg uppercase hover:bg-white/10 transition-all duration-300 tracking-wider"
          >
            View Our Work
          </a>
        </div>

        {/* Reviews Widget */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-xs md:text-sm text-pgc-300">
            <span className="font-semibold text-pgc-white">5.0</span> from 200+
            reviews
          </span>
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
          onClick={() => {
            document
              .getElementById("trust")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center text-white/70 hover:text-pgc-white transition-colors group"
        >
          <span className="text-xs mb-2 tracking-[0.2em] uppercase font-semibold">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
}
