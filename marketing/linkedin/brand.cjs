// The QPlan brand for rendered marketing assets: the site's own mark and
// survey line, the notice-board CSS, and a renderer. Shared by build.cjs
// (the core pack) and library.cjs (the asset library).

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "..");
const OUT = path.join(__dirname, "out");
fs.mkdirSync(OUT, { recursive: true });

// The survey line and the mark come from the site's own components, so the
// pack can never drift from the brand.
const ukSrc = fs.readFileSync(path.join(ROOT, "src/components/uk-map.tsx"), "utf8");
const ukPaths = [...ukSrc.matchAll(/ d="([^"]+)"/g)].map((m) => `<path d="${m[1]}"/>`).join("");
const UK = `<svg class="uk" viewBox="100 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g transform="translate(420.72,4107.56)">${ukPaths}</g></svg>`;

const Q = (size, stroke = "#EDF1F4") => `<svg viewBox="0 0 120 120" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 68 92 A 36 36 0 1 1 88 78" stroke="${stroke}" stroke-width="7" stroke-linecap="round" fill="none"/>
  <line x1="68" y1="92" x2="96" y2="112" stroke="${stroke}" stroke-width="7" stroke-linecap="round"/>
  <polyline points="82,65 88,78 100,72" stroke="${stroke}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="96" cy="112" r="7" fill="#22D3EE"/></svg>`;
const MARK = (size, stroke) =>
  `<span class="mark"><span style="display:inline-flex;margin-left:${-size * 0.16}px">${Q(size, stroke)}</span><span class="mark__word" style="font-size:${size * 0.82}px${stroke ? `;color:${stroke}` : ""}">Plan<span class="mark__dot">.</span></span></span>`;

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@800&display=block');
:root{--night:#0F1923;--band:#162231;--line:#243444;--nt:#EDF1F4;--nt2:#A9B6C2;--nt3:#8391A0;--paper:#FBFBF7;--ink:#111416;--ink2:#3F4549;--ink3:#5A6166;--cyan:#22D3EE}
*{box-sizing:border-box;margin:0}
html,body{background:var(--night);color:var(--nt);font-family:Tinos,"Times New Roman",serif;-webkit-font-smoothing:antialiased}
.canvas{position:relative;overflow:hidden;background:var(--night)}
.uk{position:absolute;fill:none;stroke:rgba(34,211,238,.18);stroke-width:1.5;stroke-linejoin:round}
.mark{display:inline-flex;align-items:center;gap:.28em;color:var(--nt)}
.mark__word{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;letter-spacing:-.02em;line-height:1}
.mark__dot{color:var(--cyan)}
.notice{position:relative;background:var(--paper);color:var(--ink);border:8px solid var(--ink)}
.label{font-size:20px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink2)}
.nlabel{font-size:20px;letter-spacing:.06em;text-transform:uppercase;color:var(--nt2)}
h1,h2{font-weight:700;letter-spacing:-.01em}
.struck{text-decoration:line-through;text-decoration-thickness:4px;color:var(--ink2)}
.insert{border-top:1.5px solid var(--ink);padding-top:10px;font-style:italic;color:var(--ink3)}
.stamp{display:inline-block;padding:2px 14px;border:6px double var(--ink);text-transform:uppercase;letter-spacing:.06em;font-weight:700;transform:rotate(-3deg)}
.pin::before{content:"";position:absolute;top:-15px;left:50%;width:26px;height:26px;margin-left:-13px;border-radius:50%;background:var(--cyan);border:3px solid var(--ink)}
.sig{display:flex;align-items:baseline;gap:12px}
.sig .fill{flex:1;border-bottom:2px dotted var(--ink);font-style:italic;padding:0 6px}
.url{font-size:26px;color:var(--nt2);font-style:italic}
.url b{color:var(--nt);font-style:normal}
.act{display:inline-block;background:var(--ink);color:var(--paper);font-weight:700;border-bottom:6px solid var(--cyan);padding:14px 28px}
.claim{margin-bottom:18px}
.claim b{font-weight:700}
`;

const page = (w, h, body) =>
  `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="canvas" style="width:${w}px;height:${h}px">${body}</div></body></html>`;

// A notice centred in the space between the mark and the footer line.
const STAGE = (inner, top = 170, bottom = 130) =>
  `<div data-stage style="position:absolute;left:72px;right:72px;top:${top}px;bottom:${bottom}px;display:flex;flex-direction:column;justify-content:center">${inner}</div>`;


// 0. Profile pictures: the Q mark alone. The glyph is centred on its own
// drawn bounds (not its 120 box) and kept inside the circle LinkedIn crops to.
const QGLYPH = (stroke) => `<svg id="q" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
  <g id="glyph">
    <path d="M 68 92 A 36 36 0 1 1 88 78" stroke="${stroke}" stroke-width="7" stroke-linecap="round"/>
    <line x1="68" y1="92" x2="96" y2="112" stroke="${stroke}" stroke-width="7" stroke-linecap="round"/>
    <polyline points="82,65 88,78 100,72" stroke="${stroke}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="96" cy="112" r="7" fill="#22D3EE"/>
  </g></svg>`;
const CENTRE_Q = (fill) => async (p) =>
  p.evaluate((fill) => {
    const g = document.getElementById("glyph").getBBox();
    const pad = 3.5; // stroke half-width and cap
    const w = g.width + pad * 2, h = g.height + pad * 2;
    const side = Math.max(w, h) / fill;
    const cx = g.x + g.width / 2, cy = g.y + g.height / 2;
    document.getElementById("q").setAttribute("viewBox", `${cx - side / 2} ${cy - side / 2} ${side} ${side}`);
  }, fill);

// Fit a notice to its stage: if it is taller than the space it sits in,
// zoom it down (keeping its visual width) until it fits.
async function fit(p) {
  return p.evaluate(() => {
    const out = [];
    for (const stage of document.querySelectorAll("[data-stage]")) {
      const n = stage.firstElementChild;
      if (!n) continue;
      const W = stage.clientWidth;
      for (let i = 0; i < 12 && stage.scrollHeight > stage.clientHeight + 1; i++) {
        const z = Math.max(0.5, (parseFloat(n.style.zoom) || 1) * Math.min(0.97, stage.clientHeight / stage.scrollHeight));
        n.style.zoom = String(z);
        n.style.width = `${W / z}px`;
      }
      if (stage.scrollHeight > stage.clientHeight + 1) out.push("overflow");
    }
    return out;
  });
}

// Render assets ({ name, w, h, html, prep? }) to PNGs at 2x.
async function render(assets, outDir, { chromium, launch = {} }) {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch(launch);
  const problems = [];
  try {
    const ctx = await browser.newContext({ deviceScaleFactor: 2 });
    const p = await ctx.newPage();
    for (const a of assets) {
      await p.setViewportSize({ width: a.w, height: a.h });
      await p.setContent(a.html, { waitUntil: "networkidle" });
      await p.evaluate(() => document.fonts.ready);
      if (a.prep) await a.prep(p);
      const f = await fit(p);
      if (f.length) problems.push(a.name);
      await p.screenshot({ path: path.join(outDir, `${a.name}.png`), clip: { x: 0, y: 0, width: a.w, height: a.h } });
    }
    return { browser, ctx, page: p, problems };
  } catch (e) {
    await browser.close();
    throw e;
  }
}

module.exports = { ROOT, UK, Q, MARK, CSS, page, STAGE, QGLYPH, CENTRE_Q, fit, render };
