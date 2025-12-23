# PRD: Nonome Website

**Project**: nonome-web | **Owner**: web-projectManager | **Status**: Draft | **V**: 1.0 | **Updated**: 2025-12-23 | **Related**: [Brief](./project-brief.md)

**Usage**: PM creates post-brief. PM/stakeholders update. Freeze at MVP.

---

## Overview

**Purpose**: A minimalist, bilingual (ES/EN) portfolio website for Nonome's architecture practice, featuring project galleries with smooth horizontal navigation and component-based content cards (images, text, future 3D models).

**Goals**: 
1. Showcase 6 architecture projects with editorial visual quality
2. Provide seamless bilingual experience without page reloads
3. Enable one-person content management through file-based system
4. Build maintainable, error-resistant architecture that catches issues at build time

**Non-Goals**: 
- Digital services section (/digital) – v2 only
- SEO optimization (not required for v1)
- Analytics/tracking (no cookies in v1)
- Backend API or database
- Blog/news/editorial content
- User authentication
- Project filtering/search

---

## User Stories

### Epic 1: Project Discovery & Navigation

**User Story 1.1**: View Architecture Project Gallery
- **As a** prospective architecture client
- **I want to** see a clean gallery of architecture projects ordered by year (newest first)
- **So that** I can quickly assess the studio's recent work and design quality

**Acceptance Criteria**:
- [ ] Gallery displays project cards with representative images
- [ ] Projects ordered by year (newest on top)
- [ ] Hover effect enlarges card slightly and reveals project name
- [ ] Clean, minimal aesthetic (white background, generous spacing)
- [ ] Fully responsive (desktop, tablet, mobile)
- [ ] No filtering/sorting controls (simple gallery only)

**Priority**: High

---

**User Story 1.2**: Navigate to Project Detail
- **As a** prospective architecture client
- **I want to** click on a project card to view full project details
- **So that** I can explore the project in depth

**Acceptance Criteria**:
- [ ] Click on project card triggers smooth transition animation
- [ ] Card enlarges to fill viewport
- [ ] Transitions to horizontal gallery view without full page reload
- [ ] Smooth, performant animation (<300ms)
- [ ] Works on all device sizes

**Priority**: High

---

**User Story 1.3**: Explore Project Content Horizontally
- **As a** prospective architecture client
- **I want to** navigate horizontally through project content cards
- **So that** I can view images, descriptions, and details in a gallery-like experience

**Acceptance Criteria**:
- [ ] Horizontal scrolling/navigation between content cards
- [ ] Navigation via: left/right arrows (on screen), keyboard arrows, dot indicators
- [ ] Each card can be: image, text block, or 3D model viewer (future)
- [ ] Edges of previous/next cards visible (partial peek, no content visible)
- [ ] Dot indicators show current position and total card count
- [ ] Smooth transitions between cards
- [ ] X button in consistent position to exit project detail

**Priority**: High

---

**User Story 1.4**: Return to Project Gallery
- **As a** prospective architecture client
- **I want to** exit project detail view and return to the gallery
- **So that** I can explore other projects

**Acceptance Criteria**:
- [ ] X button closes project detail view
- [ ] Returns to gallery at same scroll position
- [ ] Smooth transition animation (reverse of entry)
- [ ] ESC key also closes project detail
- [ ] Logo click returns to landing page (not gallery)

**Priority**: High

---

### Epic 2: Multi-Language Support

**User Story 2.1**: Switch Language Seamlessly
- **As a** user (client or collaborator)
- **I want to** switch between Spanish and English without page reload
- **So that** I can view content in my preferred language smoothly

**Acceptance Criteria**:
- [ ] Language toggle in header (ES/EN)
- [ ] Switch triggers smooth content re-render (<100ms perceived)
- [ ] URL updates to reflect language (/es/arquitectura vs /en/architecture)
- [ ] Language preference persists across pages
- [ ] No full page reload required
- [ ] All UI text and project content translates

**Priority**: High

---

**User Story 2.2**: Share Language-Specific URLs
- **As a** existing client or collaborator
- **I want to** share project links that open in specific language
- **So that** recipients view content in the intended language

