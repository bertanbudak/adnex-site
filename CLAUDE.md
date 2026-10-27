# adnex.io/adcrypt

Static product page for AdCrypt, the Adnex Chrome extension for Telegram Ads. Plain HTML and CSS on the Adnex web design system. The design of record is the Claude Design canvas "AdCrypt page"; `BRIEF.md` is the build brief.

## Rules

- Tokens only. `web-tokens.css` is imported first and unchanged; page CSS references its custom properties and never writes raw colours, sizes or font names. The page's own `:root` block adds the AdCrypt blue set (ground #EAF2FF, ground-light #F5F9FF, paper #FBFCFF, accent #2AABEE, accent-deep #0B4F7A) and nothing else.
- Type: Poppins and Geist Mono only, at the recorded scale. h1 is display-lg from 1200 px and headline-lg below; h2 is headline-lg from 1024 px and headline-md below.
- Cards and frames: 2.5 px ink border, 24 px radius on cards, 12 px on video frames, the 8 px hard offset shadow and no other shadow.
- Breakpoints: 1200, 1024, 640 px.
- Videos: WebM first, MP4 fallback, a poster on each. Loops autoplay muted; the film plays on click. Under prefers-reduced-motion nothing plays on load.
- Copy is approved. Do not rewrite it. British spelling, no em dashes, no exclamation marks, no comma before "and", "AdCrypt" with a capital C, "Gram" not "TON". Placeholders stay in square brackets until the real value arrives.
- No analytics, cookie banners, chat widgets or third-party scripts unless asked in writing.
- Every "Add to Chrome" link is a mailto until the Chrome Web Store URL exists. Never invent that URL, a price, a trial or a badge.

## Checks before a pull request

No horizontal scroll at 375, 768 and 1440 px. Keyboard pass with a visible focus ring. Reduced-motion pass. Lighthouse 90 or above on performance, accessibility and best practices. Copy grep as above. Page weight under 12 MB with the film.

## When unsure

Write the question in `QUESTIONS.md`, build the nearest thing to the design, and say so in the pull request.
