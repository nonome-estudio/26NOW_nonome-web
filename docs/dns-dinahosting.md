# DNS: Dinahosting → GitHub Pages (nonome.es)

## Goal
Serve the site at the root domain: **https://nonome.es**

## Records to set in Dinahosting DNS

### 1) Apex domain (nonome.es)
Create **A records** for `@` pointing to GitHub Pages:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### 2) www subdomain
Create a **CNAME**:
- `www` → `nonome-estudio.github.io`

(If we change the Pages source/URL, adjust accordingly.)

## GitHub Pages settings
1. Repo → Settings → Pages
2. Build and deployment: **GitHub Actions**
3. Custom domain: `nonome.es`
4. Ensure `public/CNAME` contains `nonome.es`
5. Enable **Enforce HTTPS** once DNS check passes

## Notes
- DNS propagation can take minutes to hours.
- Decide canonical host: recommend `nonome.es` and redirect `www` if desired.
