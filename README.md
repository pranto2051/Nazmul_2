# Nazmul Hasan Shouvo — Research Portfolio (Astro)

A modern, high-performance static research portfolio converted to [Astro](https://astro.build/) with React Islands, TypeScript, and Tailwind CSS. Featuring the original **Liquid Glass** aesthetic, dark/light mode, real-time searchable publications, interactive citation modals, research case studies, and figure gallery lightbox.

---

## Demo

![Nazmul Hasan Shouvo research portfolio homepage](./Demo%20Photo.png)

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

## 🖼️ ছবি পরিবর্তন নির্দেশিকা (How to Change Images)

পুরো ওয়েবসাইটের সকল ছবির লিংক একটি কেন্দ্রীয় ফাইলে সংরক্ষিত আছে:
👉 **`src/content/images.ts`**

### 🔍 ইউনিভার্সাল সার্চ কিওয়ার্ড (Universal Search Keywords):

আপনার এডিটরে সব ফাইলের মধ্যে ছবি খোঁজার জন্য **`Cmd + Shift + F`** (বা উইন্ডোজে `Ctrl + Shift + F`) চেপে নিচের যেকোনো একটি কিওয়ার্ড লিখে সার্চ করুন:

- **`IMAGE_CHANGE`**
- **`ইমেজ চেঞ্জ`**

সার্চ করলেই ওয়েবসাইটের যে যে জায়গায় ছবি ব্যবহার করা হয়েছে সেই প্রতিটি ফাইল ও লাইন তাৎক্ষণিকভাবে তালিকাভুক্ত হয়ে যাবে!

### 📌 ছবি পরিবর্তনের ২টি সহজ উপায়:

#### উপায় ১: সরাসরি অনলাইন URL ব্যবহার (সবচেয়ে সহজ)

`src/content/images.ts` ফাইলটি খুলুন এবং যে ছবিটি পরিবর্তন করতে চান, তার জায়গায় আপনার ছবির নতুন ডিরেক্ট লিংক (URL) পেস্ট করুন। যেমন:

```ts
// [ইমেজ চেঞ্জ / IMAGE_CHANGE] হোমপেজের মূল হিরো পোর্ট্রেট ছবি
portrait: 'https://i.imgur.com/your-photo.jpg',
```

#### উপায় ২: আপনার কম্পিউটার থেকে নিজের ছবি যুক্ত করা

1. আপনার ছবিটি প্রজেক্টের `public/images/` ফোল্ডারে রাখুন (যেমন `public/images/profile.jpg`)।
2. এরপর `src/content/images.ts` ফাইলে লিংকটি এভাবে দিন:

```ts
// [ইমেজ চেঞ্জ / IMAGE_CHANGE] হোমপেজের মূল হিরো পোর্ট্রেট ছবি
portrait: '/images/profile.jpg',
```

### 🗺️ প্রধান প্রধান ছবির তালিকা:

| ছবির ধরন                   | `src/content/images.ts`-এ কী (Key) | প্রদর্শিত স্থান                       |
| -------------------------- | ---------------------------------- | ------------------------------------- |
| মূল পোর্ট্রেট ছবি          | `portrait`                         | হোমপেজের হিরো সেকশন                   |
| বিকল্প পোর্ট্রেট ছবি       | `portraitAlt`                      | অল্টারনেট প্রোফাইল                    |
| সোশ্যাল শেয়ার ব্যানার      | `ogImage`                          | ফেসবুক, টুইটার, লিংকডইন শেয়ার প্রিভিউ |
| প্যানক্রিয়াটিক স্ক্যান     | `pancreasCT`                       | বেন্টো গ্রিড, রিসার্চ ও গ্যালারি      |
| ৩ডি সেগমেন্টেশন            | `segmentation3D`                   | রিসার্চ কেস স্টাডি ও গ্যালারি         |
| এআই মডেল ডায়াগ্রাম        | `vitArchitecture`                  | পেপার থাম্বনেইল ও গ্যালারি            |
| এক্সপ্লেইনেবল এআই হিটম্যাপ | `gradcamOverlay`                   | পেপার থাম্বনেইল ও গ্যালারি            |
| চার্ট ও গ্রাফ              | `rocCurve`, `confusionMatrix`      | পাবলিকেশন ও গ্যালারি                  |
| প্রজেক্ট স্ক্রিনশট         | `mongoNewsPortal`, `routeOptimise` | প্রজেক্টস পেজ                         |
| প্রেজেন্টেশন ও ইভেন্ট      | `conferenceTalk`, `guestLecture`   | গ্যালারি পেজ                          |
| সার্টিফিকেট স্ক্যান        | `ccnaCertificate`                  | গ্যালারি পেজ                          |

---

## 🌐 ফুটার ও সোশ্যাল মিডিয়া লিংক পরিবর্তন নির্দেশিকা (Social Media & Footer Guide)

ফুটারের সোশ্যাল মিডিয়া লিংক ও সেটিংস পরিবর্তন করার জন্য ফাইলটি ওপেন করুন:
👉 **`src/components/Footer.astro`**

### 🔍 সার্চ কিওয়ার্ড (Universal Search Keywords):

আপনার এডিটরে **`Cmd + Shift + F`** (বা উইন্ডোজে `Ctrl + Shift + F`) চেপে সার্চ করুন:

- **`SOCIAL_LINK`**
- **`সোশ্যাল লিংক`**

`src/components/Footer.astro` ফাইলের শুরুর দিকে `socialLinks` অ্যারেতে আপনার আসল প্রোফাইল লিংকগুলো পেস্ট করে দিন:

```ts
const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=your_id" },
  { name: "GitHub", url: "https://github.com/your-username" },
  { name: "ORCID", url: "https://orcid.org/0000-0000-0000-0000" },
  { name: "ResearchGate", url: "https://researchgate.net/profile/your-profile" },
  { name: "X (Twitter)", url: "https://x.com/your-handle" },
  { name: "Email", url: "mailto:mdnazmulhasanshouv@gmail.com" },
];
```

### ✉️ ফুটার ডিরেক্ট মেসেজ বক্স (Direct Message Box):

ফুটারে একটি ইন্টারেক্টিভ গ্লাস মেসেজ বক্স রয়েছে। ভিজিটররা তাদের ইমেইল ও বার্তা লিখে **"Send Message"** চাপলে তাত্ক্ষণিকভাবে আপনার ইমেইলে বার্তাটি পাঠানোর সুযোগ পাবে।

---

## 🌐 Deployment

Because this is a standard Astro static site, it can be deployed to any static host:

- **Vercel**: Run `npx astro add vercel` or connect repository directly.
- **Netlify**: Connect repository and set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Set `site` in `astro.config.mjs` and deploy the `dist/` folder via GitHub Actions.
- **Cloudflare Pages**: Connect repository with framework preset `Astro`.
