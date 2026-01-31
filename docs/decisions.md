# Decisions

> Log of project decisions. Keep entries short and dated.

## 2026-01-31 — v1 scope includes Digital vertical
- **Decision**: Activate both **/architecture** and **/digital** in v1.
- **Rationale**: Present the studio as architecture + digital from day one; keep symmetric IA.
- **Impact**:
  - /architecture: single-page projects gallery.
  - /digital: two single pages: **services** and **cases** (business-case style examples; mockups allowed in v1).
  - Card hover animations in v1; clicking into details is deferred to v2.

## 2026-01-31 — Primary language is Spanish
- **Decision**: ES is primary, EN secondary.
- **Rationale**: Core audience and owner language.
- **Impact**: ES content required; EN can fallback when missing.

## 2026-01-31 — Initial content counts
- **Decision**: v1 ships with **6 architecture projects** and **3–4 digital items** (mockups allowed).
- **Rationale**: Enough content density for a credible launch.

## 2026-01-31 — Domain canonicalization
- **Decision**: Support `nonome.es` and `www.nonome.es` with a single canonical host.
- **Rationale**: avoid duplicate content and SEO issues.
- **Impact**: configure redirects at the edge/host.

## 2026-01-31 — Visual direction: clean grid + subtle hover
- **Decision**: Chipperfield-like cleanliness: strict grid, strong whitespace, minimal UI; subtle hover animations on cards.
- **Rationale**: "Less is more" aligned with studio positioning (architecture + digital UX/process).

## 2026-01-31 — v1 interaction: hover only
- **Decision**: Cards have hover animations but **click is disabled in v1**.
- **Rationale**: v1 focuses on positioning + browsing; detail pages arrive in v2.
