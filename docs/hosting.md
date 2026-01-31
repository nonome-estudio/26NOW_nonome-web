# Hosting: GitHub Pages (Plan)

## Choice
- **Hosting**: GitHub Pages
- **DNS provider**: Dinahosting (no paid hosting required)
- **Canonical**: recommend `https://nonome.es`

## Why
- Simple and cheap for a static Astro site.
- Enough for v1 (no backend).

## DNS (Dinahosting)

### Apex domain (nonome.es)
Create/ensure these **A records**:
- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

### www subdomain
Create a **CNAME**:
- `www` → `<your-github-username>.github.io`

(We will confirm the exact username/org URL used for Pages in the repo settings.)

## GitHub repo settings
1. Repo → **Settings** → **Pages**
2. Set Source to **GitHub Actions** (recommended for Astro)
3. Add **Custom domain**: `nonome.es`
4. Wait for DNS check to pass
5. Enable **Enforce HTTPS**

## Notes
- DNS propagation can take minutes to hours.
- If we want `www → apex` redirect, we can either:
  - set canonical SEO + accept both hosts, or
  - add a small redirect page on the secondary host (if GitHub Pages doesn’t auto-redirect for our setup).

## Pending task: Enforce HTTPS issue
If GitHub Pages shows **"Enforce HTTPS unavailable"**:
1. In Dinahosting DNS, ensure apex `@` has **only** the four GitHub Pages A records:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
   Remove any extra apex A records (e.g. `199.36.158.100`).
2. Ensure the site has at least one successful deploy.
3. Wait for certificate provisioning (can take hours).
