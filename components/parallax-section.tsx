"use client";

import { useEffect } from "react";
import tattooUpclose from "./assets/tattoo-upclose.jpg";
import Image from "next/image";
import pgcLogo from "./assets/pgc.jpg";

export default function ParallaxSection() {
  // Preload the image for better performance
  useEffect(() => {
    const img = document.createElement("img");
    img.src =
      typeof tattooUpclose === "string" ? tattooUpclose : tattooUpclose.src;
  }, []);

  const imageSrc =
    typeof tattooUpclose === "string" ? tattooUpclose : tattooUpclose.src;

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with fixed attachment */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: "center 30%",
            filter: "brightness(0.7) contrast(1.2)",
          }}
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h2 className="pgc-header text-4xl md:text-6xl font-bold tracking-wider mb-8">
            ART THAT SPEAKS
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Every line tells a story. Every shade carries meaning. Transform
            your vision into permanent art.
          </p>
          <div className="pt-8">
            <div className="inline-flex items-center space-x-4 bg-black/40 backdrop-blur-sm px-8 py-4 rounded-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={pgcLogo}
                  alt="pgc logo"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
              </div>
              <span className="text-lg font-semibold tracking-wider">
                PAIN GAME CLUB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-20 bg-white/20 transform rotate-45" />
      <div className="absolute bottom-1/4 right-10 w-2 h-20 bg-white/20 transform -rotate-45" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />
    </section>
  );
}
