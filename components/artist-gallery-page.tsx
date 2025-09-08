"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import StyledButton from "./styled-button";
import { Artist } from "@/lib/artists-data";
import Navigation from "./navigation";
import Footer from "./footer";

interface ArtistGalleryPageProps {
  artist: Artist;
}

export default function ArtistGalleryPage({ artist }: ArtistGalleryPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    // Restore body scroll when lightbox is closed
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % artist.galleryImages.length);
    }
  }, [selectedImage, artist.galleryImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + artist.galleryImages.length) %
          artist.galleryImages.length
      );
    }
  }, [selectedImage, artist.galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeLightbox]);

  // Touch swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && selectedImage !== null) {
      nextImage();
    }
    if (isRightSwipe && selectedImage !== null) {
      prevImage();
    }
  };

  // Cleanup effect to ensure body scroll is restored on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header Section */}
      <section
        ref={sectionRef}
        className={`relative py-10 md:py-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-50"
        }`}
      >
        <Navigation />
        {/* Back Button */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 artist-gallery-back-button z-40 pt-2.5 pl-2.5 md:pt-0 md:pl-0">
          <Link
            href="/#artists"
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm tracking-wider">BACK TO ARTISTS</span>
          </Link>
        </div>

        <div className="container mx-auto px-6 pt-10 md:pt-20">
          {/* Artist Image */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto mb-6 md:mb-8 relative">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover rounded-full shadow-2xl"
                style={{
                  boxShadow:
                    "0 0 40px rgba(255, 255, 255, 0.2), 0 0 80px rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-white/20" />
            </div>

            <h1 className="pgc-header text-2xl md:text-4xl lg:text-6xl font-bold mb-4 tracking-wider">
              {artist.name}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              {artist.description}
            </p>
          </div>

          {/* Artist Bio Section */}
          <div
            className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center tracking-wider">
                WORDS FROM THE ARTIST
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 text-center">
                {artist.bio}
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="pgc-header text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider">
              GALLERY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {artist.galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${artist.name} work ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16">
              <Link href="/#contact">
                <StyledButton size="lg">
                  BOOK WITH {artist.name.toUpperCase()}
                </StyledButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-60 p-3 md:p-2 bg-black/50 rounded-full"
          >
            <X className="w-8 h-8 md:w-8 md:h-8" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-6 text-white hover:text-gray-300 transition-colors z-60 p-3 md:p-2 bg-black/50 rounded-full"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-6 text-white hover:text-gray-300 transition-colors z-60 p-3 md:p-2 bg-black/50 rounded-full"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={artist.galleryImages[selectedImage]}
              alt={`${artist.name} work ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
            <span className="text-lg">
              {selectedImage + 1} / {artist.galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
