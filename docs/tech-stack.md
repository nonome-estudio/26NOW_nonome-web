# Tech Stack: Nonome Website

**Project**: nonome-web | **Owner**: web-projectManager | **Status**: Draft | **V**: 1.0 | **Updated**: 2025-12-23 | **Related**: [PRD](./prd.md)

**Usage**: Dept-PM creates post-PRD. Stable after approval. Read by dev (impl), PM (check).

**Philosophy**: Simplicity + maintainability + build-time validation + one-person operation

---

## Framework & Core

| Component | Choice | Rationale | Alternatives |
|-----------|--------|-----------|-------------|
| **SSG Framework** | Astro 4.x | Content-focused, minimal JS, component islands, built-in content collections with validation, three.js compatible, simple learning curve | Next.js (more complex), SvelteKit (smaller ecosystem) |
| **Language** | TypeScript 5.x | Type safety, better IDE support, catches errors at dev time | JavaScript (no type safety) |
| **Node Runtime** | Node.js 20 LTS | Latest LTS, stable until 2026, required for Astro build | Node 18 (shorter support) |
| **Package Manager** | npm 10.x | Comes with Node, standard, reliable, no extra tool needed | pnpm (faster but extra tool), yarn (deprecated v1) |
| **Build Tool** | Vite 5.x (via Astro) | Fast HMR, optimized builds, modern browser targets, Astro's default | Webpack (slower, more complex) |

---

## Frontend Architecture

| Component | Choice | Rationale |
|-----------|--------|----------|
| **Routing** | Astro File-based | `/pages/[lang]/arquitectura/[slug].astro` → automatic routes, clean structure |
| **Styling** | CSS Modules + vanilla CSS | Scoped styles, no extra bundle, simple maintenance, full control |
| **Animations** | GSAP 3.x (GreenSock) | Industry-standard, smooth 60fps, horizontal scrolling expertise, easy three.js integration |
| **i18n** | astro-i18next | Route-based translation, no page reload, localStorage persistence, mature Astro integration |
| **3D Rendering** | three.js r160+ | Standard 3D library, IFC loader support, performant, well-documented |
| **IFC Models** | web-ifc-three 0.0.x | Three.js wrapper for IFC files, building-specific format |
| **Images** | Astro `<Image>` + Sharp | Built-in optimization, responsive images, WebP conversion, lazy loading |

---

## Content Management

| Component | Choice | Rationale |
|-----------|--------|----------|
| **Content Structure** | File-based JSON | No database, git-versioned, build-time validation, simple editing |
| **Schema Validation** | Astro Content Collections + Zod | Type-safe content, build fails on invalid data, automatic TypeScript types |
| **Image Storage** | Git repository | Colocated with content, version-controlled, simple deployment |
| **Version Control** | Git + GitHub | Source of truth, history, rollback capability, CI/CD integration |

**Content Structure**:
```
/src/content/
  /projects/
    /villa-mediterranea/
      /es/
        metadata.json
        content.json
      /en/
        metadata.json
        content.json
      /images/
        01-exterior.jpg
        02-interior.jpg
      /models/
        model.ifc  (v2)
```

---

## No Backend Required

**Why**: Static site, no dynamic data, no user accounts, no forms (v1)

**Future considerations** (v2):
- If contact form needed → Azure Functions (serverless, pay-per-use)
- If analytics needed → Azure Application Insights (no cookies, privacy-focused)
- If CMS UI needed → Decap CMS (git-based, optional layer over files)

**Current approach**: Owner edits JSON files locally, commits to git, auto-deploys

---

## Testing

| Type | Framework | Coverage/Scope | Details |
|------|-----------|----------------|---------|
| **Unit** | Vitest 1.x | 60% minimum | Component logic, content validation functions |
| **Component** | Vitest + jsdom | Critical components | ProjectCard, HorizontalGallery, ModelViewer |
| **E2E** | Playwright 1.x | Critical user journeys | Gallery navigation, project detail, language switch, mobile |
| **Visual Regression** | Playwright screenshots | Key screens | Gallery, project detail, responsive breakpoints |
| **Accessibility** | axe-core (Playwright) | WCAG 2.1 AA | Automated a11y checks in E2E tests |
| **Performance** | Lighthouse CI | Score >90 | Part of build pipeline |

