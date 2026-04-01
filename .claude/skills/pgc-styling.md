# PGC Styling Guide

Mandatory design system for Pain Game Club website. Apply these rules when writing or modifying any UI component, page, or style in this project. Inspired by luxury tattoo studio aesthetics (Bang Bang NYC reference).

---

## Core Philosophy

**Luxury minimalism.** Dark, editorial, gallery-like. Let photos do the talking. Minimal text, maximum whitespace, high contrast. Every element earns its place.

---

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--pgc-black` | `#151515` | Primary background |
| `--pgc-black-deep` | `#0a0a0a` | Deeper sections, footers |
| `--pgc-gray-900` | `#1c1c1c` | Cards, elevated surfaces |
| `--pgc-gray-800` | `#222222` | Borders, subtle dividers |
| `--pgc-gray-700` | `#333333` | Muted UI elements |
| `--pgc-gray-400` | `#999999` | Secondary/caption text |
| `--pgc-gray-300` | `#bbbbbb` | Body text on dark bg |
| `--pgc-white` | `#ffffff` | Headings, primary text, CTAs |
| `--pgc-gold` | `#c9a96e` | Optional accent (sparing use only) |

**Rules:**
- Background is ALWAYS dark (`#151515` or `#0a0a0a`). Never use light/white backgrounds.
- Text is ALWAYS light on dark. Primary text `#ffffff`, body text `#bbbbbb`, captions `#999999`.
- No bright accent colors. If color is needed, use `--pgc-gold` sparingly for one element per section max.
- Image overlays: `rgba(18, 18, 18, 0.5)` for hover states, `rgba(0, 0, 0, 0.4)` for gradient overlays on hero images.

---

## Typography

**Font Stack:** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` (loaded via `next/font/google`).

| Element | Size (mobile → desktop) | Weight | Letter-spacing | Transform |
|---|---|---|---|---|
| Hero H1 | `text-3xl` → `text-6xl` | `font-bold` (700) | `tracking-wider` (0.05em) | None |
| Section H2 | `text-3xl` → `text-5xl` | `font-bold` (700) | `tracking-wider` | `uppercase` |
| Subsection H3 | `text-xl` → `text-2xl` | `font-bold` (700) | `tracking-wider` | `uppercase` |
| Body | `text-base` → `text-lg` | `font-normal` (400) | Normal | None |
| Caption/label | `text-xs` → `text-sm` | `font-semibold` (600) | `tracking-[0.2em]` | `uppercase` |
| Button text | `text-sm` → `text-lg` | `font-bold` (700) | `tracking-wider` | `uppercase` |

**Rules:**
- ALL section headings are `uppercase` with `tracking-wider`.
- Use the `.pgc-header` class on all H1/H2 elements.
- Body text line-height: `leading-relaxed` (1.625).
- Never use font sizes smaller than `text-xs` (12px).
- Avoid long paragraphs. Max 2-3 sentences per text block. Let images and whitespace breathe.

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
bg-white text-black font-bold px-8 py-4 rounded-full text-lg
hover:bg-gray-100 hover:scale-105 transition-all duration-300
tracking-wider shadow-2xl
```
Box-shadow: `0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.1)` (white glow).

**Secondary (ghost pill):**
```
border border-white/30 text-white px-8 py-4 rounded-full
hover:bg-white/10 transition-all duration-300 tracking-wider
```

**Small CTA:**
```
bg-white text-black font-bold px-5 py-2 rounded-full text-sm
tracking-wider hover:bg-gray-100 transition-colors
```

**Rules:**
- Buttons are ALWAYS `rounded-full` (pill shape). Never squared or slightly rounded.
- Primary CTAs are white-on-black with glow shadow. Secondary are ghost/outline.
- Button text is always `uppercase` and `tracking-wider`.
- Only ONE primary CTA per viewport. Use secondary for additional actions.
- Use `<Link>` from next/link for navigation buttons, `<button>` for actions.

### Cards

**Surface:** `bg-gray-900 rounded-lg overflow-hidden`
**Hover:** `hover:bg-gray-800 transition-colors duration-300`
**Glass effect (reviews, bios):** `bg-gray-900/50 backdrop-blur-sm rounded-lg`

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
- Transparent initially, solid on scroll: `bg-black bg-opacity-90`
- Logo appears on scroll with scale transition
- "Book Now" button in nav is the small CTA style (white pill)
- Mobile: fullscreen black overlay menu with large centered links

### Tags/Badges

```
text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300
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
- Links: `hover:text-gray-300 transition-colors`
- Cards: `hover:bg-gray-800 transition-colors duration-300`

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
- Use bright colors (red, blue, green) as accents
- Use squared buttons or sharp corners on interactive elements
- Write paragraphs longer than 3 sentences
- Use inline styles when Tailwind classes exist
- Add decorative elements that don't serve a purpose
- Use `text-gray-500` or lighter for body text (too low contrast)
- Hardcode pixel values when Tailwind spacing scale works
- Forget `"use client"` on components with useState/useEffect
- Create components without scroll-reveal animations
