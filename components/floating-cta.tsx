"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/booking"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-pgc-white text-pgc-black font-bold px-5 py-3 rounded-full hover:scale-105 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        boxShadow:
          "0 0 20px rgba(255, 255, 255, 0.2), 0 4px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Calendar className="w-4 h-4" />
      <span className="text-sm uppercase tracking-wider hidden sm:inline font-bold">
        Book Now
      </span>
      <span className="text-sm uppercase tracking-wider sm:hidden font-bold">
        Book
      </span>
    </Link>
  );
}
