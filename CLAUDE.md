# Pain Game Club (PGC)

Tattoo studio website for **Pain Game Club** in Vilnius, Lithuania. Static marketing site with artist profiles and gallery pages.

## Tech Stack

- **Framework:** Next.js 14 (App Router, `experimental.appDir`)
- **Language:** TypeScript + one legacy JSX component
- **Styling:** Tailwind CSS 3 + CSS custom properties (shadcn-style HSL tokens) + global CSS (`globalStyles/index.css`, `app/globals.css`)
- **Animations:** Framer Motion (dependency present but currently unused in components), CSS transitions, IntersectionObserver for scroll-reveal
- **Icons:** lucide-react
- **Fonts:** Inter (Google Fonts via `next/font`)

## Project Structure

```
app/
  layout.tsx          — Root layout, metadata, Inter font
  page.tsx            — Home page: assembles all sections
  globals.css         — Tailwind layers, CSS custom properties (light/dark), mobile overrides
  artist/[slug]/
    page.tsx          — Dynamic artist page with generateStaticParams + generateMetadata

components/
  navigation.tsx      — Fixed navbar, scroll-aware bg, mobile fullscreen menu (ESC to close)
  hero-section.tsx    — YouTube background video (iframe), animated PGC logo, scroll indicator
  appointment-section.tsx — Location, contact info, hours; CTA scrolls to #contact
  about-section.tsx   — Parallax header image + about content with logo
  artists-with-gallery.tsx — Main artists section: parallax header, 4-col grid (desktop), horizontal carousel with dots/arrows (mobile)
  artist-gallery.tsx  — Standalone gallery component with lightbox (used internally, has onBack callback)
  artist-gallery-page.tsx — Full artist page component: nav, back link, image, bio, gallery grid, lightbox with touch swipe support
  artists-section.tsx — Older/unused artists section with hardcoded mock data (not imported in page.tsx)
  contact-section.tsx — Contact form (no backend), email/location/Instagram/hours info
  parallax-section.tsx — "Art That Speaks" interstitial with parallax background
  footer.tsx          — Simple footer with logo and copyright
  styled-button.tsx   — Reusable button (sm/md/lg sizes, white rounded-full with glow shadow)
  button/button.jsx   — Legacy empty JSX button component (unused)
  button/button.scss  — Legacy empty SCSS file (unused)
  assets/             — Static images (pgc.jpg, tattoo-lights.jpg, tattoo-upclose.jpg)

lib/
  artists-data.ts     — Artist data store: 8 artists with slug, name, description, bio, images. Exports getAllArtists(), getArtistBySlug(), getArtistById()

globalStyles/
  index.css           — Smooth scroll, overflow-x hidden, scrollbar-hide utility, back-button z-index
```

## Key Patterns

- **All components are client components** (`"use client"`) — heavy use of useState, useEffect, IntersectionObserver, window events
- **Parallax sections** use `background-attachment: fixed` on desktop, fall back to `<Image>` on mobile (iOS doesn't support `bg-fixed`)
- **Mobile detection** done via `window.innerWidth < 768` + UA string regex (repeated in multiple components)
- **Artist data is static** — defined in `lib/artists-data.ts`, no CMS or API. Placeholder images are reused across all artists
- **Lightbox** in artist gallery supports keyboard navigation (Escape/Arrow keys) and touch swipe on mobile
- **No backend** — the contact form has no action/handler; it's purely UI
- **Static generation** — artist pages use `generateStaticParams` for SSG

## Running

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # ESLint
```

## Notes

- `artists-section.tsx` appears to be an older version superseded by `artists-with-gallery.tsx` — it's not imported anywhere
- `button/button.jsx` and `button/button.scss` are empty legacy files (unused)
- `next.config.js` still has `experimental.appDir` which is no longer needed in Next.js 14 (it's the default)
- Artist gallery images are all placeholder (same 2 images alternating) — waiting for real photos
- The site is bilingual-ready in concept (Vilnius location, .lt domain) but content is English-only
