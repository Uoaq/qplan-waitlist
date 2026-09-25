import type { Metadata } from "next";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { Journey } from "@/components/journey";
import { HISTORY } from "./history";
import { EntryBody, Register, Statement, StoryFoot, StoryIntro, StoryNav, anchor, yearOf } from "./parts";

// The founder's story as a planning history (T1, T4, T7). A survey line draws
// down the left with the reading; each year's notice is pinned to the board as
// it arrives, and its decision is stamped. Ed chose this form (mock-up A) on
// 2026-09-25. With no script, or under reduced motion, it is all simply there.
export const metadata: Metadata = {
  title: "The planning history of QPlan",
  description:
    "How QPlan got here: from a planning degree at Cardiff, through a dissertation on AI in urban planning, to planning evidence for sites in England.",
};

export default function Story() {
  return (
    <div className="night" style={{ overflowX: "clip" }}>
      <WaitlistDialog />
      <Journey />
      <StoryNav />
      <main className="story story--wide">
        <p className="story__tag">The planning history of QPlan</p>
        <StoryIntro cue />
        <ol className="trail" data-progress>
          {HISTORY.map((e) => (
            <li className="trail__row" key={e.ref} id={anchor(e)} data-reveal>
              <p className="trail__year" aria-hidden="true">
                {yearOf(e)}
              </p>
              <span className="trail__node" aria-hidden="true" />
              <section className="notice trail__notice" aria-labelledby={`${anchor(e)}-h`}>
                <EntryBody e={e} />
              </section>
            </li>
          ))}
        </ol>
        <div data-reveal className="arrive">
          <Statement />
        </div>
        <Register title />
      </main>
      <StoryFoot />
    </div>
  );
}
