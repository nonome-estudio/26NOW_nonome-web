# Nonome Web (26NOW_nonome-web)

Public repository for the Nonome website.

## Tech
- Astro (SSG)
- TypeScript

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deployment
Deployed via **GitHub Pages**.

## Content
Project content lives in `src/content`.

Each entry supports:
- `tags: string[]`
- `content?: ContentBlock[]` blocks (optional)

`ContentBlock` currently supports:
- `text` (markdown string)
- `image` (src/alt + optional localized caption)
- `video` (self-hosted src + optional poster/caption)
- `embed` (YouTube/Vimeo/generic iframe via URL)
- `widget` (future interactive blocks: IFC viewer / Three.js / iframe; currently a placeholder renderer)

## License
- Code: MIT (TBD)
- Content (images/text): Copyright © Nonome
