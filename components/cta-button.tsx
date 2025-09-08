"use client";

import { useEffect, useState } from "react";

export default function CtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contactSection = document.getElementById("contact");

      // Check if contact section is visible
      let isContactVisible = false;
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        isContactVisible =
          contactRect.top <= windowHeight && contactRect.bottom >= 0;
      }

      // Show CTA button when user scrolls past 20% of viewport height (out of hero) AND contact section is not visible
      setIsVisible(scrollPosition > windowHeight * 1 && !isContactVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("contact");
    if (appointmentSection) {
      const elementRect = appointmentSection.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const elementHeight = appointmentSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate the scroll position to center the element
      const scrollToPosition =
        absoluteElementTop - windowHeight / 2 + elementHeight / 2;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 -translate-x-1/2"
          : "opacity-0 translate-y-8 -translate-x-1/2 pointer-events-none"
      }`}
    >
      {/* Pulsing outer ring - 5 second intervals */}
      <div
        className="absolute inset-0 bg-white/30 rounded-full"
        style={{ animation: "ping-slow 5s ease-in-out infinite" }}
      />
      <div
        className="absolute inset-0 bg-white/20 rounded-full"
        style={{ animation: "pulse-slow 5s ease-in-out infinite" }}
      />

      <button
        onClick={scrollToAppointment}
        className="bg-white text-black font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300 tracking-wider group relative overflow-hidden hover:animate-none"
        style={{
          boxShadow:
            "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
          animation: "breathe-slow 5s ease-in-out infinite",
        }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

        {/* Button text with subtle animation */}
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
          BOOK APPOINTMENT
        </span>

        {/* Pulsing border */}
        <div
          className="absolute inset-0 rounded-full border-2 border-white/50 group-hover:border-gray-400 transition-colors duration-300"
          style={{ animation: "pulse-slow 5s ease-in-out infinite" }}
        />

        {/* Inner glow effect */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
      </button>

      <style jsx>{`
        @keyframes breathe-slow {
          0%,
          90%,
          100% {
            transform: scale(1);
          }
          5% {
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slow {
          0%,
          90%,
          100% {
            opacity: 1;
          }
          5% {
            opacity: 0.5;
          }
        }

        @keyframes ping-slow {
          0%,
          90%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          5% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