**Test Strategy**:
- Unit: Content validation, utility functions
- Component: Interactive components (gallery navigation)
- E2E: Full user journeys (5-7 critical paths)
- Run on: Every PR, before merge to main

---

## DevOps & Deployment

**VCS**: Git + GitHub | **Branch Strategy**: Trunk-based (main + feature branches)

**CI/CD Pipeline**: GitHub Actions (recommended)

**Pipeline Stages**:
```
Trigger: Push to any branch
│
├─ Install Dependencies (npm ci)
│
├─ Lint & Format Check (ESLint, Prettier)
│
├─ Type Check (TypeScript tsc --noEmit)
│
├─ Content Validation (Astro content collections schema check)
│
├─ Unit Tests (Vitest)
│
├─ Build Static Site (astro build)
│   ├─ Image optimization
│   ├─ Code splitting
│   └─ HTML/CSS/JS minification
│
├─ Component Tests (Vitest)
│
├─ E2E Tests (Playwright - main branch only)
│
├─ Lighthouse Performance (main branch only)
│
└─ Deploy
    ├─ Feature branches → Preview environment (staging slot)
    └─ Main branch → Production (nonome.es)
```

**Hosting**: GitHub Pages (recommended)

**Deployment Strategy**:
- **Feature branches**: Automatic staging URL (e.g., `nonome-pr-42.azurestaticapps.net`)
- **Main branch**: Production deployment to nonome.es
- **Rollback**: Revert git commit → auto-redeploys previous version

**Environments**:
- **Local Dev**: `npm run dev` (Astro dev server, HMR)
- **Preview/Staging**: Auto-generated per feature branch
- **Production**: nonome.es (custom domain)

**Configuration**:
- Environment-specific: None needed (static site)
- Build configuration: `astro.config.mjs`
- Azure config: `staticwebapp.config.json`

---

## Hosting Configuration (GitHub Pages)

**Features Used**:
- Static asset hosting (CDN included)
- Custom domain with SSL (auto-provisioned)
- GitHub Pages build + deploy
- HTTPS enforcement
- Redirects handled via DNS/canonical (or a small redirect page if needed)

**Redirects / routing** (implementation choice):
```json
{
  "routes": [
    {
      "route": "/es/*",
      "rewrite": "/es/index.html"
    },
    {
      "route": "/en/*",
      "rewrite": "/en/index.html"
    }
  ],
  "navigationFallback": {
    "rewrite": "/404.html",
    "exclude": ["/images/*.{png,jpg,jpeg,gif,webp}", "/models/*"]
  },
  "globalHeaders": {
    "cache-control": "public, max-age=31536000, immutable"
  },
  "mimeTypes": {
    ".ifc": "application/octet-stream"
  }
}
```

**Custom Domain Setup** (Sprint 1 task):
1. In GitHub repo settings, add custom domain `nonome.es` (and optionally `www.nonome.es`).
2. In Dinahosting DNS:
   - Set **A records** for apex (`nonome.es`) to GitHub Pages IPs
   - Set **CNAME** for `www` to `<your-github-username>.github.io`
3. Enable **Enforce HTTPS** in GitHub Pages.
4. Choose a canonical host (recommend: `nonome.es`) and redirect the other host if desired.

**Preview Environments**:
- Enabled by default for all PRs
- URL format: `[app-name]-[pr-number].[region].azurestaticapps.net`
- Automatically deleted when PR merged/closed
- No configuration needed (Azure detects git workflow)

---

## Monitoring & Performance

| Type | Tool | Coverage/Details |
|------|------|------------------|
| **Errors** | Browser Console + CI logs | Frontend errors, build failures |
| **Performance** | Lighthouse CI | Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1 |
| **Uptime** | Cloudflare dashboard | Basic availability + edge network |
| **Analytics** | None (v1) | Future: Privacy-focused (Plausible/Fathom) if needed |
| **Build Logs** | Azure DevOps | 30-day retention, downloadable |

**Performance Targets** (from PRD):
- Initial Load: <2s (3G)
- Time to Interactive: <3s
- Lighthouse Score: >90
- Animation FPS: 60fps

**Monitoring Strategy**:
- Lighthouse CI fails build if score <85
- Azure Monitor alerts on deployment failures
- No runtime monitoring needed (static site, no server)

