<!-- UI rules: how the interface behaves — layout, interactions, and component patterns -->

# UI Rules

Concise rules for building Red Monk Wellness Clinic UI. The codebase is the source of truth — these rules document the patterns already in place so new work stays consistent.

---

## Font

Three Google Font families loaded via CDN in `src/index.css`:
- **Inter** — body text, inputs, general content
- **Space Grotesk** — display headings, section titles (via `.text-display` class)
- **JetBrains Mono** — labels, tags, prices, monospaced data (via `.font-mono`)

Apply `.text-display` to any heading that should use Space Grotesk. Apply `.font-mono` for technical labels and data.

---

## Layout

- Page max-width: `max-w-7xl` (1280px), centered with `mx-auto`
- Content padding: `px-4 sm:px-6 lg:px-8`
- Section vertical spacing: `py-16 sm:py-24`
- Gap between section header and content: `mb-16`
- Header: fixed `top-4`, centered with `-translate-x-1/2`, width `w-[calc(100%-2rem)]`
- All sections use `scroll-mt-14` to account for fixed header offset
- Section dividers: `border-y border-light-blush/20` or `border-t border-light-blush/25`

---

## Navbar

Floating pill navbar — `rounded-full` with `bg-white border-neutral-200 shadow-sm` (shadow-md when scrolled).

**Nav items (in order):** Home, Services, IV Menu, Beauty, About, Team, Journal

- Active item: `text-[#A62125] bg-neutral-100 shadow-sm`
- Inactive item: `text-neutral-600 hover:text-[#CD3134] hover:bg-neutral-50`
- Font: `text-[11px] uppercase tracking-wider font-semibold`
- Active state indicator: color change + background fill (pill shape)
- "Book Now!" CTA: `bg-cta-red hover:bg-deep-red text-white px-5 py-2.5 rounded-full`

---

## Cards

Every content section uses `GlassCard` component:

```
background:    bg-white (all intensities map to white)
border:        1px solid border-neutral-200
border-radius: rounded-2xl
shadow:        shadow-sm (hover: shadow-md if interactive)
hover:         -translate-y-1 (if interactive)
```

Props:
- `intensity`: "low" | "medium" | "high" (all map to white bg currently)
- `glowColor`: "red" | "blush" | "neutral" | "none" (subtle shadow variations)
- `interactive`: boolean — adds hover lift + cursor-pointer

Never use colored card backgrounds. Color goes inside cards via badges, icons, borders, and text.

---

## Typography Hierarchy

Four levels used consistently:

**Hero headline** — main page title
```
font-family: Space Grotesk (.text-display)
font-size:   text-5xl sm:text-6xl lg:text-9xl
font-weight: font-black (900)
line-height: leading-[0.95]
color:       text-white
```

**Section headings** — card titles, page section titles
```
font-family: Space Grotesk (.text-display)
font-size:   text-3xl sm:text-4xl lg:text-5xl
font-weight: font-extrabold (800)
color:       text-neutral-900
```

**Card titles** — individual card headings
```
font-family: Space Grotesk (.text-display)
font-size:   text-lg or text-base
font-weight: font-bold (700)
color:       text-neutral-900
```

**Body text** — descriptions, paragraphs
```
font-family: Inter
font-size:   text-xs to text-base
font-weight: font-normal (400) or font-light (300)
color:       text-warm-muted or text-neutral-700
```

**Mono labels** — tags, dates, technical text
```
font-family: JetBrains Mono (.font-mono)
font-size:   text-[10px] to text-xs
font-weight: font-bold (700) or font-extrabold (800)
color:       text-[#CD3134] or text-warm-muted
text-transform: uppercase
letter-spacing: tracking-wider or tracking-widest
```

---

## Badges / Tags

All tags use monospace font with uppercase tracking:

```
padding:     px-2 py-0.5 (small) or px-3.5 py-1.5 (pill)
font-size:   text-[10px] or text-xs
font-weight: font-bold or font-extrabold
font-family: font-mono
text-transform: uppercase
letter-spacing: tracking-wider or tracking-widest
```

---

## Buttons

**Primary (CTA):**
```
background:    bg-cta-red or hero-red-gradient
text:          text-white
border-radius: rounded-full
padding:       px-5 py-2.5 (or px-8 py-4 for large)
font-size:     text-xs or text-sm
font-weight:   font-bold
hover:         hover:bg-deep-red or hover:opacity-95
shadow:        shadow-md shadow-primary-red/20
transition:    transition-all duration-300
```

**Secondary (Glass):**
```
background:    bg-white/30 backdrop-blur-md
border:        border border-white/50
text:          text-primary-red
border-radius: rounded-full
hover:         hover:bg-white/60
```

**Ghost (expand toggle):**
```
background:    transparent (or bg-white/80)
border:        border-[#EDB7AF]/30
text:          text-warm-muted
hover:         hover:bg-primary-red hover:text-white
border-radius: rounded-full
```

---

## Form Inputs

```
background:        bg-white
border:            border border-light-blush/30
border-radius:     rounded-lg
padding:           px-3.5 py-2.5
font-size:         text-xs
font-family:       font-sans (Inter)
color:             text-neutral-900
placeholder color: placeholder:text-neutral-300
focus:             focus:outline-none focus:border-cta-red
transition:        transition-all
```

---

## Tables

No table components currently exist in the project.

---

## Empty States

No empty states currently implemented. All sections render with static data from `src/data.ts`.

---

## Modals

Two modal patterns used:

**Video/Experience Modal:**
```
backdrop:    fixed inset-0 bg-black/75 backdrop-blur-sm
container:   bg-neutral-950 border border-neutral-800 rounded-2xl
header:      bg-neutral-900 border-b border-neutral-800
close:       absolute top-right × button or "Close ×" in header
animation:   Motion scale(0.9→1) + opacity(0→1)
```

**Catalog Overlay:**
```
backdrop:    fixed inset-0 bg-black/75 backdrop-blur-md
container:   bg-white rounded-3xl border border-light-blush/30
header:      bg-cta-red text-white
close:       X icon button in header
animation:   Motion scale(0.95→1) + opacity + y offset
```

Both use `<AnimatePresence>` from Motion for enter/exit animations.

---

## Tailwind v4 Note

This project uses Tailwind v4. Tokens are defined with `@theme` in `src/index.css` — no `tailwind.config.ts` needed. The `@tailwindcss/vite` plugin is configured in `vite.config.ts`.

---

## Do Nots

- Never use Tailwind's built-in color classes (`bg-red-500`, `text-gray-600`) — use project tokens or neutral scale
- Never define colors in `tailwind.config.ts` — use `@theme` in `src/index.css`
- Never use emojis as icons — always use Lucide React (`lucide-react`)
- Never add gradients to card backgrounds — cards are always white
- Never use more than one font weight in a single text element
- Never use `hover:scale-*` transforms that shift layout (use `hover:-translate-y-*` or `hover:scale-*` on isolated elements only)
- Never hardcode `#` hex values in component JSX — use Tailwind token classes or CSS custom classes
