"use client";

import { useEffect, useRef, useState } from "react";
import StyledButton from "./styled-button";

export default function AppointmentSection() {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-10 md:py-20 bg-black text-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-50"
      }`}
      id="appointment"
    >
      <div className="container mx-auto px-6">
        {/* Make An Appointment Button */}
        <div className="text-center mb-8 md:mb-16">
          <StyledButton
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            MAKE AN APPOINTMENT
          </StyledButton>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Location Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-3xl font-bold mb-8 tracking-wider">LOCATION</h3>
            <div className="space-y-4">
              <div className="text-lg leading-relaxed">
                <p className="font-semibold">Algirdo g. 38</p>
                <p>Vilnius, Lithuania 03806</p>
              </div>
            </div>
          </div>

          {/* Contact Us Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-3xl font-bold mb-8 tracking-wider">
              CONTACT US
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <h4 className="text-lg font-semibold mb-2 underline">EMAIL</h4>
                <p className="text-lg">info@paingameclub.lt</p>
              </div>

              {/* Text */}
              <div>
                <h4 className="text-lg font-semibold mb-2 underline">
                  Instagram
                </h4>
                <p className="text-lg">@pain_game_club</p>
              </div>
            </div>
          </div>

          {/* Additional Contact Info Column */}
          {/* Hours of Operation */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-3xl font-bold mb-6 tracking-wider">
              HOURS OF
              <br />
              OPERATION
            </h3>
            <div className="space-y-2 text-lg">
              <p>10AM TO 8PM | MONDAY -</p>
              <p>SATURDAY</p>
              <p className="mt-4">CLOSED SUNDAYS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
