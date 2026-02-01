## What
- Added WebP versions for the 6 project images in `public/images/projects` and updated references to use `.webp` (kept original `.png` files).
- Added `imageWidth`/`imageHeight` in architecture content frontmatter + schema (optional).
- Card component now outputs `width`/`height` attributes when provided to reduce CLS.

## Size savings
Converted the heaviest PNGs to WebP (quality=75).
- terras-almacen: 6,677,259 -> 77,496 bytes (98.8% smaller)
- pazo-toubes: 4,322,524 -> 127,460 bytes (97.1% smaller)
- auditorio-ribeira: 2,109,103 -> 70,462 bytes (96.7% smaller)
- o-castro: 1,943,834 -> 151,004 bytes (92.2% smaller)
- centro-innovacion: 1,812,321 -> 65,696 bytes (96.4% smaller)
- rag-pardo-bazan: 731,554 -> 25,658 bytes (96.5% smaller)

**TOTAL:** 17,596,595 -> 517,776 bytes (17,078,819 bytes saved, ~97.1% smaller)

## Verification
- `npm run build`
