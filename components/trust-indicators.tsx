"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Star, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "8+",
    label: "Years of Experience",
    description: "Professional tattoo artistry",
  },
  {
    icon: Users,
    value: "3,000+",
    label: "Happy Clients",
    description: "Tattoos completed",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Average Rating",
    description: "From 200+ reviews",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Sterile & Safe",
    description: "Medical-grade hygiene",
  },
];

export default function TrustIndicators() {
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
      id="trust"
      ref={sectionRef}
      className="py-16 md:py-24 bg-pgc-black"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 text-pgc-400" />
              <p className="text-3xl md:text-4xl font-bold mb-1 text-pgc-white">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-pgc-white mb-1">
                {stat.label}
              </p>
              <p className="text-xs md:text-sm text-pgc-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
