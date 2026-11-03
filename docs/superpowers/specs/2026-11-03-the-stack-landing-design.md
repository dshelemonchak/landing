# "The Stack" — personal landing for Danylo Shelemonchak

Status: draft for review · Date: 2026-11-03 · Language: English only

## 1. Purpose and audience

A one-page business card that presents Danylo as a full-stack engineer (Angular / Java Spring)
to **HR and recruiters**, and gets them to open a conversation (Telegram / LinkedIn / email).

Success criteria:
- A recruiter understands *who, what stack, how senior, how to contact* within ~15 seconds
  without interacting with anything.
- A technical reader finds at least three concrete, believable facts (numbers, mechanisms).
- The page is memorable: it is visibly *made by* a full-stack engineer, not a template.
- Hosted on GitHub Pages at `https://dshelemonchak.github.io/landing/`, loads instantly,
  works on a phone, works without JavaScript.

Non-goals: blog, CMS, analytics, contact form, i18n, CV hosting, case-study subpages.

## 2. Concept

The page is a **vertical architecture diagram**. Scrolling sends an HTTP request down through the
layers of the stack — browser → HTTP → security → server → database — and the response travels
back up. Layers are nodes; **connectors between layers carry the facts** that link the technologies
("this is why the two ends agree", "this is why it is fast").

The metaphor is literal and cheap: the page header is a live request line,
`GET /danylo-shelemonchak`, and the bottom of the page returns `200 OK` with the contacts.

## 3. Content (source of truth: CV `Danylo Shelemonchak cv.pdf`)

Only facts from the CV are used. No invented numbers, no claims beyond the CV.
The fintech product and employer are under NDA: write **"Fintech · Financial Planning SaaS (NDA)"**;
do not name the company or product.

### 3.1 Request line (hero, top)
- `GET /danylo-shelemonchak` in mono type
- H1: **Danylo Shelemonchak**
- One line: *Full-stack engineer · Angular + Java Spring · 6 years of SaaS · Remote from Ukraine*
- One sentence: *I own features from investigation to production — across the browser, the API and the database.*

### 3.2 Layers (top → bottom)

| # | Layer | Tech tags | Node facts |
|---|-------|-----------|------------|
| 1 | **Browser / UI** | Angular 16–21, TypeScript, RxJS, Signals, Standalone components, React, SCSS, a11y, i18n | Principal contributor to a library of **47** standalone components · Base page component used by **48** feature pages · Moved code to Signals + zoneless change detection |
| 1a | **The big form** (sub-node of UI) | Reactive forms | **836** fields · **50** subforms · **139** cross-field formulas · ~**⅓** implemented personally |
| 2 | **HTTP** | REST, ETag, Cache-Control | Server-side caching with revision-aware invalidation · Lighthouse **~20 → 75–80** (data-loading optimisations, contributed) |
| 3 | **Security** | Spring Security, JWT | Registration, password reset, email confirmation and access rules for white-labelled products |
| 4 | **Server** | Java 17, Spring Boot 3, JavaMail, Thymeleaf | Centralised exception handling with structured error responses · REST endpoints, role-based access, localisation |
| 5 | **Data** | Spring Data JPA, SQL | Tables, JPA mappings, business logic · Fixed a data-integrity issue with duplicate records |

### 3.3 Connectors (facts that link layers)
- **UI ↔ Server:** "The financial rules exist twice — in TypeScript and in Java. Client and server cannot disagree."
- **UI ↔ HTTP:** "The cheapest request is the one answered with 304."
- **HTTP ↔ Security:** "Registration, password reset and email confirmation — extended for white-labelled products."
- **Server ↔ Data:** "A duplicate-records bug is a data problem first, a UI problem last."
- **Whole stack (side rail "Around the stack"):**
  - 6 years commercial · fintech, healthcare, education
  - Mentored a junior developer; code review
  - Claude Code for scoped implementation and investigation — security, quality and maintainability stay my responsibility
  - Remote work with international teams · English B2

### 3.4 Track record (below the diagram, compact timeline, not cards)
Heading line: *Altronica (outstaff, remote) · Aug 2020 – Sep 2026* — one employer, three projects.

1. **Sep 2022 – Sep 2026** — Senior Frontend Developer · Fintech / Financial Planning SaaS (NDA)
2. **Oct 2021 – Aug 2022** — Full-Stack Developer · React CRM for nursing homes (Jest, JPA, REST; desktop + iPad)
3. **Oct 2020 – Sep 2021** — Frontend Developer · CRM for language schools (chat, scheduling, attendance, role-based access, MDB → ng-bootstrap migration)

Education: M.Sc. System Analysis, National Aerospace University "KhAI" (2022–2024; B.Sc. 2018–2022).

### 3.5 Response (bottom)
`200 OK` — then contacts: Telegram `t.me/dshelemonchak`, LinkedIn `linkedin.com/in/danylo-shelemonchak`,
email `shelemonchakdanil@gmail.com` (from the CV, not the account email).