---

## Security

| Component | Choice | Details |
|-----------|--------|--------|
| **HTTPS** | Azure-managed SSL | Auto-provisioned, auto-renewed, TLS 1.3 |
| **Headers** | staticwebapp.config.json | CSP, X-Frame-Options, X-Content-Type-Options |
| **Dependency Scanning** | npm audit + Dependabot | Weekly automated scans, auto-PR for critical vulnerabilities |
| **Secrets** | Azure DevOps Library | Deployment tokens only, no application secrets |
| **CORS** | Not applicable | Static site, no API |
| **Authentication** | None (v1) | Public portfolio site |
| **Data Privacy** | No cookies, no tracking | GDPR-compliant by default |

**Security Headers** (in staticwebapp.config.json):
```json
{
  "globalHeaders": {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
  }
}
```

**Vulnerability Management**:
- `npm audit` runs in CI pipeline
- Critical vulnerabilities block deployment
- Dependabot creates automated PRs for updates
- Review and merge within 48h for critical, 1 week for high

---

## Dependencies

### Core Framework
| Package | Version | Purpose |
|---------|---------|---------|
| astro | ^4.0.0 | Static site generator, content collections, image optimization |
| typescript | ^5.3.0 | Type safety, better DX |
| vite | ^5.0.0 | Build tool (via Astro) |

### i18n
| Package | Version | Purpose |
|---------|---------|---------|
| astro-i18next | ^1.0.0-beta | Route-based translations, no reload |
| i18next | ^23.7.0 | Translation library (peer dep) |

### Animation & 3D
| Package | Version | Purpose |
|---------|---------|---------|
| gsap | ^3.12.0 | Smooth animations, horizontal scrolling, 60fps guaranteed |
| three | ^0.160.0 | 3D rendering engine |
| web-ifc-three | ^0.0.125 | IFC file loader for three.js |

### Image Optimization
| Package | Version | Purpose |
|---------|---------|---------|
| sharp | ^0.33.0 | Image processing (via Astro) |
| @astrojs/image | Built-in | Responsive images, WebP conversion |

### Testing
| Package | Version | Purpose |
|---------|---------|---------|
| vitest | ^1.1.0 | Unit and component tests, fast, Vite-native |
| @playwright/test | ^1.40.0 | E2E tests, multi-browser |
| @axe-core/playwright | ^4.8.0 | Accessibility testing |
| jsdom | ^23.0.0 | DOM simulation for component tests |

### Development
| Package | Version | Purpose |
|---------|---------|---------|
| eslint | ^8.56.0 | Code linting, catch errors |
| @typescript-eslint/parser | ^6.17.0 | TypeScript support for ESLint |
| prettier | ^3.1.0 | Code formatting, consistency |
| prettier-plugin-astro | ^0.12.0 | Format .astro files |

### Content Validation
| Package | Version | Purpose |
|---------|---------|---------|
| zod | ^3.22.0 | Schema validation for content collections |

**Dependency Policy**:
- Lock all versions in package-lock.json
- Security patches: Apply immediately (automated via Dependabot)
- Minor updates: Review quarterly
- Major updates: Only if significant benefit, test thoroughly
- Audit before all major version upgrades

---

## Performance Budget

**Build Performance**:
- Build time: <3 minutes for full site
- Image optimization: <30s total
- Type checking: <20s

**Runtime Performance** (Lighthouse metrics):
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Total Blocking Time**: <200ms
- **Cumulative Layout Shift**: <0.1
- **Speed Index**: <3.4s

**Bundle Sizes**:
- JavaScript (per page): <150KB (gzipped)
- CSS (per page): <50KB (gzipped)
- Images (optimized): <500KB per project gallery page
- 3D Models: <5MB per model (v2)

**Monitoring**: Lighthouse CI fails build if performance score <85

---

## Scaling Considerations

**Current Capacity**:
- 6 projects
- ~30-40 images total
- Zero API requests
- Static files only

**Scaling Strategy** (Future growth to 50 projects):
- **CDN**: Included with Azure Static Web Apps (automatic)
- **Image loading**: Already lazy-loaded
- **Code splitting**: Astro handles per-route automatically
- **Build time**: Linear growth (~30s per 10 projects), acceptable up to 100+ projects
- **Storage**: 1GB git repo limit accommodates 500+ high-res images
- **Bandwidth**: Unlimited on Azure Static Web Apps free tier (fair use)

