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
  pages/              All HTML pages (index, products, product-detail, cart, about, contact)
  css/style.css       Single, hand-written stylesheet (mobile-first)
  js/products-data.js Product catalogue (12 products) — single source of truth
  js/script.js        Nav, rendering, cart logic, filtering, form validation
  media/images/       Product photos, logo and hero images
  evidence/           Accessibility audit screenshots (see evidence/README.md)
```

## Pages

- **index.html** — hero banner, value props, featured products
- **products.html** — full catalogue with category filtering
- **product-detail.html** — single product view (`?id=` query parameter)
- **cart.html** — add/remove items, adjust quantity, live subtotal/total
- **about.html** — shop story
- **contact.html** — contact form with client-side validation

## Known placeholders to replace before final submission

- **Images**: all photos in `media/images/` are reused from a downloaded template (Delicio-HTML) as visual placeholders. Replace with your own or properly licensed, appropriately sized/compressed images before final submission.
- **Accessibility evidence**: `evidence/` needs real before/after Lighthouse screenshots (see `evidence/README.md`).
- **GitHub**: initialise a git repository and push this folder to GitHub as required by the submission instructions.
