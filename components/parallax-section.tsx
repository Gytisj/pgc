"use client";

import { useEffect, useState } from "react";
import tattooUpclose from "./assets/tattoo-upclose.jpg";
import Image from "next/image";
import pgcLogo from "./assets/pgc.jpg";

export default function ParallaxSection() {
  const [isMobile, setIsMobile] = useState(false);

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

  // Preload the image for better performance
  useEffect(() => {
    const img = document.createElement("img");
    img.src =
      typeof tattooUpclose === "string" ? tattooUpclose : tattooUpclose.src;
  }, []);

  const imageSrc =
    typeof tattooUpclose === "string" ? tattooUpclose : tattooUpclose.src;

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Background Image with fixed attachment */}
      <div className="absolute inset-0 w-full h-full">
        {isMobile ? (
          <Image
            src={tattooUpclose}
            alt="Background"
            fill
            className="object-cover"
            style={{
              filter: "brightness(0.7) contrast(1.2)",
              objectPosition: "center 30%",
            }}
            priority
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: "center 30%",
              filter: "brightness(0.7) contrast(1.2)",
            }}
          />
        )}
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-6">
          <h2 className="pgc-header text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider mb-6 md:mb-8">
            ART THAT SPEAKS
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
            Every line tells a story. Every shade carries meaning. Transform
            your vision into permanent art.
          </p>
          <div className="pt-6 md:pt-8">
            <div className="inline-flex items-center space-x-3 md:space-x-4 bg-black/40 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={pgcLogo}
                  alt="pgc logo"
                  width={75}
                  height={75}
                  className="rounded-full w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <span className="text-base md:text-lg font-semibold tracking-wider">
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