**No scaling concerns for foreseeable future** (10x content growth still <10% capacity)

---

## Cost Analysis

| Service | Tier | Monthly Cost (EUR) |
|---------|------|-------------------|
| Cloudflare Pages | Free | €0 |
| GitHub Actions | Free tier | €0 |
| Custom Domain SSL | Included | €0 |
| CDN Bandwidth | Included (100GB/mo free) | €0 |
| Storage | Included | €0 |
| **Domain Registration** | External (owner-managed) | ~€12/year |
| **Total Monthly** | | **€0** |
| **Total Yearly** | | **€12** (domain only) |

**Budget**: <€20/month (target met with €0/month)

**Cost Triggers** (Future):
- Extremely high bandwidth (unlikely for a portfolio site) → consider Cloudflare plan upgrades
- Very high build minutes → consider paid CI
- Contact form (v2) → Cloudflare Workers / Forms provider (or similar)

**Review**: Quarterly (check usage vs free tier limits)

---

## Development Workflow

**Local Development**:
```bash
# Clone repository
git clone [azure-repos-url] nonome-web
cd nonome-web

# Install dependencies
npm ci

# Start dev server (with HMR)
npm run dev
# → http://localhost:4321

# Type check (continuous)
npm run type-check

# Lint
npm run lint

# Format
npm run format

# Run tests
npm test                 # Unit + component
npm run test:e2e         # E2E (Playwright)
npm run test:coverage    # Coverage report
```

**Adding Content**:
```bash
# 1. Create project folder
mkdir -p src/content/projects/new-project/{es,en,images}

# 2. Add metadata and content JSON files
# src/content/projects/new-project/es/metadata.json
# src/content/projects/new-project/es/content.json

# 3. Add images
# src/content/projects/new-project/images/*.jpg

# 4. Build validates automatically
npm run build  # Fails if content invalid

# 5. Commit and push
git add .
git commit -m "Add new project: Villa Example"
git push
# → Triggers CI/CD → Deploys to preview environment
```

**Code Review Process**:
1. Create feature branch: `git checkout -b feature/new-project`
2. Make changes, commit
3. Push → Creates PR in Azure DevOps
4. CI runs automatically (lint, test, build)
5. Preview environment created with unique URL
6. Review code + test preview URL
7. Approve + merge → Deploys to production

---

## Browser & Device Support

**Desktop Browsers** (last 2 versions):
- Chrome/Edge 115+ (Chromium)
- Firefox 115+
- Safari 16+

**Mobile Browsers**:
- Safari iOS 15+ (iPhone/iPad)
- Chrome Android 115+

**Unsupported** (graceful degradation):
- Internet Explorer (show banner)
- Opera Mini (basic layout only)

**Testing Matrix**:
- Chrome Desktop (primary dev target)
- Safari Desktop (secondary)
- Safari iOS (mobile primary)
- Chrome Android (mobile secondary)
- Playwright covers all in CI

**Responsive Breakpoints**:
- Mobile: 375px, 414px (iPhone SE, iPhone 12/13)
- Tablet: 768px, 1024px (iPad)
- Desktop: 1280px, 1440px, 1920px (standard, large, HD)

---

## Accessibility Standards

**Target**: WCAG 2.1 AA compliance

**Implementation**:
- Semantic HTML (`<nav>`, `<main>`, `<article>`)
- ARIA labels where needed
- Keyboard navigation (Tab, Arrows, ESC)
- Focus indicators (visible outline)
- Alt text for all images (Spanish)
- Color contrast >4.5:1 (text), >3:1 (large text)
- No content reliant on color alone
- Skip links for keyboard users

**Testing**:
- axe-core automated checks (Playwright)
- Manual keyboard navigation testing
- Screen reader spot checks (NVDA/VoiceOver)

**Keyboard Shortcuts**:
- `Tab`: Navigate interactive elements
- `Arrow Left/Right`: Navigate project gallery cards
- `ESC`: Close project detail view
- `Enter`: Activate buttons/links

---

## Decision Log

