"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import tattooUpclose from "./assets/tattoo-lights.jpg";
import pgcLogo from "./assets/pgc.jpg";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Preload the parallax image for better performance
  useEffect(() => {
    const img = document.createElement("img");
    img.src =
      typeof tattooUpclose === "string" ? tattooUpclose : tattooUpclose.src;
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
    typeof tattooUpclose === "string" ? tattooUpclose : tattooUpclose.src;

  return (
    <>
      {/* Parallax Header Section */}
      <section
        className="relative h-[400px] overflow-hidden flex items-center justify-center"
        id="about"
      >
        {/* Background Image with fixed attachment */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: "center 60%",
              filter: "brightness(0.6) contrast(1.3)",
            }}
          />
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/50" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center text-white">
          <h2 className="pgc-header text-5xl md:text-7xl font-bold tracking-wider">
            ABOUT
          </h2>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-16 bg-white/20 transform rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-2 h-16 bg-white/20 transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />
      </section>

      {/* About Content Section */}
      <section
        ref={sectionRef}
        className={`relative py-20 bg-black text-white transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-50"
        }`}
      >
        <div className="relative min-h-[400px] md:min-h-[600px]">
          {/* Text content container - responsive layout */}
          <div className="container mx-auto px-6">
            <div className="md:h-[600px] md:flex md:items-center">
              <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-300">
                    `Pain Game Club isn&apos;t just about tattoos—it&apos;s
                    about transforming stories into art. Every design tells a
                    unique tale, crafted with precision and passion.`
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    We believe in the power of permanent art to express
                    identity, commemorate moments, and create lasting
                    connections between artist and canvas.
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
          </div>

          {/* Image container - responsive positioning */}
          <div className="w-full h-64 md:absolute md:top-0 md:right-0 md:w-1/2 md:h-[600px] mt-8 md:mt-0 rounded md:rounded-none">
            <Image
              src={tattooUpclose}
              alt="Tattoo work"
              fill
              className="object-cover rounded md:rounded-none"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
