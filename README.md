# Nazmul Hasan Shouvo — Research Portfolio

A static-first TanStack Start, React 19, TypeScript, Tailwind CSS v4, and Motion portfolio. There is no backend, database, API, CMS, or admin panel.

## Run
```bash
bun install
bun run dev
```

## Edit content
All academic content is under `src/content`. Start with `src/content/README.md`. Replace every demo image in `src/content/images.ts`; no page contains an image URL directly.

Unknown artefacts are intentionally displayed as `TODO:` rather than fabricated. Add the final CV as `public/cv/Nazmul_Hasan_Shouvo_CV.pdf`, then enable the download action in the CV page.

## Build and deploy
```bash
bun run build
```
Deploy the generated app through Lovable or another TanStack Start-compatible host. For GitHub Pages, use a static adapter/export pipeline and configure the repository base path before building. For Vercel, import the repository and use the default Vite/TanStack build settings.

## Accessibility and performance
The interface includes keyboard-operated dialogs, visible focus states, reduced-motion and reduced-transparency modes, reserved image ratios, lazy-loaded gallery figures, print rules, and solid glass fallbacks.
