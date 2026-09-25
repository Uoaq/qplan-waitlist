// LinkedIn asset pack for qplan.co.uk, in the notice-board language of the
// site (_bespoke/2026-09-23 thesis). Every claim is one the site makes, from
// the capability audit of 2026-09-25; nothing here is broader than the site.
//
// Run:  PW=/Users/lordedwardbutler/node_modules/playwright node marketing/linkedin/build.cjs
// PW points at a Playwright; CHROME, if set, at an installed Chromium or
// headless shell to use in place of the one that Playwright version expects. Writes PNGs at
// 2x and the carousel PDF to marketing/linkedin/out/.

const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(process.env.PW || "playwright");

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
  `<div style="position:absolute;left:72px;right:72px;top:${top}px;bottom:${bottom}px;display:flex;flex-direction:column;justify-content:center">${inner}</div>`;

// ── The assets ──────────────────────────────────────────────────────────────

const ASSETS = [];

// 1. Personal profile banner. The avatar covers the lower left, so the notice
// sits right of centre.
ASSETS.push({
  name: "01-banner-profile-1584x396",
  w: 1584,
  h: 396,
  html: page(1584, 396, `
    ${UK.replace('class="uk"', 'class="uk" style="left:840px;top:-110px;width:400px;height:600px"')}
    <div style="position:absolute;left:470px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:18px;width:430px">
      ${MARK(64)}
      <p style="font-size:24px;font-style:italic;color:var(--nt2)">Planning evidence for England</p>
    </div>
    <div class="notice pin" style="position:absolute;right:72px;top:62px;width:560px;padding:30px 36px 26px">
      <p class="label" style="font-size:16px;margin-bottom:10px">Notice · QPlan · England</p>
      <h1 style="font-size:46px;line-height:1.02;margin-bottom:14px">Know your site before you commit.</h1>
      <p style="font-size:19px;line-height:1.4"><b>I give notice that</b> QPlan reads any site in England and cites nothing it has not opened. <i>qplan.co.uk</i></p>
    </div>`),
});

// 2. Company page banner.
ASSETS.push({
  name: "02-banner-company-1128x191",
  w: 1128,
  h: 191,
  html: page(1128, 191, `
    ${UK.replace('class="uk"', 'class="uk" style="left:520px;top:-150px;width:330px;height:495px"')}
    <div style="position:absolute;left:56px;top:0;bottom:0;display:flex;align-items:center;gap:28px">${MARK(58)}
      <p style="font-size:22px;font-style:italic;color:var(--nt2)">Planning evidence for England</p></div>
    <div class="notice" style="position:absolute;right:48px;top:36px;width:360px;padding:18px 24px;border-width:6px">
      <p style="font-size:30px;font-weight:700;line-height:1.05">Know your site before you commit.</p>
    </div>`),
});

// 3. The launch notice.
ASSETS.push({
  name: "03-launch-notice-1080x1080",
  w: 1080,
  h: 1080,
  html: page(1080, 1080, `
    ${UK.replace('class="uk"', 'class="uk" style="right:-60px;top:40px;width:560px;height:840px"')}
    <div style="position:absolute;left:72px;top:64px">${MARK(52)}</div>
    ${STAGE(`<div class="notice pin" style="padding:52px 60px 48px">
      <p class="label" style="margin-bottom:18px">Notice · QPlan · England</p>
      <h1 style="font-size:96px;line-height:1;margin-bottom:30px">Know your site before you commit.</h1>
      <p style="font-size:31px;line-height:1.4;margin-bottom:34px"><b>I give notice that</b> QPlan reads any site in England against government data, tests what could be built there, and cites nothing it has not opened.</p>
      <div class="sig" style="font-size:26px;margin-bottom:12px"><span>Signed</span><span class="fill">Edward Pina-Butler</span></div>
      <div class="sig" style="font-size:26px"><span>Where it may be inspected</span><span class="fill">qplan.co.uk</span></div>
    </div>`)}
    <p class="url" style="position:absolute;left:72px;bottom:56px"><b>Join the waitlist</b> · qplan.co.uk</p>`),
});

// 4. Delete where inappropriate: the anti-slop sheet.
ASSETS.push({
  name: "04-delete-where-inappropriate-1080x1350",
  w: 1080,
  h: 1350,
  html: page(1080, 1350, `
    <div style="position:absolute;left:72px;top:64px">${MARK(52)}</div>
    ${STAGE(`<div class="notice pin" style="padding:60px 64px 48px">
      <p class="label" style="margin-bottom:20px">Notice · What QPlan is</p>
      <h1 style="font-size:88px;line-height:1.02;margin-bottom:52px">Most AI in planning is a confident guess.</h1>
      <div style="font-size:50px;line-height:1.2;display:flex;flex-direction:column;gap:34px;margin-bottom:56px">
        <p>Planning evidence / <span class="struck">AI slop</span>*</p>
        <p>Cited from statute / <span class="struck">made up</span>*</p>
        <p>Figures from the data / <span class="struck">from a model</span>*</p>
        <p>Unknown, and says so / <span class="struck">guessed</span>*</p>
        <p>Any site in England / <span class="struck">planners only</span>*</p>
      </div>
      <p class="insert" style="font-size:28px">* delete where inappropriate</p>
    </div>`)}
    <p class="url" style="position:absolute;left:72px;bottom:56px"><b>qplan.co.uk</b> · planning evidence for England</p>`),
});

