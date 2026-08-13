# ProRanker — static site

Cookie-free landing page, privacy policy, and terms of use for [prorankerapp.com](https://prorankerapp.com).

Deployed via **Cloudflare Pages** from this repository.

> **Legal notice:** Privacy and terms text are first drafts for app store submission. Have a lawyer review before treating them as final, especially for GDPR compliance in Greece.

## Pages

| URL | File |
|-----|------|
| `/` | `index.html` |
| `/privacy` | `privacy.html` (via `_redirects`) |
| `/terms` | `terms.html` (via `_redirects`) |

**Languages:** English (default) and Greek. Toggle with the header buttons or `?lang=el` / `?lang=en`. No cookies or `localStorage`.

**Contact:** [admin@prorankerapp.com](mailto:admin@prorankerapp.com)

## Local preview

Open any HTML file in a browser, or serve the folder:

```bash
cd site
python3 -m http.server 8080
# http://localhost:8080
```

Note: `_redirects` pretty URLs (`/privacy`, `/terms`) only apply on Cloudflare Pages, not on a plain static server.

## Cloudflare Pages setup

1. **Workers & Pages → Create → Connect to Git** → select this repo (`prorankerapp/site`).
2. **Build settings:**
   - Framework preset: **None**
   - Build command: *(empty)*
   - Build output directory: `/` (repository root)
3. Deploy and verify `https://<project>.pages.dev/privacy` and `/terms`.
4. **Custom domains:** add `prorankerapp.com` and `www.prorankerapp.com`.

### DNS — do not break email

This site only needs **A/CNAME** records for the apex and `www` hostname. **Do not change:**

- **MX** records (Papaki / webapps — receives `admin@prorankerapp.com`)
- **SPF** on `prorankerapp.com` (`include:spf.webapps.net`)
- **SPF** on `send.prorankerapp.com` (Resend / `amazonses.com`)
- Resend **DKIM** CNAMEs

Leave `api.prorankerapp.com` pointing at Railway.

**Do not enable Cloudflare Email Routing** if Papaki MX is already in use — it would stop delivery to `admin@`.

## App store URLs

After HTTPS is live:

- Privacy Policy: `https://prorankerapp.com/privacy`
- Terms: `https://prorankerapp.com/terms`
- Support / marketing URL: `https://prorankerapp.com`

## Styling

Colors match the Expo app tokens in `fredric/lib/theme.ts` and `fredric/global.css` (warm parchment light theme, dark mode via `prefers-color-scheme`).

## GitHub

Local repo is initialized on branch `main`. Create the remote and push:

1. On GitHub: **New repository** → org `prorankerapp`, name `site`, public, no template, no README.
2. From this folder:

```bash
git remote add origin https://github.com/prorankerapp/site.git
git push -u origin main
```

Or with GitHub CLI:

```bash
gh repo create prorankerapp/site --public --source=. --remote=origin --push
```

## Related repos

- [fredric](https://github.com/prorankerapp/fredric) — mobile app
- [scrappy](https://github.com/prorankerapp/scrappy) — API and data pipeline
