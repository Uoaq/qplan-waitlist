// The QPlan asset library: a hundred-odd LinkedIn images in the site's
// notice-board language, built from content banks and a dozen card forms.
// Every claim is one qplan.co.uk makes (capability audit, 2026-09-25):
// no Scope Pack, no Portfolio ranking, no prices, England only. Copy is in
// Ed's voice: plain, British, no em-dashes, no superlatives.
//
// Run:  CHROME=<headless shell> PW=<playwright> node marketing/linkedin/library.cjs
// Writes out/library/*.png (2x), the carousels as PDFs, and index.html.

const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(process.env.PW || "playwright");
const { UK, MARK, CSS, STAGE, render } = require("./brand.cjs");

const OUT = path.join(__dirname, "out", "library");
fs.mkdirSync(OUT, { recursive: true });

const EXTRA = `
.bleed{background:var(--paper);color:var(--ink)}
.frame{position:absolute;inset:36px;border:10px solid var(--ink)}
.num{font-weight:700;letter-spacing:-.03em;line-height:.9}
.quote{font-style:italic;line-height:1.18}
.ledger{width:100%;border-collapse:collapse}
.ledger th{text-align:left;font-weight:400;text-transform:uppercase;letter-spacing:.06em;color:var(--ink2);border-bottom:2px solid var(--ink);padding:0 16px 10px 0}
.ledger td{border-bottom:1.5px solid var(--ink3);padding:14px 16px 14px 0;vertical-align:top}
.ledger td:first-child{color:var(--ink2);font-style:italic}
.keyed{display:flex;align-items:flex-end;gap:14px;margin-bottom:22px}
.keyed span:last-child{flex:1;border-bottom:3px dotted var(--ink);min-height:1.2em}
.claims p{margin-bottom:22px}
`;
const doc = (w, h, body, bg = "") =>
  `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><style>${CSS}${EXTRA}</style></head><body><div class="canvas ${bg}" style="width:${w}px;height:${h}px">${body}</div></body></html>`;

const FMT = { sq: [1080, 1080], pt: [1080, 1350], ls: [1200, 627] };
const MARKTOP = `<div style="position:absolute;left:72px;top:64px">${MARK(52)}</div>`;
const FOOT = (t) => `<p class="url" style="position:absolute;left:72px;bottom:56px">${t}</p>`;
const MAPR = (h) => UK.replace('class="uk"', `class="uk" style="right:-70px;top:${h > 1100 ? 260 : 120}px;width:560px;height:840px"`);

const A = [];
const add = (name, fmt, body, bg) => {
  const [w, h] = FMT[fmt];
  A.push({ name: `${String(A.length + 1).padStart(3, "0")}-${name}-${w}x${h}`, w, h, html: doc(w, h, body, bg) });
};

// A notice on the night, centred between the mark and the footer.
const notice = (fmt, inner, { foot = "<b>qplan.co.uk</b> · know any site in England", map = false, tilt = 0 } = {}) => {
  const [, h] = FMT[fmt];
  return `${map ? MAPR(h) : ""}${MARKTOP}${STAGE(`<div class="notice pin" style="padding:56px 60px 48px${tilt ? `;transform:rotate(${tilt}deg)` : ""}">${inner}</div>`)}${FOOT(foot)}`;
};

