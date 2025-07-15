"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Instagram, Clock } from "lucide-react";
import pgcLogo from "./assets/pgc.jpg";
import Image from "next/image";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20"
    >
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="pgc-header text-5xl md:text-7xl font-bold text-center mb-16 tracking-wider">
            CONTACT
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <p className="text-lg text-gray-300 mb-8">
                  Ready to start your tattoo journey? Book a consultation and
                  let&apos;s create something extraordinary together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@paingameclub.lt"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      info@paingameclub.lt
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">
                      Algirdo g. 38, Vilnius, Lithuania 03806
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Instagram className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a
                      href="https://instagram.com/pain_game_club"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      @pain_game_club
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-300">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6">Book Consultation</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe your tattoo idea..."
                    rows={4}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-40 pt-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Image
                src={pgcLogo}
                alt="pgc logo"
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <span className="tracking-wider">Pain game club</span>
          </div>
          <p className="text-gray-400">
            © 2024 Pain Game Club. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