**Acceptance Criteria**:
- [ ] URLs contain language indicator (/es/ or /en/)
- [ ] Opening URL loads page in specified language
- [ ] Shared links to projects maintain language context
- [ ] Deep links to project details work correctly

**Priority**: Medium

---

### Epic 3: Site Navigation & Structure

**User Story 3.1**: Navigate Between Verticals
- **As a** visitor
- **I want to** navigate between /architecture and /digital sections
- **So that** I can explore different service areas

**Acceptance Criteria**:
- [ ] Landing page presents both verticals clearly
- [ ] /architecture link navigates to project gallery
- [ ] /digital link is grayed out (inactive) in v1
- [ ] Logo in header returns to landing page
- [ ] Clear visual hierarchy and separation

**Priority**: High

---

**User Story 3.2**: Access Contact Information
- **As a** prospective client
- **I want to** easily find contact information
- **So that** I can reach out to Nonome

**Acceptance Criteria**:
- [ ] Footer displays: "Contacto" heading
- [ ] Email: info@nonomeweb.es (clickable mailto link)
- [ ] Phone: +34 696 834 369 (clickable tel link)
- [ ] Address: Calle Ancha, 26, Ponferrada, España, 24401
- [ ] Footer visible on all pages within verticals
- [ ] Clean, minimal styling consistent with design

**Priority**: High

---

**User Story 3.3**: Access Legal Information
- **As a** visitor
- **I want to** access legal/privacy information
- **So that** I understand content rights and data handling

**Acceptance Criteria**:
- [ ] Legal page link in footer
- [ ] Legal page includes copyright notice (content belongs to owner)
- [ ] No cookie consent banner needed (no cookies in v1)
- [ ] Simple, clear legal text in Spanish (primary language)

**Priority**: Medium

---

### Epic 4: Content Management (Developer)

**User Story 4.1**: Add New Project
- **As a** site maintainer (owner)
- **I want to** add a new project by editing files and committing
- **So that** I can update the portfolio without backend complexity

**Acceptance Criteria**:
- [ ] Create project folder with structured files (metadata.json, content.json, images/)
- [ ] Define project metadata: title, year, location, type, slug
- [ ] Add project content cards (image refs, text blocks)
- [ ] Add images to project folder
- [ ] Commit changes triggers auto-rebuild and deployment
- [ ] Build fails if content structure invalid (error prevention)
- [ ] Clear error messages guide corrections

**Priority**: High

---

**User Story 4.2**: Translate Project Content
- **As a** site maintainer
- **I want to** provide Spanish and English versions of project content
- **So that** bilingual users can experience the portfolio

**Acceptance Criteria**:
- [ ] Separate /es/ and /en/ folders per project
- [ ] Metadata and content files in each language folder
- [ ] Missing translation falls back to Spanish (default)
- [ ] Build validates language structure
- [ ] Image captions in Spanish only (no multi-language captions)

**Priority**: High

---

**User Story 4.3**: Manage High-Resolution Images
- **As a** site maintainer
- **I want to** add high-resolution project images that load fast
- **So that** visual quality is maintained without performance issues

**Acceptance Criteria**:
- [ ] Image optimization pipeline (automated resize, format conversion)
- [ ] Supports multiple formats (JPEG, PNG, WebP)
- [ ] Lazy loading for offscreen images
- [ ] Responsive image sizes for different devices
- [ ] Build-time optimization (errors caught before deploy)
- [ ] Clear naming conventions for images

**Priority**: High

---

## Functional Requirements

### FR-001: Landing Page
**Description**: Entry point that presents vertical selection (architecture/digital) with clear branding

**Components**:
- Logo/branding
- Navigation cards/sections for /architecture and /digital
- Language toggle (ES/EN)
- Minimal footer with legal link

**Behavior**:
- /architecture → Active, navigates to project gallery
- /digital → Grayed out, non-interactive in v1
- Clean, editorial aesthetic

**Priority**: Must Have

---

### FR-002: Project Gallery Page
**Description**: Grid/masonry layout displaying architecture project cards

**Inputs**: Project metadata (title, year, representative image)
**Process**: 
- Fetch all projects
- Sort by year descending
- Render cards with hover effects
**Outputs**: Interactive gallery grid

