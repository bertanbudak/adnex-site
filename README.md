# adcrypt-site

Static product page for AdCrypt at adnex.io/adcrypt. Plain HTML and CSS on the Adnex web tokens. No framework. Rules are in `CLAUDE.md`, the build brief is the handoff `BRIEF.md`, open questions are in `QUESTIONS.md`.

## Layout

```
src/
  404.html                      -> dist/404.html (root, absolute /adcrypt/ asset paths)
  adcrypt/index.html            -> dist/adcrypt/index.html (the page, approved markup)
  adcrypt/ds/adnex/website/
    web-tokens.css              -> dist/adcrypt/ds/... (copied unchanged from the handoff)
public/
  assets/                       -> dist/adcrypt/assets/ (logos, posters, WebM and MP4 loops and film)
scripts/
  build.mjs                     copies the above into dist/
  check-copy.mjs                copy grep from BRIEF.md on the built HTML
vercel.json                     output dist/, trailing slash, cache headers
```

## Commands

- `npm run build`: writes `dist/`.
- `npm run check`: copy grep on `dist/` (no em or en dashes, no exclamation marks, no comma before "and", "AdCrypt" capitalisation, "Gram" not "TON").
- `npm run preview`: builds and serves `dist/` at http://localhost:8080/adcrypt/

## Notes

- The page keeps relative paths (`assets/...`, `ds/...`). The page is served with a trailing slash (`/adcrypt/`); `vercel.json` redirects `/adcrypt` to `/adcrypt/`.
- Cache: `/adcrypt/assets/*` one year, immutable. HTML and `ds/*` five minutes. The token stylesheet is not fingerprinted, so it is not cached for a year.
- Placeholders stay in square brackets until the real values arrive (see `QUESTIONS.md`).
