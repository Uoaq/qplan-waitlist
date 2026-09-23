"use client";

import { useId, useState } from "react";

// A question on the notice. Opening it changes state without moving
// anything (thesis T8); the toggle is text, not an icon chip.
export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div style={{ borderBottom: "var(--rule)" }}>
      <h3 style={{ margin: 0, fontSize: "inherit" }}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={id}
          style={{
            width: "100%",
            minHeight: 44,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "var(--s-4)",
            padding: "var(--s-4) 0",
            background: "none",
            border: 0,
            font: "inherit",
            fontWeight: 700,
            color: "var(--ink)",
            textAlign: "left",
            cursor: "pointer",
          }}
        >
          <span>{question}</span>
          <span aria-hidden="true" style={{ flexShrink: 0, fontWeight: 400 }}>
            {open ? "(close)" : "(read)"}
          </span>
        </button>
      </h3>
      <div id={id} hidden={!open}>
        <p style={{ margin: 0, padding: "0 0 var(--s-4)", color: "var(--ink-2)" }}>{answer}</p>
      </div>
    </div>
  );
}
