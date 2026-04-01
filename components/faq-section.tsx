"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a tattoo cost?",
    answer:
      "Pricing depends on size, detail, placement, and style. Small tattoos start from €80. We provide exact quotes during your free consultation — no surprises.",
  },
  {
    question: "Does it hurt?",
    answer:
      "Pain varies by placement and personal tolerance. Most clients describe it as manageable. Our artists work at a comfortable pace and we do everything to make the experience as smooth as possible.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "Get a good night's sleep, eat a meal beforehand, stay hydrated, and avoid alcohol 24 hours before your session. Wear comfortable clothing that allows easy access to the tattoo area.",
  },
  {
    question: "How long does a session take?",
    answer:
      "Small tattoos can take 1-2 hours. Larger pieces may require multiple sessions of 3-5 hours. We'll give you a time estimate during your consultation.",
  },
  {
    question: "What about aftercare?",
    answer:
      "We provide detailed aftercare instructions after every session. Generally: keep it clean, moisturized, and out of direct sunlight. Healing takes 2-4 weeks. We offer a free touch-up if needed.",
  },
  {
    question: "Can I bring my own design?",
    answer:
      "Absolutely! Bring references, sketches, photos — anything that communicates your vision. Our artists will work with you to refine the design for the best possible result on skin.",
  },
  {
    question: "Do you do cover-ups?",
    answer:
      "Yes! Several of our artists specialize in cover-ups. Book a consultation so we can assess the existing tattoo and discuss the best approach.",
  },
  {
    question: "What safety and hygiene measures do you follow?",
    answer:
      "We use single-use needles, medical-grade sterilization, and disposable supplies. Our studio exceeds all Lithuanian health regulations. Your safety is our top priority.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base md:text-lg font-semibold pr-4 group-hover:text-gray-300 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="faq"
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
            FAQ
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before your visit.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
