# 🇳🇬 Naija66 — Explore Nigeria

> **Then. Now. Everywhere in between.**  
> An interactive, immersive civic and cultural platform celebrating Nigeria’s rich history, geography, and heritage — from Independence Day on October 1, 1960 to Nigeria @66 and beyond.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Overview

**Naija66** is a modern web application designed to make Nigerian history and civic education engaging, accessible, and visually stunning. It combines historical storytelling, interactive geospatial exploration, and gamified knowledge checks to bring Nigeria's story to life for citizens, students, and enthusiasts worldwide.

---

## ✨ Key Features

- **⏳ Interactive Historical Timeline (`/explore`)**
  - Journey through key milestones from 1960 to 2026+.
  - Curated events across **History**, **Culture**, **Sports**, **Technology**, and **Global Affairs**.
  - Interactive timeline scrubber with smooth keyboard navigation (arrow keys) and slide transitions.

- **🗺️ Interactive Map of 36 States + FCT (`/explore/map`)**
  - Custom vector map of Nigeria powered by **D3-geo** and optimized GeoJSON boundaries.
  - Deep-dive into any of Nigeria's 36 states and the Federal Capital Territory (Abuja).
  - Detailed profiles including state capitals, geopolitical zones, creation years, slogans, governors, and historical context.
  - URL deep-linking support (e.g. `?state=lagos`).

- **🧠 Civic & History Quizzes (`/explore/quiz`)**
  - Three distinct challenge tracks:
    1. **Timeline Quiz**: Moments, dates, and turning points.
    2. **Civic Basics**: Constitution, national institutions, and governance.
    3. **Map & Geography**: States, capitals, landmarks, and zones.
  - Real-time scoring, instant explanations for answers, and suggested review links.

- **🏛️ National Identity & Heritage Guide (`/about`)**
  - In-depth guide to Nigeria’s national symbols:
    - **The Flag**: History and design by Michael Taiwo Akinkunmi.
    - **The Coat of Arms**: Symbolism of the eagle, horses, Niger & Benue rivers, and *Costus spectabilis* flower.
    - **The National Anthems**: History of *"Nigeria, We Hail Thee"* and *"Arise, O Compatriots"*.
    - **The National Pledge & Motto**: Unity and Faith, Peace and Progress.
  - Quick country snapshot: land area, languages (500+), ethnic groups (370+), currency (₦ Naira), and capitals.

- **⏱️ Live Independence Counter**
  - Dynamic navigation widget tracking elapsed days and years since October 1, 1960, with special recognition on Independence Day.

- **🎨 Modern Design & Accessibility**
  - Crafted with modern green-and-neutral aesthetic inspired by Nigerian colors.
  - Fluid animations powered by Motion and custom CSS easing.
  - Fully responsive on mobile, tablet, and desktop screens.
  - Complete SEO metadata, OpenGraph tags, JSON-LD structured data, sitemap, and robots configuration.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens |
| **Geospatial & Maps** | [D3-geo](https://d3js.org/d3-geo) + GeoJSON + Leaflet / React-Leaflet |
| **Animations** | [Motion](https://motion.dev/) + CSS Keyframe Animations |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linting & Code Quality**| [ESLint 9](https://eslint.org/) |

---

## 📁 Project Structure

```text
naija66/
├── public/                 # Static assets (images, icons, OG banners)
│   ├── images/
│   │   ├── symbols/        # National flag, coat of arms, etc.
│   │   ├── timeline/       # Historic photography per milestone
│   │   └── zuma-rock.jpg
│   └── favicon.ico
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── about/          # /about (National symbols and country overview)
│   │   ├── explore/        # /explore (Interactive timeline)
│   │   │   ├── map/        # /explore/map (D3 interactive state map)
│   │   │   └── quiz/       # /explore/quiz & /explore/quiz/[quizId]
│   │   ├── icon.svg        # App icon
│   │   ├── layout.tsx      # Root layout (Navigation, Metadata, JSON-LD, Footer)
│   │   ├── page.tsx        # Landing / Hero screen
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic sitemap.xml
│   ├── components/         # Reusable UI & layout components
│   │   ├── explore/        # Journey, NigeriaMap, MapClient, Quiz, TimelineScrubber
│   │   ├── ui/             # Reusable primitives (Buttons, etc.)
│   │   ├── Footer.tsx      # Global footer
│   │   ├── Navigation.tsx  # Navbar with live independence counter & drawer
│   │   ├── Motion.tsx      # Motion wrapper component
│   │   └── TransitionLink.tsx
│   ├── data/
│   │   └── geo/            # GeoJSON boundary data for Nigerian states
│   ├── lib/                # Static datasets and utility functions
│   │   ├── about.ts        # National symbols and fast facts data
│   │   ├── quiz.ts         # Quiz question banks and definitions
│   │   ├── states.ts       # 36 states + FCT data and helpers
│   │   └── timeline.ts     # Historical timeline moments
│   └── styles/
│       └── globals.css     # Tailwind v4 import, CSS custom properties, and animations
├── .env                    # Environment variables
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js**: `v18.18+` or `v20+` recommended
- **Package manager**: `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dskyle77/naija66.git
   cd naija66
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (or copy from `.env.example` if available):
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js local development server on `localhost:3000` |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to verify code quality |

---

## 🌐 Deployment

The easiest way to deploy this application is using [Vercel](https://vercel.com/):

1. Push your code to a GitHub/GitLab repository.
2. Import the repository into Vercel.
3. Configure `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy!

---

## 🤝 Contributing

Contributions are warmly welcomed! If you would like to contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
