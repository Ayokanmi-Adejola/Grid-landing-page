# Bridge Collective — Grid Landing Page

A pixel-accurate implementation of the [Frontend Mentor Grid landing page challenge](https://www.frontendmentor.io/challenges/grid-landing-page), built with semantic HTML, vanilla CSS, and vanilla JavaScript. No frameworks, no dependencies.

![Design preview](./preview.jpg)

---

## Overview

### The project

Bridge Collective is a fictional education nonprofit landing page. The layout pairs a hero section (headline + description) against a 2×2 grid of impact statistics, with a navigation bar above and a footer strip below. All layout work is handled with CSS Grid and hairline dividers — there is no imagery.

### Features

- Fully responsive layout across mobile (375px), tablet, and desktop (1440px)
- CSS Grid-powered main layout and 2×2 stats grid
- Slide-in navigation menu panel with smooth CSS transition
- Keyboard accessible — focus trap inside the open menu, `Escape` to close, focus returns to trigger on close
- ARIA attributes (`aria-expanded`, `aria-hidden`, `aria-controls`, `aria-label`) kept in sync with menu state
- Scroll lock on `<body>` while the menu is open
- Hover and focus-visible states on all interactive elements
- Inter variable font loaded locally from `/assets/fonts/`

---

## Built with

- Semantic HTML5
- CSS custom properties and CSS Grid
- Vanilla JavaScript (ES6+)
- Inter variable font (self-hosted)
- Mobile-first responsive design

---

## Project structure

```
grid-landing-page-main/
├── assets/
│   ├── fonts/
│   │   └── inter/
│   │       └── inter-variable.ttf
│   └── images/
│       ├── favicon-32x32.png
│       ├── icon-arrow-right.svg
│       ├── icon-close.svg
│       ├── icon-menu.svg
│       ├── icon-plus.svg
│       ├── icon-sparkle.svg
│       └── icon-trending-up.svg
├── design/                  # Reference JPGs from Frontend Mentor
├── index.html
├── style.css
├── main.js
└── style-guide.md
```

---

## Layout decisions

| Concern | Approach |
|---|---|
| Main split | `display: grid` with `45fr 55fr` columns |
| Stats grid | Nested `2 × 2` grid inside the right column |
| Dividers | `1px solid rgba(255, 255, 255, 0.2)` borders on specific grid children |
| Menu panel | `position: fixed`, right-anchored, slides via `translateX` |
| Overlay | Semi-transparent black (`hsla(0, 0%, 0%, 0.25)`) fade over the remaining content |
| Mobile | Single-column stack; menu panel expands to full viewport width |

---

## Running locally

No build step required. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

---

## Accessibility notes

- All interactive elements are reachable and operable via keyboard
- Focus is trapped inside the menu panel while it is open
- `prefers-reduced-motion` can be added to the transition rules to respect user preferences
- Colour contrast between white text and the blue background exceeds WCAG AA for both normal and large text

---

## Acknowledgements

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- Font: [Inter](https://rsms.me/inter/) by Rasmus Andersson, licensed under OFL