## 4. Visual design

Anti-slop rules (the `antislop:antislop-ui` skill is not installed in the authoring session;
these rules stand in for it and should be re-checked against it if it becomes available):
- No gradient hero, no glassmorphism, no stock illustration, no emoji icons, no 3-up icon-card row.
- No filler copy ("passionate", "results-driven", "cutting-edge"). Every line is a fact or a mechanism.
- Hierarchy through type scale and rules/lines, not boxes with drop shadows.

Look: an **engineering drawing**.
- Background: warm paper `#f4f1ea`; ink `#14161a`; one accent for the live packet and the request line `#e8441a`.
  Dark theme (`prefers-color-scheme: dark`): `#0f1214` / `#e8e6e0` / `#ff6a3d`. All as CSS custom properties.
  Theme selection follows the OS; no toggle (YAGNI).
- Type: system stacks only (no external fonts, no extra request). Mono (`ui-monospace, "SF Mono", Menlo, Consolas`) for
  request lines, tags and numbers; system sans for prose. Large tabular numerals (47 / 48 / 836 / 139) are the main typographic event.
- Layers: full-width blocks separated by 1px rules, layer label in mono small caps at left (`01 BROWSER`, `02 HTTP` …).
  Layers are told apart by line style (solid / dashed / dotted) and a number, not by a rainbow of colours.
- Spine: a vertical line down the page with a small **packet** (accent dot). Connector facts hang off the spine as
  short annotation lines with a leader line, like dimension callouts in a drawing.
- Desktop (≥ 960px): spine at 1/3 from the left, layers to the right, "Around the stack" rail on the far right.
  Mobile: spine on the left edge, single column, rail moves below the diagram. Gutter 16px, no horizontal scroll at 320px.

## 5. Interaction

All content is **visible by default** — nothing is hidden behind hover/tap, because recruiters do not hover.
JavaScript only adds motion on top of complete HTML.

- **Packet:** `position` along the spine follows scroll progress. Scrolling down = request travelling to the DB;
  at the bottom the sticky status flips to `200 OK`; scrolling back up = response travelling up.
- **Sticky status chip** (top right): shows the current layer, e.g. `→ 03 SECURITY`, updates via `IntersectionObserver`.
  Also holds a "Contact" anchor link.
- **Layer entry:** numbers count up once when a layer first enters the viewport (≤ 600ms).
- `prefers-reduced-motion: reduce`: no packet animation, no count-up; final values rendered, status chip static.
- No-JS: spine static, packet hidden, everything readable.
- Keyboard: tab order follows the DOM (contacts last); visible focus ring in accent colour.

## 6. Technical design

Static site, **no build step, no dependencies**.

```
/index.html                  # all content, semantic HTML (header, main > section per layer, footer)
/assets/styles.css           # tokens, layout, layers, spine, dark theme, reduced-motion
/assets/stack.js             # packet, status chip, count-up (~300 lines, no libs, progressive enhancement; includes the 836-field canvas)
/assets/favicon.svg          # a small packet-on-a-line mark
/assets/og.png               # 1200×630 social preview (generated from the page via Playwright)
/.nojekyll
/.github/workflows/pages.yml # deploy to GitHub Pages on push to main
```

- Semantics: one `<h1>`, each layer an `<section aria-labelledby>`; decorative spine/packet `aria-hidden="true"`;
  numbers as real text (not CSS counters) so screen readers and ATS-style crawlers read them.
- SEO/share: `<title>Danylo Shelemonchak — Full-stack engineer (Angular · Java Spring)</title>`, meta description,
  Open Graph + Twitter card, `lang="en"`, canonical URL, JSON-LD `Person`.
- Performance budget: HTML+CSS+JS < 50 KB gzipped, no external requests, Lighthouse ≥ 95 in all four categories.
- Deploy: workflow `actions/upload-pages-artifact` + `actions/deploy-pages` on push to `main`.
  **One manual step for Danylo:** repo Settings → Pages → Source = "GitHub Actions". Work happens on
  `claude/magical-darwin-xc8fjg`; it reaches Pages after it is merged to `main`.

## 7. Verification (before claiming done)

- Playwright (pre-installed Chromium): screenshots at 390×844 and 1440×900, light and dark; assert no horizontal scroll at 320px.
- No-JS render check (JS disabled): all facts present.
- Reduced-motion check.
- Lighthouse run against the local static server.
- Fact check: every number on the page (47, 48, 836, 50, 139, ~⅓, 20 → 75–80, 6 years) matched against the CV text, line by line.
- Link check: Telegram, LinkedIn, mailto.

## 8. Assumptions to confirm

1. No "open to work" badge (CV ends Sep 2026; status unknown). Add one line if wanted.
2. No CV download button — the CV in Drive is not public. If you provide a PDF, it goes to `/assets/` and a button is added.
3. No photo.
4. Employer "Altronica" is shown as the timeline heading (it is on the CV); the fintech product stays anonymous.
5. Email shown is the one from the CV.
