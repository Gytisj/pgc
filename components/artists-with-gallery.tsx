"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllArtists } from "@/lib/artists-data";

export default function ArtistsWithGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const artists = getAllArtists();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <section
      id="artists"
      ref={sectionRef}
      className="py-16 md:py-24 bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4">
            OUR ARTISTS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            8 talented artists, each with their own unique style.
            Find the perfect match for your tattoo.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {artists.map((artist, index) => (
            <Link
              key={artist.id}
              href={`/artist/${artist.slug}`}
              className={`group block transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 h-full">
                {/* Artist Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">
                      {artist.specialization}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold">
                      {artist.name}
                    </h3>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-3 md:p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {artist.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-xs px-2 py-0.5 bg-gray-800 group-hover:bg-gray-700 rounded-full text-gray-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
