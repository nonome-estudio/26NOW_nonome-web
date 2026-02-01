# Architecture Review (Independent) — 2026-02-01

Scope of this review: **architecture consistency with HLD/LLD**, **UI component boundaries**, **i18n routing sanity**, **content collections usage**, and **maintainability**. (Intentionally minimal overlap with DevSecOps concerns.)

## Executive summary
The codebase broadly follows the intended HLD/LLD shape (language-prefixed routes, shared Header/Footer, shared Card + CardGrid). The largest architectural drift is around **“single source of truth”** and **maintainability**: there are **unused/legacy layers** (e.g., `src/lib/content/getContent.ts`, `src/layouts/Layout.astro`, and some type structures) left behind as implementation evolved to Astro Content Collections.

Additionally, page-level implementation repeats the same HTML head/body boilerplate and inline styles across routes, and the Card interaction script introduces avoidable complexity (multiple document listeners, role/button semantics).

Overall: the architecture is close to the LLD, but needs a small consolidation pass to remove dead code, centralize mapping logic, and make i18n routing more robust.

## Observations (HLD/LLD alignment)

### What matches well
- **Routing model** matches HLD/LLD:
  - `src/pages/index.astro` redirect → `/es/`.
  - `src/pages/[lang]/*` implements `/{lang}/…`.
  - `getStaticPaths()` enumerates `LANGS`.
- **Component structure** matches LLD:
  - `src/components/layout/{Header,Footer}.astro`
  - `src/components/ui/Card/*`, `src/components/ui/CardGrid/*`
- **Content collections exist** and are used on grid pages:
  - `src/content/config.ts` defines `architecture`, `services`, `cases`.
  - Pages use `getCollection()` and map to `CardGrid` items.

### Where it drifts / creates confusion
- LLD mentions `src/content/collections.ts`, but implementation correctly uses Astro’s `src/content/config.ts` convention. This is fine, but the docs should be updated to avoid cognitive dissonance.
- `src/lib/content/getContent.ts` states “placeholder until content collections are implemented” but collections **are** implemented and used. This is now **dead/contradictory architecture**.
- `src/layouts/Layout.astro` appears to be a leftover starter template and is not used by pages (pages hand-roll `<html>`, `<head>`, repeated CSS).

## i18n routing sanity

### Works today
- `getStaticPaths()` per language is straightforward and predictable.
- `fallbackText()` provides ES → EN fallback behavior consistent with HLD.

### Risks / edge cases
- Language toggle uses:
  - `/${otherLang}${Astro.url.pathname.slice(3)}`

  This assumes the active path always begins with `/<2-letter-lang>`.
  - It will behave oddly if the current page is ever rendered without that prefix (e.g., future non-i18n pages, error pages), or if the lang segment changes.
  - It drops query strings and hash fragments.

Recommendation: introduce a small helper (e.g., `lib/i18n/routes.ts`) that:
- validates/normalizes pathname,
- replaces the leading `/{lang}` segment safely,
- preserves `search` and `hash`.

## UI component boundaries & maintainability

### Good boundaries
- Pages are responsible for loading content and mapping to view props.
- UI components (`Card`, `CardGrid`) are data-agnostic.

### Maintainability issues
1) **Repeated page boilerplate and inline styles**
- `architecture.astro`, `digital/services.astro`, `digital/cases.astro`, and `[lang]/index.astro` each repeat:
  - `<meta charset>`, viewport, basic `<title>`.
  - repeated `html, body` styling, `.main`, headings, intro paragraph styles.

This violates the LLD intent of “single source of truth” at the layout level.

2) **Card script scales poorly and mixes responsibilities**
- `Card.astro`:
  - Adds a `document.addEventListener('click', …)` **inside a loop**, creating N document listeners for N cards.
  - Implements global behaviors (close on outside click) inside each component instance.

This is an architectural boundary smell: per-card components shouldn’t register repeated global listeners.

