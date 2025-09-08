"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import tattooUpclose from "./assets/tattoo-upclose.jpg";
import tattooLights from "./assets/tattoo-lights.jpg";
import StyledButton from "./styled-button";

// Mock artist data
const mockArtists = [
  {
    id: 1,
    name: "Alex Rivera",
    description:
      "Specializing in black and grey realism with over 8 years of experience. Known for intricate portrait work and detailed shading techniques.",
    image: tattooUpclose,
  },
  {
    id: 2,
    name: "Maya Chen",
    description:
      "Traditional Japanese and neo-traditional artist. Expert in bold lines, vibrant colors, and mythological creature designs.",
    image: tattooUpclose,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    description:
      "Fine line and minimalist tattoo specialist. Creates delicate, precise designs with a focus on geometric patterns and nature motifs.",
    image: tattooUpclose,
  },
  {
    id: 4,
    name: "Sofia Andersson",
    description:
      "Watercolor and abstract style expert. Brings paintings to life on skin with flowing colors and artistic brush stroke effects.",
    image: tattooUpclose,
  },
  {
    id: 5,
    name: "Diego Martinez",
    description:
      "Chicano and lettering artist with 10+ years experience. Specializes in script work, portraits, and cultural heritage pieces.",
    image: tattooUpclose,
  },
  {
    id: 6,
    name: "Emma Thompson",
    description:
      "Botanical and floral design specialist. Creates stunning nature-inspired pieces with incredible attention to organic detail.",
    image: tattooUpclose,
  },
  {
    id: 7,
    name: "Kai Nakamura",
    description:
      "Contemporary and surreal tattoo artist. Blends modern art techniques with traditional tattooing for unique, eye-catching designs.",
    image: tattooUpclose,
  },
  {
    id: 8,
    name: "Isabella Santos",
    description:
      "Ornamental and mandala expert. Creates intricate, symmetrical designs that flow beautifully with body contours and movement.",
    image: tattooUpclose,
  },
];

export default function ArtistsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Preload the parallax image for better performance
  useEffect(() => {
    const img = document.createElement("img");
    img.src =
      typeof tattooLights === "string" ? tattooLights : tattooLights.src;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const imageSrc =
    typeof tattooLights === "string" ? tattooLights : tattooLights.src;

  return (
    <>
      {/* Parallax Header Section */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
        {/* Background Image with fixed attachment */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: "center 40%",
              filter: "brightness(0.6) contrast(1.3)",
            }}
          />
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/50" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center text-white">
          <h2 className="pgc-header text-5xl md:text-7xl font-bold tracking-wider">
            ARTISTS
          </h2>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-16 bg-white/20 transform rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-2 h-16 bg-white/20 transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />
      </section>

      {/* Artists Grid Section */}
      <section
        id="artists"
        ref={sectionRef}
        className={`relative py-20 bg-black text-white transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-50"
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mockArtists.map((artist, index) => (
              <div
                key={artist.id}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Artist Card */}
                <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300 h-full flex flex-col">
                  {/* Artist Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* View Gallery Button */}
                    <div className="mb-4">
                      <StyledButton size="sm" className="w-full">
                        VIEW GALLERY
                      </StyledButton>
                    </div>

                    {/* Artist Name */}
                    <h3 className="text-xl font-bold mb-3 text-center">
                      {artist.name}
                    </h3>

                    {/* Artist Description */}
                    <p className="text-gray-300 text-sm leading-relaxed flex-1">
                      {artist.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
