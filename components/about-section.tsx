"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tattooUpclose from "./assets/tattoo-lights.jpg";
import pgcLogo from "./assets/pgc.jpg";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Gallery images - using the same image multiple times
  const images = [
    tattooUpclose,
    tattooUpclose,
    tattooUpclose,
    tattooUpclose,
    tattooUpclose,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative py-20 bg-black text-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="relative">
        <h2 className="pgc-header text-5xl md:text-7xl font-bold text-center mb-8 tracking-wider">
          ABOUT
        </h2>

        <div className="relative min-h-[600px] mb-20">
          {/* Text content container - constrained to container width */}
          <div className="container mx-auto px-6 h-[600px] flex items-center">
            <div className="w-1/2 pr-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                  Pain Game Club isn't just about tattoos—it's about
                  transforming stories into art. Every design tells a unique
                  tale, crafted with precision and passion.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  We believe in the power of permanent art to express identity,
                  commemorate moments, and create lasting connections between
                  artist and canvas.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={pgcLogo}
                      alt="Pain Game Club"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Pain Game Club</h3>
                    <p className="text-gray-400">Where art meets skin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image container - breaks out to right edge of viewport */}
          <div className="absolute top-0 right-0 w-1/2 h-[600px] rounded">
            <Image
              src={tattooUpclose}
              alt="Tattoo work"
              fill
              className="object-cover"
              style={{ objectPosition: "right center" }}
            />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto px-6 mt-20">
          <h3 className="pgc-header text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider">
            OUR WORK
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Main slider container */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 relative"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail strip */}
            <div className="flex justify-center mt-8 space-x-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-opacity duration-200 ${
                    index === currentSlide
                      ? "opacity-100 ring-2 ring-white"
                      : "opacity-60"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
