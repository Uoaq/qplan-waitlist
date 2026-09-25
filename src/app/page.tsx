import Link from "next/link";
import { QPlanMark } from "@/components/qplan-logo";
import { UKMap } from "@/components/uk-map";
import { WaitlistForm } from "@/components/waitlist-form";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { FaqItem } from "@/components/faq-item";

// The page is a notice board at dusk (design thesis, _bespoke/2026-09-23).
// Every capability named here is live in production per the claims audit of
// 2026-09-23; nothing unconfirmed is written (thesis T2).

const WHO = [
  {
    lead: "Developers and housebuilders.",
    reason:
      "Screen a site before you offer on it, test two or three schemes for feasibility, and run a full viability appraisal with CIL, S106 and affordable housing.",
  },
  {
    lead: "Landowners and land agents.",
    reason:
      "See what applies to your land: its title parcel, the constraints over it, its planning history, and what the council is likely to object to, before you instruct anyone.",
  },
  {
    lead: "Planning consultants.",
    reason:
      "Answers from pinned statute with every citation checked, the requirements for 74 application types, and a screening report to start the appraisal from.",
  },
  {
    lead: "Architects and designers.",
    reason: "The constraints and designations over a site, and what the application will need, before the first sketch.",
  },
  {
    lead: "Investors and lenders.",
    reason:
      "Residual land value tested against benchmark land value, with the sensitivity behind it and every figure traceable to its source.",
  },
  {
    lead: "Homeowners.",
    reason: "Draw your plot and see what applies to it, what an application would need, and what the fee would be.",
  },
];

// Scope Pack and the Portfolio ranking are held back: both fail in production
// until migration 014 is applied (capability audit, 2026-09-25).
const LIVE = [
  {
    lead: "Map Explorer.",
    reason:
      "Search by address or coordinates, click a parcel for its registered title, or draw your own boundary. Thirty-five constraint layers, planning history with appeals matched to their applications, and the Census 2021 profile of the neighbourhood.",
  },
  {
    lead: "Application requirements.",
    reason:
      "What will this application need? 74 application types and the requirements behind each, with links to the local validation lists of 251 of the 329 planning authorities.",
  },
  {
    lead: "Planning assistant.",
    reason:
      "Answers planning questions from 30 verified routes, 65 pinned statutory provisions and 28 judgments, and works out planning fees from the Fees Regulations themselves. A citation guard checks every reply, and a case that is not on the register is named, never cited.",
  },
  {
    lead: "Your conversations.",
    reason:
      "Private to you and reopenable, and exportable to PDF, one reply or the whole conversation. Document upload, with text read from scans, is a pilot on personal accounts.",
  },
];

const APPRAISALS = [
  {
    lead: "Site Screen.",
    reason:
      "What will the council object to? Constraints and policy checked against government datasets, with a score across seven dimensions, labelled as indicative, not a prediction. The headline comes from fixed rules, never a model. PDF report.",
  },
  {
    lead: "Feasibility.",
    reason:
      "Does the scheme make money? A residual appraisal of two or three options, with the return and sensitivity on build cost, sales value and programme. PDF and Excel.",
  },
  {
    lead: "Full Viability.",
    reason:
      "Residual land value tested against benchmark land value, with CIL, S106 and affordable housing. The verdict is viable, viable below policy affordable housing, or not viable.",
  },
];

const FAQ = [
  {
    q: "What does QPlan do?",
    a: "It reads a site in England against government data: its title, the constraints over it, its planning history and its neighbourhood. It screens what the council is likely to object to, appraises feasibility and viability, sets out what an application will need, and answers planning questions from pinned statute. Where the evidence is thin, it says so.",
  },
  {
    q: "Who is it for?",
    a: "Anyone deciding what to do with land in England: developers and housebuilders, landowners and land agents, planning consultants, architects, investors and lenders, and homeowners.",
  },
  {
    q: "Where does the data come from?",
    a: "From the published records, including planning.data.gov.uk, the Environment Agency, Historic England, Natural England, the Coal Authority and HM Land Registry. A result is as good as the record behind it, and a record QPlan does not hold is reported as unknown, never as none.",
  },
  {
    q: "Does QPlan use AI?",
    a: "Yes, for prose: drafting answers and reading documents. Figures, decisions and evidence come from the data by fixed rules; the model never authors a number, and the assistant cites only from its verified register.",
  },
  {
    q: "Which Framework does it apply?",
    a: "The planning assistant answers from the National Planning Policy Framework in force from 17 August 2026, and marks a superseded paragraph as superseded.",
  },
  {
    q: "What can I export?",
    a: "PDF for Site Screen reports, feasibility appraisals and assistant conversations; Excel for feasibility appraisals.",
  },
  {
    q: "Is QPlan a replacement for a planning consultant?",
    a: "No. It is an evidence tool that complements professional advice. It helps consultants, developers, landowners and their advisers decide faster and on better evidence, and it is not legal advice.",
  },
  {
    q: "When can I use it?",
    a: "QPlan is private while it is tested. Join the waitlist and we will write when your access is ready.",
  },
];