// ── 1. Questions a site raises, and what QPlan answers ─────────────────────
const QUESTIONS = [
  ["What will the council object to?", "Site Screen checks the constraints and policy over a site against government datasets and scores it across seven dimensions. Indicative, not a prediction."],
  ["Does the scheme make money?", "Test two or three options with a residual appraisal, with the return and the sensitivity on build cost, sales value and programme."],
  ["Is it viable with affordable housing?", "Full Viability tests residual land value against benchmark land value, with CIL, S106 and affordable housing. Viable, viable below policy, or not viable."],
  ["What's the registered title?", "Click a parcel on the map and see its registered title, or draw your own boundary."],
  ["What's been applied for nearby?", "The planning history is on the map, with appeals matched to the applications they came from."],
  ["Did anything nearby go to appeal?", "Appeals sit next to the applications they came from, so you can see how the argument ended."],
  ["What will this application need?", "74 application types and the requirements behind each, with links to the local validation lists of 251 of the 329 planning authorities."],
  ["What's the planning fee?", "The assistant works it out from the Fees Regulations themselves, not from a typed-up table."],
  ["What does the NPPF actually say?", "The assistant answers from the Framework in force from 17 August 2026, and marks a superseded paragraph as superseded."],
  ["Who lives around here?", "The Census 2021 profile of the neighbourhood, on the map, for any site in England."],
  ["What constraints sit over it?", "Thirty-five constraint layers on one map, drawn from government datasets."],
  ["Can I trust the answer?", "Every reply is checked against a verified register of statute and judgments. A case that isn't on it is named, never cited."],
  ["What if the data isn't there?", "Then QPlan says unknown. It never says none just because it couldn't find a record."],
  ["Can I take it to the client?", "PDF for Site Screen reports, appraisals and conversations. Excel for feasibility."],
  ["Where does the data come from?", "planning.data.gov.uk, the Environment Agency, Historic England, Natural England, the Coal Authority and HM Land Registry."],
  ["Can I ask it a planning question?", "Ask in plain English. It answers from 30 verified routes, 65 pinned statutory provisions and 28 judgments."],
];
QUESTIONS.forEach(([q, a], i) => {
  const fmt = i % 2 ? "sq" : "pt";
  add(`question-${i + 1}`, fmt, notice(fmt, `
    <p class="label" style="margin-bottom:22px">Question ${i + 1} of ${QUESTIONS.length} · before you commit</p>
    <h1 style="font-size:${fmt === "pt" ? 104 : 92}px;line-height:1;margin-bottom:40px">${q}</h1>
    <p style="font-size:${fmt === "pt" ? 38 : 34}px;line-height:1.4;margin-bottom:36px">${a}</p>
    <p class="insert" style="font-size:24px">QPlan · know any site in England</p>`, { map: i % 3 === 0 }));
});

// ── 2. The numbers, large ───────────────────────────────────────────────────
const NUMBERS = [
  ["65", "pinned statutory provisions behind every answer."],
  ["28", "judgments on the verified register."],
  ["30", "verified planning routes the assistant answers from."],
  ["35", "constraint layers on one map."],
  ["74", "application types, and what each one needs."],
  ["251", "local validation lists linked, out of 329 planning authorities."],
  ["7", "dimensions in every Site Screen. Indicative, not a prediction."],
  ["2021", "Census profile for the neighbourhood around any site."],
  ["0", "numbers written by the AI. The data writes the numbers."],
  ["17.08.26", "The Framework QPlan answers from: the NPPF in force from 17 August 2026."],
];
NUMBERS.forEach(([n, line], i) => {
  const big = n.length > 4 ? 190 : n.length > 2 ? 330 : 420;
  add(`number-${i + 1}`, "sq", `
    ${UK.replace('class="uk"', 'class="uk" style="right:-120px;top:80px;width:620px;height:930px"')}
    ${MARKTOP}
    <div style="position:absolute;left:72px;right:72px;top:210px;bottom:150px;display:flex;flex-direction:column;justify-content:center">
      <p class="num" style="font-size:${big}px;color:var(--nt)">${n}</p>
      <p style="font-size:46px;line-height:1.25;margin-top:34px;max-width:880px">${line}</p>
    </div>
    ${FOOT("<b>qplan.co.uk</b> · know any site in England")}`);
});

