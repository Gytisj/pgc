"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/artists-data";

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  const next = () =>
    setCurrentIndex((currentIndex + 1) % testimonials.length);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-16 md:py-24 bg-pgc-black-deep"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4 uppercase text-pgc-white">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-pgc-400 text-sm">200+ five-star reviews</p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className={`bg-pgc-900/50 backdrop-blur-sm rounded-lg p-6 md:p-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-pgc-300 leading-relaxed mb-4 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-pgc-800 pt-4">
                <p className="font-semibold text-pgc-white text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-pgc-400">
                  {testimonial.tattooStyle} by {testimonial.artistName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card with nav */}
        <div className="md:hidden">
          <div
            className={`bg-pgc-900/50 backdrop-blur-sm rounded-lg p-6 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex mb-3">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-pgc-300 leading-relaxed mb-4">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="border-t border-pgc-800 pt-4">
              <p className="font-semibold text-pgc-white">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-xs text-pgc-400">
                {testimonials[currentIndex].tattooStyle} by{" "}
                {testimonials[currentIndex].artistName}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-pgc-800 flex items-center justify-center hover:bg-pgc-700 transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-pgc-white" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-pgc-white scale-125" : "bg-pgc-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-pgc-800 flex items-center justify-center hover:bg-pgc-700 transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 text-pgc-white" />
            </button>
          </div>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-pgc-white scale-125" : "bg-pgc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
