# Project Brief: Nonome Website

**Project**: nonome-web | **Owner**: gen-projectManager | **Status**: Discovery | **V**: 1.1 | **Updated**: 2025-12-20

**Usage**: gen-PM creates at kickoff. Frozen post-approval. Read by dept-PM (handoff), stakeholders (approval).

---

## Summary

Minimalist portfolio website for Nonome, a design-led studio operating across architecture and digital solutions for the built environment.

The website will live under a single domain (nonome.es) and be structured into two clear verticals:

- **/architecture** (v1 – initial launch)
- **/digital** (v1 – initial launch; details in v2)

The first release includes **both** Architecture and Digital verticals, with bilingual support (EN/ES), strong visual storytelling, and a clean, editorial aesthetic. The structure must support symmetric growth in both verticals without redesigning the site.

---

## Problem

**Current State**

Nonome has no public website or centralized online presence to present architectural work, competition entries, or studio positioning.

**Impact**

- Limited ability to attract new architecture clients
- No professional platform to showcase completed projects or conceptual work
- No digital touchpoint for referrals, competitions, or business development
- No foundation to later communicate digital/technology services to engineering firms or partners

---

## Solution

**Vision**

Create a single, cohesive website at nonome.es that presents Nonome as a rigorous, design-driven studio, with clearly separated but conceptually aligned practice areas.

The site should allow users to self-select their interest area without confusion, while maintaining a unified brand and visual language.

**Information Architecture (High Level)**

```
nonome.es (landing page)
 ├─ /architecture   (v1)
 │   └─ projects (single page)
 ├─ /digital        (v1)
 │   ├─ services (single page)
 │   └─ cases (single page; business-case style, mockups in v1)
 └─ /legal          (studio level - cookies, compliance)
```

**Navigation**: 

- **Landing page**: Users select between /architecture or /digital verticals
- **Within verticals** (/architecture or /digital):
  - **Header**: Navigate between sections (architecture: projects; digital: solutions) + logo returns to landing page
  - **Footer**: Contact information (inline, not separate page) + legal page link
- **Contextual**: Each vertical exposes only its own content sections
- The /digital section will be activated in a later phase

**Approach**: 
- Single website, multiple verticals
- Architecture-only focus for v1
- Strong emphasis on imagery and whitespace
- Minimalist visual language (white background, black/gray typography)
- Editorial / gallery-like presentation
- Structure prepared for future expansion without refactor

**MVP Features (v1)**:

1. Landing page with navigation to /architecture and /digital
2. **Architecture**: projects gallery (single page)
3. **Digital**:
   - **Services** page (consulting services)
   - **Cases** page (business-case style examples; mockups allowed)
4. Card-based UI with **hover animations** (click disabled in v1)
5. Header with section navigation and logo (returns to landing)
6. Footer with inline contact information
7. Legal page (cookies, compliance)
8. Full bilingual support (Spanish primary / English secondary)
9. Fully responsive design optimized for visual portfolios

**Out of Scope (v1)**: 
- Clicking a card to open detail pages (architecture project detail; digital service/case detail) → planned for v2
- 3D model viewers or interactive visualizations
- Blog, news, or editorial content
- User authentication or client areas
- Project management or client portals

---

## Success Criteria

**Business**

Owner approval based on perceived quality and brand alignment. Website accurately reflects the studio's architectural rigor and design sensibility.

**User**: 
- Architecture clients can quickly understand:
  - Design language
  - Project typologies
  - Studio capabilities
- Clear and frictionless contact path
- Seamless bilingual experience

**Technical**: 
- Fast load times despite image-heavy content
- Fully responsive across desktop, tablet, and mobile
- Reliable Azure-based hosting and deployment

---

## Users

**Primary Users (v1)**

Potential and existing architecture clients:
- Small-to-medium local projects
- Competition juries and collaborators

**Needs**:
- Rapid visual understanding of studio quality
- Clear stylistic positioning
- Easy sharing of projects via URL

**Secondary Users (v2 – Future)**

- Engineering firms
- Architecture studios
- Companies seeking digital solutions (data, BIM, web, automation)

**Personas**:

- **Prospective Architecture Client**: 
  - **Goal**: Evaluate studio quality quickly
  - **Pain point**: No way to assess work without a portfolio

- **Existing Client**: 
  - **Goal**: Share Nonome's work with third parties
  - **Pain point**: No official digital reference

---

## Constraints & Assumptions

**Constraints**: 
- No fixed deadline – quality prioritized over speed
- Budget: Flexible but reasonable
- Hosting: Azure required
- CI/CD: Azure DevOps
- Design: Minimalist aesthetic, limited branding assets initially

**Assumptions**: 
1. Owner will provide all images, texts, and ES/EN translations (ES primary)
2. Minimalist visual language is acceptable without full brand manual
3. Azure resources can be provisioned without blockers
4. Domains nonome.es and www.nonome.es are owned and configurable
5. Initial content for v1: 6 architecture projects + 3–4 digital items (mockups allowed)

**Dependencies**: 
- Azure infrastructure setup (subscription, resource groups, hosting)
- DNS and SSL configuration for nonome.es
- Content delivery from owner (projects, images, text)

---

## Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Content delays | High | Medium | Early content audit, launch with limited projects |
| Lack of branding assets | Medium | High | Define minimal typographic and spacing system |
| Azure setup delays | Medium | Low | Start infra setup early |
| Scope creep to digital services | Medium | Medium | Freeze v1 scope strictly to architecture |
| Image performance issues | Medium | Medium | CDN, lazy loading, image optimization pipeline |

---

## Timeline

| Milestone | Description |
|-----------|-------------|
| Kickoff | Discovery & alignment |
| Planning | PRD, architecture, backlog |
| Sprint 1 | Infrastructure + base framework |
| MVP Launch | Architecture portfolio live |

(Dates TBD)

---

## Handoff

**Department**: Web

**Key Items for Web Team**:

1. Confirm content readiness and project selection
2. Define Azure hosting strategy (Static Web Apps preferred)
3. Set up CI/CD via Azure DevOps
4. Define typography, grid, spacing, and color tokens
5. Image optimization strategy (formats, sizes, lazy loading)
6. Decide on CMS vs static generation

**Architecture Notes for Web PM**:

- Image-heavy portfolio → CDN + optimization mandatory
- Bilingual architecture (i18n strategy, content structure)
- Static Site Generation recommended for performance and cost
- Structure must allow /digital expansion without redesign
- **Component-based architecture required**: Easier maintenance and adjustments (reusable header, footer, project cards, etc.)

**Next Steps**:

1. web-projectManager: Create detailed PRD and user stories
2. web-projectManager: Define technical architecture and stack
3. web-projectManager: Create sprint plan and backlog
4. Owner: Confirm content timeline and initial project list

---

## References

**Standards**: [Project Structure](../../../../NOA-system/general/project-structure-template.md) | [Task Splitting](../../../../NOA-system/general/task-splitting-guidelines.md) | [Testing Policy](../../../../NOA-system/general/testing-policy.md)

**Next Steps**: Hand to web-projectManager → Create PRD/Tech Stack/HLD → Backlog/Sprints

---

*Created by: gen-projectManager*  
*Last updated: 2025-12-20*
