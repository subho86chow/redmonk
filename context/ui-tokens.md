<!-- UI tokens: the design system values the agent must use for all styling -->

# UI Tokens

Design tokens for **Red Monk Wellness Clinic**. All colors, typography, spacing, and component values extracted from the delivered codebase. Use these exact values throughout — never hardcode colors or use raw Tailwind color classes in components.

---

## How to Use

This project uses **Tailwind CSS v4**. All design tokens are defined using the `@theme` directive in `src/index.css`. No `tailwind.config.ts` needed.

Tailwind v4 automatically generates utility classes from `@theme` variables:

```tsx
// Correct — uses generated utility classes
className="bg-primary-red text-white border-light-blush/20"

// Also correct (when a custom CSS class exists)
className="hero-red-gradient"

// Never — hardcoded hex values
className="bg-[#A62125] text-[#1a1a1a]"

// Never — raw Tailwind color classes (not defined in @theme)
className="bg-red-500 text-gray-600"
```

---

## globals.css — Complete Token Definition

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

  /* Brand Colors */
  --color-primary-red: #A62125;
  --color-cta-red: #CD3134;
  --color-deep-red: #801115;
  --color-highlight-red: #E05C5C;
  --color-soft-coral: #DE918B;
  --color-dusty-rose: #B77770;
  --color-warm-muted: #954A45;
  --color-light-blush: #EDB7AF;
}
```

### Custom CSS Classes (also in index.css)

```css
.hero-red-gradient {
  background: linear-gradient(90deg, #801115 0%, #A62125 50%, #CD3134 100%);
}

.hero-red-text-clip {
  background: linear-gradient(90deg, #801115 0%, #A62125 50%, #CD3134 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glow-wave {
  background: linear-gradient(90deg, #E05C5C 0%, #CD3134 50%, #A62125 100%);
  filter: drop-shadow(0 4px 6px rgba(224, 92, 92, 0.4));
}

.text-display {
  font-family: var(--font-display);
}
```

---

## Color Usage Guide

### Page Layout

| Element           | Token / Class          |
| ----------------- | ---------------------- |
| Page background   | `bg-white`             |
| Card / surface    | `bg-white` (via GlassCard) |
| Default border    | `border-neutral-200`   |
| Divider border    | `border-neutral-100`   |
| Section borders   | `border-[#EDB7AF]/20` or `border-light-blush/20` |

### Typography Colors

| Element                | Token / Class            |
| ---------------------- | ------------------------ |
| Headings, primary text | `text-neutral-900`       |
| Secondary text         | `text-neutral-700`       |
| Muted text             | `text-warm-muted` / `text-neutral-500` |
| Placeholder            | `placeholder:text-neutral-300` |

### Brand Colors

| Token              | Hex       | Usage                                              |
| ------------------ | --------- | -------------------------------------------------- |
| `primary-red`      | `#A62125` | Logo, active nav, section accents                  |
| `cta-red`          | `#CD3134` | Primary buttons, call-to-action elements           |
| `deep-red`         | `#801115` | Gradient start, darker hover states                |
| `highlight-red`    | `#E05C5C` | Glow effects, decorative blobs                     |
| `soft-coral`       | `#DE918B` | Soft decorative backgrounds                        |
| `dusty-rose`       | `#B77770` | Unused directly in components                      |
| `warm-muted`       | `#954A45` | Secondary body text, subtle accents                |
| `light-blush`      | `#EDB7AF` | Light backgrounds, borders, decorative elements    |

### Status Colors (used inline)

| Status  | Color Class           |
| ------- | --------------------- |
| Success | `text-emerald-700`, `bg-emerald-100` |
| Error   | `bg-red-50`, `border-primary-red/20`, `text-primary-red` |

---

## Typography

| Element             | Font            | Size              | Weight   | Color              |
| ------------------- | --------------- | ----------------- | -------- | ------------------ |
| Page heading (hero) | Space Grotesk   | `5xl-7xl`         | 900 (black) | `hero-red-text-clip` |
| Section heading     | Space Grotesk   | `3xl-5xl`         | 800 (extrabold) | `neutral-900` |
| Card title          | Space Grotesk   | `lg`              | 700 (bold) | `neutral-900` |
| Body text           | Inter           | `sm-base`         | 400 (normal) | `warm-muted` |
| Body text (large)   | Inter           | `base-lg`         | 400 (normal) | `warm-muted/90` |
| Label / chip        | JetBrains Mono  | `xs`              | 500 (medium) | `text-[#CD3134]` |
| Small muted         | Inter           | `xs`              | 400 (normal) | `neutral-500` |
| Uppercase tags      | JetBrains Mono  | `10px-xs`         | 700-800 (bold/extrabold) | `text-[#CD3134]` |
| Price / mono data   | JetBrains Mono  | `sm`              | 700 (bold) | `neutral-900` |

---

## Spacing

| Token       | Value | Usage                       |
| ----------- | ----- | --------------------------- |
| `gap-2`     | 8px   | Micro gaps, icon spacing    |
| `gap-4`     | 16px  | Button groups, grid gaps    |
| `gap-8`     | 32px  | Card grid spacing           |
| `p-6`       | 24px  | Card padding (standard)     |
| `p-8`       | 32px  | Large card padding          |
| `px-4 py-3` | 16/12px | Accordion row padding     |
| `px-5 py-2.5` | 20/10px | Button padding (pill)     |
| `rounded-full` | 9999px | Pill buttons, badges, navbar |

---

## Component Tokens

### GlassCard (reusable)

```
background:    bg-white
border:        1px solid border-neutral-200
border-radius: rounded-2xl
shadow:        shadow-sm (hover: shadow-md)
hover:         -translate-y-1 (if interactive)
```

### Buttons (Primary — Book Now / CTA)

```
background:    bg-cta-red (or hero-red-gradient)
text:          text-white
border-radius: rounded-full
padding:       px-5 py-2.5 (or px-8 py-4 for large)
font-size:     text-xs/sm
font-weight:   font-bold
hover:         hover:bg-deep-red / hover:opacity-95
shadow:        shadow-md shadow-primary-red/20
transition:    transition-all duration-300
```

### Buttons (Secondary — Glass)

```
background:    bg-white/30 backdrop-blur-md
border:        border border-white/50
text:          text-primary-red
border-radius: rounded-full
hover:         hover:bg-white/60
```

### Input Fields

```
background:  bg-white
border:      border border-light-blush/30
border-radius: rounded-lg
padding:     px-3.5 py-2.5
font-size:   text-xs
text:        text-neutral-900
placeholder: placeholder:text-neutral-300
focus:       focus:outline-none focus:border-cta-red
```

### Badges / Tags

```
background:    bg-primary-red/10 or bg-cta-red/10
text:          text-primary-red or text-cta-red
border-radius: rounded or rounded-full
padding:       px-2 py-0.5
font-size:     text-[10px]
font-weight:   font-bold
font-family:   font-mono
```

### Section Headers (with divider)

```
label tag:      text-xs font-mono font-bold uppercase tracking-widest text-[#CD3134]
                bg-[#CD3134]/5 px-3.5 py-1.5 rounded-full border border-[#CD3134]/10

heading:        text-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight

divider:        w-16 h-1 bg-gradient-to-r from-deep-red via-primary-red to-cta-red mx-auto rounded-full
```

---

## Invariants

- Never use hex values directly in components — use Tailwind v4 `@theme` token classes
- Font is always Inter (body), Space Grotesk (display), or JetBrains Mono (mono) — loaded via Google Fonts CDN
- Never use raw Tailwind color classes like `bg-red-500` or `text-gray-600` — use project tokens or neutral scale
- All borders default to `border-neutral-200` for cards; `border-light-blush/*` for decorative sections
- The primary brand color is `primary-red` (#A62125) — all CTAs use `cta-red` (#CD3134) for higher contrast
- `text-display` class must be used for all headings that need Space Grotesk font
- No emojis in UI — use Lucide React icons exclusively
