"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tattooLights from "./assets/tattoo-lights.jpg";
import StyledButton from "./styled-button";
import { getAllArtists } from "@/lib/artists-data";

export default function ArtistsWithGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentDot, setCurrentDot] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
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

  // Check scroll position to show/hide arrows and update dots
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

      // Calculate current dot based on scroll position
      const cardWidth = 320 + 16; // w-80 (320px) + gap-4 (16px)
      const currentIndex = Math.round(scrollLeft / cardWidth);
      setCurrentDot(currentIndex);
    }
  };

  // Carousel navigation functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 320 + 16; // w-80 (320px) + gap-4 (16px)
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
      // Check scroll position after animation
      setTimeout(checkScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 320 + 16; // w-80 (320px) + gap-4 (16px)
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
      // Check scroll position after animation
      setTimeout(checkScrollPosition, 300);
    }
  };

  // Scroll to specific dot position
  const scrollToDot = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 320 + 16; // w-80 (320px) + gap-4 (16px)
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      // Check scroll position after animation
      setTimeout(checkScrollPosition, 300);
    }
  };

  // Set up scroll listener for carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollPosition);
      // Initial check
      checkScrollPosition();

      return () => {
        carousel.removeEventListener("scroll", checkScrollPosition);
      };
    }
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
      <section
        id="artists"
        className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center"
      >
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
        ref={sectionRef}
        className="relative py-10 md:py-20 bg-black text-white"
      >
        <div className="container mx-auto px-6">
          {/* Artists Grid - Desktop / Carousel - Mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
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

          {/* Mobile Carousel */}
          <div className="md:hidden">
            {/* Scroll hint */}
            {/* <div className="text-center mb-4">
              <p className="text-gray-400 text-sm">
                ← Swipe to see all artists →
              </p>
            </div> */}

            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-4 pb-4 pl-6 pr-6 scrollbar-hide snap-x snap-mandatory"
            >
              {artists.map((artist, index) => (
                <div
                  key={artist.id}
                  className="flex-none w-80 snap-start group"
                >
                  {/* Artist Card */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300 h-full flex flex-col">
                    {/* Artist Image */}
                    <div className="relative h-48 w-full overflow-hidden">
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

            {/* Navigation Arrows Below Carousel */}
            <div className="flex justify-between items-center gap-6 mt-8">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
                  canScrollLeft
                    ? "bg-white text-black hover:bg-gray-100 hover:scale-110 shadow-xl"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Scroll Indicator Dots */}
              <div className="flex space-x-1">
                {artists.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToDot(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      currentDot === index
                        ? "bg-white scale-125"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
                  canScrollRight
                    ? "bg-white text-black hover:bg-gray-100 hover:scale-110 shadow-xl"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
