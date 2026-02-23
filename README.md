# Curated Estates | Real Estate and Mortgage Advisory

A digital platform for high-end property acquisition, private architectural estates, and structured mortgage advisory across the Greater Toronto Area (GTA).

## Core Practice

Curated Estates combines luxury property acquisition with tailored mortgage strategy. Built for clients who require discretion, data-driven valuation, and private transaction support:

- Private Acquisition Network: Direct coordination with verified property owners, family offices, and off-market sellers.
- Integrated Mortgage Advisory: Tailored financing and structured equity solutions aligned with estate acquisition.
- Market Analysis Journal: In-depth reporting on GTA neighborhood pricing, architectural trends, and regulatory updates.
- Focused Portfolios: Dedicated hubs for penthouses, private estates, and waterfront residences.
- Cinematic Presentation: GSAP-accelerated transitions, Lenis smooth scrolling, and architectural photography.

## Technology Stack

- Framework: [Next.js 16](https://nextjs.org/) (App Router)
- Language: TypeScript 5
- Styling: Tailwind CSS
- Animation: GSAP 3 (ScrollTrigger) and Framer Motion
- Typography: Playfair Display and Inter
- Icons: Lucide React
- Form Handling: React Hook Form and Zod

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm, yarn, or pnpm

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

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Sitemap

The application includes the following routes:

- Home (`/`): Hero showcase, curated property collection, and client dialogues.
- About (`/about`): Advisory history, philosophy, and performance milestones.
- Journal (`/blog`): Market intelligence and architectural commentary.
- Buyers (`/buyers`): Acquisition portal with property filtering.
- Sellers (`/sellers`): Property evaluation and private marketing intake.
- Contact (`/contact`): Consultation booking and direct advisory communication.
- Penthouses (`/penthouses`): Curated urban high-altitude residences.
- Private Estates (`/estates`): Multi-acre architectural properties in GTA submarkets.
- Waterfront (`/waterfront`): Lake Ontario and Lakeview shoreline properties.
- Area Guides (`/guides/[area]`): Focused guides for Mississauga, Oakville, Toronto, and Muskoka.
- Market FAQ (`/faq`): Transaction protocols, closing costs, and off-market procedures.

## Project Structure

```txt
app/               Next.js App Router pages and dynamic routes
components/        UI components (home, about, shared, forms)
lib/               Centralized datasets and helper utilities
public/            High-resolution photography and static brand assets
```

---

Copyright 2026 Curated Estates Real Estate and Mortgage Advisory. All rights reserved.
