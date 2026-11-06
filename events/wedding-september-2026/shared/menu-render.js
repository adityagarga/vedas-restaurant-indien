/* Shared menu renderer for every event's A4 reference card (menu-card-a4.html) and folded menu
   tent (menu-tent-a4.html), styled by menu.css.
   sections = [{ h, note?, items: [name | { n, t?, sub? }] }]; layout = section headings per column. */

// relative to a page inside an event subfolder (wedding-lunch/, welcome-party/)
const MENU_CORNER_IMG = "../shared/florals/corner-upscaled.png";

const MENU_SYM = {
  veg: `<svg class="sym" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">`
    + `<rect x="1.4" y="1.4" width="17.2" height="17.2" fill="none" stroke="#4f8a4a" stroke-width="1.6"/>`
    + `<circle cx="10" cy="10" r="4.6" fill="#4f8a4a"/></svg>`,
  nonveg: `<svg class="sym" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">`
    + `<rect x="1.4" y="1.4" width="17.2" height="17.2" fill="none" stroke="#9e1414" stroke-width="1.6"/>`
    + `<polygon points="10,4.6 15.4,14.6 4.6,14.6" fill="#9e1414"/></svg>`,
};

const asItem = it => typeof it === "string" ? { n: it } : it;
const menuItem = it => `<li>${it.n}${it.t === "nonveg" ? MENU_SYM.nonveg : ""}`
  + `${it.sub ? `<span class="sub">${it.sub}</span>` : ""}</li>`;
const menuSection = s => `<div class="sec"><h3>${s.h}</h3>`
  + `${s.note ? `<p class="note">${s.note}</p>` : ""}<ul>${s.items.map(asItem).map(menuItem).join("")}</ul></div>`;

// only mark non-vegetarian dishes; say so when there are none
function menuLegend(sections) {
  const nonveg = sections.some(s => s.items.some(it => asItem(it).t === "nonveg"));
  return nonveg
    ? `<p class="meta">${MENU_SYM.nonveg}<span>Non-vegetarian</span><span>·</span><span>All other dishes are vegetarian</span></p>`
    : `<p class="meta">${MENU_SYM.veg}<span>All dishes are vegetarian</span></p>`;
}

function menuFace({ cls = "", eyebrow, sections, layout }) {
  const byHead = Object.fromEntries(sections.map(s => [s.h, s]));
  return `<div class="face ${cls}">
    <img class="corner tl" src="${MENU_CORNER_IMG}" alt="">
    <img class="corner br" src="${MENU_CORNER_IMG}" alt="">
    <div class="content">
      <p class="eyebrow">${eyebrow}</p>
      <h1 class="title">MENU</h1>
      <div class="rule"></div>
      <div class="cols">${layout.map(col =>
        `<div>${col.map(h => menuSection(byHead[h])).join("")}</div>`).join("")}</div>
      <div class="bottom">
        ${menuLegend(sections)}
        <p class="footer">Vedas Restaurant Indien · www.vedas-restaurant.com · 01 30 81 00 00</p>
      </div>
    </div>
  </div>`;
}
