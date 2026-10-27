# Open questions

Written during the build of adnex.io/adcrypt. Each item says what is blocked and what input settles it.

## 1. Design canvas: resolved

Bertan confirmed on 27/10/2026 that the canvas and `index.html` match (canvas version 1793040416-1cf2). Pixel comparison against the approved file: zero differing pixels at 375, 768 and 1440 px.

## 2. Raw values left in the page CSS (no matching token)

BRIEF.md and CLAUDE.md say page CSS uses tokens only. Forty groups were switched to tokens where the token has the same value (no visual change). These raw values have no exact token and are still in the file:

- Stylesheet: `6px` (`.label .dot`), `18px` and `20px` icon sizes, `40px` art images, `28px` logo size and gap, `12px 28px` logo gap, `12px` and `10px` gaps, `36px` and `48px` margins, `20px` heading margin, `22px` brand margin, `24px` tier padding, `12px` figcaption margin, `4px` underline offset, `40rem` FAQ measure (the token `--measure` is `36rem`), `320px` ghost numeral, `280px` card minimum, `44px` nav heights, `18px` and `20px` paddings, `3px` focus outline, `2px` focus offset, `-8px`, `-100px`, `-120px` offsets, `-0.01em` heading tracking, `600 22px/1` FAQ marker, and the `1023px`, `1024px`, `1200px`, `639px`, `640px` breakpoints (media queries cannot use custom properties).
- Inline styles: `12px`, `16px`, `20px`, `22px`, `32px`, `44px`, `48px`, `8px`, `160px` on individual elements.

Decision needed: add tokens for these values in the design system, or accept the raw values for now. The second option is the current build.

## 3. Page `:root` sets more than the AdCrypt blue set

CLAUDE.md says the page `:root` adds the blue set "and nothing else". The page also overrides `--on-dark` (#E0ECFF), `--on-dark-border` (rgba of the same), `--accent`, `--accent-deep`, `--text-label` and `--focus-ring`. Only the first five colours appear in the README list. The page keeps the approved values. Input needed: confirm `#E0ECFF` as the light text on the ink bands, and whether these tokens belong in the design system.

## 4. Hosting and routing for adnex.io/adcrypt

Cloudflare Pages is not confirmed as set up for this account, so the brief's fallback is Vercel. The repository is ready for a Vercel project (`vercel.json`: output `dist`, trailing slash, cache headers). Input needed: which host serves the adnex.io root, so that `/adcrypt` can be routed to this project. Without that, only a preview URL is possible.

## 5. 404 page placement

The 404 copy is now the approved wording from Bertan on 27/10/2026: "Nothing here.", "The page moved or never existed.", links to AdCrypt (/adcrypt/) and adnex.io. It uses the page tokens and footer. The footer anchors point to `/adcrypt/#privacy` and `/adcrypt/#licence` because a 404 has no sections of its own. The file sits at the output root, so on Vercel it answers any unmatched path on this project. If adnex.io is one project, it will affect the whole domain, not only `/adcrypt`. Input needed: confirm the host setup in item 4.

## 6. Licence number in the footer

The footer reads "Licence No. 2527002.01". It comes from the approved page. The handoff does not show a source for it. Input needed: confirm it against the Adnex Advertising Solutions L.L.C-FZ registration.

## 7. Fonts loaded twice, Roboto loaded unused

`web-tokens.css` imports Poppins, Geist Mono and Roboto from Google Fonts. The page adds its own link for Poppins and Geist Mono, as BRIEF.md asks. So Poppins and Geist Mono load twice, and Roboto loads with no use on this page. The token file was kept unchanged, as the brief asks. Decision needed: whether to drop Roboto from the token import in the design system.

## 8. Cache policy deviation

BRIEF.md asks for assets cached for a year and HTML for five minutes. `ds/adnex/website/web-tokens.css` is not fingerprinted, so it is set to five minutes, not a year. Input needed: confirm, or add a fingerprint to the token file name.

## 9. Page weight counting

On disk, `public/assets/` is 12,048,771 bytes (12.05 MB decimal). That includes the MP4 fallbacks, which a Chrome visitor does not download. Without the MP4 files it is 6,608,617 bytes (6.6 MB), and without the film 2,195,769 bytes (2.2 MB). Input needed: which total the brief means, with or without the MP4 fallbacks, so the check can be signed off.

## 10. Repository, PR and preview

The branch `adcrypt-page` is pushed to `bertanbudak/adnex-site`. The pull request is not open yet: the GitHub account on this Mac can push but has no pull-request permission. Input needed: open the PR from the compare link, or grant pull-request access.

The Vercel deployment `adcrypt-site` was assigned to production by the first deploy, against the instruction for a preview only. It is live at adcrypt-site.vercel.app. Input needed: remove the production alias and project, or keep it. No preview-only deployment exists yet.
