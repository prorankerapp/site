# ProRanker — static site

Cookie-free landing page, privacy policy, terms of use, and Article 14 GDPR notice for [prorankerapp.com](https://prorankerapp.com).

> **Legal notice:** Privacy and terms text are first drafts for app store submission. Have a lawyer review before treating them as final, especially for GDPR compliance in Greece.

## Pages

| URL | File |
|-----|------|
| `/` | `index.html` |
| `/privacy` | `privacy/index.html` |
| `/terms` | `terms/index.html` |
| `/article-14` | `article-14/index.html` |
| `/delete-account` | `delete-account/index.html` |

**Languages:** English (default) and Greek. Toggle with the header buttons or `?lang=el` / `?lang=en`. No cookies or `localStorage`.

**Contact:** [admin@prorankerapp.com](mailto:admin@prorankerapp.com)

## Local preview

From this folder:

```bash
python3 -m http.server 8080
# http://localhost:8080
```

Pretty URLs (`/privacy`, `/terms`) are folder `index.html` files. A local static server also serves them at those paths.

## App store URLs

- Privacy Policy: `https://prorankerapp.com/privacy`
- Terms: `https://prorankerapp.com/terms`
- Article 14 GDPR Notice: `https://prorankerapp.com/article-14`
- Account deletion (Google Play): `https://prorankerapp.com/delete-account`
- Support / marketing URL: `https://prorankerapp.com`

## Styling

Colors match the Expo app tokens in `fredric/lib/theme.ts` and `fredric/global.css` (warm parchment light theme, dark mode via `prefers-color-scheme`).

## Related repos

- [fredric](https://github.com/prorankerapp/fredric) — mobile app
- [scrappy](https://github.com/prorankerapp/scrappy) — API and data pipeline
