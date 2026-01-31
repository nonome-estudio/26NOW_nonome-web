# Tech Stack: Nonome Website

**Project**: nonome-web | **Owner**: web-projectManager | **Status**: Draft | **V**: 2.0 | **Updated**: 2026-01-31 | **Related**: [PRD](./prd.md) | [HLD](./hld.md) | [LLD](./lld.md) | [Hosting](./hosting.md)

**Philosophy**: simplicity + maintainability (type-first) + minimal dependencies.

---

## Framework & Core
- **Framework**: Astro (SSG)
- **Language**: TypeScript
- **Runtime**: Node.js LTS (use Node 20 for CI)
- **Package manager**: npm

## Frontend
- **Routing**: file-based routing in Astro using language-prefixed routes (`/es/*`, `/en/*`).
- **Styling**: CSS Modules + vanilla CSS.
- **Animations**: start with CSS transitions for card hover; introduce GSAP only if needed.
- **Images**: Astro image optimization (Sharp) + responsive images + lazy loading.

## Content
- **Content storage**: file-based content in repo (Astro content collections).
- **Validation**: Zod schemas + build-time validation.

## Testing (v1 pragmatic)
- **Unit**: Vitest for utilities/content validation.
- **E2E**: optional for v1; add Playwright later once flows stabilize.

## CI/CD
- **CI**: GitHub Actions
- **Deploy**: GitHub Pages (custom domain `nonome.es`)

## Security
- No runtime secrets required.
- Keep `.env*` out of git.
- Dependabot + `npm audit` in CI.

## Cost
- Hosting expected: **€0/month** (GitHub Pages) + domain registration.

## Notes
- Canonical host: `https://nonome.es`.
- HTTPS provisioning can take time; see `docs/hosting.md` for the pending task checklist.
