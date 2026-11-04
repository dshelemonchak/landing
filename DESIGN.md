# DESIGN.md

Design direction for https://dshelemonchak.github.io/landing/. Approved as **V6** on 2026-11-04.
Any change to the page should be checked against this file first.

## Goal

Sell Danylo Shelemonchak to recruiters and hiring managers as a **Senior Full-stack engineer: Java Spring Boot + Angular, six years of commercial SaaS, remote from Ukraine**.

- The reader is HR first, engineers second. Every block answers "why hire him" before "how it works".
- Technical detail is secondary and sits behind **How it works** toggles.
- English only, first person, plain sentences. No buzzword stacks.
- Facts come from the CV only. Nothing invented: no fake metrics, no fake testimonials.

## Concept: Stack of Worlds

A request travels down the stack. Each layer of the stack is its own **world**: one full-width block with its own palette, typeface and 3D illustration. The blocks follow one after another, so the page reads like moving through levels of a game.

The styles are **inspired by** Apple product pages, console UI (PlayStation), medieval chronicles (Kingdom Come), voxel crafting (Minecraft) and painterly RPG text (Disco Elysium). These are moods, never direct references: no logos, characters, names, iconography or recognizable assets.

| Order | World | Mood | Background / text | Typeface | Illustration (what it proves) |
|---|---|---|---|---|---|
| Hero | Console | Dark, warm | `#111214` / `#EEEBE4` | Manrope 800 | Exploded 3D stack, Angular on top to SQL at the bottom: "I own every layer" |
| AI | Accountable AI | Deep teal | `#1E3A3C` / `#F4EDE0` | Bricolage Grotesque | Agents (investigator, implementer, option scout) send work to **Human review**: AI speeds me up, I stay responsible |
| 01 | Studio (Frontend) | Light, product page | `#F6F5F1` / `#111111` | Manrope | One SPA shell, views swap in place, built from a shared component library |
| 02 | Network | Ink teal, console | `#0B2A30` / `#E3F1F0` | Saira Condensed | Packet App to Cache to API; second trip is shorter; page speed score rises |
| 03 | Security | Parchment chronicle | `#EFE5CF` / `#2B2117` | EB Garamond | Castle with moat, drawbridge, gate and hills: every request is checked at the gate |
| 04 | Backend | Dark workshop | `#2E2018` / `#F7EDE0` | Pixelify Sans | Blocks controller, service, repository; the request goes down and the response comes back up |
| 05 | Data | Light mineral | `#E7E3DB` / `#1F1E1C` | Azeret Mono | The same person stored twice; duplicate rows merge into one and every link points at it |
| Footer | Contact | Light | `#F6F5F1` / `#111111` | Manrope | Playful tilted contact cards |

Accent across all worlds: amber **`#E9A93B`**, used for the primary action, the hero's "Java Spring Boot" line, and unlocked achievements.

## Building blocks

- **Achievements**: unlockable tiles in the hero, styled like console trophies. Each holds a CV fact: Angular components contributed, page speed improvement, fields in one financial form. They unlock once on scroll.
- **AI block sits directly after the hero.** The message is "I use various AI tools to speed up investigation and implementation, and I am always responsible for quality". No specific tool or vendor is named.
- **How it works**: each world has a toggle that reveals the technical caption. Closed by default.
- **Contact cards**: large tilted cards that lift on hover. Email is the primary action.
- **Telegram is hidden** until the account is ready. Every Telegram element is driven by `CONTACT.telegram` at the top of `assets/app.js`. Set it to the URL and the top-bar link, hero button and contact card come back. It stays `null` until then.

## Dials

- **ENERGY 3**: bold type, saturated worlds, 3D in every block.
- **RHYTHM 3**: varied. Each world changes palette, font and composition, so no two adjacent blocks look alike.
- **MOTION 2**: purposeful one-shot animations triggered on scroll (stack explode, packet travel, agent hand-off, row merge). Nothing loops forever. With `prefers-reduced-motion: reduce`, everything shows its final state with no animation.

## Readability rules

- Body text at least 17px desktop, 18 to 20px in the main paragraphs, line-height at least 1.5.
- Text contrast at least 4.5:1 on its world background. Display fonts (Pixelify, Garamond, Saira) are only for headings; the body stays in a readable face.
- Tap targets at least 44px. Visible focus ring: amber halo around a dark outline.
- Mobile first-class: at 760px and below the 3D stages scale down, grids collapse to one column, nothing scrolls horizontally down to 320px.

## Anti-slop rules

No em dashes in copy. No gradient washes. No cards with a colored left border. No emoji. No stock icons. No "passionate", "rockstar" or "ninja" copy. Illustrations must explain something; decoration alone is not enough.

## Implementation

- Static site, no build step. `index.html` loads `assets/site.css` and `assets/app.js`.
- `app.js` is Preact + htm, vendored in `assets/vendor/` (no CDN). It was generated from the approved V6 design file, then edited by hand for the contact config.
- 3D is pure CSS transforms (`preserve-3d`); there is no WebGL.
- `index.html` contains a plain-text fallback with name, role and contacts for crawlers and no-JS readers.
- Deployed by `.github/workflows/pages.yml` on every push to `main`.
