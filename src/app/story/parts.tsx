import Link from "next/link";
import { QPlanMark } from "@/components/qplan-logo";
import { HISTORY, type Entry } from "./history";

// The pieces of the story page: the intro, each chapter, the signed
// statement and the register recap.

export const anchor = (e: Entry) => e.ref.replaceAll("/", "-");
export const yearOf = (e: Entry) => e.date.match(/\d{4}/)?.[0] ?? e.date;

export function StoryNav() {
  return (
    <nav className="site-nav" aria-label="Main">
      <Link href="/" aria-label="QPlan, home" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", minHeight: 44 }}>
        <QPlanMark size={28} />
      </Link>
      <div className="site-nav__links">
        <Link className="night-link" href="/">Home</Link>
        <Link className="night-link" href="/#live">What is live</Link>
        {/* A plain <a>: the dialog's document listener must cancel the click
            before navigation, which a <Link> would start first. The href is
            the no-script fallback. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="act act--night" href="/#waitlist" data-open-waitlist>
          Join the waitlist
        </a>
      </div>
    </nav>
  );
}

export function StoryIntro({ cue = false }: { cue?: boolean }) {
  return (
    <section className="notice" aria-labelledby="story-title">
      <p className="notice__label">Planning history · QPlan</p>
      <h1 id="story-title">How QPlan got here.</h1>
      <p>
        Councils keep a planning history for every site: what was applied for, and what was decided. I thought
        QPlan should have one too. This is how it got here.
      </p>
      <p>
        <b>Applicant:</b>{" "}Edward Pina-Butler, AI solutions engineer and planning consultant.
      </p>
      {cue ? <p className="journey-cue">Six entries, 2021 to 2026. Scroll, and they arrive in order.</p> : null}
    </section>
  );
}

// The decision, stamped the way a council stamps a decided application.
export function Stamp({ e }: { e: Entry }) {
  return (
    <p className="entry__decision" data-stamp>
      <span>Decision</span>
      <span>
        <b className="stamp">{e.decision}</b> {e.reason}
      </span>
    </p>
  );
}

export function EntryBody({ e }: { e: Entry }) {
  return (
    <>
      <p className="notice__label">
        {e.ref} · {e.date}
      </p>
      <h2 id={`${anchor(e)}-h`}>{e.title}</h2>
      <p className="entry__proposal">
        <span>Proposal</span> {e.proposal}
      </p>
      {e.body.map((para) => (
        <p key={para.slice(0, 24)}>{para}</p>
      ))}
      <Stamp e={e} />
    </>
  );
}

export function Register({ title = false }: { title?: boolean }) {
  return (
    <section className="notice" aria-labelledby={title ? "register-title" : undefined}>
      {title ? (
        <>
          <p className="notice__label">The register in full</p>
          <h2 id="register-title">Planning history of QPlan</h2>
        </>
      ) : null}
      <table className="register">
        <thead>
          <tr>
            <th scope="col">Reference</th>
            <th scope="col">Proposal</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {HISTORY.map((e) => (
            <tr key={e.ref}>
              <td className="register__ref">
                <a href={`#${anchor(e)}`}>{e.ref}</a>
                <span className="register__date">{e.date}</span>
              </td>
              <td>{e.proposal}</td>
              <td>
                <b>{e.decision}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function Statement() {
  return (
    <section className="notice" aria-labelledby="statement">
      <p className="notice__label">Statement of the applicant</p>
      <h2 id="statement">Why I keep going</h2>
      <p>
        There&rsquo;s so much more potential here than what&rsquo;s out there now. A lot of what gets sold as AI in
        planning is a chat box on top of a model. That&rsquo;s the baseline, and most people stop there.
      </p>
      <p>
        I love planning and I love AI, and not many people get to properly do both. When you actually try to get it
        right, instead of just getting it out, there&rsquo;s a lot more room to grow than people think.
      </p>
      <p>
        QPlan is me trying to show what AI can do when someone who knows planning, and actually cares about it, is
        at the wheel. I hope you&rsquo;ll stick with me for the rest of the journey.
      </p>
      <p>
        <b>I give notice that</b> I intend to keep going.
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
        <div className="sig__row">
          <span>Date</span>
          <span className="sig__fill">September 2026</span>
        </div>
      </div>
      <p style={{ marginTop: "var(--s-6)" }}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="act" href="/#waitlist" data-open-waitlist>
          Join the waitlist
        </a>
      </p>
    </section>
  );
}

export function StoryFoot() {
  return (
    <footer className="site-foot">
      <QPlanMark size={24} />
      <p>Planning evidence · England</p>
      <p>
        <a className="night-link" href="mailto:hello@qplan.co.uk">hello@qplan.co.uk</a>
      </p>
      <p>Privacy notice to follow; email hello@qplan.co.uk.</p>
      <p>&copy; 2026 QPlan</p>
    </footer>
  );
}
