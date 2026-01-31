# PRD: Nonome Website

**Project**: nonome-web | **Owner**: web-projectManager | **Status**: Draft | **V**: 2.0 | **Updated**: 2026-01-31 | **Related**: [Brief](./project-brief.md) | [Decisions](./decisions.md)

**Usage**: PM creates post-brief. PM/stakeholders update. Freeze at MVP.

---

## Overview

**Purpose**: A minimalist, bilingual (ES primary / EN secondary) website for Nonome presenting two active verticals from day one:

- **Architecture**: a clean projects gallery (single page)
- **Digital**: two pages: **Services** (consulting offerings) and **Cases** (business-case style examples; mockups allowed)

The design direction is strict grid + generous whitespace, with subtle hover animations on cards. In v1, cards are **hover-only** (click disabled). Detail pages for projects/cases arrive in v2.

---

## Goals

1. Launch a credible public presence for Nonome under `nonome.es` (with `www` supported)
2. Communicate the studio positioning: **less is more** (architecture + digital processes), expressed as a clean UX
3. Publish **6 architecture projects** and **3–4 digital cases** (mockups allowed in v1)
4. Provide a seamless bilingual experience (ES/EN) with language-specific URLs
5. Ensure the site is easy to maintain by one person (file-based content; build-time validation)

---

## Non-Goals (v1)

- Card click-through to detail pages
- Project/case/service detail pages (v2)
- 3D viewers / interactive visualizations
- Blog/news/editorial content
- Backend API or database
- User authentication or client areas
- Analytics/tracking (assume none in v1)

---

## Users

### Primary users
- Potential architecture clients (local small/medium projects)
- Competition juries and collaborators

### Secondary users
- Engineering firms / partners interested in digital processes

---

## Information Architecture (v1)

- `/` landing
  - links to `/architecture` and `/digital`
- `/architecture` (single page)
  - projects cards grid
- `/digital`
  - entry page or redirect to subpages (implementation choice)
- `/digital/services` (single page)
  - service cards grid
- `/digital/cases` (single page)
  - case cards grid
- `/legal` (single page)

---

## User Stories

### Epic 1: Landing & Global Navigation

**US 1.1 — Choose a vertical from landing**
- **As a** visitor
- **I want to** choose between Architecture and Digital quickly
- **So that** I can self-select what I care about without confusion

**Acceptance Criteria**:
- [ ] Landing shows two clear options: Architecture / Digital
- [ ] Layout is minimalist, grid-aligned, and responsive
- [ ] Language toggle is visible (ES/EN)
- [ ] Links go to the correct vertical pages

**Priority**: High

---

**US 1.2 — Navigate between pages inside each vertical**
- **As a** visitor
- **I want to** move between Architecture and Digital and between Digital subpages
- **So that** I can browse without dead-ends

**Acceptance Criteria**:
- [ ] Global header includes navigation appropriate to the current vertical
- [ ] Digital includes links to Services and Cases
- [ ] Logo always returns to landing

**Priority**: High

---

### Epic 2: Architecture — Projects Gallery (Single Page)

**US 2.1 — View architecture projects as a clean card grid**
- **As a** prospective architecture client
- **I want to** see a curated grid of architecture projects
- **So that** I can quickly assess quality and typology

**Acceptance Criteria**:
- [ ] Gallery displays **6** project cards
- [ ] Cards show: project name (at least on hover) and a representative image
- [ ] Grid is strict and consistent across breakpoints
- [ ] Hover animation is subtle and performant
- [ ] Cards are **not clickable** in v1 (no navigation)

**Priority**: High

---

### Epic 3: Digital — Services (Single Page)

**US 3.1 — View digital services as a card grid**
- **As a** potential client/partner
- **I want to** understand Nonome’s digital consulting services at a glance
- **So that** I can quickly decide whether to contact

**Acceptance Criteria**:
- [ ] A `/digital/services` page exists
- [ ] Services are grouped or labeled under:
  - [ ] BIM consulting (processes, documents, analysis, consulting)
  - [ ] Web development (apps, models, other)
  - [ ] Custom development (Revit, Navisworks, CAD, Civil 3D, etc.)
- [ ] Each service is represented as a card with title + 1–2 line description
- [ ] Hover animation present; cards not clickable in v1

**Priority**: High

---

### Epic 4: Digital — Cases (Single Page)

**US 4.1 — View digital cases as a card grid**
- **As a** potential client/partner
- **I want to** see example digital work framed as business cases
- **So that** I can trust the studio’s capability

**Acceptance Criteria**:
- [ ] A `/digital/cases` page exists
- [ ] Shows **3–4** case cards (mockups allowed)
- [ ] Each card shows: case title + outcome/benefit (short) + optional client/sector tag
- [ ] Hover animation present; cards not clickable in v1

**Priority**: High

---

### Epic 5: Multi-language (ES primary / EN secondary)

**US 5.1 — Switch language**
- **As a** user
- **I want to** switch between Spanish and English
- **So that** I can read in my preferred language

**Acceptance Criteria**:
- [ ] Language toggle in header
- [ ] URL reflects language (`/es/...` and `/en/...` or equivalent)
- [ ] Spanish content is complete; English may fall back if missing
- [ ] Preference persists across navigation

**Priority**: High

---

### Epic 6: Legal & Contact

**US 6.1 — See contact information everywhere**
- **As a** prospective client
- **I want to** find contact info quickly
- **So that** I can reach out without friction

**Acceptance Criteria**:
- [ ] Footer includes contact block (email/phone/address)
- [ ] Present on Architecture + Digital pages
- [ ] Styling consistent with minimalist design

**Priority**: High

---

**US 6.2 — Access legal information**
- **As a** visitor
- **I want to** access legal/privacy info
- **So that** I understand rights and data handling

**Acceptance Criteria**:
- [ ] `/legal` exists and is linked from footer
- [ ] Covers at least: legal notice + privacy + cookies statement (v1: likely “no cookies/tracking”)
- [ ] ES version available (primary)

**Priority**: Medium

---

## Functional Requirements

### FR-001: Card system (shared)
- Card variants: architecture project, digital service, digital case
- Hover animation only (v1)
- Must be keyboard-accessible (hover equivalent via focus styles)

### FR-002: Routing & i18n
- Language-aware routing
- Stable routes for pages in both languages

### FR-003: Content model (file-based)
- Architecture projects content
- Digital services content
- Digital cases content
- Build-time validation of required fields

---

## Non-Functional Requirements

### Performance
- Fast load times (image-heavy)
- 60fps hover animations
- Image optimization + lazy loading

### Accessibility
- Target WCAG 2.1 AA
- Keyboard focus visible

### Deployment
- Azure-based hosting
- CI/CD via Azure DevOps

---

## Open Questions

1. **Card hover timing**: confirm delay (~0–500ms) and animation specs (scale, easing) to keep it subtle.
2. **Language routing**: confirm strict `/es/...` and `/en/...` prefixes (recommended).
3. **Content codes**: confirm how project/service/case codes appear (badge on card? internal only?).

---

## Approval

| Stakeholder | Role | Date | Status |
|---|---|---:|---|
| Owner | Product Owner | TBD | Pending |
| web-projectManager | Technical Lead | 2026-01-31 | Draft updated |