// ── 3. The rules QPlan works by, on paper ─────────────────────────────────
const RULES = [
  ["Unknown is not none.", "If a record isn't held, QPlan says unknown. Not finding something is not the same as it not being there."],
  ["The AI writes the words. The data writes the numbers.", "Every figure comes from the data by fixed rules. The model never makes one up."],
  ["Indicative, not a prediction.", "The Site Screen score is a screening, and it says so on the page."],
  ["Named, never cited.", "A case the assistant can't verify is named as unverified. It is never cited as authority."],
  ["England only.", "Wales, Scotland and Northern Ireland are struck through, not implied."],
  ["The facts, not legal advice.", "QPlan puts the evidence in front of you. It doesn't pretend to be your solicitor."],
  ["Every rate shows its sample.", "Where the sample is too small, the answer says so rather than scoring zero."],
  ["Working plans, not plans for submission.", "Good enough to think with. Not dressed up as something to submit."],
  ["Dated data, marked as dated.", "Build costs come from a dated BCIS table, Q4 2024, and the report says so."],
  ["Thin evidence? It says so.", "When there isn't enough to go on, you get told, not a confident guess."],
];
RULES.forEach(([t, b], i) => {
  add(`rule-${i + 1}`, "sq", `
    <div class="frame"></div>
    <div style="position:absolute;left:110px;top:104px">${MARK(46, "#111416")}</div>
    <div data-stage style="position:absolute;left:110px;right:110px;top:220px;bottom:180px;display:flex;flex-direction:column;justify-content:center"><div>
      <p class="label" style="margin-bottom:24px">How QPlan works · rule ${i + 1}</p>
      <h1 style="font-size:${t.length > 32 ? 104 : 136}px;line-height:1;margin-bottom:44px">${t}</h1>
      <p style="font-size:46px;line-height:1.38">${b}</p>
    </div></div>
    <p style="position:absolute;left:110px;bottom:100px;font-size:26px;font-style:italic;color:var(--ink3)">qplan.co.uk</p>`, "bleed");
});

// ── 4. Delete where inappropriate ──────────────────────────────────────────
const STRUCK = [
  ["Before you buy land.", [["Know the constraints", "find out later"], ["Test the scheme", "hope it works"], ["Check the history", "repeat it"], ["Evidence first", "fees first"]]],
  ["How QPlan answers.", [["From statute", "from memory"], ["Checked", "confident"], ["Sourced", "plausible"], ["Unknown", "none"]]],
  ["Where it applies.", [["England", "Wales, Scotland, NI"], ["A screening", "a prediction"], ["Working plans", "plans for submission"], ["The facts", "legal advice"]]],
  ["The numbers.", [["From the data", "from the model"], ["With a sample size", "without one"], ["Dated", "undated"]]],
  ["What a report should be.", [["Readable", "jargon"], ["Traceable", "trust me"], ["Honest about gaps", "filled in"]]],
  ["AI in planning.", [["Helps the planner", "replaces the planner"], ["Checked data", "unchecked data"], ["Human judgement", "blind trust"]]],
  ["Who it's for.", [["Developers", ""], ["Landowners and agents", ""], ["Consultants and architects", ""], ["Investors and homeowners", ""], ["", "planners only"]]],
  ["A planning answer.", [["With its source", "without one"], ["In plain English", "in jargon"], ["Checked", "assumed"]]],
];
STRUCK.forEach(([t, pairs], i) => {
  add(`delete-${i + 1}`, "pt", notice("pt", `
    <p class="label" style="margin-bottom:22px">Notice · delete where inappropriate</p>
    <h1 style="font-size:92px;line-height:1.02;margin-bottom:48px">${t}</h1>
    <div style="font-size:48px;line-height:1.2;display:flex;flex-direction:column;gap:30px;margin-bottom:52px">
      ${pairs.map(([y, n]) => `<p>${y}${y && n ? " / " : ""}${n ? `<span class="struck">${n}</span>*` : ""}</p>`).join("")}
    </div>
    <p class="insert" style="font-size:28px">* delete where inappropriate</p>`, { tilt: i % 2 ? 0.5 : -0.4 }));
});

