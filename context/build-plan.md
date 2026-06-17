<!-- Build plan: features broken into phases with clear done criteria -->

# Build Plan

## Core Principle

Full section UI built with mock/static data first — verified visually before any logic is written. Then interactivity wired step by step. Every section visible and testable before moving to the next. No invisible backend phases.

---

## Phase 1 — Foundation & Layout

### 01 Project Scaffold

Set up the Vite + React + TypeScript + Tailwind v4 project with design tokens.

**UI:**
- Vite project with `@vitejs/plugin-react` and `@tailwindcss/vite`
- `src/index.css` with `@theme` block defining all brand colors and fonts
- Custom CSS utilities (`hero-red-gradient`, `hero-red-text-clip`, `glow-wave`, `text-display`)
- Google Fonts CDN import (Inter, Space Grotesk, JetBrains Mono)

**Logic:**
- TypeScript strict mode
- Type definitions in `src/types.ts`

---

### 02 GlassCard Reusable Component

Universal card primitive with intensity and glow variants.

**UI:**
- `GlassCard.tsx` with props: `intensity`, `glowColor`, `interactive`, `className`
- Rounded corners, border, shadow, hover lift

**Logic:**
- Conditional `hover:-translate-y-1` and `cursor-pointer` when interactive

---

## Phase 2 — Core Sections

### 03 Header Component

Floating pill navbar with scroll-aware active section.

**UI:**
- Fixed `top-4` with glass styling, `rounded-full`
- Logo: Activity icon + "RED MONK / Wellness Clinic" text
- Desktop nav: inline pill links with active highlight
- CTA: "Book Now!" button
- Mobile: hamburger menu with AnimatePresence drawer

**Logic:**
- `isScrolled` state for shadow toggle
- `isMobileMenuOpen` state for drawer
- `activeSection` prop from App.tsx scroll-spy
- `onBookNowClick` callback to scroll to booking section

---

### 04 Hero Section

Hero banner with carousel, CTAs, and video modal.

**UI:**
- Left column: keyword tag, headline (gradient text), sub-headline, description, value badges, two CTAs
- Right column: image carousel with arrows, dots, overlay badge
- Video modal with dark background, play button, simulated controls

**Logic:**
- Auto-rotate carousel every 5 seconds (useEffect + setInterval)
- Manual prev/next navigation
- Dot indicator navigation
- `isVideoModalOpen` state for video overlay

---

### 05 Services Grid

4-column clinical services cards.

**UI:**
- Centered section header with label tag, heading, gradient divider, description
- 4-column responsive grid (1col mobile, 2col tablet, 4col desktop)
- Each card: circular icon with hover fill animation, title, description, bottom accent line

**Logic:**
- Icon mapper (`Record<string, LucideIcon>`) to resolve icon names from data
- Data imported from `servicesData`

---

### 06 Stats Banner

Brand credibility statistics in a card.

**UI:**
- Centered heading + description
- GlassCard wrapper with faint grid overlay
- 4-column stat items: icon, large mono number, divider, label

**Logic:**
- Icon array mapped to stats by index
- Data imported from `statsData`

---

### 07 Split Content (IV Menu + Beauty)

65/35 asymmetrical layout with IV drip cards and beauty accordion.

**UI:**
- Left (65%): section header + 3x2 grid of drip cards (5 drips + "View All" card)
  - Each card: tag, price, name, description, benefit chip, "Details →" link
  - "View All" card: dashed border, + icon, opens catalog overlay
- Right (35%): GlassCard containing accordion list of 4 beauty treatments
  - Each item: header with +/− toggle, expandable body with description + benefits
  - "Explore full menu" button
- Full catalog overlay: header bar, scrollable grid of all drips + beauty treatments
- Individual drip detail modal: name, description, benefits, price, "Select & Book" button

**Logic:**
- `activeAccordion` state for accordion toggle
- `isDripCatalogOpen` state for catalog overlay
- `selectedDripDetails` state for detail modal
- AnimatePresence on all expandable/modal elements

---

### 08 Meet Team

Medical team profile grid with expandable bios.

**UI:**
- Centered header with label tag, heading, gradient divider
- 4-column grid of profile cards
  - Each: circular photo with decorative ring + verified badge, name, role, "Verified Practitioner" label
  - + icon at bottom toggles expandable bio section
  - Expanded: bio text + Mail/LinkedIn icons

**Logic:**
- `expandedMemberId` state for single-expand pattern
- AnimatePresence on bio expansion

---

### 09 Testimonials

Patient review journal grid.

**UI:**
- Centered header with label tag, heading, gradient divider
- 4-column grid of review cards
  - Each: decorative quote icon, 5-star rating, italic review text, author name with heart, treatment tag, date

**Logic:**
- Data imported from `testimonialsData`
- Star rating rendered via `Array(review.rating).fill()` map

---

## Phase 3 — Conversion & Footer

### 10 PreFooter (Booking + Social + Maps)

Booking intake form, social platforms, and clinic locations.

**UI:**
- 3-column layout (5:3:4): booking form | social platforms | clinic maps
- Booking form: name, phone, email, service select, location select, date picker, notes textarea
  - Submit button with loading state
  - Error message for missing required fields
  - Success confirmation with security slip ID, clinic details, reset button
- Social platforms: 4 circular icon links (Instagram, Facebook, LinkedIn, YouTube), newsletter signup form
- Clinic maps: 2 cards for Mumbai + Kolkata with address, hours, phone, route link

**Logic:**
- `formData` state object with all form fields
- `bookingConfirmation` and `formError` state
- Validation: name, phone, date required
- Success: generate mock voucher code `RM-XXXXXX`
- Reset: clears form and confirmation

---

### 11 Footer

Footer with link columns, back-to-top, intake hotline.

**UI:**
- Logo + manifesto text + ISO certification badge
- 3-column link directory: Menu, Company, Legals
- Back-to-top button (top-right or standalone)
- Intake hotline phone number
- Divider + copyright + medical disclaimer
- Animated heart icon with "Formulated with [heart] for clinical vitality"

**Logic:**
- `scrollToTop()` smooth scroll
- Dynamic year via `new Date().getFullYear()`
- Link data array mapped to columns

---

## Feature Count

| Phase | Name                | Features |
| ----- | ------------------- | -------- |
| 1     | Foundation & Layout | 2        |
| 2     | Core Sections       | 7        |
| 3     | Conversion & Footer | 2        |
| **Total** |                | **11**   |
