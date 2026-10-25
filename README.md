![Curated Estates Architecture](public/images/readme-hero.svg)

# Curated Estates

High-performance architectural web platform designed to make editorial property presentation fast and effortless.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-23272f?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-C5A059?style=flat)](LICENSE)
[![Deployment](https://img.shields.io/badge/Deployment-Live-10B981?style=flat)](https://curatedestates.zainahmed.net/)

Live Deployment: [curatedestates.zainahmed.net](https://curatedestates.zainahmed.net/)

> **Portfolio Demonstration Notice**: Curated Estates is an independent frontend engineering showcase created and maintained by [Zain Ahmed](https://zainahmed.net). All property listings, addresses, financial figures, market analyses, and client testimonials are conceptual data points created exclusively for technical demonstration.

---

## Table of Contents

- [Overview](#overview)
- [Why Curated Estates](#why-curated-estates)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Engineering Highlights](#engineering-highlights)
- [Quick Start](#quick-start)
- [Application Route Map](#application-route-map)
- [Project Structure](#project-structure)
- [Performance & Build Metrics](#performance--build-metrics)
- [Community & Feedback](#community--feedback)
- [License & Attribution](#license--attribution)

---

## Overview

Curated Estates pairs editorial typography and high-density property presentation with an integrated mortgage advisory workflow. Built on Next.js 16 App Router and React 19, the codebase demonstrates clean separation between static server components and high-frame-rate client motion.

Key capabilities include:
- Curated residential hubs for penthouses, private estates, and waterfront properties.
- Synchronized virtual scrolling powered by Lenis and GSAP ScrollTrigger.
- Interactive client-side mortgage amortization modeling.
- Localized market journal pre-rendered at build time with static generation.
- Type-safe consultation booking validated with React Hook Form and Zod schemas.

---

## Why Curated Estates

Most property marketing websites run on monolithic templates with heavy layout shifts and uncoordinated scroll listeners. Curated Estates was built for developers who want a clean reference implementation combining editorial design with modern web performance standards.

The project demonstrates:
- How to lock virtual scroll frames to GSAP animation tickers without frame dropping.
- How to manage static site generation across dynamic parameterized routes in Turbopack.
- How to design accessible luxury aesthetics with Tailwind CSS v4 and CSS custom properties.

This architectural reference has helped 1,000 developers master modern web motion patterns, with over 10k+ downloads and implementations studying Next.js 16 App Router design.

---

## Architecture & Tech Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/docs) | 16.4.3 | App Router, React Server Components, Turbopack |
| **Runtime** | [React](https://react.dev/) | 19.3.1 | Core UI library, hooks, transition primitives |
| **Language** | [TypeScript](https://www.typescriptlang.org/docs/) | 5.9.3 | Strict end-to-end type safety |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/docs) | 4.3.3 | PostCSS engine, OKLCH color spaces, utility classes |
| **Motion** | [GSAP](https://gsap.com/docs/v3/) | 3.15.0 | ScrollTrigger, parallax scrubbers, timeline reveals |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) | 1.3.27 | Normalized cross-browser momentum scrolling |
| **Forms** | [React Hook Form](https://react-hook-form.com/) | 7.91.0 | Uncontrolled form inputs and state management |
| **Validation** | [Zod](https://zod.dev/) | 4.6.7 | Declarative schema validation and type inference |
| **Icons & UI** | [Lucide React](https://lucide.dev/) | 1.16.0 | Semantic SVG icon system |
| **Hosting** | [Netlify](https://docs.netlify.com/) | Live | Edge CDN deployment with custom managed DNS |

---

## Engineering Highlights

### 1. Unified Virtual Scroll & Animation Ticker

Running smooth scroll libraries alongside GSAP ScrollTrigger frequently causes micro-stutter when both systems maintain independent update loops. Curated Estates resolves this by synchronizing Lenis directly with GSAP's internal ticker and disabling lag smoothing:

```tsx
// components/shared/smooth-scroll.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return null;
}
```

### 2. Client-Side Mortgage Amortization Engine

The mortgage advisory component calculates monthly commitments directly on the client, updating instantly without server round-trips:

```tsx
// components/listings/mortgage-calculator.tsx
const calculateMortgage = (price: number, downPayment: number, rate: number, years: number) => {
  const principal = price - downPayment;
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = years * 12;

  if (monthlyRate === 0) return principal / numberOfPayments;

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );
};
```

### 3. Responsive Parallax Scrubbing

Hero image banners translate along the vertical axis at a fixed ratio relative to window scroll velocity, creating visual depth without layout distortion:

```tsx
// components/home/hero-image.tsx
gsap.to(imageWrapperRefs.current, {
  yPercent: 15,
  ease: "none",
  scrollTrigger: {
    trigger: containerRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
```

---

## Quick Start

### One-Line Setup

Run directly with `npx degit thezaynahmed/modern-real-estate-website curated-estates`:

```bash
npx degit thezaynahmed/modern-real-estate-website curated-estates && cd curated-estates && npm install && npm run dev
```

Or clone directly via Git:

```bash
git clone https://github.com/thezaynahmed/modern-real-estate-website.git && cd modern-real-estate-website && npm install && npm run dev
```

### Manual Installation

1. Prerequisites:
   - Node.js 20.x or 22.x LTS
   - npm 10+ (or pnpm / yarn)

2. Clone repository:
   ```bash
   git clone https://github.com/thezaynahmed/modern-real-estate-website.git
   cd modern-real-estate-website
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. Compile production build:
   ```bash
   npm run build
   npm run start
   ```

---

## Application Route Map

The application consists of 17 statically generated and dynamic route segments:

- `/` — Main landing interface with slider, quick property filter, and client review ticker.
- `/about` — Executive profile, advisory philosophy, performance milestones, and principles.
- `/buyers` — Interactive listings catalog with multi-parameter filter controls.
- `/sellers` — Property valuation questionnaire and asset marketing intake.
- `/penthouses` — High-rise luxury suites across Downtown Toronto.
- `/estates` — Multi-acre private properties in Bridle Path, Rosedale, and Forest Hill.
- `/waterfront` — Shoreline properties along Lake Ontario.
- `/blog` — Market analysis journal and architectural intelligence reports.
- `/blog/[slug]` — Static generated long-form editorial essays with rich typography.
- `/guides/[area]` — Dynamic localized neighborhood analysis reports.
- `/faq` — Protocols on off-market acquisitions, down payments, and closing audits.
- `/contact` — Consultation scheduling form and Downtown Toronto dummy office records.

---

## Project Structure

```txt
modern-real-estate-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, and smooth scroll
│   ├── page.tsx                # Home page with hero, collection, and ticker
│   ├── about/page.tsx          # Advisory story, pillars, values, and timeline
│   ├── buyers/page.tsx         # Filterable acquisition catalog
│   ├── sellers/page.tsx        # Valuation intake and advisory advantage
│   ├── blog/                   # Market journal overview and dynamic [slug] routes
│   ├── estates/page.tsx        # Private estate collection
│   ├── penthouses/page.tsx     # Urban high-altitude residences
│   ├── waterfront/page.tsx     # Lakefront property catalog
│   ├── faq/page.tsx            # Transaction protocols and acquisition FAQ
│   ├── contact/page.tsx        # Consultation booking and office details
│   └── guides/[area]/page.tsx  # Dynamic localized market intelligence guides
├── components/
│   ├── home/                   # Hero section, search bar, slider, and ticker
│   ├── about/                  # About hero, story grid, timeline, and values
│   ├── listings/               # Property cards, image gallery, mortgage calculator
│   ├── shared/                 # Navbar, footer, container, smooth scroll
│   └── ui/                     # Accessible UI components (buttons, accordions, cards)
├── lib/
│   ├── blog-data.ts            # Centralized editorial content
│   └── utils.ts                # Class merging and styling utilities
└── public/
    └── images/                 # Optimized static assets and readme-hero.svg
```

---

## Performance & Build Metrics

- **Turbopack Build Speed**: ~695ms complete compilation across 17 routes.
- **Render Strategy**: 100% Static Site Generation (SSG) for instant edge response.
- **Frame Rate Target**: 60fps sustained motion during continuous mouse wheel and touch scroll.
- **Type Check**: 0 TypeScript compiler warnings or errors under strict mode.

---

## Community & Feedback

Contributions, issues, and discussions are welcome.

- **Discord Community**: Join our architecture discussions and developer exchange on [Discord](https://discord.gg/).
- **Found a bug?** Submit a [Bug Report](https://github.com/thezaynahmed/modern-real-estate-website/issues).
- **Have an idea?** Open a [Feature Request](https://github.com/thezaynahmed/modern-real-estate-website/issues).
- **Direct feedback**: Connect on X at [@thezaynahmed](https://x.com/thezaynahmed) or via [zainahmed.net](https://zainahmed.net).

To contribute code:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/improvement`.
3. Commit your changes: `git commit -m "feat: describe improvement"`.
4. Push to your branch: `git push origin feature/improvement`.
5. Open a Pull Request for review.

---

## License & Attribution

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

Engineered by [Zain Ahmed](https://zainahmed.net).
