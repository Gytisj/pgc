# Pain Game Club (PGC)

Tattoo studio website for **Pain Game Club** in Vilnius, Lithuania. Premium marketing site with artist profiles, portfolios, booking, and FAQ.

## Styling

**Always follow `.claude/skills/pgc-styling.md`** when writing or modifying any UI component. It defines the complete design system: colors, typography, spacing, component patterns, animations, and responsive rules. Reference: Bang Bang NYC luxury minimalist aesthetic.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 + CSS custom properties (HSL tokens) + global CSS
- **Icons:** lucide-react
- **Fonts:** Inter (Google Fonts via `next/font`)

## Project Structure

```
app/
  layout.tsx              — Root layout, metadata, Inter font
  page.tsx                — Homepage: assembles all sections
  globals.css             — Tailwind layers, CSS variables, mobile overrides
  artist/[slug]/page.tsx  — Dynamic artist page (SSG via generateStaticParams)
  booking/page.tsx        — Booking/consultation form page

components/
  navigation.tsx          — Fixed navbar, transparent→solid on scroll, mobile fullscreen menu, "Book Now" CTA
  hero-section.tsx        — YouTube bg video, logo, positioning line, value prop, dual CTAs, reviews widget
  trust-indicators.tsx    — 4 stats: experience, clients, rating, hygiene
  portfolio-showcase.tsx  — Filterable portfolio grid (by style category)
  process-section.tsx     — 5-step process: Idea → Consultation → Design → Tattoo → Aftercare
  social-proof.tsx        — Testimonials carousel (3 desktop, 1 mobile, auto-advance)
  artists-with-gallery.tsx — Artist cards grid with specialization tags, links to artist pages
  cta-section.tsx         — "Ready to Start?" final call to action
  faq-section.tsx         — Accordion FAQ (8 questions)
  contact-section.tsx     — Contact form + email/location/Instagram/hours
  floating-cta.tsx        — Fixed "Book Now" button, appears after scrolling past hero
  footer.tsx              — Logo + copyright
  booking-form.tsx        — Full consultation form (name, email, phone, artist, placement, size, description)
  artist-gallery-page.tsx — Full artist page: header, tags, bio, portfolio grid, reviews, lightbox, booking CTA
  styled-button.tsx       — Reusable pill button (sm/md/lg, white with glow)
  artist-gallery.tsx      — Standalone gallery component with lightbox (legacy, used by artist-gallery-page)
  assets/                 — Static images (pgc.jpg, tattoo-lights.jpg, tattoo-upclose.jpg)

lib/
  artists-data.ts         — Artist data: 8 artists with slug, name, specialization, tags, bio, reviews, instagram, gallery images. Also exports testimonials array. Helper functions: getAllArtists(), getArtistBySlug(), getArtistById()

globalStyles/
  index.css               — Smooth scroll, overflow-x hidden, scrollbar-hide utility

.claude/skills/
  pgc-styling.md          — Complete design system and styling rules
```

## Homepage Section Order

1. Hero (full viewport, video bg, CTA, reviews widget)
2. Trust Indicators (stats bar)
3. Portfolio Showcase (filterable grid)
4. Process (5 steps)
5. Social Proof (testimonials)
6. Artists (clickable cards)
7. CTA ("Ready to Start?")
8. FAQ (accordion)
9. Contact (form + info)
10. Footer
11. Floating "Book Now" button (fixed, appears on scroll)

## Key Patterns

- **All components are client components** (`"use client"`) — useState, useEffect, IntersectionObserver
- **Scroll-reveal animations** on every section via IntersectionObserver + opacity/translate transitions
- **Parallax sections** use `bg-fixed` on desktop, `<Image>` fallback on mobile
- **Artist data is static** — defined in `lib/artists-data.ts`, no CMS
- **Lightbox** supports keyboard (Escape/Arrows) and touch swipe
- **No backend** — booking form and contact form are UI-only (no action handler yet)
- **Static generation** — artist pages use `generateStaticParams` for SSG

## Running

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # ESLint
```

## Unused/Legacy Files

- `components/artists-section.tsx` — older artists section, not imported anywhere
- `components/button/button.jsx` + `button.scss` — empty legacy files
- `components/about-section.tsx` — replaced by trust indicators + portfolio; still importable but not in homepage
- `components/appointment-section.tsx` — replaced by trust indicators section
- `components/parallax-section.tsx` — replaced by CTA section
