"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { WaitlistForm } from "./waitlist-form";

// Opened by any element with data-open-waitlist. The dialog is a notice
// pinned over the night (thesis T3): a real dialog, focus kept inside it,
// and focus returned to the trigger on close.
export function WaitlistDialog() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const trigger = (e.target as HTMLElement).closest("[data-open-waitlist]");
      if (trigger) {
        e.preventDefault();
        returnTo.current = trigger as HTMLElement;
        setOpen(true);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Escape closes; Tab stays inside the panel.
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([tabindex="-1"]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Lock the page behind, move focus in, and return it on close.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      panelRef.current?.querySelector<HTMLElement>("input:not([tabindex='-1'])")?.focus();
    } else {
      document.body.style.overflow = "";
      returnTo.current?.focus();
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
        background: "rgba(15, 25, 35, 0.86)",
        padding: "var(--s-4)",
        overflowY: "auto",
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-dialog-title"
        onClick={(e) => e.stopPropagation()}
        className="notice"
        style={{ position: "relative", width: "100%", maxWidth: 560 }}
      >
        <button
          type="button"
          onClick={close}
          style={{
            position: "absolute",
            top: "var(--s-3)",
            right: "var(--s-3)",
            minWidth: 44,
            minHeight: 44,
            background: "none",
            border: 0,
            font: "inherit",
            fontSize: "var(--step--1)",
            color: "var(--ink)",
            textDecoration: "underline",
            textUnderlineOffset: 3,
            cursor: "pointer",
          }}
        >
          Close
        </button>
        <p className="notice__label">Notice · QPlan · England</p>
        <h2 id="waitlist-dialog-title">Join the waitlist</h2>
        <p style={{ marginBottom: "var(--s-5)" }}>
          QPlan is private while it is tested. Planning consultants get priority.
        </p>
        <WaitlistForm />
      </div>
    </div>
  );
}