**Acceptance Criteria**:
- [ ] Projects sorted newest first
- [ ] Hover enlarges card + shows project name
- [ ] Click triggers transition to project detail
- [ ] Responsive layout (adapts to screen size)
- [ ] Smooth animations (CSS/JS transitions)

**Priority**: Must Have

---

### FR-003: Project Detail Horizontal Gallery
**Description**: Full-page horizontal scrolling gallery with content cards

**Inputs**: 
- Project ID/slug
- Current card index
- Navigation action (arrow/keyboard/dot)

**Process**:
- Load project content cards
- Render current card full viewport
- Show peek of adjacent cards (edges only)
- Update dot indicators

**Outputs**: 
- Current card displayed
- Navigation controls enabled
- Position indicator updated

**Acceptance Criteria**:
- [ ] Smooth horizontal navigation
- [ ] Multiple input methods (arrows, keyboard, dots)
- [ ] Edge peek of adjacent cards
- [ ] Dot indicators show position/total
- [ ] X button exits to gallery
- [ ] Keyboard navigation (arrows, ESC)

**Priority**: Must Have

---

### FR-004: Content Card Components
**Description**: Reusable content card types for project galleries

**Card Types**:
1. **Image Card**: Full-bleed or contained image display
2. **Text Card**: Typography-focused content block
3. **3D Model Card** (future/v2): Interactive model viewer

**Shared Behavior**:
- Consistent sizing/spacing
- Smooth entry/exit animations
- Responsive design
- Keyboard accessible

**Priority**: Must Have (Image/Text), Nice to Have (3D v2)

---

### FR-005: Bilingual Content Switching
**Description**: Language toggle with route-based i18n

**Inputs**: Language selection (ES/EN)
**Process**:
- Update URL with language prefix (/es/ or /en/)
- Re-render UI text and project content
- Store preference in localStorage
- Update language toggle state

**Outputs**:
- Content in selected language
- Updated URL
- Persisted preference

**Acceptance Criteria**:
- [ ] No page reload on language switch
- [ ] Smooth content transition (<100ms)
- [ ] URL reflects language
- [ ] Preference persists across navigation
- [ ] All UI elements translate
- [ ] Spanish slugs remain consistent across languages

**Priority**: Must Have

---

### FR-006: Contact Footer
**Description**: Simple, always-visible contact information

**Content**:
- Heading: "Contacto"
- Email: info@nonomeweb.es (mailto link)
- Phone: +34 696 834 369 (tel link)
- Address: Calle Ancha, 26, Ponferrada, España, 24401

**Behavior**:
- Present on all pages within verticals
- Clickable email/phone links
- Clean, minimal styling
- Responsive layout

**Priority**: Must Have

---

### FR-007: Legal Page
**Description**: Static page with copyright and legal information

**Content**:
- Copyright notice (all content © owner)
- Basic privacy statement (no cookies/tracking in v1)
- Content rights declaration
- Simple, clear language (Spanish primary)

**Behavior**:
- Accessible from footer link
- Static content (no form/interaction)
- Translatable (ES/EN)

**Priority**: Should Have

---

### FR-008: File-Based Content Management
**Description**: Git-based content workflow without backend

**Structure**:
```
/content/
  /projects/
    /project-slug/
      /es/
        metadata.json  (title, year, location, type)
        content.json   (array of card objects)
      /en/
        metadata.json
        content.json
      /images/
        image-01.jpg
        image-02.jpg
```

**Workflow**:
1. Edit JSON files locally
2. Add images to project folder
3. Commit to git
4. Auto-build triggered
5. Build validates content structure
6. Deploy if successful (fail if invalid)

**Validation Rules**:
- Required fields: title, year, slug
- Image references must exist
- JSON syntax must be valid
- Language folders required (es/ mandatory, en/ optional)

**Priority**: Must Have

---

### FR-009: Build-Time Content Validation
**Description**: Catch content errors before deployment

**Validations**:
- JSON schema validation (structure)
- Image file existence checks
- Required field validation
- Translation completeness (warn if missing)
- Slug uniqueness