// 5. Who it is for.
const WHO = [
  ["Developers and housebuilders", "screen before you offer; feasibility and full viability."],
  ["Landowners and land agents", "title, constraints and planning history, before you instruct anyone."],
  ["Planning consultants", "answers from pinned statute, every citation checked."],
  ["Architects", "the constraints over a site before the first sketch."],
  ["Investors and lenders", "residual land value against benchmark, every figure traceable."],
  ["Homeowners", "what applies to your plot, and what an application needs."],
];
ASSETS.push({
  name: "05-not-only-for-planners-1080x1350",
  w: 1080,
  h: 1350,
  html: page(1080, 1350, `
    <div style="position:absolute;left:72px;top:64px">${MARK(52)}</div>
    ${STAGE(`<div class="notice pin" style="padding:60px 64px 48px">
      <p class="label" style="margin-bottom:20px">Notice to all interested parties</p>
      <h1 style="font-size:84px;line-height:1;margin-bottom:36px">Not only for planners.</h1>
      <div style="font-size:31px;line-height:1.32;margin-bottom:30px">
        ${WHO.map(([a, b]) => `<p class="claim" style="margin-bottom:20px"><b>${a}:</b> ${b}</p>`).join("")}
      </div>
      <p class="insert" style="font-size:26px">England only. An evidence tool, not legal advice.</p>
    </div>`)}
    <p class="url" style="position:absolute;left:72px;bottom:56px"><b>qplan.co.uk</b> · anyone deciding what to do with land in England</p>`),
});

// 6. The founder's entry from the planning history.
ASSETS.push({
  name: "06-story-proceeded-anyway-1080x1080",
  w: 1080,
  h: 1080,
  html: page(1080, 1080, `
    <div style="position:absolute;left:72px;top:64px">${MARK(52)}</div>
    <p class="nlabel" style="position:absolute;right:72px;top:80px">The planning history of QPlan</p>
    ${STAGE(`<div class="notice pin" style="padding:52px 60px 48px;transform:rotate(-0.6deg)">
      <p class="label" style="margin-bottom:14px">EPB/2023/02 · 2023 to 2024</p>
      <h1 style="font-size:80px;line-height:1.02;margin-bottom:20px">Somebody&rsquo;s already done it.</h1>
      <p style="font-size:27px;font-style:italic;color:var(--ink2);margin-bottom:28px"><span class="label" style="font-style:normal;font-size:18px;margin-right:10px">Proposal</span>An app to speed up the planning process</p>
      <p style="font-size:31px;line-height:1.4;margin-bottom:36px">That&rsquo;s what I was told in third year at Cardiff, when I said I wanted to build an app to speed up planning. Honestly, it demotivated me for a while. Then I thought, why can&rsquo;t I try?</p>
      <div style="border-top:2px solid var(--ink);padding-top:24px;display:flex;align-items:center;gap:22px">
        <span class="label" style="font-size:18px">Decision</span><span class="stamp" style="font-size:28px">Proceeded anyway</span>
      </div>
    </div>`)}
    <p class="url" style="position:absolute;left:72px;bottom:56px">Read the whole history at <b>qplan.co.uk/story</b></p>`),
});

// 7. Link image for posts that share the site (1.91:1).
ASSETS.push({
  name: "07-link-card-1200x627",
  w: 1200,
  h: 627,
  html: page(1200, 627, `
    ${UK.replace('class="uk"', 'class="uk" style="right:40px;top:-40px;width:460px;height:690px"')}
    <div class="notice pin" style="position:absolute;left:64px;top:50%;transform:translateY(-50%);width:680px;padding:44px 48px">
      <p class="label" style="font-size:18px;margin-bottom:14px">Notice 2 · You may inspect</p>
      <ol style="font-size:25px;line-height:1.38;padding-left:1.3em;display:flex;flex-direction:column;gap:8px">
        <li>the statute and judgments behind every answer;</li>
        <li>the council page each precedent came from;</li>
        <li>the data behind every figure.</li>
      </ol>
      <p style="font-size:25px;margin-top:22px;font-weight:700">The model writes prose. It never authors a number.</p>
    </div>
    <div style="position:absolute;right:80px;bottom:70px;text-align:right">${MARK(60)}<p class="url" style="margin-top:14px">qplan.co.uk</p></div>`),
});

