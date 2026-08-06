# Accessibility Audit Evidence

The assignment brief requires your pages to be audited for accessibility using Google Chrome Lighthouse, with **two before/after improvement examples** evidenced by screenshots placed in this folder.

## What to do

1. Open a page (e.g. `pages/index.html`) in Google Chrome.
2. Open DevTools → **Lighthouse** tab → run an audit with the **Accessibility** category selected.
3. Screenshot the report and save it as `Problem1.png`.
4. Find and fix a real accessibility issue it flags.
5. Re-run Lighthouse, screenshot the improved score, and save it as `Fix1.png`.
6. Repeat for a second issue: `Problem2.png` / `Fix2.png`.

## Starting points already in this build

The site already includes some accessibility work (skip link, alt text, `aria-label`s on icon-only buttons, visible focus states, semantic landmarks). Good candidates for your two documented before/after fixes:

- Colour contrast on any text you customise (Lighthouse's contrast checker will flag anything under WCAG AA).
- Missing or generic `alt` text once you swap in your own product photos.
- Form label/error association on `contact.html` if you extend the form.
- Heading order/landmark structure if you add new sections.

Name your four screenshots exactly `Problem1.png`, `Fix1.png`, `Problem2.png`, `Fix2.png` and place them directly in this folder.