| Date | Decision | Rationale | By |
|------|----------|-----------|----| 
| 2025-12-23 | Astro over Next.js/SvelteKit | Content-focused, minimal JS, build-time validation, easier maintenance | web-PM + owner |
| 2025-12-23 | GSAP for animations | Industry standard, smooth 60fps, horizontal scroll expertise | web-PM |
| 2025-12-23 | Route-based i18n | Shareable URLs, no state complexity, cleaner than client-only | web-PM |
| 2025-12-23 | No Git LFS | Manual image compression, simpler workflow, smaller repo size | owner |
| 2025-12-23 | Azure Static Web Apps | Free tier sufficient, preview environments, Azure DevOps integration | web-PM |
| 2025-12-23 | File-based content | No backend complexity, git versioning, build-time validation | web-PM |

---

## Deviations from Web Policy

**None**: All choices align with [Web Policy](../../../../NOA-system/web/web-policy.md)

**Rationale**:
- Astro is modern SSG (policy: prefer SSG for content sites)
- TypeScript used (policy: TypeScript for maintainability)
- Testing coverage meets 60% minimum (policy: 60% unit, 80% critical)
- Azure hosting (policy: Cloud hosting with CI/CD)
- Security headers configured (policy: HTTPS + security headers)

---

## Upgrade Roadmap

**Current Versions** (as of 2025-12-23):
- Astro 4.0.x (latest stable)
- TypeScript 5.3.x (latest)
- Node 20.x LTS (supported until 2026-04-30)

**Planned Upgrades**:
- **Node 22 LTS** (October 2025): Plan migration by Q4 2025, test build compatibility
- **Astro 5.x** (TBD 2025): Monitor changelog, migrate when stable (likely minor changes)
- **three.js r170+** (ongoing): Update quarterly for IFC loader improvements

**Deprecation Watch**:
- None currently
- Monitor Astro/i18next GitHub for breaking changes

**Upgrade Strategy**:
1. Test in feature branch
2. Run full test suite
3. Check Lighthouse scores
4. Deploy to preview environment
5. Visual regression check
6. Merge to main

---

## Three.js & IFC Setup Details

**three.js Configuration**:
```typescript
// src/components/ModelViewer.astro
import * as THREE from 'three';
import { IFCLoader } from 'web-ifc-three/IFCLoader';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// IFC Loader
const ifcLoader = new IFCLoader();
ifcLoader.ifcManager.setWasmPath('/wasm/'); // web-ifc WASM files

// Load model
ifcLoader.load(
  modelPath,
  (ifcModel) => scene.add(ifcModel),
  (progress) => console.log('Loading:', progress),
  (error) => console.error('Error:', error)
);
```

**Client-Side Loading** (Astro directive):
```astro
<script>
  // Only runs in browser, not during SSG build
  import('./modelViewerSetup.js').then(module => {
    module.initModelViewer({
      canvas: document.getElementById('model-canvas'),
      modelPath: '/models/project.ifc'
    });
  });
</script>
```

**WASM Files**:
- Copy `web-ifc.wasm` to `public/wasm/` folder
- Served as static asset
- No build processing needed

**Performance**:
- Lazy load: Only load three.js on pages with 3D models
- Fallback image: Show poster while model loads
- Progressive loading: Low-poly preview → High-quality
- Disable for mobile: Use static image fallback (<768px)

**v2 Integration** (not v1):
- Add model files to `/public/models/`
- Reference in content JSON: `{"type": "model", "content": {"src": "/models/villa.ifc"}}`
- ModelCard component handles loading

---

## References

**Standards**: [Web Policy](../../../../NOA-system/web/web-policy.md) | [Security](../../../../NOA-system/general/security-policy.md) | [Testing](../../../../NOA-system/general/testing-policy.md) | [DevSecOps](../../../../NOA-system/web/devsecops-policy.md)

**Project**: [PRD](./prd.md) | [HLD](./hld.md) | [Brief](./project-brief.md) | [Backlog](./backlog.md)

**External Docs**:
- [Astro Documentation](https://docs.astro.build)
- [three.js Documentation](https://threejs.org/docs)
- [web-ifc-three](https://github.com/IFCjs/web-ifc-three)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [GSAP Documentation](https://greensock.com/docs)

---

*Created by: web-projectManager*  
*Last updated: 2025-12-23*
