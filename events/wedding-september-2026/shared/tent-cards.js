/* Shared tent-card renderer: renderTents(size, items, { img }) for any event's item list
   (wedding-lunch/lunch-items.js, welcome-party/menu-data.js). The 1/2 A4 face has the same proportions as the
   1/4 A4 face, so everything scales with --k. */

/* ---------- Artwork: watercolour corner sprays ---------- */
/* The licensed watercolour corner (shared/florals/licenced image proper.jpg, upscaled 4x to
   shared/florals/corner-upscaled.png) sits in the top-left of every face and again, turned 180°,
   in the bottom-right. Its white background is multiplied away (see .corner in tent-cards.css). */
// relative to a page inside an event subfolder (wedding-lunch/, welcome-party/)
const CORNER_IMG = "../shared/florals/corner-upscaled.png";

function symbol(t) {
  if (t === "drink") {   /* same cup as the DRINKS heading on the menu */
    return `<svg class="sym" viewBox="0 -2.5 20 20" xmlns="http://www.w3.org/2000/svg">`
      + `<g fill="none" stroke="#8a8a8a" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">`
      + `<path d="M4.68 1.76 C4.68 10.31 6.77 11.64 10 11.64 C13.23 11.64 15.32 10.31 15.32 1.76 Z"/>`
      + `<path d="M15.32 3.66 C19.69 3.66 19.69 9.36 15.32 9.36"/>`
      + `<path d="M2.4 13.16 L17.6 13.16"/></g></svg>`;
  }
  const c = t === "veg" ? "#4f8a4a" : "#9e1414";
  const inner = t === "veg"
    ? `<circle cx="10" cy="10" r="4.6" fill="${c}"/>`
    : `<polygon points="10,4.6 15.4,14.6 4.6,14.6" fill="${c}"/>`;
  return `<svg class="sym" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">`
    + `<rect x="1.4" y="1.4" width="17.2" height="17.2" fill="none" stroke="${c}" stroke-width="1.6"/>`
    + inner + `</svg>`;
}

function face(it, cls, img) {
  const label = { veg: "Vegetarian", nonveg: "Non-Vegetarian", drink: "Drinks" }[it.t]
    + (it.live ? " · Live Station" : "");
  return `<div class="face ${cls}">
    <img class="corner tl" src="${img}" alt="">
    <img class="corner br" src="${img}" alt="">
    <div class="content">
      <h2 class="name">${it.n}</h2>
      <div class="rule"></div>
      <p class="desc">${it.d}</p>
      <p class="meta">${symbol(it.t)}<span>${label}</span></p>
    </div>
  </div>`;
}

/* One card = one tent: folds across the middle; the top face is upside down so it
   reads upright from the other side. */
const card = (it, img) => `<div class="card">${face(it, "top", img)}${face(it, "", img)}</div>`;

function renderTents(size, items, { img = CORNER_IMG } = {}) {
  const perPage = size === "half" ? 2 : 4;
  const [pw, ph] = size === "half" ? [297, 210] : [210, 297];
  const cutlines = `<svg class="cutlines" viewBox="0 0 ${pw} ${ph}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">`
    + `<g fill="none" stroke="#c7b596" stroke-width="0.18" stroke-dasharray="0.18 4.5" stroke-linecap="round">`
    + `<line x1="${pw / 2}" y1="0" x2="${pw / 2}" y2="${ph}"/>`
    + (size === "quarter" ? `<line x1="0" y1="${ph / 2}" x2="${pw}" y2="${ph / 2}"/>` : "")
    + `</g></svg>`;

  const root = document.getElementById("root");
  for (let i = 0; i < items.length; i += perPage) {
    const page = document.createElement("div");
    page.className = "page";
    page.innerHTML = items.slice(i, i + perPage).map(it => card(it, img)).join("") + cutlines;
    root.appendChild(page);
  }
}
