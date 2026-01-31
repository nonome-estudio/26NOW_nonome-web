# HLD: Nonome Website

**Project**: nonome-web | **Status**: Draft | **Updated**: 2026-01-31

> High-level design for the v1 architecture. Keep this document implementation-agnostic where possible.

## 1. Goals (v1)
- Minimalist, grid-driven website for Nonome with two active verticals: **Architecture** + **Digital**.
- ES primary / EN secondary with language-aware URLs.
- Hover-only cards (no click-through in v1).
- Maintainable codebase: type-first components, single source of truth.

## 2. Information Architecture

### Routes (language-prefixed)
- `/{lang}/` (landing)
- `/{lang}/architecture` (projects grid)
- `/{lang}/digital/services` (services grid)
- `/{lang}/digital/cases` (cases grid)
- `/{lang}/legal`

`lang ∈ {es, en}`

## 3. Page composition

### Layout (shared)
- `Header`
  - Logo → landing
  - Language toggle
  - Contextual nav:
    - Architecture: link to Architecture + Digital
    - Digital: links to Services + Cases + Architecture
- `Footer`
  - Contact block (email/phone/address)
  - Legal link

### Landing
- Two cards/options: Architecture / Digital
- Minimal copy (optional)

### Grid pages (Architecture / Services / Cases)
- Page title + optional short intro
- `CardGrid`
  - renders a list of `Card` variants
  - hover animation reveals description

### Legal
- Single page with sections: Legal notice + Privacy + Cookies statement

## 4. Component model (high-level)

### UI components
- `Card` (base)
  - displays title
  - reveals description on hover/focus
  - v1: no click
- `CardGrid`
  - grid system and spacing tokens
  - maps content items to `Card` variants

### Layout components
- `Header`
- `Footer`

### Content/UI boundaries
- Pages do not implement rendering logic directly.
- Pages load content (from a content layer) and pass typed props to components.

## 5. Content model (v1)

### Content entities
- `Project` (Architecture)
- `Service` (Digital)
- `Case` (Digital)

### Minimum fields (v1)
All three share:
- `id` (internal)
- `title` (localized)
- `description` (localized; shown on hover)
- `media` (image) optional for v1; recommended

Notes:
- Codes may exist as internal identifiers. Display is TBD.

## 6. i18n approach
- Language is represented in the URL prefix.
- ES is primary: ES content must exist; EN may fallback to ES.

## 7. Maintainability rules (must-follow)
- Type-first: shared types in `src/types/*`.
- Shared components: one base `Card` with variants, not copy/paste.
- Keep abstractions proportional.
- Subagents must work in narrow scopes (one feature/folder) and update public interfaces explicitly.

## 8. Deployment (v1)
- GitHub Pages with GitHub Actions.
- Custom domain: `nonome.es` (root).
- Pending task: fix DNS apex A-records + ensure first deploy to enable HTTPS.

## 9. Risks
- Image performance (optimize + lazy load).
- Over-abstraction (balance in LLD).
- i18n routing complexity (keep it simple; avoid client-only i18n state).
