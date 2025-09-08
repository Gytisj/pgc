"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import pgcImage from "./assets/pgc.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on a non-home page (like artist pages)
  const isSubPage = pathname !== "/";

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
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wider">
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
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link
              href="/#about"
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
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
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 max-h-64" : "opacity-0 max-h-0"
        } overflow-hidden bg-black bg-opacity-95`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
