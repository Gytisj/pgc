"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import pgcImage from "./assets/pgc.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold tracking-wider">
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Image
                src={pgcImage}
                alt="Pain Game Club"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
