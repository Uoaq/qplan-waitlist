"use client";

import { useEffect } from "react";

// Scroll behaviour for the story mock-ups. Two jobs, both progressive:
// 1. [data-reveal] elements below the fold wait, then arrive once in view.
//    The server renders them visible, so with no script nothing is hidden.
// 2. [data-progress] elements get --p, from 0 to 1, as the reader moves
//    through them, for lines that draw with the reading.
// Under prefers-reduced-motion everything is shown at once and fully drawn.
export function Journey() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const tracks = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      items.forEach((el) => (el.dataset.reveal = "in"));
      tracks.forEach((t) => {
        t.style.setProperty("--p", "1");
        t.dispatchEvent(new CustomEvent("journey", { detail: 1 }));
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.reveal = "in";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.12 },
    );
    for (const el of items) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.82) el.dataset.reveal = "in";
      else {
        el.dataset.reveal = "wait";
        io.observe(el);
      }
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.6;
      for (const t of tracks) {
        const r = t.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
        t.style.setProperty("--p", p.toFixed(4));
        t.dispatchEvent(new CustomEvent("journey", { detail: p }));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
