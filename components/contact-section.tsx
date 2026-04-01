"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Instagram, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 bg-pgc-black-deep"
    >
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="pgc-header text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 tracking-wider uppercase text-pgc-white">
            Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div
              className={`space-y-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider text-pgc-white">
                  Get in Touch
                </h3>
                <p className="text-base text-pgc-300 mb-8 leading-relaxed">
                  Ready to start your tattoo journey? Book a consultation and
                  let&apos;s create something extraordinary together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-pgc-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pgc-400 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@paingameclub.lt"
                      className="text-pgc-white hover:text-pgc-300 transition-colors duration-300"
                    >
                      info@paingameclub.lt
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-pgc-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pgc-400 mb-1">
                      Location
                    </p>
                    <p className="text-pgc-300">
                      Algirdo g. 38, Vilnius, Lithuania 03806
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Instagram className="w-5 h-5 text-pgc-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pgc-400 mb-1">
                      Instagram
                    </p>
                    <a
                      href="https://instagram.com/pain_game_club"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pgc-white hover:text-pgc-300 transition-colors duration-300"
                    >
                      @pain_game_club
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-pgc-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pgc-400 mb-1">
                      Hours
                    </p>
                    <p className="text-pgc-300">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-pgc-900/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wider text-pgc-white">
                Quick Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-pgc-black border border-pgc-800 rounded-lg focus:border-pgc-white focus:outline-none transition-colors duration-300 text-pgc-white placeholder-pgc-700"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-pgc-black border border-pgc-800 rounded-lg focus:border-pgc-white focus:outline-none transition-colors duration-300 text-pgc-white placeholder-pgc-700"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full p-4 bg-pgc-black border border-pgc-800 rounded-lg focus:border-pgc-white focus:outline-none transition-colors duration-300 text-pgc-white placeholder-pgc-700 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-pgc-white text-pgc-black font-bold py-4 rounded-full uppercase tracking-wider hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
              <p className="text-pgc-400 text-xs mt-4 text-center">
                Or{" "}
                <Link
                  href="/booking"
                  className="text-pgc-white underline hover:text-pgc-300 transition-colors duration-300"
                >
                  book a full consultation
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
