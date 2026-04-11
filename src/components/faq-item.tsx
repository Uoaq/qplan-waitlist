"use client";

import { useState } from "react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(148,163,184,0.1)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: open ? "#FFFFFF" : "var(--text-primary)",
            transition: "color 0.3s",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            background: open ? "var(--accent-cyan-glow)" : "rgba(255,255,255,0.03)",
            border: open ? "1px solid rgba(34,211,238,0.2)" : "1px solid rgba(148,163,184,0.1)",
            color: open ? "var(--accent-cyan)" : "var(--text-muted)",
            fontSize: 18,
            fontWeight: 300,
            transition: "all 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
          transition: "max-height 0.35s cubic-bezier(0.23,1,0.32,1), opacity 0.3s",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            padding: "0 0 22px 0",
            margin: 0,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
