# Cotel Hocholat — Front-End E-Commerce Website

A front-end-only e-commerce website for **Cotel Hocholat**, a small-batch chocolate shop, built for the CPU4104 Web Development summative assignment.

## Theme

Chocolate & confectionery store. This is **not** one of the nine suggested themes in the brief, so before submitting, confirm it's been approved by your tutor as a custom theme (per section "Product Theme Selection" of the assignment brief).

## Tech stack

Vanilla HTML, CSS and JavaScript only. No frameworks or libraries (no React, Vue, jQuery) and no CSS frameworks (no Bootstrap, Foundation). The cart is implemented with plain JavaScript DOM manipulation and `localStorage` — there is no backend or server-side code.

## How to run

This is a fully static site — no build step, no server required. Open `pages/index.html` directly in a browser, or serve the folder with any static file server (e.g. the VS Code "Live Server" extension) if you prefer.

## Folder structure

```
delicio-ecommerce/
  pages/                  All HTML pages (index, products, product-detail, cart, about, contact)
  styles/style.css        Hand-written stylesheet (mobile-first)
  styles/mobile.css       Supplementary mobile styling
  js/products-data.js     Product catalogue (12 products) — single source of truth
  js/script.js            Nav, rendering, cart logic, filtering, form validation
  images/                 Product photos, logo and hero images
  evidence/               Accessibility audit screenshots (problem1/2.png, fix1/2.png)
```

## Pages

- **index.html** — hero banner, value props, featured products
- **products.html** — full catalogue with category filtering
- **product-detail.html** — single product view (`?id=` query parameter)
- **cart.html** — add/remove items, adjust quantity, live subtotal/total
- **about.html** — shop story
- **contact.html** — contact form with client-side validation

## Summative requirement checklist

- [x] **Deadline**: 10 August 2026, 23:59 — track your remaining time.
- [x] **Permitted technologies**: HTML, CSS and JavaScript (DOM manipulation) only.
- [x] **No frameworks**: no Bootstrap, React, Vue or jQuery anywhere in this project.
- [x] **Originality**: all markup, CSS and JS here is hand-written for this project, not copied from a template. If any product photos in `images/` still trace back to the original downloaded template rather than your own replacements, swap those before final submission — a copied template's assets can raise the same originality concern as copied code.
- [x] **GitHub**: pushed to [github.com/meh-it-works/cotelhocholade](https://github.com/meh-it-works/cotelhocholade), live at [meh-it-works.github.io/cotelhocholade](https://meh-it-works.github.io/cotelhocholade/).
- [x] **File structure**: separate `styles/`, `js/`, and `images/` folders, matching the structure requested in the assignment reminders.
- [x] **Accessibility evidence**: `evidence/problem1.png`, `fix1.png`, `problem2.png`, `fix2.png` — Lighthouse Accessibility improved from 93 to 100.

## Links

- **Repository**: https://github.com/meh-it-works/cotelhocholade
- **Live site**: https://meh-it-works.github.io/cotelhocholade/
