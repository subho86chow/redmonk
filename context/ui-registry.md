# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes and patterns
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact patterns used.

---

## Components

### GlassCard
- **Path:** `src/components/GlassCard.tsx`
- **Type:** Reusable card primitive
- **Usage:** Wraps all content cards across every section
- **Props:** `intensity` ("low"|"medium"|"high"), `glowColor` ("red"|"blush"|"neutral"|"none"), `interactive` (boolean), `className`, `id`, `onClick`
- **Classes:** `relative rounded-2xl border bg-white border-neutral-200 shadow-sm overflow-hidden`
- **Interactive variant:** `transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer`
- **Note:** All intensities currently map to white background; glow and intensity are visual differentiation hooks

### Header
- **Path:** `src/components/Header.tsx`
- **Type:** Fixed floating pill navbar
- **Key classes:** `fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50`
- **Container:** `rounded-full border bg-white border-neutral-200 shadow-sm` (shadow-md when scrolled)
- **Nav links:** `px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold`
- **Active state:** `text-[#A62125] bg-neutral-100 shadow-sm`
- **Inactive state:** `text-neutral-600 hover:text-[#CD3134] hover:bg-neutral-50`
- **CTA button:** `bg-cta-red hover:bg-deep-red text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md`
- **Mobile drawer:** Motion AnimatePresence, `rounded-3xl bg-white border border-neutral-200 shadow-xl`

### Hero
- **Path:** `src/components/Hero.tsx`
- **Type:** Hero section with headline, CTAs, and video modal
- **Section:** `pt-24 pb-16 lg:pt-36 lg:pb-28 bg-transparent`
- **Layout:** Single-column flex layout (was previously 12-col grid with image carousel — carousel removed, replaced by ScrollStroke)
- **Main heading:** `.text-display` `text-5xl sm:text-6xl lg:text-9xl font-black tracking-tighter leading-[0.95] text-white`
- **Primary CTA:** `bg-cta-red hover:bg-deep-red text-white font-bold px-8 py-2 rounded-full shadow-sm shadow-primary-red/20`
- **Secondary CTA:** `bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-full`
- **Video modal:** `fixed inset-0 z-50 bg-black/75 backdrop-blur-sm` with Motion scale animation

### Services
- **Path:** `src/components/Services.tsx`
- **Type:** 2-column full-width 3D tilt service cards
- **Section:** `py-16 sm:py-24 bg-transparent border-y border-[#EDB7AF]/20`
- **Container:** Full-width with side padding only (`px-4 sm:px-6 lg:px-8`), no max-width constraint
- **Section header:** Centered heading `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white` + description in `text-white/50`
- **Grid:** `grid grid-cols-1 sm:grid-cols-2 gap-8 w-full` (2 cards: IV Drips + Vitamin Shots)
- **Cards:** `Service3DCard` — 3D perspective tilt with native glass blurMap/glowMap presets
- **Card classes:** `relative group/card rounded-2xl p-10 sm:p-12 border overflow-hidden` with `bg-white/10 backdrop-blur-2xl`
- **Card imagery:** `h-56 sm:h-64 w-full object-cover rounded-xl`

### StatsBanner
- **Path:** `src/components/StatsBanner.tsx`
- **Type:** Credibility statistics banner
- **Section:** `py-16 sm:py-20 bg-transparent border-y border-[#EDB7AF]/25`
- **Container:** GlassCard `intensity="medium"` `glowColor="blush"` `interactive={false}` with `p-8 sm:p-12`
- **Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`
- **Icon:** `w-10 h-10 rounded-xl bg-light-blush/15` with `group-hover:scale-105`
- **Value:** `font-mono text-4xl sm:text-5xl font-extrabold text-primary-red tracking-tight`
- **Divider:** `w-8 h-0.5 bg-soft-coral/40 group-hover:w-12 rounded-full`
- **Label:** `text-xs sm:text-sm font-semibold text-warm-muted tracking-wide capitalize`

### SplitContent
- **Path:** `src/components/SplitContent.tsx`
- **Type:** 65/35 asymmetrical layout (IV menu + beauty accordion)
- **Section:** `py-16 sm:py-24 bg-transparent`
- **Layout:** `grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10` — left `lg:col-span-8`, right `lg:col-span-4`
- **IV card grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`
- **IV card (individual):** GlassCard `intensity="medium"` `glowColor="neutral"` with `p-6`, cursor-pointer
- **Tag chip:** `text-[10px] uppercase font-mono tracking-widest text-cta-red bg-cta-red/10 px-2 py-0.5 rounded font-bold`
- **Price badge:** `text-sm font-mono font-bold text-neutral-900 bg-white/70 shadow-sm border border-white px-2.5 py-0.5 rounded-full`
- **Drip name:** `.text-display text-base font-bold text-neutral-900 group-hover:text-primary-red`
- **Benefit chip:** `text-[10px] font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md`
- **"View All" card:** `border-dashed border-[#EDB7AF]/80` with Plus icon, `.text-display text-lg font-extrabold text-primary-red`
- **Accordion container:** GlassCard `intensity="high"` `glowColor="blush"` `interactive={false}` with `p-5 sm:p-6`
- **Accordion item:** `rounded-xl border` (open: `border-neutral-200 bg-white shadow-sm`, closed: `border-neutral-100 bg-white hover:border-neutral-300`)
- **Accordion header:** `w-full text-left px-4 py-3 flex justify-between` with `cursor-pointer`
- **Toggle icon:** `w-6 h-6 rounded-full` (open: `bg-primary-red text-white rotate-180`, closed: `bg-neutral-100 text-neutral-700`)
- **Catalog overlay:** `fixed inset-0 z-50 bg-black/75 backdrop-blur-md` with header bar `bg-cta-red text-white`
- **Detail modal:** `fixed inset-0 z-50 bg-black/60 backdrop-blur-sm` with white rounded-2xl card

