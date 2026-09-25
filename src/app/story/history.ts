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
    title: "Something more practical",
    proposal: "BSc Urban Planning and Development, Cardiff University",
    decision: "Approved",
    reason: "a practical course, aimed at development.",
    body: [
      "I always wanted to be a property developer. A general business degree wasn't going to teach me that, so I went for something more practical: Urban Planning and Development at Cardiff.",
      "It covered what I actually wanted to know. Property, regeneration, site planning, development valuation, and the law and policy behind all of it. It's also where I first saw how slow the planning process really is.",
    ],
  },
  {
    ref: "EPB/2023/02",
    date: "2023 to 2024",
    title: "Somebody's already done it",
    proposal: "An app to speed up the planning process",
    decision: "Advised",
    reason: "that somebody had already done it. Proceeded anyway.",
    body: [
      "In third year I had the idea of building an app to speed up the planning process, and I've been obsessed with it ever since.",
      "I told my tutor I wanted to build it, and the answer was that somebody had already done it. Honestly, that demotivated me for a while. Then I thought to myself, fine, somebody's done it, but why can't I try?",
    ],
  },
  {
    ref: "EPB/2024/03",
    date: "May 2024",
    title: "The dissertation",
    proposal: "Dissertation: Ethical Dimensions of Artificial Intelligence in Urban Planning",
    decision: "Submitted",
    reason: "7 May 2024. Graduated BSc (Hons), 2:1.",
    body: [
      "So I made it my dissertation. My first idea was AI in smart cities, things like traffic lights and infrastructure, but after my first supervisor meeting it came down to planning, because that's where I thought the gap was.",
      "I interviewed an AI specialist, a planner with twenty years' experience and a digital planning specialist, and asked them what could go wrong. They all said the same thing in different ways: AI should help the planner, not replace them, and you have to check the data before you trust it. I still build QPlan that way.",
    ],
  },
  {
    ref: "EPB/2024/04",
    date: "2024",
    title: "The first QPlan",
    proposal: "First QPlan: a chat interface answering planning questions from the NPPF",
    decision: "Superseded",
    reason: "a start, not a product.",
    body: [
      "After I graduated I built the first version. This was before most people knew how to use AI properly, and I definitely didn't. I always wanted a chat interface you could ask anything, even get it to write you a planning statement, so that's what I built. It looked pretty good, a liquid glass design, but there was no model behind it. I didn't know how to use API keys, so it answered from files I'd loaded in, starting with the NPPF.",
      "I taught myself to run it on my own server, back before you could just ask an AI to deploy it for you.",
    ],
  },
  {
    ref: "EPB/2025/05",
    date: "2025",
    title: "Keeping it going",
    proposal: "Continued development of QPlan",
    decision: "Continued",
    reason: "by the applicant.",
    body: [
      "2025 is when I really got stuck into it. I'd had the plan in my head for a couple of years by then.",
      "A few people got involved along the way and lost motivation. I kept it going and just kept chipping away at it.",
    ],
  },
  {
    ref: "EPB/2026/06",
    date: "2026",
    title: "Where it is now",
    proposal: "QPlan: planning evidence for sites in England",
    decision: "In private testing",
    reason: "join the waitlist for access.",
    body: [
      "QPlan now is a completely different thing from that first chat window. It screens sites in England against government data, works out feasibility and viability, and answers planning questions from the actual statute, and every answer comes with its source.",
      "The numbers come from the data, not the AI. The AI writes the words and never makes up a figure, and if the evidence isn't there, it tells you. That's basically my dissertation, built.",
    ],
  },
];
