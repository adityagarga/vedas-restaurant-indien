# Vedas — Restaurant Indien (website)

Production static site for **www.vedas-restaurant.com**, a clean hand-built port of the existing Squarespace site (same content + real photos), deployable on Vercel. No build step, no framework — just HTML/CSS/JS, so it's fast and easy to edit.

## Structure

```
website/
├── index.html                 → /                Accueil (Bienvenue)
├── carte/index.html           → /carte           Notre Carte (menu boards)
├── food-truck/index.html      → /food-truck       Food-truck menu (sunlight-readable)
├── plateau-repas/index.html   → /plateau-repas    Plateau repas / lunchbox
├── galerie/index.html         → /galerie          Photo gallery (lightbox)
├── reservez/index.html        → /reservez         Réservations · Livraison · Privatisation
├── contact-acces/index.html   → /contact-acces    Contact, map, accès
└── assets/
    ├── site.css               shared styles + brand tokens (:root)
    ├── site.js                nav toggle + image lightbox
    └── images/                67 real photos harvested from the live site + manifest
```

Add a page by creating `slug/index.html` — Vercel serves it at `/slug`.

## Deploy on Vercel

**Dashboard:** vercel.com → Add New → Project → import this repo → set **Root Directory** to `website` → Framework preset **Other** → Deploy.

**CLI:**
```bash
npm i -g vercel
cd website
vercel          # preview
vercel --prod   # production
```

## Point the domain (cut over from Squarespace)

Vercel → Project → Settings → Domains → add `www.vedas-restaurant.com` and `vedas-restaurant.com`, then set the DNS records Vercel shows at your registrar (typically `www` CNAME → `cname.vercel-dns.com`, apex A → `76.76.21.21`). Keep Squarespace live until the Vercel preview looks right, then switch DNS.

## Editing

- **Brand colors / fonts:** `assets/site.css` → `:root`.
- **Food-truck menu items & prices:** `food-truck/index.html` → `SECTIONS` / `DESSERTS` / `DRINKS` arrays.
- **Restaurant info (hours, address, phone, zones):** edit directly in the relevant page.
- **Swap a photo:** drop a new file in `assets/images/` and update the `src`/`data-zoom`/`background-image` reference.

## Notes / TODO

- The carte is presented as **menu-board images** (exactly like the current site). If you want a text menu with prices, send the items and I'll build a structured version.
- A few legacy photos on the old site (e.g. a butter-chicken and a naan shot) carried **third-party watermarks**; they were left out of the homepage. Replace with your own photos when handy.
- `01 30 81 00 00` is wired as `tel:+33130810000`. Delivery platforms (Deliveroo/Uber Eats/Delicity) are mentioned but not yet linked — add the real URLs when available.