**Error Handling**:
- Build fails on critical errors
- Clear error messages with file/line numbers
- Prevents deploying broken site

**Priority**: Must Have

---

### FR-010: Image Optimization Pipeline
**Description**: Automated image processing at build time

**Processing**:
- Resize to multiple sizes (thumbnail, medium, large, original)
- Format conversion (JPEG → WebP with fallback)
- Compression (quality/size balance)
- Generate responsive image sets

**Outputs**:
- Optimized image files
- Metadata (dimensions, formats)
- Responsive image HTML

**Priority**: Must Have

---

## Non-Functional Requirements

### Performance
- **Initial Page Load**: < 2 seconds on 3G connection (image-heavy consideration)
- **Time to Interactive**: < 3 seconds
- **Animation Frame Rate**: 60 FPS for transitions and horizontal scrolling
- **Image Load**: Lazy loading for offscreen content
- **Build Time**: < 3 minutes for full site rebuild (6 projects)

### Scalability
- **Content Growth**: Support up to 50 projects without architecture changes
- **Image Volume**: Handle 20-30 images per project efficiently
- **Future 3D Models**: Architecture supports .ifc file integration (not implemented v1)

### Reliability & Availability
- **Uptime Target**: 99.9% (Azure Static Web Apps SLA)
- **Build Failure Rate**: < 1% (content validation prevents most failures)
- **Data Durability**: Git repository is single source of truth
- **Backup**: Automatic via git history and Azure redundancy

### Security
- **Authentication**: None required (public site)
- **Content Protection**: Copyright notice, no DRM
- **HTTPS**: Mandatory (Azure Static Web Apps default)
- **Data Collection**: None in v1 (no cookies, no analytics)
- **Form Security**: Not applicable (no forms in v1)
- **Secrets Management**: Azure deployment keys only (no application secrets)

### Usability
- **Accessibility**: WCAG 2.1 AA target
  - Keyboard navigation (arrows, ESC, Tab)
  - Semantic HTML
  - Alt text for all images
  - Sufficient color contrast
  - Focus indicators
- **Supported Browsers**: 
  - Chrome/Edge (last 2 versions)
  - Firefox (last 2 versions)
  - Safari (last 2 versions)
  - Mobile Safari (iOS 14+)
  - Chrome Mobile (Android 10+)
- **Device Support**: 
  - Desktop: 1920px+, 1440px, 1280px
  - Tablet: 1024px, 768px
  - Mobile: 375px, 414px
- **Localization**: Spanish (primary), English (secondary)

### Maintainability
- **Code Coverage**: 60% minimum (testing policy)
- **Documentation**: README with content management guide
- **Build Logs**: Accessible via Azure DevOps
- **Error Tracking**: Build-time validation prevents runtime errors
- **Code Style**: ESLint + Prettier configuration
- **Component Structure**: Atomic design principles (atoms → molecules → organisms)

---

## User Interface / User Experience

### Design Principles
1. **Minimalism First**: White background, generous whitespace, limited color palette (black, gray, white)
2. **Visual Hierarchy**: Images dominate, typography supports, interaction is subtle
3. **Smooth Transitions**: All state changes animated (page transitions, hover, navigation)
4. **Edge Signaling**: Always indicate more content (card edge peeks, arrows, dots)
5. **Keyboard First**: All interactions accessible via keyboard
6. **One-Action Clarity**: User always knows current state and available actions

---

### Key Screens/Views

#### Screen 1: Landing Page
**Purpose**: Vertical selection (architecture vs digital)

**Components**:
- Header: Logo + Language toggle (ES/EN)
- Main: Two vertical option cards/sections
  - /architecture (active, hover effect)
  - /digital (grayed out, non-interactive)
- Footer: Legal link only

**Interactions**:
- Click /architecture → Navigate to project gallery
- Click /digital → No action (grayed out)
- Language toggle → Update content, URL

**Layout**: Centered, vertical split or stacked cards

---

#### Screen 2: Project Gallery
**Purpose**: Showcase architecture projects, enable selection

**Components**:
- Header: Logo (→ landing) + Section navigation (Projects) + Language toggle
- Main: Project card grid
  - Card: Representative image
  - Hover: Enlarge + show project name
  - Click: Transition to detail
