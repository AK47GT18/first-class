# First Class Holdings Limited — Official Enterprise Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Biome](https://img.shields.io/badge/Biome-2.4.2-60A5FA?style=flat&logo=biome)](https://biomejs.dev/)

The official enterprise web application for **First Class Holdings Limited** — a dynamic and diversified investment and engineering holding company headquartered in Lilongwe, Malawi. First Class Holdings delivers mission-critical physical infrastructure, enterprise networking, intelligent surveillance systems, certified technical maintenance, and bespoke software platforms across Africa.

---

## 🏛️ Architecture & Tech Stack

- **Framework**: [Next.js 16.4.6](https://nextjs.org/) (App Router, Server Components & Turbopack bundler)
- **Runtime**: [React 19.3.0](https://react.dev/)
- **Styling**: [Tailwind CSS v4.3.3](https://tailwindcss.com/) with custom `@keyframes marquee` animations and inline `@theme` tokens
- **Typography**: [Geist Sans & Geist Mono](https://vercel.com/font) via `next/font/google`
- **Iconography**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/lu` & `react-icons/fa6`)
- **Code Quality**: [Biome v2.4.2](https://biomejs.dev/) for fast linting and formatting
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/) in strict mode (`tsc --noEmit` verified)

---

## 🌐 Site Structure & Key Pages

### 1. Homepage (`/`)
- **Flagship Hero**: Metropolitan twilight skyline backdrop, concise value proposition, and directional *"Work With Us"* & *"Explore Services"* CTAs.
- **Continuous Partner Marquee**: Dual-block gapless infinite logo loop featuring Tier-1 OEMs (Cisco, ZTE, Huawei, Mustek, Hiperdist, Pinnacle) with soft gradient edge dissolve masks.
- **About Us Section**: Executive narrative paired with verified corporate metrics (10+ Years of Execution, 90+ Projects Delivered).
- **Key Services Ledger**: 6 hairline-divided capability rows with dedicated domain icons and direct routes to `/services`.
- **Why Choose Us & Core Values**: Executive quote callout paired with a numbered 5-pillar values ledger.

### 2. About Us (`/about`)
- **Sub-Hero**: Standard corporate highlands atmospheric header.
- **Company Overview**: Narrative describing the investment mandate and community development focus, anchored by an executive team portrait (`/images/corp-1.jpg`).
- **Vision & Mission**: 2-column ledger featuring `LuCompass` and `LuTarget` iconography.
- **Core Values**: Numbered 5-part principles ledger (*Excellence, Integrity, Innovation, Customer Focus, Sustainability*) positioned alongside an authentic linked-hands unity photograph (`/images/core-values.jpg`).
- **Why Choose Us**: 4 open editorial columns (*Proven Track Record, Expert Team, Quality Assured, Growth-Oriented*) blending seamlessly into the section without boxed card containers.
- **Strengths & Differentiators**: 3-column structured grid (*Diverse Expertise, Strategic Partnerships, Innovation-Driven*).

### 3. Solutions Catalog & Services (`/services`)
- **Interactive Service Constructor**: Client-side domain switcher (*Engineering & Infrastructure, Technical Services, Software Development*) allowing visitors to configure engagement scopes in real-time.
- **Modular Solutions Catalog**: 3 collapsed editorial sections with high-resolution domain photography and hairline capability rows.
- **Structured Methodology**: 4-stage sequential process rail (*Discovery, Planning, Implementation, Ongoing Optimization*).
- **Industries Served**: Sticky editorial overview mapped to 5 key economic sectors (*Corporate, Telecom, Education & Government, Healthcare, Retail*).

### 4. Strategic Alliances & Partners (`/partners`)
- **Global Technology Ecosystem**: High-contrast 6-partner grid highlighting direct OEM alliances with Cisco Systems, ZTE Corporation, Huawei, Mustek Limited, Hiperdist, and Pinnacle ICT.
- **Commitment to Credibility**: Strategic alliance standards and authentic manufacturer warranty guarantees.

### 5. Contact & Support (`/contact`)
- **Direct Engagement Card**: 2-column contact interface featuring direct inquiry submission (`ContactForm.tsx`), 24/7 technical dispatch helpline (`+265 891 67 96 08`), and physical office location.
- **Location Map**: Full-width interactive satellite map of Lilongwe, Malawi with a live headquarters pin overlay.

---

## 📁 Project Directory Structure

```text
firstclass/
├── app/
│   ├── about/
│   │   └── page.tsx           # About Us page
│   ├── contact/
│   │   └── page.tsx           # Contact & headquarters map page
│   ├── partners/
│   │   └── page.tsx           # Strategic alliances & OEM partners page
│   ├── services/
│   │   └── page.tsx           # Interactive services constructor & catalog
│   ├── favicon.ico
│   ├── globals.css            # Tailwind v4 import & custom marquee keyframes
│   ├── layout.tsx             # Root layout with Geist font & hydration guards
│   └── page.tsx               # Homepage
├── components/
│   ├── ContactForm.tsx        # Client inquiry form with status handling
│   ├── Footer.tsx             # 4-column minimal white footer (no social links)
│   ├── Navbar.tsx             # Responsive header navigation
│   ├── PreFooterCTA.tsx       # Reusable dark pre-footer conversion section
│   └── ServicesConstructor.tsx # Dynamic domain switcher & scope builder
├── public/
│   ├── images/
│   │   ├── cisco.png          # Verified partner logo
│   │   ├── zte.png            # Verified partner logo
│   │   ├── huawei.svg         # Clean vector partner logo
│   │   ├── mustek.png         # Verified partner logo
│   │   ├── hipperdist.png     # Verified partner logo
│   │   ├── pinnacle.png       # Verified partner logo
│   │   ├── hero-home.jpg      # Homepage hero background
│   │   ├── hero-about.jpg     # About Us hero background
│   │   ├── hero-services.jpg  # Services hero background
│   │   ├── hero-partners.jpg  # Partners hero background
│   │   ├── hero-contact.jpg   # Contact hero background
│   │   ├── cta-bg.jpg         # Pre-footer CTA background
│   │   ├── core-values.jpg    # Core values unity photo
│   │   └── ...                # Sector & corporate imagery
├── biome.json                 # Biome formatting & linting configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and npm scripts
├── tsconfig.json              # TypeScript strict configuration
└── README.md                  # This documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or later
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/firstclassmw/firstclass.git
   cd firstclass
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles the production build |
| `npm run start` | Boots the compiled production server |
| `npm run lint` | Runs Biome code checks across all TypeScript and TSX files |
| `npm run format` | Automatically formats files using Biome |
| `npx tsc --noEmit` | Performs strict TypeScript type-checking across the entire codebase |

---

## 🎨 Design System & Editorial Principles

1. **Anti-AI-Slop Visual Hierarchy**:
   - Distinctive typography using large-scale headings (`text-4xl` to `text-6xl`) with tight leading (`leading-[1.0]`).
   - Clean hairline borders (`border-slate-200`, `divide-slate-200`) instead of generic heavy shadows or repetitive rounded cards.
   - Genuine high-contrast photography with authentic African corporate and infrastructure context.
2. **Performance & Core Web Vitals**:
   - Zero client-side bloat: Minimal hydration overhead using Server Components by default.
   - Next.js image optimization (`next/image`) with reserved aspect ratios preventing Cumulative Layout Shift (CLS).
   - Static prerender safety: All temporal dates are hardcoded (`© 2026`) avoiding blocking prerender time errors.
3. **Accessibility**:
   - High contrast text (`text-slate-900` on white, `text-white` on dark overlays).
   - Screen-reader accessible directional labels on all interactive links.

---

## 📞 Contact & Governance

- **Headquarters**: Lilongwe, Malawi
- **24/7 SLA Engineering Line**: `+265 891 67 96 08`
- **Email**: `info@firstclassmw.com`
- **Website**: [https://www.firstclassmw.com](https://www.firstclassmw.com)

---

*© 2026 First Class Holdings Limited. All rights reserved.*
