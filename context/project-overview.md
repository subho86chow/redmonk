<!-- Project overview: what you're building, why, and who it's for -->

# Project Overview

## About the Project

Red Monk Wellness Clinic is a premium, responsive single-page landing site for a high-end wellness and IV drip clinic. It showcases clinical services, IV infusion menus, beauty treatments, the medical team, patient testimonials, and a booking intake form — all presented with a luxury-medical aesthetic.

---

## The Problem It Solves

Red Monk Wellness bridges clinical science and targeted cellular nutrition. The website serves as the digital storefront for a premium wellness brand — communicating trust, medical rigor, and exclusivity while making it effortless for prospective clients to book consultations.

---

## Pages

```
/                       → Landing page (single-page app with 8 anchored sections)
  #home                 → Hero headline + CTAs + scroll-driven SVG stroke background
  #services             → 2-column full-width 3D tilt service cards (IV Drips + Vitamin Shots)
  #about                → Stats banner (why Red Monk Wellness)
  #iv-menu              → 65/35 split: popular IV drips + beauty accordion
  #beauty-treatments    → Beauty treatments accordion within iv-menu section
  #team                 → 4-column medical team grid with expandable bios
  #journal              → 4-column patient testimonial cards
  #reserve-your-slot    → Booking intake form, social platforms, clinic maps
```

---

## Navigation

Fixed pill-shaped floating navbar at `top-4` with glass styling:
- Home, Services, IV Menu, Beauty, About, Team, Journal
- "Book Now!" CTA button (right side, desktop)
- Mobile: hamburger menu with AnimatePresence drawer

---

## Core User Flow

### Flow 1 — Browse & Learn

1. User lands on hero section with bold display headline + animated SVG stroke background
2. Scrolls to Services grid (2 full-width 3D tilt cards) to understand offerings
3. Reviews Stats banner for credibility markers
4. Browses IV Drip menu cards (can click for detail modal)
5. Expands beauty treatment accordion items

### Flow 2 — Trust Building

1. User scrolls to Meet the Team section
2. Clicks "+" on any team card to read expanded bio
3. Scrolls to testimonials journal for patient reviews with star ratings

### Flow 3 — Booking Conversion

1. User reaches PreFooter "Reserve Your Slot" section
2. Fills intake form (name, phone, email, service, location, date, notes)
3. Submits → receives confirmation with security slip ID
4. Can reset and book another protocol

---

## Data Architecture

### Service Catalog (static, `src/data.ts`)
- **Where it lives**: Front-end only, imported directly by components
- **When it changes**: Content updates by developer editing the data file
- **What it's used for**: Rendering all service cards, IV drips, beauty treatments, team members, testimonials, stats

### Booking Form State (ephemeral, component state)
- **Where it lives**: `PreFooter.tsx` local state
- **When it changes**: User interaction only
- **What it's used for**: Booking intake simulation (no backend persistence)

---

## Features In Scope

- Floating pill-navbar with scroll-aware active section highlighting
- Hero section with bold display headline, Book Now + Watch Experience CTAs
- Scroll-driven SVG stroke animation (draws progressively as user scrolls)
- 2-column full-width 3D tilt service cards (IV Drips + Vitamin Shots)
- Stats banner with count-up animations and brand credibility metrics
- IV Drip catalog grid with detail modal on card click
- "+ View All" full catalog overlay with all treatments
- Beauty treatments accordion with expandable descriptions
- Medical team grid with expandable bio cards and contact icons
- Patient testimonial grid with star ratings
- Booking intake form with validation, success confirmation, and reset
- Social media platform links section
- Clinic location cards with Google Maps links
- Footer with link columns, back-to-top button, intake hotline
- Full responsive design (mobile, tablet, desktop)
- Motion/Framer Motion animations throughout

---

## Features Out of Scope

- Backend booking persistence — currently simulation only (no DB, no API)
- Authentication / user accounts — single-page public landing page
- Real Google Maps embed — uses static cards with Google Maps links
- Admin dashboard — no content management system
- Payment processing — booking is intake-only
- Multi-language support — English only

---

## Tech Stack

- **Frontend:** React 19 + TypeScript 5.8 (strict)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Build:** Vite 6
- **Animation:** Motion (Framer Motion successor) v12
- **Icons:** Lucide React v0.546
- **Fonts:** Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- **AI:** Not used in frontend (Gemini API in dependencies for potential server-side use)

---

## Analytics Events

```typescript
// No analytics library currently integrated.
// Events to add: page_view, cta_click, booking_form_submit, booking_form_success, catalog_view
```

---

## Target User

Health-conscious affluent individuals in Mumbai and Kolkata seeking premium IV infusion therapies, aesthetic dermatology treatments, and wellness optimization. They value medical credibility, sterile clinical environments, and personalized care from board-certified physicians.

---

## Success Criteria

- Landing page renders correctly on all breakpoints (mobile 375px → desktop 1440px)
- All sections are navigable via both scroll and navbar links
- Booking intake form validates required fields and shows success confirmation
- All interactive elements (accordions, modals) function without errors
- Scroll-driven SVG stroke animates smoothly across all scroll positions
- Design tokens in `index.css` match the visual identity consistently
- Page loads and renders without console errors
