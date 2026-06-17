<!-- Code standards: rules the agent must follow when writing code for this project -->

# Code Standards

Implementation rules and conventions for Red Monk Wellness Clinic. The AI agent must follow these in every session without exception.

---

## Engineering Mindset

- Think before implementing — understand what is being built and why before writing a single line
- Scope is sacred — only build what the current feature requires; this is a landing page, not a full app
- Clean over clever — simple readable JSX is always preferred
- One thing at a time — complete one section/component fully before touching the next
- Components are self-contained — each manages its own state; no shared state between unrelated components

---

## Language & Type Safety

- TypeScript strict mode enabled (`tsconfig.json` with `strict: true`)
- Never use `any` — use `unknown` and narrow the type, or define an explicit interface
- All function parameters typed via interfaces (`HeaderProps`, `HeroProps`, etc.)
- All component props use explicit TypeScript interfaces
- Use `const` by default — only use `let` when reassignment is necessary (e.g., `useState`)
- Data arrays use typed interfaces from `src/types.ts`

---

## File and Folder Naming

- Folders: `src/components/` — component files live here
- Component files: PascalCase (`Header.tsx`, `MeetTeam.tsx`)
- Utility/data files: camelCase (`types.ts`, `data.ts`)
- One component per file — no exceptions
- UI-only reusable component: `GlassCard.tsx`

---

## Component / Module Structure

Every component follows this structure:

```typescript
// 1. React/hook imports
import { useState, useEffect } from "react";

// 2. Third-party library imports (Motion, Lucide)
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// 3. Local imports (data, types, shared components)
import { servicesData } from "../data";
import { ServiceItem } from "../types";
import GlassCard from "./GlassCard";

// 4. Props interface
interface ComponentProps {
  propName: type;
}

// 5. Default export component
export default function ComponentName({ propName }: ComponentProps) {
  // state hooks
  // event handlers
  // return JSX
}
```

- No inline styles — all styling via Tailwind classes referencing `@theme` tokens
- No business logic inside UI components (not applicable — this is a static landing page)
- All interactive state is component-local (`useState`)

---

## API / Backend Conventions

No backend exists in this project. The booking form is simulation-only (component state).

If a backend is added:
- Every route must validate the request before processing
- Always return `{ success: boolean, data?, error? }`
- Never expose raw error messages to the client

---

## Database

No database. All content is static in `src/data.ts`.

---

## Error Handling

- Form validation: check required fields, show inline error message via `formError` state
- No empty catch blocks — always log or handle
- User-facing errors must be human readable (e.g., "Please fill in all mandatory fields containing *.")
- Toast/alert patterns use inline colored `<div>` elements

---

## Analytics Events

```typescript
// No analytics library currently integrated.
// When added, events should follow this pattern:

| Event               | When                                    | Properties            |
| ------------------- | --------------------------------------- | --------------------- |
| `booking_form_submit` | User submits booking intake form      | service, location, date |
| `booking_form_success` | Booking confirmation displayed       | confirmation_id       |
| `cta_click`         | User clicks any CTA button              | cta_id, section       |
| `catalog_view`      | User opens full treatment catalog       | source_element        |
```

---

## Environment Variables

| Variable        | Used In          |
| --------------- | ---------------- |
| `GEMINI_API_KEY` | Server (unused in current frontend) |
| `DISABLE_HMR`   | `vite.config.ts` (AI Studio compatibility) |

---

## Comments

- No comments explaining what the code does — code must be self-explanatory
- Comments only for why — explaining a non-obvious decision
- Section IDs on elements use readable names: `id="services-grid"`, `id="hero-main-heading"`

---

## Dependencies

Approved dependencies for this project:

| Package              | Purpose                                  |
| -------------------- | ---------------------------------------- |
| `react` / `react-dom` | UI framework (v19)                      |
| `vite`               | Build tool and dev server                |
| `@vitejs/plugin-react` | React support for Vite                 |
| `@tailwindcss/vite`  | Tailwind CSS v4 Vite integration         |
| `tailwindcss`        | Utility-first CSS framework (v4)         |
| `autoprefixer`       | CSS vendor prefixing                     |
| `typescript`         | Type safety (v5.8)                       |
| `lucide-react`       | SVG icon library (v0.546)                |
| `motion`             | Animation library (Framer Motion successor, v12) |
| `@google/genai`      | Gemini SDK (available for server use)    |

Do not install any other packages without updating this list first.
