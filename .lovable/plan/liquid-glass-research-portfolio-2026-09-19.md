# Liquid Glass Research Portfolio

## Goal
Build a complete, static, multi-page research portfolio for Nazmul Hasan Shouvo in the existing TanStack Start app. Preserve the supplied academic content exactly, adapt the requested Next.js-specific details to TanStack Router, and use no backend.

## Experience and visual direction
- Create a restrained 2026 “liquid glass” system with clinical cyan/teal accents, scholarly serif body copy, geometric sans headings, and separately tuned light and dark themes.
- Use a living ambient background, layered glass surfaces, bright glass edges, limited refraction, pointer gleam, subtle tilt, and a single orchestrated entrance sequence.
- Respect reduced motion and reduced transparency, provide solid fallbacks, stable image ratios, visible focus states, keyboard navigation, and print-friendly CV output.
- Keep publication-heavy pages calm and highly scannable; reserve spectacle for the home portrait and gallery lightbox.

## Pages
- `/` — portrait-led introduction, exact biography, statistics, asymmetric research bento, selected publications, experience preview, and contact strip.
- `/publications` — searchable and filterable publication list, owner-name emphasis, expandable abstracts, computed statistics, and copyable BibTeX dialog.
- `/research` and `/research/$slug` — research areas and figure-led case studies with visible TODOs where metrics or unpublished details are missing.
- `/experience` — filterable unified research, teaching, and professional timeline.
- `/projects` — four seeded academic and technical projects.
- `/gallery` — filterable masonry figure collection with accessible keyboard/swipe lightbox and zoom.
- `/cv` — readable web CV, print styles, and a clearly unavailable download state if the PDF asset is not present.
- `/contact` — email/phone copy actions and placeholder social links clearly labelled.
- Custom not-found experience matching the site.

## Content architecture
- Add typed content modules for profile, publications, research, experience, teaching, projects, skills, awards, gallery, site settings, and the supplied centralized image map.
- Add a content editing guide covering publications, projects, figures, and demo-image replacement.
- Preserve every supplied name, date, status, title, author list, credential, and statistic; add visible `TODO:` labels instead of inventing DOI, PDF, code, abstract, metric, social profile, or dataset details.
- Detect self-authorship through one canonical profile constant.

## Shared interface
- Build the ambient background, reusable glass surface, floating navigation capsule, theme control, mobile menu sheet, figure component, interactive card, filter controls, copy control, publication item, citation dialog, and gallery lightbox.
- Use existing Radix-based dialog/sheet controls and install only the animation/theme packages needed for the requested interactions.
- Keep no more than six expensive glass layers active at once and defer below-fold rendering where practical.

## Metadata and credibility
- Give every content route unique title, description, Open Graph, Twitter, and canonical metadata.
- Add Person structured data on the home page and ScholarlyArticle structured data for publications, using only supplied facts.
- Add static sitemap and robots endpoints compatible with the project framework.
- Use semantic headings, lists, figures, captions, real alt text, unobtrusive demo chips, and lightly obfuscated email presentation.

## Validation
- Check compilation through the project harness, then exercise navigation, theme persistence, filters, search, BibTeX copy, mobile menu, lightbox controls, contact copy actions, not-found view, and print styling in the live preview.
- Inspect desktop and mobile screenshots in both themes for overflow, overlap, contrast, glass readability, image loading, and reduced-preference fallbacks.
- Confirm every content route has required metadata and the home placeholder is fully removed.

## Deliverables
- Complete runnable source with no backend and no missing-code placeholders.
- `DESIGN.md` with palette, typography, wireframes, and research-specific design principles.
- Root `README.md` with local setup, content editing, image replacement, static deployment guidance, and framework-appropriate hosting instructions.
