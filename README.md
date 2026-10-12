# Nazmul Hasan Shouvo — Research Portfolio (Astro)

A modern, high-performance static research portfolio converted to [Astro](https://astro.build/) with React Islands, TypeScript, and Tailwind CSS. Featuring the original **Liquid Glass** aesthetic, dark/light mode, real-time searchable publications, interactive citation modals, research case studies, and figure gallery lightbox.

---

## ⚡ Quick Copy & Paste Run Commands

Simply copy and paste this command into your terminal to start the live server:

```bash
npm run dev
```

Or for first-time setup (install dependencies + run server in one go):

```bash
npm install && npm run dev
```

> 🌐 **Live URL:** Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 🚀 Step-by-Step Commands

### 1. Install dependencies

```bash
npm install
```

### 2. Start local development server (with Hot Reload)

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for production

```bash
npm run build
```

The optimized static output is generated in the `dist/` directory.

### 4. Preview the production build

```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── public/                     # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── components/             # Astro & React components
│   │   ├── Ambient.astro       # Floating glass orbs background
│   │   ├── ContactCards.tsx    # Interactive copy-to-clipboard cards
│   │   ├── ExperienceFilter.tsx# Category-filtered timeline
│   │   ├── FigureView.astro    # Accessible figure with captions
│   │   ├── Footer.astro        # Site footer
│   │   ├── GalleryGrid.tsx     # Filterable gallery with lightbox
│   │   ├── GlassCard.astro     # Liquid glass card wrapper
│   │   ├── Header.tsx          # Responsive navigation & theme switch
│   │   ├── PublicationCard.tsx # Citation modal & abstract accordion
│   │   ├── PublicationsFilter.tsx # Real-time search & filters
│   │   └── Refraction.astro    # SVG liquid refraction filter
│   ├── content/                # Academic data (profile, papers, etc.)
│   │   ├── awards.ts
│   │   ├── experience.ts
│   │   ├── gallery.ts
│   │   ├── images.ts           # Central image references
│   │   ├── profile.ts          # Bio, education, stats, interests
│   │   ├── projects.ts
│   │   ├── publications.ts     # All 10+ publications & book chapters
│   │   ├── research.ts         # Research areas & case studies
│   │   ├── site.ts             # Metadata & URLs
│   │   └── skills.ts
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML shell with SEO & theme script
│   ├── pages/                  # Astro file-based routes
│   │   ├── 404.astro           # 404 page
│   │   ├── contact.astro       # Contact page
│   │   ├── cv.astro            # Curriculum Vitae (print-ready)
│   │   ├── experience.astro    # Professional timeline
│   │   ├── gallery.astro       # Figures & certificates gallery
│   │   ├── index.astro         # Homepage (Hero, Bento, Selected pubs)
│   │   ├── projects.astro      # Applied software & data projects
│   │   ├── publications.astro  # Searchable publications record
│   │   └── research/
│   │       ├── index.astro     # Research overview
│   │       └── [slug].astro    # Dynamic research case studies
│   ├── styles/
│   │   └── global.css          # Design system tokens, glassmorphism, fonts
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── astro.config.mjs            # Astro configuration
└── tsconfig.json               # TypeScript configuration
```

---

## ✏️ How to Edit Content

All academic content is stored in clean TypeScript files under `src/content/`:

- **Bio & stats**: Edit `src/content/profile.ts`
- **Publications**: Add/update papers and BibTeX citations in `src/content/publications.ts`
- **Research case studies**: Edit `src/content/research.ts`
- **Experience timeline**: Update `src/content/experience.ts`
- **Projects**: Edit `src/content/projects.ts`
- **Gallery figures**: Edit `src/content/gallery.ts`
- **Images**: Centralized in `src/content/images.ts`

---

## 🌐 Deployment

Because this is a standard Astro static site, it can be deployed to any static host:

- **Vercel**: Run `npx astro add vercel` or connect repository directly.
- **Netlify**: Connect repository and set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Set `site` in `astro.config.mjs` and deploy the `dist/` folder via GitHub Actions.
- **Cloudflare Pages**: Connect repository with framework preset `Astro`.
