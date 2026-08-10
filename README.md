# Cotel Hocholat — Front-End E-Commerce Website

A Mehmet Rauf Olcay's front-end-only e-commerce website for **Cotel Hocholat**, a small-batch chocolate shop, built for the CPU4104 Web Development summative assignment. Inspired from the famous chocolate brand Hotel Chocolat's products. 

## How to run

This is a fully static site — no build step, no server required. Open `pages/index.html` directly in a browser, or serve the folder with any static file server.
index.html in the main directs to the real index page under the folder "pages". 

## Folder structure

```
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
- [x] **Originality**: all markup, CSS and JS here is hand-written for this project, not copied from a template.
- [x] **GitHub**.
- [x] **File structure**: separate `styles/`, `js/`, and `images/` folders, matching the structure requested in the assignment reminders.
- [x] **Accessibility evidence**: `evidence/problem1.png`, `fix1.png`, `problem2.png`, `fix2.png` — Lighthouse Accessibility improved from 93 to 100.

## Links

- **Repository**: https://github.com/meh-it-works/cotelhocholade
- **Live site**: https://meh-it-works.github.io/cotelhocholade/
