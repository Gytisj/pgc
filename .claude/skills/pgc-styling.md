# PGC Styling Guide

Mandatory design system for Pain Game Club website. Apply these rules when writing or modifying any UI component, page, or style in this project. Based on the official PGC brand style guide (GO&DO studija, 2026).

---

## Core Philosophy

**Raw street culture meets tattoo artistry.** Dark, authentic, graffiti-inspired. Photography-driven with B&W flash aesthetic. Spontaneous energy, not corporate polish. The brand draws from street art, body art, and underground culture.

---

## Color Palette

### Primary Colors

| Token | Tailwind | Hex | Usage |
|---|---|---|---|
| Black | `pgc-black` | `#000000` | Primary background |
| White | `pgc-white` | `#ffffff` | Headings, primary text, CTAs |

### Brand Accent Colors

| Token | Tailwind | Hex | Usage |
|---|---|---|---|
| Bright Red | `pgc-red` | `#ff2222` | Highlight accent (sparing — max 1 per section) |
| Copper | `pgc-copper` | `#cd5e1f` | Warm accent, hover highlights |
| Pink | `pgc-pink` | `#fdc1db` | Soft accent, decorative |
| Dark Green | `pgc-green` | `#02190e` | Deep dark surfaces, alternative dark bg |
| Dark Brown | `pgc-brown` | `#49241c` | Cards, borders, elevated surfaces, tags |
| Cream | `pgc-cream` | `#eae6e2` | Body text, soft white alternative |

### Color Usage Rules

- **Backgrounds:** `bg-pgc-black` for sections. Sections are transparent by default (body has a background image pattern). Use `bg-pgc-black` only on hero and overlay elements.
- **Text hierarchy:** `text-pgc-white` for headings, `text-pgc-cream` for body text, `text-pgc-cream/60` for captions/labels.
- **Cards & surfaces:** `bg-pgc-brown` solid or `bg-pgc-brown/50 backdrop-blur-sm` for glass effect.
- **Borders & dividers:** `border-pgc-brown/50`.
- **Tags/badges:** `bg-pgc-brown/80 text-pgc-cream`.
- **Form inputs:** `bg-pgc-black border-pgc-brown/50 text-pgc-white placeholder-pgc-brown`.
- **Image overlays:** `rgba(0, 0, 0, 0.4)` for hero darkening, `bg-gradient-to-t from-black/80 via-transparent to-transparent` on image cards.
- **Accent colors** (`pgc-red`, `pgc-copper`, `pgc-pink`) should be used sparingly — max one accent per section, primarily for highlights or interactive states.

---

## Typography

**Font Families:**
- **Archivo Black** (`font-display` / `.pgc-header`) — Headlines, section titles, hero text. Bold, impactful.
- **Outfit** (`font-sans`) — Body text, labels, UI elements. Clean, modern. Use Medium weight (~500) for body blocks.
- **Cedarville Cursive** (`font-handwriting`) — Handwritten accent text. Use sparingly for quotes, artist statements, decorative text. Gives raw/personal feel.

All loaded via `next/font/google` with CSS variables: `--font-archivo-black`, `--font-outfit`, `--font-cedarville`.

| Element | Font | Size (mobile → desktop) | Weight | Letter-spacing | Transform |
|---|---|---|---|---|---|
| Hero H1 | Archivo Black | `text-3xl` → `text-6xl` | 400 (only weight) | `tracking-wider` | None |
| Section H2 | Archivo Black | `text-3xl` → `text-5xl` | 400 | `tracking-wider` | `uppercase` |
| Subsection H3 | Archivo Black | `text-xl` → `text-2xl` | 400 | `tracking-wider` | `uppercase` |
| Body | Outfit | `text-base` → `text-lg` | `font-medium` (500) | Normal | None |
| Caption/label | Outfit | `text-xs` → `text-sm` | `font-semibold` (600) | `tracking-[0.2em]` | `uppercase` |
| Button text | Outfit | `text-sm` → `text-lg` | `font-bold` (700) | `tracking-wider` | `uppercase` |
| Handwriting accent | Cedarville Cursive | `text-lg` → `text-2xl` | 400 | Normal | None |

**Rules:**
- ALL section headings use `.pgc-header` class (Archivo Black via CSS).
- Body text: `font-medium leading-relaxed` (Outfit 500).
- Handwriting font (`font-handwriting`) for accents only — never for UI or navigation.
- Never use font sizes smaller than `text-xs` (12px).
- Avoid long paragraphs. Max 2-3 sentences per text block.

---

## Spacing & Layout

**Container:** `container mx-auto px-6` (max-width ~1280px, 24px horizontal padding).

**Section Padding:**
- Standard: `py-16 md:py-24` (64px → 96px)
- Hero: full viewport height (`h-screen`)
- Compact: `py-10 md:py-16`

**Grid System:**
- Artist cards: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`
- Portfolio grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4`
- Content cards (reviews): `grid-cols-1 md:grid-cols-3 gap-6`
- Two-column layouts: `grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`

**Max-widths:**
- Narrow text: `max-w-2xl mx-auto`
- Medium content: `max-w-4xl mx-auto`
- Wide grids: `max-w-7xl mx-auto`

**Rules:**
- Generous whitespace between sections. Never less than `py-16`.
- Content blocks should always have `max-w-*` constraints — never stretch full width.
- Mobile-first: start with single column, expand on `md:` and `lg:` breakpoints.

