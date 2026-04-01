"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pgcLogo from "./assets/pgc.jpg";

export default function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div
        className={`container mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-20 h-20 bg-pgc-white rounded-full flex items-center justify-center mx-auto mb-8">
          <Image
            src={pgcLogo}
            alt="Pain Game Club"
            width={60}
            height={60}
            className="rounded-full w-16 h-16 object-cover"
          />
        </div>

        <h2 className="pgc-header text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 uppercase text-pgc-white">
          Ready to Start?
        </h2>
        <p className="text-pgc-cream text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a free consultation. Tell us your idea and we&apos;ll match you
          with the perfect artist.
        </p>

        <Link
          href="/booking"
          className="inline-block bg-pgc-white text-pgc-black font-bold px-10 py-4 md:px-14 md:py-5 rounded-full text-base md:text-xl uppercase hover:bg-gray-100 hover:scale-105 transition-all duration-300 tracking-wider shadow-2xl"
          style={{
            boxShadow:
              "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
          }}
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