3) **Semantic/a11y mismatches**
- The Card is an `<article role="button" tabindex="0">` with click/keydown handlers.
  - This is workable, but a native `<button>` (or `<a>` once click-through exists) would reduce custom a11y surface area.
  - If “v1 no navigation” is strict, consider whether “role=button” is needed vs. “group/region” semantics.

(LLD explicitly calls out accessibility, so this deserves intentionality.)

## Content collections usage

### Current state
- Astro Content Collections are in place, and pages query them directly.
- Schema requires `id`, `order`, localized `title`, `description`, and `image`.

### Maintainability recommendations
- Centralize the common transformation:
  - Each page repeats: `getCollection(name) → sort by order → map() to {title, description, imageSrc, imageAlt}`.

Create a single helper in `src/lib/content/` such as:
- `getCardGridItems(collectionName, lang)`

This improves consistency, reduces duplication, and makes future changes (e.g., optional images, new fields, filtering) safer.

- Consider updating `src/types/content.ts` to reflect what is *actually used*.
  - Today, `CardItem`, `CardKind`, etc. appear to be legacy from the previous in-code content approach.
  - Either remove them or explicitly re-adopt them as the internal representation of collection entries.

## Priority findings

### P0 (Fix soon — causes ongoing confusion / architectural drift)
1) **Remove or quarantine dead architecture layers**
   - `src/lib/content/getContent.ts` contradicts the current content system.
   - If not used, delete it; if needed, rewrite it to be the *one* place that reads from collections.

2) **Decide on the layout strategy and enforce it**
   - Either use `src/layouts/Layout.astro` for shared `<html>/<head>`/global styles (and make it lang-aware), or remove it.
   - Current state encourages page-by-page divergence.

### P1 (Refactors that pay back quickly)
1) **Extract shared page chrome + base styles**
   - A small `BasePage.astro` layout component (lang-aware) that composes Header/Footer and provides:
     - consistent `<title>` pattern
     - global typography
     - standard `.main` spacing

2) **Fix Card interaction implementation**
   - Replace per-card global listeners with:
     - a single delegated document click handler, or
     - a parent-level controller (e.g., CardGrid manages “open card id”).

3) **Add an i18n route helper**
   - Avoid hard-coded `.slice(3)`.

### P2 (Nice-to-have / design alignment)
1) **Contextual navigation per HLD**
   - HLD describes contextual nav (“Architecture” vs “Digital” area). Current Header always shows all links.
   - Decide whether HLD still stands; if yes, implement context-aware nav state.

2) **Normalize naming**
   - HLD/LLD refer to “Case”; code uses “cases” collection and `CaseStudy` type.
   - Pick one naming convention to reduce mental overhead.

## Recommended refactor plan (no feature changes)
1) **Clean-up pass**
   - Remove unused starter files (`src/layouts/Layout.astro` if not used).
   - Remove legacy placeholder content source (`src/lib/content/getContent.ts`).

2) **Introduce a single content-to-UI mapping layer**
   - `lib/content/getCardGridItems.ts` (or similar) used by all grid pages.

3) **Introduce a shared page layout**
   - Create a lang-aware base layout used by all `[lang]` pages.

4) **Harden i18n route manipulation**
   - Replace string slicing with a helper that understands `/{lang}/…`.

5) **Revisit Card semantics**
   - Choose a deliberate v1 interaction model:
     - hover + focus reveals description (CSS)
     - optional tap-to-expand on touch (JS)
   - Implement JS in a scalable way (single listener / event delegation).

---

## Quick file inventory referenced
- HLD/LLD: `docs/hld.md`, `docs/lld.md`
- Routes: `src/pages/index.astro`, `src/pages/[lang]/*`
- i18n: `src/lib/i18n/i18n.ts`, `src/components/layout/Header.astro`
- Content: `src/content/config.ts`, `src/content/{architecture,services,cases}/*.md`
- UI: `src/components/ui/Card/*`, `src/components/ui/CardGrid/*`
- Legacy/unused candidates: `src/lib/content/getContent.ts`, `src/layouts/Layout.astro`, parts of `src/types/content.ts`