// ── 5. A notice to each kind of user ───────────────────────────────────────
const WHO = [
  ["developers and housebuilders", "Screen before you offer.", "Constraints, planning history and what the council will object to, then feasibility on two or three schemes.",
    [["Site Screen", "what the council is likely to object to, scored across seven dimensions."], ["Feasibility", "a residual appraisal of two or three options."], ["Full Viability", "residual land value against benchmark, with CIL, S106 and affordable housing."]]],
  ["landowners", "Know your land before you instruct anyone.", "Its registered title, the constraints over it and its planning history, on one map.",
    [["Map Explorer", "your title parcel, 35 constraint layers and the planning history."], ["Site Screen", "what the council is likely to object to."], ["Application requirements", "what an application would need."]]],
  ["land agents", "Walk into the meeting knowing the site.", "Title, constraints, history and an indicative screening, before you pick up the phone.",
    [["Map Explorer", "search by address or coordinates, or draw the boundary."], ["Site Screen", "a PDF you can hand over."], ["Planning history", "with appeals matched to their applications."]]],
  ["planning consultants", "Answers you can put your name to.", "From 65 pinned statutory provisions and 28 judgments, with every citation checked.",
    [["Planning assistant", "answers from pinned statute, citation-checked."], ["Application requirements", "74 application types and their requirements."], ["Site Screen", "a screening report to start the appraisal from."]]],
  ["architects", "The constraints, before the first sketch.", "What sits over the site, and what the application will need.",
    [["Map Explorer", "35 constraint layers on one map."], ["Application requirements", "what the application will need."], ["Planning history", "what's been tried nearby, and how it ended."]]],
  ["investors and lenders", "Every figure traceable to its source.", "Residual land value against benchmark, with the sensitivity behind it.",
    [["Full Viability", "viable, viable below policy, or not viable."], ["Feasibility", "the return and the sensitivity on cost, value and programme."], ["Site Screen", "an indicative screening, labelled as indicative."]]],
  ["homeowners", "What applies to your home?", "Draw your plot and see the constraints over it, what an application would need and the fee.",
    [["Map Explorer", "draw your plot and see what applies."], ["Application requirements", "what your application would need."], ["Planning assistant", "the fee, worked out from the Fees Regulations."]]],
];
WHO.forEach(([who, h, b, claims], i) => {
  add(`notice-to-${who.split(" ")[0]}`, "sq", notice("sq", `
    <p class="label" style="margin-bottom:22px">Notice to ${who}</p>
    <h1 style="font-size:88px;line-height:1.02;margin-bottom:34px">${h}</h1>
    <p style="font-size:34px;line-height:1.4">${b}</p>`, { map: true }));
  add(`for-${who.split(" ")[0]}`, "pt", notice("pt", `
    <p class="label" style="margin-bottom:22px">QPlan for ${who}</p>
    <h1 style="font-size:90px;line-height:1.02;margin-bottom:44px">${h}</h1>
    <div class="claims" style="font-size:36px;line-height:1.35;margin-bottom:34px">${claims.map(([a, c]) => `<p><b>${a}:</b> ${c}</p>`).join("")}</div>
    <p class="insert" style="font-size:26px">England only. The facts, not legal advice.</p>`));
});

