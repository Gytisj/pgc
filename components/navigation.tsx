"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import pgcImage from "./assets/pgc.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#artists", label: "Artists" },
  { href: "/#faq", label: "FAQ" },
  { href: "/booking", label: "Book Now" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.label === "Book Now" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-300 transition-colors text-sm tracking-wider"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-black`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-8 text-white hover:text-gray-300 transition-colors z-60 p-2"
        >
          <X className="w-8 h-8" />
        </button>

        <div
          className="flex flex-col items-center justify-center h-full space-y-8"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-white hover:text-gray-300 transition-all duration-300 tracking-wider hover:scale-110 ${
                link.label === "Book Now"
                  ? "bg-white text-black px-8 py-3 rounded-full text-xl font-bold hover:bg-gray-100 hover:text-black"
                  : "text-3xl font-light"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
