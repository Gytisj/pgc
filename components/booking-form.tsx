"use client";

import { useState } from "react";
import { getAllArtists } from "@/lib/artists-data";
import StyledButton from "./styled-button";

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
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-black"
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
          <h1 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4">
            THANK YOU!
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            We&apos;ve received your consultation request. We&apos;ll get back to you
            within 24 hours.
          </p>
          <a
            href="/"
            className="inline-block border border-white/30 text-white px-8 py-3 rounded-full tracking-wider hover:bg-white/10 transition-all duration-300"
          >
            BACK TO HOME
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="pgc-header text-3xl md:text-5xl font-bold tracking-wider mb-4">
            BOOK A CONSULTATION
          </h1>
          <p className="text-gray-400 text-lg">
            Tell us about your tattoo idea and we&apos;ll match you with the
            perfect artist. Free consultation, no commitment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wider">
              YOUR NAME *
            </label>
            <input
              type="text"
              required
              placeholder="Full name"
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wider">
              EMAIL *
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wider">
              PHONE
            </label>
            <input
              type="tel"
              placeholder="+370..."
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
            />
          </div>

          {/* Preferred Artist */}
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wider">
              PREFERRED ARTIST
            </label>
            <select className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white appearance-none">
              <option value="">No preference</option>
              {artists.map((artist) => (
                <option key={artist.id} value={artist.slug}>
                  {artist.name} — {artist.specialization}
                </option>
              ))}
            </select>
          </div>

          {/* Tattoo Placement */}
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wider">
              PLACEMENT
            </label>
            <input
              type="text"
              placeholder="e.g., forearm, back, shoulder..."
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
            />
          </div>

          {/* Approximate Size */}
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wider">
              APPROXIMATE SIZE
            </label>
            <select className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white appearance-none">
              <option value="">Select size</option>
              <option value="small">Small (up to 5cm)</option>
              <option value="medium">Medium (5-15cm)</option>
              <option value="large">Large (15-30cm)</option>
              <option value="xl">Extra Large / Sleeve</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wider">
              DESCRIBE YOUR TATTOO IDEA *
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your idea — style, references, meaning, anything that helps us understand your vision..."
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white resize-none"
            />
          </div>

          {/* Reference Images Note */}
          <p className="text-gray-500 text-sm">
            Have reference images? Send them to{" "}
            <a
              href="mailto:info@paingameclub.lt"
              className="text-white hover:underline"
            >
              info@paingameclub.lt
            </a>{" "}
            after submitting this form.
          </p>

          <StyledButton type="submit" className="w-full" size="lg">
            SEND REQUEST
          </StyledButton>
        </form>
      </div>
    </section>
  );
}
