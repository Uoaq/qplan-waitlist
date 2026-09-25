"use client";

import { useId, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

// The waitlist form is the notice (thesis signature): lettered blanks, an
// Insert: key beneath, and on success the notice is signed and dated.
export function WaitlistForm() {
  const uid = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<"name" | "email" | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [given, setGiven] = useState<{ name: string; email: string; date: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!name.trim()) {
      setFieldError("name");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setFieldError("email");
      setStatus("error");
      return;
    }
    setFieldError(null);

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, industry, website }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setServerError(typeof body?.error === "string" ? body.error : null);
        setStatus("error");
        return;
      }
      setGiven({
        name: name.trim(),
        email: email.trim(),
        date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
      });
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

  if (status === "success" && given) {
    return (
      <div role="status">
        <p style={{ fontSize: "var(--step-1)", fontWeight: 700, margin: "0 0 var(--s-2)" }}>Notice given.</p>
        <p>We will write to {given.email} when your access is ready.</p>
        <div className="sig">
          <div className="sig__row">
            <span>Signed</span>
            <span className="sig__fill">{given.name}</span>
          </div>
          <div className="sig__row">
            <span>Date</span>
            <span className="sig__fill">{given.date}</span>
          </div>
        </div>
      </div>
    );
  }

  const nameInvalid = status === "error" && fieldError === "name";
  const emailInvalid = status === "error" && fieldError === "email";

  return (
    <form onSubmit={handleSubmit} noValidate>
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

      <div className="keyed" data-invalid={nameInvalid}>
        <label htmlFor={`${uid}-name`}>(a) Name</label>
        <input
          id={`${uid}-name`}
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-invalid={nameInvalid}
          aria-describedby={nameInvalid ? `${uid}-name-err` : undefined}
        />
      </div>
      {nameInvalid && (
        <p id={`${uid}-name-err`} className="keyed__error" role="alert">(a) needs your name.</p>
      )}

      <div className="keyed" data-invalid={emailInvalid}>
        <label htmlFor={`${uid}-email`}>(b) Email</label>
        <input
          id={`${uid}-email`}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-invalid={emailInvalid}
          aria-describedby={emailInvalid ? `${uid}-email-err` : undefined}
        />
      </div>
      {emailInvalid && (
        <p id={`${uid}-email-err`} className="keyed__error" role="alert">(b) needs an email we can write to.</p>
      )}

      <div className="keyed">
        <label htmlFor={`${uid}-company`}>(c) Firm</label>
        <input
          id={`${uid}-company`}
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="keyed">
        <label htmlFor={`${uid}-industry`}>(d) What you do</label>
        <input
          id={`${uid}-industry`}
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="act"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        style={{ marginTop: "var(--s-4)" }}
      >
        {status === "loading" ? "Giving notice..." : "Join the waitlist"}
      </button>

      {status === "error" && !fieldError && (
        <p role="alert" className="keyed__error" style={{ marginTop: "var(--s-3)" }}>
          {serverError ?? "The notice did not reach us. Try again, or email hello@qplan.co.uk."}
        </p>
      )}

      <div className="insert">
        <p>Insert: (a) your name (b) the email we should write to (c) your firm, if any (d) what you do, if you like.</p>
        <p>Privacy notice to follow; email hello@qplan.co.uk.</p>
      </div>
    </form>
  );
}
