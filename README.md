# Project Olivaw Website

Landing page for Project Olivaw: copy-paste Rust components for robotics and embedded systems, inspired by the "you own the code" philosophy.

This project replaces the Astro starter template with a complete marketing site built using Astro + Tailwind CSS v4.

## Overview

- Framework: Astro 6
- Styling: Tailwind CSS v4 (via `@tailwindcss/vite`) + custom CSS design tokens
- Typography: Inter + JetBrains Mono (`@fontsource`)
- Animations: native `IntersectionObserver` reveal animations (no animation library)
- Output: static build with sitemap generation (`@astrojs/sitemap`)
- Theme: light/dark mode with persistent localStorage toggle and anti-flash boot script

Production site is configured as: `https://polivaw.grisu.co`

## What Was Implemented

The staged implementation follows the "Project Olivaw Website — Implementation Plan" and includes:

1. Full landing page architecture (header, hero, sections, footer)
2. Reusable UI primitives (`Button`, `Badge`, `Card`, `CodeBlock`, `Icon`, `SectionTitle`)
3. Section components:
   - `Hero`
   - `About`
   - `Features`
   - `Projects`
   - `GettingStarted`
   - `Community`
4. Type-safe component contracts in `src/types/components.ts`
5. Global design system in `src/styles/global.css`
6. Scroll-in animation system in `src/scripts/animations.ts`
7. Starter cleanup (removed default Astro assets and `Welcome.astro`)

## Project Structure

```text
/
├── astro.config.mjs
├── package.json
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.astro
│   │   │   ├── Header.astro
│   │   │   └── ThemeToggle.astro
│   │   ├── sections/
│   │   │   ├── About.astro
│   │   │   ├── Community.astro
│   │   │   ├── Features.astro
│   │   │   ├── GettingStarted.astro
│   │   │   ├── Hero.astro
│   │   │   └── Projects.astro
│   │   └── ui/
│   │       ├── Badge.astro
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── CodeBlock.astro
│   │       ├── Icon.astro
│   │       └── SectionTitle.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── animations.ts
│   ├── styles/
│   │   └── global.css
│   └── types/
│       └── components.ts
└── README.md
```

## Getting Started

### Requirements

- Node.js `>=22.12.0`
- pnpm

### Install

```bash
pnpm install
```

### Run Dev Server

```bash
pnpm dev
```

Visit: `http://localhost:4321`

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Available Scripts

| Command        | Description                               |
| :------------- | :---------------------------------------- |
| `pnpm dev`     | Start Astro dev server                    |
| `pnpm build`   | Build static production output in `dist/` |
| `pnpm preview` | Serve the production build locally        |
| `pnpm astro`   | Run Astro CLI commands                    |

## Styling and Theming Notes

- Tailwind v4 is loaded through `@import 'tailwindcss';` in `src/styles/global.css`.
- Design tokens are defined via CSS variables in `:root` and `.dark`.
- The theme toggle stores user preference in `localStorage` under `olivaw-theme`.
- A blocking inline script in `src/layouts/Layout.astro` applies theme before paint to avoid FOUC/FOWT.

## Animations

- Elements annotated with `data-animate` and `data-animate-stagger` reveal on scroll.
- Logic lives in `src/scripts/animations.ts`.
- Each animated element is observed once and unobserved after becoming visible.

## SEO and Metadata

- `src/layouts/Layout.astro` sets canonical URL, Open Graph, and Twitter metadata.
- Sitemap is generated through `@astrojs/sitemap` during build.