---

## Components

### Buttons

**Primary CTA (white pill):**
```
bg-pgc-white text-pgc-black font-bold px-8 py-4 rounded-full text-lg uppercase
hover:bg-gray-100 hover:scale-105 transition-all duration-300
tracking-wider shadow-2xl
```
Box-shadow: `0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.1)` (white glow).

**Secondary (ghost pill):**
```
border border-white/30 text-pgc-white px-8 py-4 rounded-full uppercase
hover:bg-white/10 transition-all duration-300 tracking-wider
```

**Small CTA:**
```
bg-pgc-white text-pgc-black font-bold px-5 py-2 rounded-full text-sm uppercase
tracking-wider hover:bg-gray-100 transition-colors
```

**Rules:**
- Buttons are ALWAYS `rounded-full` (pill shape). Never squared or slightly rounded.
- Primary CTAs are white-on-black with glow shadow. Secondary are ghost/outline.
- Button text is always `uppercase` and `tracking-wider`.
- Only ONE primary CTA per viewport. Use secondary for additional actions.
- Use `<Link>` from next/link for navigation buttons, `<button>` for actions.

### Cards

**Surface:** `bg-pgc-brown rounded-lg overflow-hidden`
**Hover:** `hover:bg-pgc-brown/80 transition-colors duration-300`
**Glass effect (reviews, bios):** `bg-pgc-brown/50 backdrop-blur-sm rounded-lg`

### Image Containers

- Artist cards: `aspect-[3/4]` (portrait)
- Portfolio grid: `aspect-square`
- Parallax headers: `h-[300px] md:h-[400px]`
- Hero: `h-screen`

**Hover on images:**
```
group-hover:scale-110 transition-transform duration-500
```
With overlay: `bg-gradient-to-t from-black/80 via-transparent to-transparent`

### Navigation

- Fixed top: `fixed top-0 left-0 right-0 z-30`
- Transparent initially, solid on scroll: `bg-pgc-black/90 backdrop-blur-sm`
- Logo appears on scroll with scale transition
- "Book Now" button in nav is the small CTA style (white pill)
- Mobile: fullscreen black overlay menu with large centered links

### Tags/Badges

```
text-xs px-3 py-1 bg-pgc-brown/80 rounded-full text-pgc-cream
```

### Stars (ratings)

```
w-4 h-4 fill-yellow-400 text-yellow-400
```
Use `lucide-react` `Star` icon with `fill` class.

---

## Animations & Transitions

### Scroll Reveal (IntersectionObserver)

Standard pattern for all sections:
```tsx
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
    { threshold: 0.2 }
  );
  const ref = sectionRef.current;
  if (ref) observer.observe(ref);
  return () => { if (ref) observer.unobserve(ref); };
}, []);
```

Apply to elements:
```
transition-all duration-700
${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
```

Stagger children: `style={{ transitionDelay: '${index * 100}ms' }}`

### Hover Transitions

- Images: `group-hover:scale-105` or `group-hover:scale-110` with `duration-500`
- Buttons: `hover:scale-105 transition-all duration-300`
- Links: `hover:text-pgc-cream transition-colors`
- Cards: `hover:bg-pgc-brown/80 transition-colors duration-300`

### Duration Scale

| Speed | Value | Use |
|---|---|---|
| Fast | `duration-300` | Buttons, links, color changes |
| Medium | `duration-500` | Image transforms, card transitions |
| Slow | `duration-700` | Scroll reveal animations |
| Very slow | `duration-1000` | Hero entrance, page transitions |

**Rules:**
- Every section must have scroll-reveal animation. No section should appear static.
- Stagger child animations by 80-150ms per item.
- Image hover scale should never exceed `scale-110`.
- Use `transition-all` only when multiple properties animate. Prefer `transition-colors`, `transition-transform` for single-property changes.

---

## Parallax Sections

Desktop: `background-attachment: fixed` with `bg-cover bg-center bg-no-repeat`.
Mobile: Fall back to `<Image>` with `fill` + `object-cover` (iOS doesn't support `bg-fixed`).

Image treatment: `filter: brightness(0.6) contrast(1.3)` with gradient overlay `bg-gradient-to-b from-black/50 via-black/70 to-black/50`.

Detect mobile:
```tsx
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);
```

---

## Responsive Breakpoints

| Breakpoint | Tailwind | Target |
|---|---|---|
| Mobile | default | < 768px |
| Tablet | `md:` | >= 768px |
| Desktop | `lg:` | >= 1024px |

**Rules:**
- Design mobile-first. Base styles are for mobile.
- Test that all text is readable at 320px width.
- Touch targets: minimum 44x44px on mobile (use `p-3` on icon buttons).
- Images in lightboxes must support touch swipe on mobile.

---

## Do NOT

- Use light/white backgrounds on any page or section
- Use generic Tailwind grays (`bg-gray-900`, `text-gray-300`, etc.) — always use `pgc-*` tokens
- Use squared buttons or sharp corners on interactive elements
- Write paragraphs longer than 3 sentences
- Use inline styles when Tailwind classes exist
- Add decorative elements that don't serve a purpose
- Use accent colors (`pgc-red`, `pgc-copper`, `pgc-pink`) as backgrounds — they are highlights only
- Hardcode pixel values when Tailwind spacing scale works
- Forget `"use client"` on components with useState/useEffect
- Create components without scroll-reveal animations
