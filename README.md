# Curated Estates

Curated Estates is a modern luxury real estate and mortgage advisory platform built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, and GSAP ScrollTrigger animations.

Live Demo: [curatedestates.zainahmed.net](https://curatedestates.zainahmed.net/)

> **Portfolio Project Notice**: Curated Estates is an independent frontend engineering showcase designed and developed by [Zain Ahmed](https://zainahmed.net). All property listings, addresses, financial figures, client dialogues, and metrics are conceptual representations created for technical demonstration.

---

## Overview

The platform demonstrates how to build high-performance, editorial-grade web applications for luxury markets. It pairs architectural property presentation with an integrated mortgage advisory workflow, featuring smooth scrolling, interactive GSAP reveals, and responsive mobile layouts.

### Key Capabilities

- **Curated Property Hubs**: Dedicated collection pages for penthouses, private estates, and waterfront residences with filtering controls.
- **GSAP ScrollTrigger Motion**: Parallax image hero banners, timeline line-drawing reveals, and staggered entry animations synchronized with smooth scrolling.
- **Lenis Smooth Scroll Sync**: Virtual scrolling coordinated with GSAP's internal ticker to eliminate scroll stutter and trigger misalignment.
- **Mortgage Architecture Tools**: Interactive client-side mortgage calculators with down payment, interest rate, and amortization modeling.
- **Localized Market Journal**: Static site generated (SSG) articles covering GTA architectural trends and market liquidity shifts.
- **WCAG-Compliant Form Intake**: Type-safe consultation booking and property valuation forms validated with React Hook Form and Zod schemas.

---

## Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16.4 (App Router, Turbopack, React Server Components) |
| **Core** | React 19.3, TypeScript 5.9 |
| **Styling** | Tailwind CSS v4 (@tailwindcss/postcss), CSS Custom Properties |
| **Motion & Scroll** | GSAP 3.15 (ScrollTrigger), Lenis 1.3, Framer Motion 12.43 |
| **Primitives & Icons** | Radix UI primitives (@radix-ui/react-accordion, slider, slot), Lucide React |
| **Form & Validation** | React Hook Form 7.91, Zod 4.6, @hookform/resolvers |
| **Deployment** | Netlify with custom subdomain managed DNS |

---

## Getting Started

### Prerequisites

- Node.js 20.x or 22.x
- npm 10+ (or pnpm / yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thezaynahmed/modern-real-estate-website.git
   cd modern-real-estate-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   npm run start
   ```

---

## Application Structure

```txt
modern-real-estate-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, and Lenis sync
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
    └── images/                 # Optimized static assets
```

---

## Route Map

- `/` — Homepage featuring hero slider, responsive property search, curated grid, and client dialogue ticker.
- `/about` — Executive profile, advisory philosophy, performance milestones, and principles.
- `/buyers` — Interactive listings catalog with sidebar filters and instant search.
- `/sellers` — Property valuation questionnaire and asset marketing intake.
- `/penthouses` — High-rise luxury suites across Downtown Toronto.
- `/estates` — Multi-acre private properties in Bridle Path, Rosedale, and Forest Hill.
- `/waterfront` — Shoreline estates along Lake Ontario.
- `/blog` — Market analysis journal and architectural intelligence reports.
- `/faq` — Protocols on off-market acquisitions, down payments, and closing audits.
- `/contact` — Secure consultation booking and digital correspondence channels.

---

## License & Attribution

Designed and developed by [Zain Ahmed](https://zainahmed.net). Distributed under the MIT License for educational and portfolio demonstration purposes.