// ── 6. The planning history of QPlan, and Ed's own words ───────────────────
const STORY = [
  ["EPB/2021/01", "2021", "Something more practical", "BSc Urban Planning and Development, Cardiff University", "I always wanted to be a property developer, so I went for something practical: Urban Planning and Development at Cardiff.", "Approved"],
  ["EPB/2023/02", "2023 to 2024", "Somebody's already done it", "An app to speed up the planning process", "I told my tutor I wanted to build it, and the answer was that somebody had already done it. Then I thought, why can't I try?", "Proceeded anyway"],
  ["EPB/2024/03", "May 2024", "The dissertation", "AI in urban planning, and what could go wrong", "Everyone I interviewed said the same thing: AI should help the planner, not replace them. I still build QPlan that way.", "Submitted"],
  ["EPB/2024/04", "2024", "The first QPlan", "A chat interface answering from the NPPF", "It looked pretty good, but there was no model behind it. I didn't know how to use API keys.", "Superseded"],
  ["EPB/2025/05", "2025", "Keeping it going", "Continued development of QPlan", "A few people got involved and lost motivation. I kept it going and kept chipping away at it.", "Continued"],
  ["EPB/2026/06", "2026", "Where it is now", "QPlan: know any site in England", "The AI writes the words and never makes up a figure. That's basically my dissertation, built.", "In private testing"],
];
STORY.forEach(([ref, date, title, proposal, body, decision], i) => {
  add(`story-${i + 1}`, "sq", `
    ${MARKTOP}<p class="nlabel" style="position:absolute;right:72px;top:80px">The planning history of QPlan</p>
    ${STAGE(`<div class="notice pin" style="padding:52px 60px 46px;transform:rotate(${i % 2 ? 0.5 : -0.5}deg)">
      <p class="label" style="margin-bottom:14px">${ref} · ${date}</p>
      <h1 style="font-size:76px;line-height:1.02;margin-bottom:18px">${title}</h1>
      <p style="font-size:26px;font-style:italic;color:var(--ink2);margin-bottom:26px"><span class="label" style="font-style:normal;font-size:18px;margin-right:10px">Proposal</span>${proposal}</p>
      <p style="font-size:32px;line-height:1.4;margin-bottom:34px">${body}</p>
      <div style="border-top:2px solid var(--ink);padding-top:22px;display:flex;align-items:center;gap:22px">
        <span class="label" style="font-size:18px">Decision</span><span class="stamp" style="font-size:28px">${decision}</span></div>
    </div>`)}
    ${FOOT("The whole story at <b>qplan.co.uk/story</b>")}`);
});
const QUOTES = [
  "Somebody's done it, but why can't I try?",
  "This was before most people knew how to use AI properly, and I definitely didn't.",
  "I kept it going and just kept chipping away at it.",
  "The AI writes the words and never makes up a figure.",
  "I love planning and I love AI.",
  "A lot of what gets sold as AI in planning is a chat box on top of a model. That's the baseline.",
  "That's basically my dissertation, built.",
];
QUOTES.forEach((q, i) => {
  const fmt = i % 2 ? "sq" : "pt";
  const [, h] = FMT[fmt];
  add(`quote-${i + 1}`, fmt, `
    ${MAPR(h)}${MARKTOP}
    <div style="position:absolute;left:72px;right:120px;top:200px;bottom:200px;display:flex;flex-direction:column;justify-content:center">
      <p style="font-size:180px;line-height:.6;color:var(--cyan);font-weight:700">&ldquo;</p>
      <p class="quote" style="font-size:${q.length > 60 ? 64 : 84}px;margin-top:10px">${q}</p>
      <p style="font-size:30px;color:var(--nt2);margin-top:40px">Edward Pina-Butler · building QPlan</p>
    </div>
    ${FOOT("<b>qplan.co.uk</b>")}`);
});

// ── 7. Forms, set like the site notice ─────────────────────────────────────
const keyed = (k, v = "") => `<div class="keyed" style="font-size:36px"><span>${k}</span><span style="font-style:italic">${v}</span></div>`;
const FORMS = [
  ["Join the waitlist.", "Notice · waitlist", [["(a) Name"], ["(b) Email"], ["(c) Firm, if any"], ["(d) What you do"]], "Insert: and we will write when your access is ready. qplan.co.uk"],
  ["Screen a site.", "Form 1 · Site Screen", [["(a) Address, coordinates or boundary"]], "Returns: the constraints over it, its planning history, an indicative score across seven dimensions, and a PDF."],
  ["Appraise a scheme.", "Form 2 · Feasibility", [["(a) The site"], ["(b) Two or three options"], ["(c) Costs and values"]], "Returns: a residual appraisal, the return, and the sensitivity. PDF and Excel."],
  ["Ask a planning question.", "Form 3 · Planning assistant", [["(a) Your question, in plain English"]], "Returns: an answer from pinned statute, every citation checked, exportable to PDF."],
  ["Check what an application needs.", "Form 4 · Application requirements", [["(a) The application type"], ["(b) The planning authority"]], "Returns: the requirements behind it, and the local validation list where one is linked."],
];
FORMS.forEach(([t, label, fields, insert], i) => {
  add(`form-${i + 1}`, i % 2 ? "sq" : "pt", notice(i % 2 ? "sq" : "pt", `
    <p class="label" style="margin-bottom:22px">${label}</p>
    <h1 style="font-size:88px;line-height:1.02;margin-bottom:48px">${t}</h1>
    ${fields.map(([k]) => keyed(k)).join("")}
    <p class="insert" style="font-size:28px;margin-top:30px;line-height:1.4">${insert}</p>`));
});

