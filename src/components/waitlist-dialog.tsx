"use client";

import { useState, useEffect, useCallback } from "react";
import { WaitlistForm } from "./waitlist-form";
import { QPlanLogo } from "./qplan-logo";

export function WaitlistDialog() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Listen for clicks on any element with data-open-waitlist
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const trigger = (e.target as HTMLElement).closest("[data-open-waitlist]");
      if (trigger) {
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 480,
          background: "var(--bg-surface)",
          border: "var(--glass-border)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--glass-shadow)",
          padding: "40px 36px 32px",
          animation: "dialogIn 0.2s ease-out",
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: 4,
            lineHeight: 1,
            fontSize: 18,
          }}
        >
          &#10005;
        </button>

        {/* Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <QPlanLogo size={22} />
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Plan<span style={{ color: "var(--accent-cyan)" }}>.</span>
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: "var(--text-primary)",
            marginBottom: 6,
            lineHeight: 1.2,
          }}
        >
          Get early access
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            marginBottom: 28,
          }}
        >
          Join the waitlist for data-driven planning intelligence.
          <br />
          Planning consultants get priority.
        </p>

        <WaitlistForm />

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "var(--text-dim)",
            marginTop: 20,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Aligned with the RICS AI Standard for professional use in property and planning.
        </p>
      </div>
    </div>
  );
}
