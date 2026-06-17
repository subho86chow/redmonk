<!-- Library docs: key usage patterns for the libraries in this project -->

# Library Docs

Project-specific usage patterns for every third party library in Red Monk Wellness Clinic. This file only covers how we use each library in this specific project.

Read the relevant section before implementing any feature that touches these libraries.

---

## Before Using Any Library

The order of authority is:

```
MCP server (real-time docs) → Skills via AGENTS.md → This file (project rules) → General training knowledge
```

Never rely on general training knowledge alone for library APIs — they change frequently.

---

## Tailwind CSS v4

Utility-first CSS framework. Configured via `@tailwindcss/vite` plugin in `vite.config.ts`.

### Design Token Definition

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --color-primary-red: #A62125;
  --color-cta-red: #CD3134;
  /* ... all tokens defined here */
}
```

### Custom Utilities

```css
.hero-red-gradient {
  background: linear-gradient(90deg, #801115 0%, #A62125 50%, #CD3134 100%);
}

.hero-red-text-clip {
  background: linear-gradient(90deg, #801115 0%, #A62125 50%, #CD3134 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-display {
  font-family: var(--font-display);
}
```

**Rules:**
- Never use `tailwind.config.ts` for colors — all colors in `@theme`
- Never use raw Tailwind color classes like `bg-red-500` or `text-gray-600` — use project tokens or neutral scale
- Font utility: `.text-display` for Space Grotesk, `.font-mono` for JetBrains Mono
- Always use project token classes, never inline hex values

---

## Motion (Framer Motion v12)

Declarative animation library. Imported from `motion/react` (not `framer-motion`).

### AnimatePresence (enter/exit animations)

```tsx
import { motion, AnimatePresence } from "motion/react";

// Used on: mobile menu drawer, accordion panels, modals, form success state
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {/* content */}
    </motion.div>
  )}
</AnimatePresence>
```

### AnimatePresence with height animation (accordion)

```tsx
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* expandable content */}
    </motion.div>
  )}
</AnimatePresence>
```

### Image crossfade carousel

```tsx
<AnimatePresence mode="wait">
  <motion.img
    key={currentImageIndex}
    src={imageUrl}
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.6 }}
  />
</AnimatePresence>
```

**Rules:**
- Always import from `motion/react` — not `framer-motion`
- Use `AnimatePresence` for all enter/exit animations
- `mode="wait"` when crossfading between items
- `initial={false}` on accordions to prevent initial mount animation
- Transition durations: 0.2s for menus, 0.25s for accordions, 0.6s for carousel

---

## Lucide React

SVG icon library (v0.546). All icons imported from `lucide-react`.

### Usage Pattern

```tsx
import { Activity, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

// In JSX:
<Activity className="w-5 h-5" />
<ArrowRight className="w-3.5 h-3.5" />
<CheckCircle className="w-4.5 h-4.5 text-primary-red mr-1.5" />
```

### Icon Mapper (for data-driven icons)

```tsx
import { Droplet, Syringe, Sparkles, HeartPulse, LucideIcon } from "lucide-react";

const iconComponents: Record<string, LucideIcon> = {
  Droplet, Syringe, Sparkles, HeartPulse,
};

// Usage:
const IconComponent = iconComponents[service.iconName] || Sparkles;
<IconComponent className="w-7 h-7" />
```

### Commonly Used Icons

| Icon | Used In |
|------|---------|
| `Activity` | Logo, footer |
| `ArrowRight`, `ArrowUp` | Buttons, navigation |
| `CheckCircle`, `Check` | Value badges, benefit lists |
| `ChevronLeft`, `ChevronRight` | Carousel arrows |
| `Clock`, `MapPin`, `PhoneCall` | Clinic location cards |
| `Droplet`, `Syringe` | IV drip indicators |
| `Heart` | Testimonial author, footer |
| `Menu`, `X` | Mobile menu toggle |
| `Plus`, `Minus` | Accordion, expand toggles |
| `Play` | Video CTA |
| `Quote` | Testimonial decorative |
| `Send` | Form submit |
| `ShieldAlert`, `ShieldCheck` | Certifications, team verification |
| `Sparkles` | Beauty, benefit highlights |
| `Star` | Rating stars (with `fill-current`) |

**Rules:**
- Always size with Tailwind classes: `w-4 h-4`, `w-5 h-5`, etc.
- Use `fill-current` for filled variants (e.g., `Star` with fill)
- Never use emojis — Lucide React is the only icon source
- Consistent sizing: w-3.5 h-3.5 for inline, w-5 h-5 for standalone, w-7 h-7 for feature icons

---

## React 19

### Component Pattern

```tsx
import { useState } from "react";

interface ComponentProps {
  propName: string;
}

export default function ComponentName({ propName }: ComponentProps) {
  const [state, setState] = useState<Type>(initialValue);
  
  return (
    <section id="section-id">
      {/* JSX */}
    </section>
  );
}
```

### Hooks Used

| Hook | Pattern |
|------|---------|
| `useState` | `const [value, setValue] = useState<Type>(initial)` |
| `useEffect` | Scroll listeners, carousel intervals (always with cleanup return) |
| `FormEvent` | `(e: FormEvent) => { e.preventDefault(); ... }` |

**Rules:**
- Always return cleanup function from `useEffect` intervals/listeners
- All props typed with explicit interfaces
- No class components — always functional components