### MeetTeam
- **Path:** `src/components/MeetTeam.tsx`
- **Type:** Medical team profile grid
- **Section header:** Standard pattern (label tag + text-display heading + gradient divider + description)
- **Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`
- **Card:** GlassCard `intensity="medium"` `glowColor="blush"` with `p-6 flex flex-col items-center text-center`
- **Photo container:** `w-28 h-28 sm:w-32 h-32 rounded-full overflow-hidden bg-neutral-100 border-2 border-white`
- **Photo ring:** `absolute inset-0 rounded-full border-2 border-primary-red/20 group-hover:border-primary-red`
- **Verification badge:** `absolute bottom-1 right-1 w-6 h-6 rounded-full bg-cta-red text-white border-2 border-white`
- **Name:** `.text-display text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary-red`
- **Role:** `text-xs font-semibold text-[#CD3134] tracking-wide`
- **Expand button:** `absolute bottom-4 w-8 h-8 rounded-full border` (open: `bg-primary-red border-primary-red text-white`)
- **Bio section:** Motion AnimatePresence height animation, `text-xs text-warm-muted leading-relaxed font-light`

### Testimonials
- **Path:** `src/components/Testimonials.tsx`
- **Type:** Patient review journal grid
- **Section header:** Standard pattern (label tag + text-display heading + gradient divider + description)
- **Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- **Card:** GlassCard `intensity="medium"` `glowColor="blush"` with `p-6 flex flex-col justify-between relative group`
- **Quote decoration:** `absolute top-5 right-5 text-[#EDB7AF]/20 group-hover:text-primary-red/15` with `Quote` icon rotated 180°
- **Star rating:** `Star` icons with `fill-[#CD3134] text-[#CD3134] w-4 h-4`
- **Review text:** `text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-light italic` wrapped in quotes
- **Author name:** `text-xs font-bold text-neutral-900` with Heart icon
- **Treatment tag:** `text-[9.5px] font-mono text-primary-red/80 font-bold uppercase tracking-wide`
- **Date:** `text-[10px] font-mono text-neutral-400`

### PreFooter
- **Path:** `src/components/PreFooter.tsx`
- **Type:** Booking form + social platforms + clinic maps
- **Layout:** `grid grid-cols-1 lg:grid-cols-12 gap-12` — form (5 cols) + social (3 cols) + maps (4 cols)
- **Form:** GlassCard `intensity="high"` `glowColor="blush"` `interactive={false}` with `p-6`
- **Form label:** `text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1`
- **Form input:** `w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 focus:outline-none focus:border-cta-red`
- **Form select:** Same as input with `bg-white`
- **Submit button:** `w-full bg-cta-red hover:bg-deep-red text-white py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-md`
- **Error message:** `p-3 text-xs bg-red-50 border border-primary-red/20 text-primary-red rounded-lg font-medium`
- **Success:** `CheckCircle` icon in emerald circle, security slip ID display, clinic details
- **Social circles:** `w-12 h-12 rounded-full bg-light-blush/10 hover:bg-white` with `hover:scale-115`
- **Clinic cards:** GlassCard `intensity="medium"` `glowColor="neutral"` with map pin, address, hours, phone, route link
- **Route button:** `bg-white/30 hover:bg-primary-red hover:text-white px-3 py-2 rounded-lg text-[11px] font-bold text-primary-red`

### Footer
- **Path:** `src/components/Footer.tsx`
- **Type:** Site footer
- **Container:** `bg-white text-neutral-600 border-t border-neutral-200`
- **Layout:** `grid grid-cols-1 md:grid-cols-12 gap-8` — logo (4 cols) + links (6 cols) + contact (2 cols)
- **Logo:** `Activity` icon in `w-9 h-9 rounded-xl bg-primary-red` + "RED MONK / Wellness Clinic"
- **Description:** `text-xs text-neutral-500 max-w-sm leading-relaxed`
- **Link columns:** `text-[10px] font-mono tracking-widest uppercase text-neutral-900 font-extrabold border-b border-neutral-200`
- **Links:** `text-xs hover:text-primary-red text-neutral-500`
- **Back-to-top:** `w-10 h-10 rounded-full bg-neutral-50 border border-neutral-200 hover:border-[#CD3134]`
- **Hotline:** `text-neutral-900 hover:text-[#CD3134] font-mono font-bold text-sm sm:text-base`
- **Disclaimer:** `text-[10px] text-neutral-500`
- **Heart accent:** `Heart` icon `text-primary-red fill-current animate-pulse`

### ScrollStroke
- **Path:** `src/components/ScrollStroke.tsx`
- **Type:** Scroll-driven SVG path animation
- **Container:** `absolute inset-0 pointer-events-none` within content wrapper (not fixed — scrolls with sections)
- **SVG attributes:** `viewBox="-30 -300 1278 1319" preserveAspectRatio="none" overflow="visible" fill="none"`
- **Path:** Exact reference path from temp-component.tsx
- **Motion style:** `pathLength` from `useTransform(scrollYProgress, [0, 1], [0.5, 1])`, `strokeDashoffset = 1 - pathLength`
- **Stroke:** `stroke="#FFFFFF" strokeWidth="30" strokeLinecap="round"`
- **Positioning:** Rendered inside content wrapper (`relative z-10`) before Header — scrolls with all sections