- Footer: Contact info + Legal link

**Interactions**:
- Hover card → Enlarge effect + name overlay
- Click card → Smooth transition to project detail
- Logo click → Return to landing
- Language toggle → Reload gallery in new language

**Layout**: Grid/masonry (responsive columns: 3 desktop, 2 tablet, 1 mobile)

---

#### Screen 3: Project Detail (Horizontal Gallery)
**Purpose**: Deep-dive into single project with rich content

**Components**:
- X button (top-right, fixed position)
- Current content card (full viewport)
- Left/right navigation arrows (overlaid on edges when applicable)
- Dot indicators (bottom center, shows position + count)
- Card edge peek (partial next/previous card visible)

**Card Types**:
- Image Card: High-res image, caption optional
- Text Card: Typography, project description/details
- (Future) 3D Model Card: Interactive viewer

**Interactions**:
- Click left/right arrows → Navigate cards
- Keyboard arrows → Navigate cards
- Click dots → Jump to specific card
- ESC or X button → Exit to gallery
- Swipe (mobile) → Navigate cards

**Layout**: Horizontal scroll container, cards centered, edges visible

---

### Navigation Flow
```
Landing Page
    ├─ /architecture → Project Gallery
    │                    └─ Project Detail (overlay/route)
    │                         └─ X → Back to Gallery
    └─ /digital (inactive v1)

Logo (any page) → Landing Page
Footer (any page) → Contact info + Legal link
```

---

### Animation Specifications

**Project Card Hover**:
- Scale: 1.0 → 1.05 (5% growth)
- Timing: 200ms ease-out
- Overlay: Fade in project name (opacity 0 → 1)

**Card to Detail Transition**:
- Duration: 400ms
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1)
- Sequence:
  1. Card scales to full viewport
  2. Gallery fades out
  3. Horizontal controls fade in
  4. Adjacent card edges become visible

**Horizontal Navigation**:
- Duration: 300ms per card
- Easing: ease-in-out
- Transform: translateX with GPU acceleration
- Maintain 60 FPS

**Language Switch**:
- Content fade out/in: 100ms each
- Total perceived time: < 200ms
- No layout shift

---

## Data Requirements

### Data Entities

#### Entity 1: Project
**Description**: Single architecture project with metadata and content

**Attributes**:
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| slug | String | Yes | URL-safe identifier (Spanish, human-readable) |
| title_es | String | Yes | Project title (Spanish) |
| title_en | String | No | Project title (English) |
| year | Integer | Yes | Completion year |
| location | String | Yes | Project location |
| type | String | Yes | Project category (e.g., residential, commercial) |
| thumbnail | String | Yes | Path to representative image |
| cards | Array[Card] | Yes | Ordered content cards for horizontal gallery |

**Storage**: File-based JSON (not database)

**Business Rules**:
- Slug must be unique across all projects
- Year must be 4-digit integer (1900-2100)
- Thumbnail image must exist in /images/ folder
- At least one card required per project
- Spanish content (title_es) mandatory, English optional

---

#### Entity 2: Card
**Description**: Individual content unit within project gallery

**Attributes**:
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| id | String | Yes | Unique within project |
| type | Enum | Yes | "image" / "text" / "model" |
| content | Object | Yes | Type-specific content data |
| order | Integer | Yes | Display sequence |

**Type-Specific Content**:

**Image Card**:
```json
{
  "type": "image",
  "content": {
    "src": "images/filename.jpg",
    "alt": "Description (Spanish)",
    "caption": "Optional caption (Spanish)"
  }
}
```

**Text Card**:
```json
{
  "type": "text",
  "content": {
    "heading": "Optional heading",
    "body": "Main text content (markdown supported)"
  }
}
```

**Model Card** (v2):
```json
{
  "type": "model",
  "content": {
    "src": "models/filename.ifc",
    "fallbackImage": "images/fallback.jpg"
  }
}
```

**Business Rules**:
- Cards ordered by `order` field (ascending)
- Image `src` must reference existing file
- Text content supports markdown formatting
- Minimum 1 card, recommended 3-8 per project

---

