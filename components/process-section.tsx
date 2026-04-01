"use client";

import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  MessageSquare,
  Palette,
  Pen,
  Heart,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Your Idea",
    description: "Share your vision — a sketch, a photo, or just a concept. We'll work with anything.",
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Meet your artist, discuss placement, size, style, and get an accurate quote.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Your artist creates a unique design tailored to you. Revisions until it's perfect.",
  },
  {
    icon: Pen,
    title: "Tattoo Session",
    description: "Relax in our comfortable studio while your art comes to life. Medical-grade hygiene guaranteed.",
  },
  {
    icon: Heart,
    title: "Aftercare",
    description: "Detailed healing instructions and a free touch-up session to ensure perfect results.",
  },
];

export default function ProcessSection() {
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
      id="process"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From first idea to healed tattoo — here&apos;s what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gray-700" />

            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center text-center w-1/5 px-2 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4 relative z-10 shadow-lg">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold mb-2 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-start gap-4 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
