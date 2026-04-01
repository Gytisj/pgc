"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllArtists } from "@/lib/artists-data";

export default function BookingForm() {
  const artists = getAllArtists();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-pgc-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-pgc-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4 uppercase text-pgc-white">
            Thank You!
          </h1>
          <p className="text-pgc-cream text-base md:text-lg mb-8 leading-relaxed">
            We&apos;ve received your consultation request. We&apos;ll get back
            to you within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-block border border-white/30 text-pgc-white px-8 py-3 rounded-full uppercase tracking-wider text-sm font-bold hover:bg-white/10 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full p-4 bg-pgc-black-deep border border-pgc-brown/50 rounded-lg focus:border-pgc-white focus:outline-none transition-colors duration-300 text-pgc-white placeholder-pgc-brown";

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4 uppercase text-pgc-white">
            Book a Consultation
          </h1>
          <p className="text-pgc-cream/60 text-base md:text-lg leading-relaxed">
            Tell us about your tattoo idea and we&apos;ll match you with the
            perfect artist. Free consultation, no commitment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.2em] text-pgc-cream/60">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="Full name"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.2em] text-pgc-cream/60">
              Email *
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.2em] text-pgc-cream/60">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+370..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.2em] text-pgc-cream/60">
              Preferred Artist
            </label>
            <select className={`${inputClass} appearance-none`}>
              <option value="">No preference</option>
              {artists.map((artist) => (
                <option key={artist.id} value={artist.slug}>
                  {artist.name} — {artist.specialization}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.2em] text-pgc-cream/60">
              Placement
            </label>
            <input
              type="text"
              placeholder="e.g., forearm, back, shoulder..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.2em] text-pgc-cream/60">
              Approximate Size
            </label>
            <select className={`${inputClass} appearance-none`}>
              <option value="">Select size</option>
              <option value="small">Small (up to 5cm)</option>
              <option value="medium">Medium (5-15cm)</option>
              <option value="large">Large (15-30cm)</option>
              <option value="xl">Extra Large / Sleeve</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.2em] text-pgc-cream/60">
              Describe Your Tattoo Idea *
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your idea — style, references, meaning..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <p className="text-pgc-cream/60 text-xs">
            Have reference images? Send them to{" "}
            <a
              href="mailto:info@paingameclub.lt"
              className="text-pgc-white hover:text-pgc-cream underline transition-colors duration-300"
            >
              info@paingameclub.lt
            </a>{" "}
            after submitting.
          </p>

          <button
            type="submit"
            className="w-full bg-pgc-white text-pgc-black font-bold py-4 md:py-5 rounded-full uppercase tracking-wider text-base md:text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            style={{
              boxShadow:
                "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
            }}
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