### Data Structure Example
```
/content/
  /projects/
    /villa-mediterranea/
      /es/
        metadata.json:
        {
          "slug": "villa-mediterranea",
          "title": "Villa Mediterránea",
          "year": 2024,
          "location": "Marbella, España",
          "type": "Residencial",
          "thumbnail": "images/cover.jpg"
        }
        
        content.json:
        {
          "cards": [
            {
              "id": "card-01",
              "type": "image",
              "order": 1,
              "content": {
                "src": "images/exterior-01.jpg",
                "alt": "Vista exterior principal",
                "caption": "Fachada sur con orientación al mar"
              }
            },
            {
              "id": "card-02",
              "type": "text",
              "order": 2,
              "content": {
                "heading": "Concepto",
                "body": "Villa contemporánea..."
              }
            }
          ]
        }
      
      /en/
        metadata.json: {...}
        content.json: {...}
      
      /images/
        cover.jpg
        exterior-01.jpg
        interior-01.jpg
```

---

### Data Validation Rules

**Build-Time Checks**:
1. All required fields present
2. Image references valid (files exist)
3. JSON syntax correct
4. Slug uniqueness across projects
5. Year in valid range
6. Card order sequential (no gaps)
7. Enum values valid (type field)

**Validation Output**:
- Pass → Build continues
- Fail → Build halts with error details (file, field, issue)

---

### Data Retention
- **Content**: Permanent (git history)
- **Images**: Permanent (git LFS recommended for large files)
- **Build Artifacts**: 30 days (Azure DevOps default)
- **Deployment History**: 90 days (Azure)

---

## Integration Requirements

### External Systems

#### Integration 1: Azure Static Web Apps
**Purpose**: Hosting and deployment
**Type**: Platform as a Service
**Authentication**: GitHub Actions or Azure DevOps (deployment keys)
**Data Exchanged**: Built static files (HTML, CSS, JS, images)
**Frequency**: On git push to main branch
**Fallback**: Manual deployment via CLI if CI/CD fails

**Configuration**:
- Auto-build on commit
- Preview environments for pull requests
- Custom domain: nonome.es
- SSL certificate: Auto-provisioned
- CDN: Included (Azure Front Door)

---

#### Integration 2: Git Repository (GitHub/Azure Repos)
**Purpose**: Source control and content management
**Type**: Git-based version control
**Authentication**: SSH keys or personal access tokens
**Data Exchanged**: Code, content files, images
**Frequency**: On-demand (manual commits)
**Fallback**: Local filesystem backup

**Workflow**:
1. Edit content locally
2. Commit changes
3. Push to remote
4. Trigger build pipeline
5. Deploy to Azure

---

#### Integration 3: Azure DevOps Pipelines
**Purpose**: CI/CD automation
**Type**: Pipeline as code
**Authentication**: Service connections
**Data Exchanged**: Build commands, artifacts, deployment targets
**Frequency**: On git push
**Fallback**: Manual build and deploy

**Pipeline Steps**:
1. Install dependencies
2. Validate content (JSON schema, file existence)
3. Build static site (SSG)
4. Optimize images
5. Run tests (component, e2e basic)
6. Deploy to Azure Static Web Apps
7. Notify on failure

---

## Business Rules

### BR-001: Language Fallback
**Description**: If English translation missing, display Spanish content
**Conditions**: User selects EN but project lacks /en/ folder or fields
**Actions**: 
- Display Spanish content
- Show subtle indicator "Contenido en español"
- Log missing translation (for content audit)

---

### BR-002: Project Ordering
**Description**: Always display projects newest first
**Conditions**: Gallery page load or language switch
**Actions**:
- Sort by `year` field descending
- If same year, sort by `title` alphabetically
- Cache sort order per language

---

### BR-003: Image Optimization
**Description**: Generate responsive image sets automatically
**Conditions**: Build process encounters image files
**Actions**:
- Generate sizes: 400w, 800w, 1200w, 1920w
- Convert to WebP with JPEG fallback
- Preserve original in /optimized/
- Update references in HTML

---

### BR-004: Content Validation Failure
**Description**: Prevent deployment of invalid content
**Conditions**: Build-time validation detects errors
**Actions**:
- Halt build immediately
- Output detailed error log
- Email notification to maintainer
- Preserve previous deployment (site remains live)

