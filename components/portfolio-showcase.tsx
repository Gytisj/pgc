"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tattooUpclose from "./assets/tattoo-upclose.jpg";
import tattooLights from "./assets/tattoo-lights.jpg";

const categories = [
  "All",
  "Realism",
  "Japanese",
  "Fine Line",
  "Watercolor",
  "Ornamental",
  "Lettering",
];

const portfolioItems = [
  { image: tattooUpclose, category: "Realism", artist: "Alex Rivera" },
  { image: tattooLights, category: "Japanese", artist: "Maya Chen" },
  { image: tattooUpclose, category: "Fine Line", artist: "Marcus Johnson" },
  { image: tattooLights, category: "Watercolor", artist: "Sofia Andersson" },
  { image: tattooUpclose, category: "Ornamental", artist: "Isabella Santos" },
  { image: tattooLights, category: "Lettering", artist: "Diego Martinez" },
  { image: tattooUpclose, category: "Realism", artist: "Alex Rivera" },
  { image: tattooLights, category: "Fine Line", artist: "Emma Thompson" },
];

export default function PortfolioShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-16 md:py-24 bg-pgc-black-deep"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4 uppercase text-pgc-white">
            Our Best Work
          </h2>
          <p className="text-pgc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every piece tells a unique story. Browse our portfolio to find your
            style.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-pgc-white text-pgc-black"
                  : "bg-pgc-800 text-pgc-300 hover:bg-pgc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">
          {filtered.map((item, index) => (
            <div
              key={index}
              className={`relative aspect-square group overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <Image
                src={item.image}
                alt={`${item.category} tattoo by ${item.artist}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 md:p-4">
                  <p className="text-pgc-white text-sm font-bold uppercase tracking-wider">
                    {item.category}
                  </p>
                  <p className="text-pgc-400 text-xs">{item.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/#artists"
            className="inline-block border border-white/30 text-pgc-white px-8 py-3 rounded-full uppercase tracking-wider text-sm font-bold hover:bg-white/10 transition-all duration-300"
          >
            View All Artists & Portfolios
          </Link>
        </div>
      </div>
    </section>
  );
}
