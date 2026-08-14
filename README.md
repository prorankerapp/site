# ProRanker — static site

Cookie-free landing page, privacy policy, and terms of use for [prorankerapp.com](https://prorankerapp.com).

Deployed via **Cloudflare Workers** (static assets) from this repository. The dashboard requires a deploy command (`npx wrangler deploy`).

> **Legal notice:** Privacy and terms text are first drafts for app store submission. Have a lawyer review before treating them as final, especially for GDPR compliance in Greece.

## Pages

| URL | File |
|-----|------|
| `/` | `index.html` |
| `/privacy` | `privacy/index.html` |
| `/terms` | `terms/index.html` |
| `/delete-account` | `delete-account/index.html` |

**Languages:** English (default) and Greek. Toggle with the header buttons or `?lang=el` / `?lang=en`. No cookies or `localStorage`.

**Contact:** [admin@prorankerapp.com](mailto:admin@prorankerapp.com)

## Local preview

Open any HTML file in a browser, or serve the folder:

```bash
cd site
python3 -m http.server 8080
# http://localhost:8080
```

Pretty URLs (`/privacy`, `/terms`) are folder `index.html` files. A local static server also serves them at those paths.

## Cloudflare setup

The Git-connected dashboard uses **Workers Builds**, so **Deploy command is required**.

1. **Workers & Pages → Create → Connect to Git** → `prorankerapp/site`.
2. **Worker name** must match `"name"` in `wrangler.jsonc` (currently `proranker-site`). If you already created a different name, change `wrangler.jsonc` to match.
3. **Build settings:**
   - Build command: *(empty)*
   - Deploy command: `npx wrangler deploy`
4. Deploy and verify `/`, `/privacy`, `/terms`, and `?lang=el`.
5. **Custom domains:** add `prorankerapp.com` and `www.prorankerapp.com`.

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
- Account deletion (Google Play): `https://prorankerapp.com/delete-account`
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
