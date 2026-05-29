# Vedas — Restaurant Indien

Monorepo for the Vedas restaurant: the production website + per-event print/menu assets.

```
.
├── index.html                 Small hub linking to everything below (GitHub Pages root)
├── website/                   Production site for www.vedas-restaurant.com (deploy: Vercel, root = website/)
│   ├── index.html             Accueil
│   ├── carte/  food-truck/  plateau-repas/  galerie/  reservez/  contact-acces/
│   └── assets/                site.css, site.js, images/ (67 photos), menu-qr.svg
│
└── events/
    ├── catering-may/          Catering buffet cards
    │   ├── buffet-tent-a6.html    A6 folding tent card
    │   └── buffet-flat-a6.html    A6 flat landscape card
    │
    └── holi-may-2026/         Holi · 31 May 2026 · Jardin d'Acclimatation (Paris)
        ├── index.html             Caisse / calculator (staff)
        ├── menu.html              Food-truck client menu (sunlight-readable)
        ├── qr.html                QR scan landing page
        ├── qr-print-15cm.html         Print: one 15×15 cm QR on A4
        ├── qr-print-4x8cm.html        Print: four 8×8 cm QR on A4
        ├── qr-print-15cm-branded.html Print: 15 cm QR + Vedas branding
        ├── menu-qr.svg            QR → https://www.vedas-restaurant.com/food-truck
        ├── squarespace-embed.html Self-contained menu embed for Squarespace
        ├── banner.html / holi-bg.html / poster.html   Image generators (render to PNG)
        └── *.png                  Generated images (menu, Holi banner, Holi background)
```

## Common tasks

**Run the website locally** (absolute `/assets` paths need a server):
```bash
cd website && python3 -m http.server 8000   # → http://localhost:8000/
```

**Regenerate the QR** (after a URL change):
```bash
python3 -c "import segno; segno.make('https://www.vedas-restaurant.com/food-truck', error='m').save('events/holi-may-2026/menu-qr.svg', scale=10, border=2)"
```

**Re-export a menu/banner to PNG** (headless Chrome, 2×):
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --force-device-scale-factor=2 \
  --window-size=700,1565 --screenshot=events/holi-may-2026/vedas-foodtruck-menu.png \
  "file://$PWD/events/holi-may-2026/menu.html"
```

The print sheets (`qr-print-*.html`) reference `menu-qr.svg` from the same folder — print at **100% / Actual size** so the cm dimensions hold.
