"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  fontFamily: "'Inter', sans-serif",
  fontSize: 13,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: "var(--radius-sm)",
  color: "var(--text-primary)",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  color: "var(--text-secondary)",
  marginBottom: 4,
  display: "block",
  letterSpacing: "0.02em",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, industry, website }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setIndustry("");
      setWebsite("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          padding: "28px 24px",
          textAlign: "center",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "var(--radius-md)",
          border: "1px solid rgba(148,163,184,0.08)",
        }}
      >
        <div style={{ fontSize: 20, marginBottom: 10, color: "var(--accent-cyan)" }}>&#10003;</div>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            color: "var(--text-primary)",
            marginBottom: 4,
          }}
        >
          You&apos;re on the list
        </p>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
          We&apos;ll be in touch when your access is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Work email *</label>
          <input
            type="email"
            placeholder="jane@practice.co.uk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>Company</label>
          <input
            type="text"
            placeholder="Your firm"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Industry</label>
          <input
            type="text"
            placeholder="e.g. Planning consultancy"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn"
        style={{
          width: "100%",
          padding: "10px 24px",
          fontSize: 13,
          fontWeight: 600,
          marginTop: 4,
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? "Joining..." : "Request early access"}
      </button>
      {status === "error" && (
        <p style={{ fontSize: 12, color: "#ef4444", textAlign: "center" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
