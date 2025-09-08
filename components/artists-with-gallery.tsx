"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tattooLights from "./assets/tattoo-lights.jpg";
import StyledButton from "./styled-button";
import { getAllArtists } from "@/lib/artists-data";

export default function ArtistsWithGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const artists = getAllArtists();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      { threshold: 0.1 }
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
      <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
        {/* Background Image with fixed attachment */}
        <div className="absolute inset-0 w-full h-full">
          {isMobile ? (
            <Image
              src={tattooLights}
              alt="Background"
              fill
              className="object-cover"
              style={{
                filter: "brightness(0.6) contrast(1.3)",
                objectPosition: "center 40%",
              }}
              priority
            />
          ) : (
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: "center 40%",
                filter: "brightness(0.6) contrast(1.3)",
              }}
            />
          )}
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
        className="relative py-10 md:py-20 bg-black text-white"
      >
        <div className="container mx-auto px-6">
          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {artists.map((artist, index) => (
              <div key={artist.id} className="group">
                {/* Artist Card */}
                <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300 h-full flex flex-col">
                  {/* Artist Image */}
                  <div className="relative h-48 md:h-64 w-full overflow-hidden">
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
                      <Link href={`/artist/${artist.slug}`}>
                        <StyledButton size="sm" className="w-full">
                          VIEW GALLERY
                        </StyledButton>
                      </Link>
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
