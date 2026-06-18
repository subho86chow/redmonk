<!-- System architecture: how the app is structured and how data flows through it -->

# Architecture

## Stack

| Layer        | Tool                          | Purpose                                |
| ------------ | ----------------------------- | -------------------------------------- |
| Framework    | React 19 (no framework)       | Component-based UI                     |
| Build        | Vite 6                        | Dev server and production bundling     |
| Styling      | Tailwind CSS v4 + @tailwindcss/vite | Utility-first CSS with `@theme` tokens |
| Animation    | Motion (Framer Motion) v12       | Declarative animations, useScroll/useTransform |
| Icons        | Lucide React v0.546           | Consistent SVG icon library            |
| Fonts        | Google Fonts (3 families)     | Inter, Space Grotesk, JetBrains Mono   |
| Language     | TypeScript 5.8 (strict mode)  | Type safety throughout                 |

---

## Folder Structure

```
/
├── context/                       # Project context files (what you're reading)
├── assets/                        # AI Studio assets (unused in app)
├── src/
│   ├── main.tsx                   # React entry point
│   ├── App.tsx                    # Root component — scroll tracking, section layout
│   ├── index.css                  # Tailwind v4 @theme tokens + custom CSS classes
│   ├── types.ts                   # TypeScript interfaces (ServiceItem, IVDrip, etc.)
│   ├── data.ts                    # Static content data (services, team, testimonials, etc.)
│   └── components/
│       ├── Header.tsx             # Floating pill navbar with active section tracking
│       ├── Hero.tsx               # Hero headline + CTAs + video modal (no carousel)
│       ├── Services.tsx           # 2-column full-width 3D tilt service cards
│       ├── Service3DCard.tsx      # 3D perspective glass card with blurMap/glowMap
│       ├── ScrollStroke.tsx       # Scroll-driven SVG path (useScroll + motion.path)
│       ├── StatsBanner.tsx        # Brand credibility statistics with CountUp
│       ├── SplitContent.tsx       # 65/35 layout: IV drips grid + beauty accordion
│       ├── MeetTeam.tsx           # Medical team profile grid with expandable bios
│       ├── Testimonials.tsx       # Patient review cards with star ratings
│       ├── PreFooter.tsx          # Booking form, social platforms, clinic maps
│       ├── Footer.tsx             # Footer with links, back-to-top, hotline
│       ├── GlassCard.tsx          # Reusable card component (intensity + glow variants)
│       ├── ShaderGradientBackground.tsx  # Fixed WebGL waterPlane animated bg
│       ├── AnimatedSection.tsx    # Fade-up on scroll/mount wrapper
│       ├── CountUp.tsx            # Animated number counter (useInView trigger)
│       └── ui/
│           └── 3d-card.tsx        # CardContainer/CardBody/CardItem 3D primitives
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite config (React plugin, Tailwind plugin)
```

---

## System Boundaries

| Folder            | Owns                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| `src/components/` | UI only. No data fetching. Imports data from `src/data.ts`.          |
| `src/data.ts`     | Static content. Imported by components. Never modified at runtime.   |
| `src/types.ts`    | TypeScript interfaces shared across components.                      |
| `src/index.css`   | Design tokens (`@theme` block) + custom utility classes.             |
| `src/App.tsx`     | Page composition and scroll-spy logic. No component-level styling.   |

---

## Data Flows

### Flow 1 — Content Rendering

```
Static data (src/data.ts)
        ↓
Component imports typed data arrays
        ↓
Maps over arrays to render cards/grids/accordions
        ↓
User sees populated UI
```

### Flow 2 — Booking Intake Form

```
User fills PreFooter form fields
        ↓
handleSubmitBooking() validates required fields
        ↓
On success: generates mock voucher code, sets confirmation state
        ↓
UI switches from form to success confirmation view
        ↓
User can reset to book another protocol
```

### Flow 3 — Scroll-Aware Navigation

```
window scroll event fires
        ↓
App.tsx handleScroll() checks offsets of section IDs
        ↓
Sets activeSection state
        ↓
Header receives activeSection prop, highlights matching nav link
```

### Flow 4 — Scroll-Driven SVG Stroke

```
window scroll event fires
        ↓
useScroll() produces scrollYProgress (0→1)
        ↓
useTransform maps to pathLength
        ↓
motion.path applies pathLength + strokeDashoffset
        ↓
SVG path draws progressively as user scrolls, moves with content
```

---

## Database Schema

No database. All content is static (in `src/data.ts`) and booking is simulation-only (component state). No persistence layer.

---

## Storage

No storage buckets or file uploads. Images are loaded from Unsplash CDN URLs.

---

## Authentication

No authentication. The entire site is a public landing page.

---

## Invariants

Rules the AI agent must never violate:

- Components contain no data fetching — all data imported from `src/data.ts`
- No hardcoded hex values or raw color classes in components — use Tailwind v4 `@theme` tokens from `index.css`
- All icons come from Lucide React only — never use emojis
- Font families: Inter for body, Space Grotesk for display, JetBrains Mono for labels/monospaced text
- No speculative features beyond the landing page scope
- Components are self-contained — each owns its own state