// ── 8. A chat box, or QPlan ────────────────────────────────────────────────
const LEDGERS = [
  ["A chat box, or QPlan?", ["", "A chat box", "QPlan"], [["Answers from", "a model", "pinned statute"], ["Numbers from", "a model", "the data"], ["Citations", "plausible", "checked"], ["Missing data", "filled in", "reported as unknown"]]],
  ["Guessing, or knowing?", ["", "Guessing", "QPlan"], [["Constraints", "found later", "on the map first"], ["History", "missed", "with appeals matched"], ["Viability", "gut feel", "residual against benchmark"]]],
  ["What QPlan says it is.", ["", "Not", "Is"], [["The score", "a prediction", "indicative"], ["Coverage", "the whole UK", "England"], ["The output", "legal advice", "the facts"]]],
];
LEDGERS.forEach(([t, head, rows], i) => {
  const table = (fs) => `<table class="ledger" style="font-size:${fs}px"><tr>${head.map((x) => `<th style="font-size:${fs * 0.55}px">${x}</th>`).join("")}</tr>
    ${rows.map(([a, b, c]) => `<tr><td>${a}</td><td><span class="struck">${b}</span></td><td><b>${c}</b></td></tr>`).join("")}</table>`;
  add(`ledger-${i + 1}-card`, "ls", `
    <div style="position:absolute;right:56px;top:40px">${MARK(34)}</div>
    <div data-stage style="position:absolute;left:56px;right:56px;top:96px;bottom:40px;display:flex;flex-direction:column;justify-content:center">
      <div class="notice" style="padding:34px 40px 26px"><h2 style="font-size:46px;margin-bottom:20px">${t}</h2>${table(28)}</div></div>`);
  add(`ledger-${i + 1}-square`, "sq", notice("sq", `
    <p class="label" style="margin-bottom:22px">Notice · compare</p>
    <h1 style="font-size:84px;line-height:1.02;margin-bottom:40px">${t}</h1>${table(36)}`));
});

// ── 9. The mark and the map ────────────────────────────────────────────────
const PIN = (x, y) => `<span style="position:absolute;left:${x}px;top:${y}px;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:var(--cyan);border:4px solid var(--night)"></span>`;
const MAPS = [
  ["Any site in England.", "Draw a boundary, or click a parcel."],
  ["Draw a boundary. See what applies.", "Constraints, title, history and the neighbourhood, on one map."],
  ["From a postcode to a planning history.", "Search by address or coordinates, and the history comes with it."],
];
MAPS.forEach(([h, s], i) => {
  add(`map-${i + 1}`, "sq", `
    ${UK.replace('class="uk"', 'class="uk" style="left:430px;top:40px;width:680px;height:1020px;stroke:rgba(34,211,238,.34);stroke-width:1.2"')}
    ${PIN(800 + i * 26, 690 - i * 40)}
    ${MARKTOP}
    <div class="notice" style="position:absolute;left:72px;bottom:120px;width:560px;padding:40px 44px 36px">
      <h1 style="font-size:62px;line-height:1.02;margin-bottom:20px">${h}</h1>
      <p style="font-size:28px;line-height:1.4">${s}</p></div>
    ${FOOT("<b>qplan.co.uk</b>")}`);
});
add("lockup-night", "sq", `${UK.replace('class="uk"', 'class="uk" style="left:250px;top:120px;width:580px;height:870px"')}
  <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:34px">${MARK(150)}
  <p style="font-size:44px;font-style:italic;color:var(--nt2)">Know any site in England</p></div>`);
add("lockup-paper", "sq", `<div class="frame"></div><div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:34px">${MARK(150, "#111416")}
  <p style="font-size:44px;font-style:italic;color:var(--ink2)">Know any site in England</p></div>`, "bleed");
add("waitlist-open", "ls", `${UK.replace('class="uk"', 'class="uk" style="right:30px;top:-60px;width:460px;height:690px"')}
  <div class="notice pin" style="position:absolute;left:64px;top:50%;transform:translateY(-50%);width:640px;padding:40px 46px">
    <p class="label" style="font-size:18px;margin-bottom:14px">Notice · QPlan · England</p>
    <h1 style="font-size:64px;line-height:1;margin-bottom:18px">The waitlist is open.</h1>
    <p style="font-size:26px;line-height:1.4">QPlan is private while it is tested. Join, and we will write when your access is ready.</p></div>
  <div style="position:absolute;right:80px;bottom:70px;text-align:right">${MARK(56)}<p class="url" style="margin-top:12px">qplan.co.uk</p></div>`);