export default function Home() {
  return (
    <div className="night" style={{ overflowX: "clip" }}>
      <WaitlistDialog />

      {/* Night: the brand, and nothing else to read (T3). */}
      <nav className="site-nav" aria-label="Main">
        <Link href="/" aria-label="QPlan, home" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", minHeight: 44 }}>
          <QPlanMark size={28} />
        </Link>
        <div className="site-nav__links">
          <a className="night-link" href="#who">Who it is for</a>
          <a className="night-link" href="#live">What is live</a>
          <a className="night-link" href="#inspect">You may inspect</a>
          <a className="night-link" href="#applies">Where it applies</a>
          <a className="night-link" href="#about">About</a>
          <Link className="night-link" href="/story">Story</Link>
          <a className="act act--night" href="#waitlist" data-open-waitlist>
            Join the waitlist
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero__mark">
          <UKMap className="hero__survey" />
          <QPlanMark size={96} load />
          <p className="hero__tag">Planning evidence for England</p>
          <p className="hero__sub">
            Constraints, appraisals, application requirements and planning answers for any site in England.
          </p>
        </div>

        <section className="notice hero__notice" id="waitlist" aria-labelledby="hero-title">
          <p className="notice__label">Notice · QPlan · England</p>
          <h1 id="hero-title">Know your site before you commit.</h1>
          <p style={{ marginBottom: "var(--s-5)" }}>
            <b>I give notice that</b> QPlan reads any site in England against government data, tests what could be
            built there, and cites nothing it has not opened.
          </p>
          <WaitlistForm />
        </section>
      </header>

      {/* The board: notices pinned at different sizes, never three equal cards. */}
      <main className="board" id="notices">
        <p className="board__title">Notices</p>

        <section className="notice pin pin--who" id="who" aria-labelledby="n0">
          <p className="notice__label">Notice to all interested parties</p>
          <h2 id="n0">Not only for planners</h2>
          <p style={{ marginBottom: "var(--s-5)" }}>
            Anyone deciding what to do with land in England can use QPlan. It puts the evidence in front of you
            before you spend money on a site.
          </p>
          <div className="who">
            {WHO.map((c) => (
              <p className="claim" key={c.lead}>
                <b>{c.lead}</b> {c.reason}
              </p>
            ))}
          </div>
        </section>

        <section className="notice pin pin--live" id="live" aria-labelledby="n1">
          <p className="notice__label">Notice 1</p>
          <h2 id="n1">What is live today</h2>
          {LIVE.map((c) => (
            <p className="claim" key={c.lead}>
              <b>{c.lead}</b> {c.reason}
            </p>
          ))}
        </section>

        <section className="notice pin pin--inspect" id="inspect" aria-labelledby="n2">
          <p className="notice__label">Notice 2</p>
          <h2 id="n2">You may inspect</h2>
          <ol>
            <li>the statutory provisions and judgments behind every assistant reply;</li>
            <li>the sample size behind every rate. Where it is too small, the answer says so rather than scoring zero;</li>
            <li>the council page each precedent came from. QPlan cites none it did not open;</li>
            <li>the Framework the assistant answers from: the NPPF of 17 August 2026.</li>
          </ol>
          <p style={{ marginTop: "var(--s-4)" }}>
            Figures come from the data. The model writes prose and never authors a number.
          </p>
        </section>

        <section className="notice pin pin--appraise" aria-labelledby="n3">
          <p className="notice__label">Notice 3</p>
          <h2 id="n3">Appraisals</h2>
          {APPRAISALS.map((c) => (
            <p className="claim" key={c.lead}>
              <b>{c.lead}</b> {c.reason}
            </p>
          ))}
          <p className="ast">Build costs come from a dated BCIS table (Q4 2024) and are marked as such.</p>
        </section>

        <section className="notice pin pin--applies" id="applies" aria-labelledby="n4">
          <p className="notice__label">Notice 4</p>
          <h2 id="n4">Where it applies</h2>
          <p>
            England / <span className="struck">Wales</span> / <span className="struck">Scotland</span> /{" "}
            <span className="struck">Northern Ireland</span>*
          </p>
          <p>
            Planning evidence / <span className="struck">legal advice</span>*
          </p>
          <p>
            A screening / <span className="struck">a prediction</span>*
          </p>
          <p>
            Working plans / <span className="struck">plans for submission</span>*
          </p>
          <div className="insert">
            <p>* delete where inappropriate</p>
          </div>
        </section>

        <section className="notice pin pin--about" id="about" aria-labelledby="n5">
          <p className="notice__label">Notice 5</p>
          <h2 id="n5">Who gives this notice</h2>
          <p>
            QPlan is built by Edward Pina-Butler, an AI solutions engineer and planning consultant with a BSc in Urban Planning &amp;
            Development from a RICS-accredited programme. His undergraduate thesis investigated the
            implementation of artificial intelligence in planning and property, the research that laid the
            groundwork for QPlan.
          </p>
          <p>
            <Link href="/story">Read the planning history of QPlan</Link>, from a planning degree at Cardiff to the
            product in testing today.
          </p>
          <div className="sig">
            <div className="sig__row">
              <span>Signed</span>
              <span className="sig__fill">Edward Pina-Butler</span>
            </div>
            <div className="sig__row">
              <span>On behalf of</span>
              <span className="sig__fill">QPlan</span>
            </div>
          </div>
        </section>

        <section className="notice pin pin--faq" aria-labelledby="n6">
          <p className="notice__label">Notice 6</p>
          <h2 id="n6">Questions</h2>
          <div style={{ borderTop: "var(--rule)" }}>
            {FAQ.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-foot">
        <QPlanMark size={24} />
        <p>Planning evidence · England</p>
        <p>
          <a className="night-link" href="mailto:hello@qplan.co.uk">hello@qplan.co.uk</a>
        </p>
        <p>Privacy notice to follow; email hello@qplan.co.uk.</p>
        <p>&copy; 2026 QPlan</p>
      </footer>
    </div>
  );
}