// 8. Carousel: what QPlan does, notice by notice (PDF document post).
const SLIDES = [
  {
    label: "Notices · 1 of 6",
    title: "What QPlan does, notice by notice.",
    body: `<p>Planning evidence for any site in England, and who it is for. Read on.</p>`,
    cover: true,
  },
  {
    label: "Notice 2 of 6 · Find",
    title: "Map Explorer",
    body: `<p class="q">Search by address or coordinates, click a parcel for its registered title, or draw your own boundary.</p>
      <p>Thirty-five constraint layers, planning history with appeals matched to their applications, and the Census 2021 profile of the neighbourhood.</p>`,
  },
  {
    label: "Notice 3 of 6 · Screen",
    title: "What will the council object to?",
    body: `<p class="q">Site Screen checks constraints and policy against government datasets.</p>
      <p>A score across seven dimensions, labelled as indicative, not a prediction. The headline comes from fixed rules, never a model. PDF report.</p>`,
  },
  {
    label: "Notice 4 of 6 · Appraise",
    title: "Does the scheme make money?",
    body: `<p class="q">Feasibility: a residual appraisal of two or three options, with the return and sensitivity. PDF and Excel.</p>
      <p>Full Viability: residual land value against benchmark land value, with CIL, S106 and affordable housing. Viable, viable below policy, or not viable.</p>`,
  },
  {
    label: "Notice 5 of 6 · Ask",
    title: "Answers you can check.",
    body: `<p class="q">The planning assistant answers from 30 verified routes, 65 pinned statutory provisions and 28 judgments.</p>
      <p>A citation guard checks every reply. Application requirements for 74 application types, linked to the validation lists of 251 councils.</p>`,
  },
  {
    label: "Notice 6 of 6 · Inspect",
    title: "Nothing it has not opened.",
    body: `<p class="q">Figures come from the data. The model writes prose and never authors a number. Where the evidence is thin, it says so.</p>
      <p style="margin-top:36px"><span class="act" style="font-size:34px">Join the waitlist · qplan.co.uk</span></p>`,
  },
];
const slide = (s) => `<div class="slide canvas" style="width:1080px;height:1350px">
  ${s.cover ? UK.replace('class="uk"', 'class="uk" style="right:-80px;top:260px;width:640px;height:960px"') : ""}
  <div style="position:absolute;left:72px;top:64px">${MARK(52)}</div>
  ${STAGE(`<div class="notice pin" style="padding:64px 64px 60px">
    <p class="label" style="margin-bottom:24px">${s.label}</p>
    <h1 style="font-size:${s.cover ? 108 : 92}px;line-height:1.02;margin-bottom:44px">${s.title}</h1>
    <div class="body" style="font-size:40px;line-height:1.4;display:flex;flex-direction:column;gap:30px">${s.body}</div>
  </div>`)}
  <p class="url" style="position:absolute;left:72px;bottom:56px">${s.cover ? "<b>Swipe</b> · six notices" : "<b>qplan.co.uk</b>"}</p>
</div>`;
const CAROUSEL = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><style>${CSS}
  @page{size:1080px 1350px;margin:0} .slide{page-break-after:always} .q{font-weight:700}</style></head>
  <body>${SLIDES.map(slide).join("")}</body></html>`;

// ── Render ──────────────────────────────────────────────────────────────────

(async () => {
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
  try {
    const ctx = await browser.newContext({ deviceScaleFactor: 2 });
    const p = await ctx.newPage();
    for (const a of ASSETS) {
      await p.setViewportSize({ width: a.w, height: a.h });
      await p.setContent(a.html, { waitUntil: "networkidle" });
      await p.evaluate(() => document.fonts.ready);
      await p.screenshot({ path: path.join(OUT, `${a.name}.png`), clip: { x: 0, y: 0, width: a.w, height: a.h } });
      console.log("wrote", a.name);
    }
    // Carousel: each slide as a PNG, and the whole as a PDF document post.
    await p.setViewportSize({ width: 1080, height: 1350 });
    await p.setContent(CAROUSEL, { waitUntil: "networkidle" });
    await p.evaluate(() => document.fonts.ready);
    const slides = await p.$$(".slide");
    for (let i = 0; i < slides.length; i++) {
      await slides[i].screenshot({ path: path.join(OUT, `08-carousel-${i + 1}-1080x1350.png`) });
    }
    await p.pdf({ path: path.join(OUT, "08-carousel-what-qplan-does.pdf"), width: "1080px", height: "1350px", printBackground: true });
    console.log("wrote carousel", slides.length, "slides + pdf");
  } finally {
    await browser.close();
  }
})();
