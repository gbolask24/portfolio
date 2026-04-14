# Design System — AI Customer Service Presentation Deck

## Product Context
- **What this is:** A slide-based architecture walkthrough presenting an AI-powered customer service system
- **Who it's for:** Technical hiring managers and senior engineers evaluating AI engineering depth
- **Space/industry:** AI/ML engineering portfolios, technical interview presentations
- **Project type:** Slide deck (HTML/CSS/JS, presenter-driven format)

## Aesthetic Direction
- **Direction:** Industrial-Minimal
- **Decoration level:** Intentional (subtle grain texture on background, thin ruled borders)
- **Mood:** Engineering document energy. Clean, precise, confident. A well-typeset technical paper meets a senior eng's architecture whiteboard. Not a startup pitch deck.
- **Reference sites:** Awwwards portfolios, technical architecture documentation

## Typography
- **Display/Hero:** Satoshi (900 weight, -.04em tracking) — geometric, warm, distinctive without being flashy. Signals taste.
- **Body:** DM Sans (400-600 weight) — clean, high x-height, excellent legibility at small sizes
- **UI/Labels:** DM Sans (600 weight)
- **Data/Tables:** JetBrains Mono (500-600 weight) — built-in tabular-nums, the engineer's font
- **Code:** JetBrains Mono
- **Loading:** Google Fonts CDN + Fontsource CDN for Satoshi
- **Scale:**
  - Slide title: clamp(1.6rem, 3vw, 2.2rem) / 700
  - Hero title: clamp(2rem, 4vw, 3rem) / 900
  - Card heading: .82rem / 700
  - Body: .88rem / 400
  - Mono labels: .65-.72rem / 600
  - Slide label: .7rem / 700, uppercase, .14em tracking

## Color
- **Approach:** Restrained. Single warm accent on cool-neutral darks.
- **Background:** #09090b — near-black, zinc family
- **Surface:** #18181b — zinc-900
- **Elevated:** #27272a — zinc-800
- **Border:** #3f3f46 — zinc-700
- **Text primary:** #fafafa — zinc-50
- **Text dim:** #a1a1aa — zinc-400
- **Text muted:** #71717a — zinc-500
- **Accent (amber):** #f59e0b — primary accent, used sparingly for emphasis, labels, active states, key diagram nodes
- **Amber dim:** rgba(245,158,11,.15) — tag backgrounds, subtle highlights
- **Amber glow:** rgba(245,158,11,.06) — radial gradient on hero slide only
- **Semantic green:** #34d399 — health/operational status in dashboard slide only
- **Semantic red:** #f87171 — error/alert in dashboard slide only
- **Dark mode:** N/A (presentation is dark-only)

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable (slides should breathe)
- **Scale:** 2xs(4) xs(8) sm(16) md(24) lg(32) xl(48) 2xl(64)

## Layout
- **Approach:** Slide-based (full-viewport slides with centered content)
- **Max content width:** 1100px for diagrams, 960px for dashboard, 900px for card grids
- **Border radius:** sm: 4px, md: 6px, lg: 10px (tight, not bubbly)
- **Diagrams:** 70%+ of viewport, minimal surrounding text

## Motion
- **Approach:** Minimal-functional
- **Slide transition:** opacity .45s ease (crossfade only)
- **No hover animations** (distract from presenting)
- **Easing:** ease for all transitions

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-12 | Industrial-Minimal aesthetic | Engineering document energy for interview context, not startup pitch |
| 2026-04-12 | Single amber accent | Every AI deck uses blue/purple. Amber on near-black reads as confident and architectural. Stronger visual identity for a 10-slide deck. |
| 2026-04-12 | Satoshi display font | Geometric, warm, immediately signals taste. Most developer portfolios use Inter or system stack. |
| 2026-04-12 | Subtle grain texture | No gradients, glow, or glassmorphism. Reads as mature and confident in the AI portfolio space. |
| 2026-04-12 | Zinc neutral scale | Cool neutrals from Tailwind's zinc palette. Coheres with warm amber accent. |
