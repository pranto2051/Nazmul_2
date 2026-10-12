# Editing portfolio content

Content is intentionally stored in typed files here.

- **Publication:** add one object to `publications.ts`. Keep `id` unique. Leave unknown DOI, abstract, PDF, code, metrics, or BibTeX absent; the interface shows a TODO state.
- **Project:** add one object to `projects.ts`, then reference an image key from `images.ts`.
- **Figure:** add the URL to `images.ts`, then add a figure object to `gallery.ts` or a research project. Always write a factual alt and paper-style caption. Keep `demo: true` until replaced.
- **Replace demo images:** edit only `images.ts`; do not paste image URLs into components or other content files.

The exact owner name is exported once from `profile.ts` and is used to identify self-authorship.