---

### BR-005: URL Slug Consistency
**Description**: Maintain Spanish slugs across all languages
**Conditions**: URL generation for projects
**Actions**:
- Use Spanish slug for all language routes
- Format: /es/arquitectura/villa-mediterranea and /en/architecture/villa-mediterranea
- Never translate slugs
- Enforce kebab-case (lowercase, hyphens)

---

## Error Handling

| Error | Cause | User Message | System Action |
|-------|-------|--------------|---------------|
| 404 - Project Not Found | Invalid slug or deleted project | "Proyecto no encontrado" + link to gallery | Log error, redirect to gallery after 3s |
| 500 - Build Failure | Content validation failed | N/A (build environment) | Email notification, preserve last deployment |
| Image Load Failure | Missing/corrupt image file | Display placeholder, caption remains | Log error, show gray placeholder box |
| Translation Missing | EN content requested but not available | Display Spanish content + indicator | Log for content audit |
| JavaScript Disabled | User has JS disabled | Basic static site remains functional | Graceful degradation (no animations) |
| Browser Unsupported | IE11 or older | "Navegador no compatible" banner | Suggest modern browser, basic layout still works |

---

## Assumptions & Constraints

**Assumptions**:
1. Owner provides all content (images, text, translations) – **validated**
2. 6 projects ready for v1 launch – **validated**
3. High-resolution images available (owner handles photography) – **validated**
4. Azure subscription active – **validated** (needs resource group creation in sprint 1)
5. Domain nonome.es owned and DNS configurable – **validated** (setup required in sprint 1)
6. One-person maintenance acceptable (no team collaboration features needed) – **validated**
7. No analytics/tracking in v1 (no GDPR banner) – **validated**

**Technical Constraints**:
- **Platform**: Azure Static Web Apps (required)
- **CI/CD**: Azure DevOps Pipelines (required)
- **Browser Support**: Modern browsers only (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Build Time**: Must complete within 10 minutes (Azure DevOps free tier limit)
- **File Size**: Images < 5MB each (owner will compress manually if needed, optimization pipeline handles rest)
- **Storage**: Git repository < 1GB (standard git, no LFS needed)

**Business Constraints**:
- **Budget**: Azure costs < €20/month (Static Web Apps free tier + small overages)
- **Timeline**: No fixed deadline (quality over speed)
- **Content**: Spanish primary language (English secondary)
- **Design**: Minimalist aesthetic non-negotiable (brand identity)

---

## Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | Azure subscription ready and resource group created? | Owner | ✅ Resolved - Subscription available, needs setup |
| 2 | Domain nonome.es DNS access available? | Owner | ✅ Resolved - Access confirmed, needs configuration |
| 3 | Preferred SSG framework (Next.js, Astro, SvelteKit)? | web-PM | ✅ Resolved - **Astro** (simple, content-focused, three.js compatible) |
| 4 | Git LFS needed for large images, or compress first? | web-PM | ✅ Resolved - No LFS, manual compression |
| 5 | Preview environments desired for content review before publish? | Owner | ✅ Resolved - Yes, via Azure Static Web Apps staging slots |

---

## Approval

| Stakeholder | Role | Date | Status |
|-------------|------|------|--------|
| Owner | Product Owner | TBD | Pending |
| web-projectManager | Technical Lead | 2025-12-23 | Draft Complete |

---

## References

**Standards**: [DoD](../../../../NOA-system/general/definition-of-done.md) | [Testing](../../../../NOA-system/general/testing-policy.md) | [Security](../../../../NOA-system/general/security-policy.md) | [Task Splitting](../../../../NOA-system/general/task-splitting-guidelines.md)

**Project**: [Brief](./project-brief.md) | [Stack](./tech-stack.md) | [HLD](./hld.md) | [Backlog](./backlog.md)

**Department**: [Web Policy](../../../../NOA-system/web/web-policy.md) | [DevSecOps](../../../../NOA-system/web/devsecops-policy.md)

---

*Created by: web-projectManager*  
*Last updated: 2025-12-23*
