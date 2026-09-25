// The planning history of QPlan, told as a story. Facts are Ed's, confirmed
// 2026-09-25; the tutor is not named. Each entry is a chapter (title and
// body) filed as a planning record (ref, proposal, decision).

export type Entry = {
  ref: string;
  date: string;
  title: string;
  proposal: string;
  decision: string;
  reason: string;
  body: string[];
};

export const HISTORY: Entry[] = [
  {
    ref: "EPB/2021/01",
    date: "2021",
    title: "The practical route",
    proposal: "BSc Urban Planning and Development, Cardiff University",
    decision: "Approved",
    reason: "a practical course, aimed at development.",
    body: [
      "I always knew what I wanted to do: be a property developer, take a piece of land and make something of it. A general business degree was never going to teach me that, so I chose one that would.",
      "Cardiff's Urban Planning and Development course was exactly that: property and regeneration, site planning, development valuation, and the law and policy that decide what gets built and where. It was also where I first saw the planning system up close, and how slow it can be. That stuck with me.",
    ],
  },
  {
    ref: "EPB/2023/02",
    date: "2023 to 2024",
    title: "Somebody has already done it",
    proposal: "An app to speed up the planning process",
    decision: "Advised",
    reason: "that somebody had already done it. Proceeded anyway.",
    body: [
      "In my third year the idea arrived: an app that would speed up the planning process. I have not been able to put it down since.",
      "I took it to my tutor, and the answer was that somebody had already done it. That hit harder than I expected, and for a while it took the wind out of me. Then a simpler question won. Somebody has done it; so why can't I try?",
    ],
  },
  {
    ref: "EPB/2024/03",
    date: "May 2024",
    title: "Writing it down",
    proposal: "Dissertation: Ethical Dimensions of Artificial Intelligence in Urban Planning",
    decision: "Submitted",
    reason: "7 May 2024. Graduated BSc (Hons), 2:1.",
    body: [
      "So I made it my dissertation: artificial intelligence in urban planning, and what it would take to use it without making planning less fair. I interviewed a specialist in AI, a planner with twenty years' experience and a specialist in digital planning, and asked them where it could go wrong.",
      "Their answers pointed the same way. AI should augment the planner, not replace them, and its data has to be checked before anyone relies on it. I graduated that summer, and that conclusion came with me. It is still the rule QPlan is built on.",
    ],
  },
  {
    ref: "EPB/2024/04",
    date: "2024",
    title: "A chat window with nothing behind it",
    proposal: "First QPlan: a chat interface answering planning questions from the NPPF",
    decision: "Superseded",
    reason: "a start, not a product.",
    body: [
      "After graduating I built the first QPlan. Hardly anyone knew how to use AI properly then, and I certainly didn't. It looked the part: a chat window in liquid glass that you could ask anything, the way I had always pictured it.",
      "Underneath, there was no model at all. I didn't know how to use API keys, so it answered deterministically from files I had loaded, starting with the National Planning Policy Framework. I taught myself to run it on my own server, long before you could ask an assistant to deploy it for you. It was rough. It was also the moment it stopped being just an idea.",
    ],
  },
  {
    ref: "EPB/2025/05",
    date: "2025",
    title: "Keeping going",
    proposal: "Continued development of QPlan",
    decision: "Continued",
    reason: "by the applicant.",
    body: [
      "In 2025 I got properly stuck in, chipping away at it one piece at a time.",
      "Along the way, people who had been involved lost interest and moved on. I didn't. Every version showed me what the next one needed, and I kept building it.",
    ],
  },
  {
    ref: "EPB/2026/06",
    date: "2026",
    title: "QPlan today",
    proposal: "QPlan: planning evidence for sites in England",
    decision: "In private testing",
    reason: "join the waitlist for access.",
    body: [
      "QPlan today is a different machine from that glass chat window. It screens sites in England against government data, appraises feasibility and viability, and answers planning questions from pinned statute, citing only what it has opened.",
      "Every figure comes from the data by fixed rules. The model writes the prose and never authors a number, and where the evidence is thin, it says so. That is my dissertation's conclusion, turned into software.",
    ],
  },
];
