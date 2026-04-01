"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowLeft, Star } from "lucide-react";
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
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
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
    if (distance > minSwipeDistance && selectedImage !== null) nextImage();
    if (distance < -minSwipeDistance && selectedImage !== null) prevImage();
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      <section
        ref={sectionRef}
        className={`relative pt-24 md:pt-32 pb-16 md:pb-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-50"
        }`}
      >
        {/* Back Button */}
        <div className="container mx-auto px-6 mb-8">
          <Link
            href="/#artists"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm tracking-wider">BACK TO ARTISTS</span>
          </Link>
        </div>

        <div className="container mx-auto px-6">
          {/* Artist Header */}
          <div
            className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Artist Image */}
            <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 relative">
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

            {/* Artist Info */}
            <div className="text-center md:text-left flex-1">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
                {artist.specialization}
              </p>
              <h1 className="pgc-header text-3xl md:text-5xl font-bold mb-4 tracking-wider">
                {artist.name}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {artist.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-6">
                {artist.description}
              </p>

              {artist.instagram && (
                <p className="text-gray-400 text-sm mb-6">
                  Instagram:{" "}
                  <span className="text-white">{artist.instagram}</span>
                </p>
              )}

              <Link href="/booking">
                <StyledButton size="md">
                  BOOK WITH {artist.name.split(" ")[0].toUpperCase()}
                </StyledButton>
              </Link>
            </div>
          </div>

          {/* Bio */}
          <div
            className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center tracking-wider">
                ABOUT THE ARTIST
              </h2>
              <p className="text-gray-300 leading-relaxed text-center">
                {artist.bio}
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="pgc-header text-2xl md:text-4xl font-bold text-center mb-10 tracking-wider">
              PORTFOLIO
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
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
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          {artist.reviews.length > 0 && (
            <div
              className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h2 className="pgc-header text-2xl md:text-4xl font-bold text-center mb-10 tracking-wider">
                CLIENT REVIEWS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {artist.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6"
                  >
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="font-semibold text-white text-sm">
                      {review.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link href="/booking">
              <StyledButton size="lg">
                BOOK A CONSULTATION
              </StyledButton>
            </Link>
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-60 p-3 md:p-2 bg-black/50 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

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