// ── 10. Carousels (each slide a PNG; each set also a PDF) ──────────────────
const CAROUSELS = {
  "six-questions-before-you-buy-land": [
    ["Carousel · 1 of 7", "Six questions before you buy land.", "Ask them before you make an offer, not after."],
    ["Question 1 of 6", "What sits over it?", "Flood risk, heritage, protected sites, mining legacy. QPlan puts 35 constraint layers on one map."],
    ["Question 2 of 6", "What's been tried nearby?", "The planning history tells you what the council has already said yes and no to, and what went to appeal."],
    ["Question 3 of 6", "What will the council object to?", "Site Screen checks constraints and policy and scores the site across seven dimensions. Indicative, not a prediction."],
    ["Question 4 of 6", "Does a scheme make money?", "Test two or three options with a residual appraisal before you commit to one."],
    ["Question 5 of 6", "Is it viable with the policy asks?", "Full Viability tests residual land value against benchmark, with CIL, S106 and affordable housing."],
    ["Question 6 of 6", "Where did every answer come from?", "If you can't trace it, don't rely on it. QPlan shows its sources. Join the waitlist at qplan.co.uk."],
  ],
  "the-planning-history-of-qplan": [
    ["Carousel · 1 of 8", "The planning history of QPlan.", "Six entries, 2021 to 2026. Told by the person building it."],
    ...STORY.map(([ref, date, title, , body, decision]) => [`${ref} · ${date}`, title, `${body} <br><br><span class="stamp" style="font-size:30px">${decision}</span>`]),
    ["Statement of the applicant", "Why I keep going.", "There's so much more potential here than what's out there now. I hope you'll stick with me for the rest of the journey. qplan.co.uk/story"],
  ],
};
const SLIDE = ([label, title, body]) => notice("pt", `
  <p class="label" style="margin-bottom:24px">${label}</p>
  <h1 style="font-size:96px;line-height:1.02;margin-bottom:44px">${title}</h1>
  <p style="font-size:42px;line-height:1.4">${body}</p>`, { foot: "<b>qplan.co.uk</b> · swipe" });
for (const [set, slides] of Object.entries(CAROUSELS)) {
  slides.forEach((s, i) => add(`carousel-${set}-${i + 1}`, "pt", SLIDE(s)));
}

// ── Render ──────────────────────────────────────────────────────────────────
(async () => {
  const { browser, page, problems } = await render(A, OUT, {
    chromium,
    launch: process.env.CHROME ? { executablePath: process.env.CHROME } : {},
  });
  try {
    // Each carousel as one PDF document post.
    for (const [set, slides] of Object.entries(CAROUSELS)) {
      const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><style>${CSS}${EXTRA}@page{size:1080px 1350px;margin:0}.slide{page-break-after:always;position:relative}</style></head><body>
        ${slides.map((s) => `<div class="slide canvas" style="width:1080px;height:1350px">${SLIDE(s)}</div>`).join("")}</body></html>`;
      await page.setViewportSize({ width: 1080, height: 1350 });
      await page.setContent(html, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.pdf({ path: path.join(OUT, `carousel-${set}.pdf`), width: "1080px", height: "1350px", printBackground: true });
    }
  } finally {
    await browser.close();
  }
  // A contact sheet to browse the library.
  const cards = A.map((a) => `<figure><img src="${a.name}.png" loading="lazy" alt=""><figcaption>${a.name}</figcaption></figure>`).join("");
  fs.writeFileSync(path.join(OUT, "index.html"), `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>QPlan asset library</title>
    <style>body{margin:0;padding:32px;background:#0F1923;color:#EDF1F4;font-family:Georgia,serif}h1{font-weight:400}
    main{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:24px}figure{margin:0}img{width:100%;display:block;border:1px solid #243444}
    figcaption{font-size:13px;color:#A9B6C2;margin-top:6px;word-break:break-all}</style></head>
    <body><h1>QPlan asset library · ${A.length} images</h1><main>${cards}</main></body></html>`);
  console.log(`wrote ${A.length} images, ${Object.keys(CAROUSELS).length} carousel PDFs and index.html`);
  if (problems.length) console.warn("still overflowing after fit:", problems.join(", "));
})();
