import Image from "next/image";
import { QPlanLogo } from "@/components/qplan-logo";
import { UKMap } from "@/components/uk-map";
import { WaitlistForm } from "@/components/waitlist-form";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FaqItem } from "@/components/faq-item";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <WaitlistDialog />
      {/* Background orbs */}
      <div className="orbs">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
      </div>

      {/* ─── Nav ─── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 64,
          background: "var(--sidebar-bg)",
          backdropFilter: "var(--glass-blur)",
          WebkitBackdropFilter: "var(--glass-blur)",
          borderBottom: "var(--glass-border)",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "var(--text-primary)",
          }}
        >
          <QPlanLogo size={28} />
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1.15rem",
              letterSpacing: "-0.02em",
            }}
          >
            Plan<span style={{ color: "var(--accent-cyan)" }}>.</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {[
            { label: "About", href: "#about" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Features", href: "#features" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: "6px 16px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                borderRadius: 8,
                transition: "color 0.3s, background 0.3s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#" data-open-waitlist
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 12px",
              marginLeft: 8,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--btn-primary-text)",
              background: "var(--btn-primary-bg)",
              border: "var(--btn-ghost-border)",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <UKMap />

        <div style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", gap: 20, marginBottom: 16 }}>
          <QPlanLogo size={80} />
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 64,
              letterSpacing: -1,
              color: "var(--text-primary)",
              lineHeight: 1,
            }}
          >
            Plan<span style={{ color: "var(--accent-cyan)" }}>.</span>
          </span>
        </div>

        <p
          style={{
            position: "relative",
            zIndex: 3,
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: "var(--accent-cyan)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Planning Intelligence
        </p>

        <p
          style={{
            position: "relative",
            zIndex: 3,
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            maxWidth: 560,
            marginBottom: 36,
          }}
        >
          Screen any UK planning site for constraints, risk, and viability — in
          seconds. Automated site viability screening backed by 29 government
          constraint datasets.
        </p>

        <div style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href="#" data-open-waitlist className="btn" style={{ padding: "10px 24px", fontSize: 13 }}>
            Join the Waitlist
          </a>
          <a href="#screenshots" className="btn-outline" style={{ padding: "10px 24px", fontSize: 13, textDecoration: "none", display: "inline-flex", cursor: "pointer" }}>
            See the platform
          </a>
        </div>
      </section>

      {/* ─── Platform Walkthrough — Immersive Scroll ─── */}
      <section id="screenshots" style={{ position: "relative", zIndex: 2 }}>
        {/* Section header */}
        <div style={{ padding: "120px 24px 60px", textAlign: "center" }}>
          <ScrollReveal>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent-cyan)", marginBottom: 16 }}>
              Platform Walkthrough
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 38, letterSpacing: -0.5, color: "var(--text-primary)", margin: "0 0 16px 0", lineHeight: 1.15 }}>
              See the platform
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              From postcode to professional PDF report. Walk through every step of a Q Plan assessment.
            </p>
          </ScrollReveal>
        </div>

        {/* Step 1 */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>01</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                Start with a postcode
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                Enter your site&apos;s postcode and describe your proposal. The system guides you through the process — no complex forms, just a conversation. It captures everything needed for a full site assessment.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <Image src="/screenshots/chat.png" alt="Q Plan chat interface for site assessment" width={1440} height={900} style={{ width: "100%", height: "auto", display: "block" }} priority />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 2 */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <Image src="/screenshots/map.png" alt="Q Plan interactive constraint map with layer overlays" width={1440} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>02</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                29 constraint datasets, checked instantly
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                The pipeline queries planning.data.gov.uk in real-time. Flood zones, Green Belt, conservation areas, listed buildings, SSSI, ancient woodland — all overlaid on an interactive constraint map.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 3 */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>03</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                A clear risk verdict
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                Every report delivers a professional risk score and go/no-go verdict. Green means proceed with confidence. Amber means proceed with caution. Red means walk away. No ambiguity — just a clear recommendation backed by data.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <Image src="/screenshots/sample-green-light.png" alt="Q Plan GREEN risk score report" width={1440} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 4 */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <Image src="/screenshots/report.png" alt="Q Plan assessment report with constraint breakdown" width={1440} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>04</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                The full constraint breakdown
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                Every constraint identified, with NPPF policy references, survey requirements, and estimated costs. No guesswork — just the structured data your planning consultant needs to advise on viability.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 5 — Risk spectrum */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>05</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.2 }}>
                See the full risk spectrum
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>
                Three real sites. Three different outcomes. From a clean brownfield green light to an insurmountable floodplain red flag — every report gives you the clarity to make the right call.
              </p>
            </ScrollReveal>
            <div className="risk-spectrum-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {[
                { src: "/screenshots/sample-green-light.png", alt: "GREEN risk score — 11/100", badge: "GREEN \u00b7 11/100", badgeBg: "rgba(34,197,94,0.12)", badgeColor: "#22c55e", desc: "Brownfield green light — proceed with confidence", delay: 0 },
                { src: "/screenshots/sample-amber-heritage.png", alt: "AMBER risk score — 42/100", badge: "AMBER \u00b7 42/100", badgeBg: "rgba(245,158,11,0.12)", badgeColor: "#f59e0b", desc: "Cotswold heritage village — proceed with caution", delay: 150 },
                { src: "/screenshots/sample-red-floodplain.png", alt: "RED risk score — 82/100", badge: "RED \u00b7 82/100", badgeBg: "rgba(239,68,68,0.12)", badgeColor: "#ef4444", desc: "Floodplain red flag — do not proceed", delay: 300 },
              ].map((card) => (
                <ScrollReveal key={card.badge} delay={card.delay}>
                  <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                    <Image src={card.src} alt={card.alt} width={1440} height={900} style={{ width: "100%", height: "auto", display: "block", borderBottom: "var(--glass-border)" }} />
                    <div style={{ padding: "16px 20px" }}>
                      <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700, fontFamily: "'Inter', sans-serif", background: card.badgeBg, color: card.badgeColor, marginBottom: 6 }}>{card.badge}</span>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{card.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Step 6 — Dashboard */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>06</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.2 }}>
                Your planning intelligence dashboard
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>
                Track all your assessments in one place. See risk scores at a glance, manage projects across multiple sites, and access your full report library.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)", maxWidth: 1000, margin: "0 auto" }}>
                <Image src="/screenshots/dashboard.png" alt="Q Plan planning intelligence dashboard" width={1440} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" style={{ padding: "100px 24px", maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: -0.5,
            color: "var(--text-primary)",
            textAlign: "center",
            margin: "0 0 56px 0",
          }}
        >
          How it works
        </h2>
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            {
              step: "01",
              title: "Enter Your Site",
              desc: "Provide a postcode and describe your proposal. Our intake captures everything needed for a full assessment.",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
            },
            {
              step: "02",
              title: "Constraint Check",
              desc: "The pipeline queries 29 government datasets — flood zones, green belt, conservation areas, listed buildings, and more.",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              ),
            },
            {
              step: "03",
              title: "Viability Report",
              desc: "Receive a professional PDF with risk score, verdict, NPPF policy analysis, capacity estimate, and survey requirements.",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.step} className="glass-card" style={{ padding: "32px 28px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 14,
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.05em",
                  marginBottom: 16,
                }}
              >
                {item.step}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  margin: "0 auto 18px auto",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--accent-cyan-glow)",
                  color: "var(--accent-cyan)",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "var(--text-primary)",
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" style={{ padding: "100px 24px", maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: -0.5,
            color: "var(--text-primary)",
            textAlign: "center",
            margin: "0 0 56px 0",
          }}
        >
          What Q Plan delivers
        </h2>
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { title: "29 Constraint Datasets", desc: "Flood zones, Green Belt, conservation areas, SSSI, listed buildings, TPOs, agricultural land, and more." },
            { title: "NPPF Policy Analysis", desc: "Automatically interprets constraints against current National Planning Policy Framework paragraphs." },
            { title: "Risk Score & Verdict", desc: "Clear green/amber/red rating with a go/no-go recommendation and weighted risk assessment." },
            { title: "Heritage & Landscape", desc: "Identifies nearby listed buildings, conservation areas, and landscape designations affecting the site." },
            { title: "Capacity & Strategy", desc: "Estimated development capacity, recommended approach, and mitigation strategy for identified constraints." },
            { title: "Survey Requirements", desc: "Which surveys you'll need, estimated costs, and whether they're statutory or advisory." },
          ].map((item) => (
            <div key={item.title} className="glass-card" style={{ padding: "28px 24px" }}>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--text-primary)",
                  marginBottom: 6,
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Social Proof / Stats ─── */}
      <section style={{ padding: "100px 24px", maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "var(--text-muted)", textAlign: "center", marginBottom: 40, letterSpacing: "0.02em" }}>
          Built for planning professionals across the UK
        </p>
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { value: "29", label: "Government Constraint Datasets" },
            { value: "100+", label: "Policies Analysed Per Report" },
            { value: "6", label: "Application Types Supported" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                  color: "var(--accent-cyan)",
                  letterSpacing: -0.5,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" style={{ padding: "100px 24px", maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 42,
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            About Q Plan
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            Building the future co-pilot of the planning consultancy
          </p>
        </div>

        {/* Mission */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: 16 }}>
            Our Mission
          </div>
          <div className="glass-card" style={{ padding: 32 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 16 }}>
              Q Plan provides data-driven planning intelligence that helps developers, landowners, and planning consultants understand a site&apos;s constraints, risks, and development potential before committing to a planning application. We believe that better upfront intelligence leads to better outcomes — fewer abortive applications, less wasted spend, and more informed decisions.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-body)", lineHeight: 1.75 }}>
              Our goal is to raise the quality floor for every planning submission in England, from householder extensions to large-scale major developments, by making best-practice policy analysis and structured argumentation accessible to practices of every size.
            </p>
          </div>
        </div>

        {/* Technology */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: 16 }}>
            Technology
          </div>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 600, color: "var(--text-primary)", marginBottom: 16 }}>
            Multi-Agent Analysis Pipeline
          </h3>
          <div className="glass-card" style={{ padding: 32 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 20 }}>
              Q Plan uses a multi-agent computational architecture purpose-built for UK planning applications. Rather than relying on a single general-purpose model, the system delegates discrete tasks to specialist agents — each fine-tuned for a specific aspect of planning assessment — then assembles their outputs into a cohesive, risk-scored viability report.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {[
                { n: "1", title: "Site Intake", desc: "Captures postcode, proposal, and site details" },
                { n: "2", title: "Constraint Check", desc: "Queries planning.data.gov.uk for 29 datasets" },
                { n: "3", title: "Policy Analysis", desc: "Interprets constraints against NPPF policy" },
                { n: "4", title: "Viability Report", desc: "Professional PDF with verdict and risk score" },
              ].map((step) => (
                <div
                  key={step.n}
                  style={{
                    background: "var(--surface-raised)",
                    border: "1px solid var(--surface-divider)",
                    borderRadius: "var(--radius-md)",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "var(--accent-cyan-glow)",
                      color: "var(--accent-cyan)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {step.n}
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                    {step.title}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: 16 }}>
            Founder
          </div>
          <div className="glass-card" style={{ overflow: "hidden" }}>
            <div style={{ height: 4, background: "linear-gradient(90deg, var(--accent), var(--accent-cyan))" }} />
            <div style={{ padding: "36px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-cyan))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "var(--bg-main)",
                    flexShrink: 0,
                  }}
                >
                  EP
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
                    Edward Pina-Butler
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "var(--accent)", marginTop: 4 }}>
                    Founder &amp; Lead Engineer, Q Plan
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", padding: "5px 12px", borderRadius: 6, background: "rgba(34,211,238,0.08)", color: "var(--accent-cyan)", border: "1px solid rgba(34,211,238,0.15)" }}>
                  BSc Urban Planning &amp; Development
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", padding: "5px 12px", borderRadius: 6, background: "rgba(232,114,42,0.08)", color: "var(--accent)", border: "1px solid rgba(232,114,42,0.15)" }}>
                  RICS Accredited
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", padding: "5px 12px", borderRadius: 6, background: "rgba(34,211,238,0.08)", color: "var(--accent-cyan)", border: "1px solid rgba(34,211,238,0.15)" }}>
                  Technology &amp; Planning Systems
                </span>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 20 }}>
                Edward holds a degree in <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Urban Planning &amp; Development</strong> from a RICS-accredited programme. His undergraduate thesis investigated the <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>implementation of artificial intelligence into planning and property</strong> — research that laid the groundwork for Q Plan.
              </p>

              <div style={{ background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.1)", borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent-cyan)", marginBottom: 8 }}>
                  The Vision
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--text-body)", lineHeight: 1.7 }}>
                  Q Plan exists to give genuine value to every stage of the development process. By combining authoritative spatial data, planning policy intelligence, and automated analysis, it delivers in minutes what currently takes days — professional-grade site appraisals grounded in real constraint data, real policy, and real planning history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing (archived — re-enable when ready) ───
      <section id="pricing" style={{ padding: "100px 24px", maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 32, letterSpacing: -0.5, color: "var(--text-primary)", textAlign: "center", margin: "0 0 16px 0" }}>
          Simple, transparent pricing
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--text-secondary)", textAlign: "center", maxWidth: 480, margin: "0 auto 56px" }}>
          Start free. Upgrade when you need unlimited assessments. Credit packs available for pay-per-report use.
        </p>
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 900, margin: "0 auto" }}>
          {[
            { tier: "Free", price: "0", period: "/mo", desc: "3 assessments per month", highlight: false },
            { tier: "Pro", price: "149", period: "/mo", desc: "Unlimited assessments", highlight: true },
            { tier: "Enterprise", price: "499", period: "/mo", desc: "Team access + API + bulk CSV", highlight: false },
          ].map((plan) => (
            <div key={plan.tier} className="glass-card" style={{ padding: "36px 28px", textAlign: "center", border: plan.highlight ? "1px solid var(--accent-cyan)" : undefined, position: "relative" }}>
              {plan.highlight && (<span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--accent-cyan)", color: "var(--bg-main)", fontSize: 11, fontWeight: 700, fontFamily: "'Inter', sans-serif", padding: "4px 16px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em" }}>Most Popular</span>)}
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--text-muted)", marginBottom: 8 }}>{plan.tier}</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, color: "var(--text-primary)", marginBottom: 4 }}>&pound;{plan.price}<span style={{ fontSize: 16, fontWeight: 400, color: "var(--text-muted)" }}>{plan.period}</span></div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--text-secondary)", marginBottom: 24 }}>{plan.desc}</p>
              <a href="#" data-open-waitlist className={plan.highlight ? "btn" : "btn-outline"} style={{ width: "100%", padding: "10px 24px", textDecoration: "none", display: "inline-flex", justifyContent: "center" }}>Join Waitlist</a>
            </div>
          ))}
        </div>
      </section>
      ─── End Pricing Archive ─── */}

      {/* Waitlist CTA removed — form now lives in the popup dialog */}

      {/* ─── New Features Coming Soon ─── */}
      <section style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <ScrollReveal>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--accent-cyan)",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Roadmap
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--text-primary)",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            New features to be added
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "var(--text-secondary)",
              textAlign: "center",
              maxWidth: 540,
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            We&apos;re building fast. Here&apos;s what&apos;s coming next.
          </p>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {[
            {
              title: "Automated Appeal Risk Scoring",
              description: "Predict the likelihood of planning refusal and appeal outcomes based on historical decision data.",
              tag: "Analytics",
            },
            {
              title: "Local Authority Benchmarking",
              description: "Compare approval rates, timelines, and policy strictness across every UK planning authority.",
              tag: "Data",
            },
            {
              title: "Constraint Change Alerts",
              description: "Get notified when policy changes, new designations, or emerging constraints affect your saved sites.",
              tag: "Monitoring",
            },
            {
              title: "Viability Report Export",
              description: "Generate client-ready PDF reports with constraint summaries, risk flags, and policy references.",
              tag: "Reports",
            },
            {
              title: "Portfolio Screening",
              description: "Batch-assess multiple sites at once and rank by development potential and constraint severity.",
              tag: "Workflow",
            },
            {
              title: "Section 106 & CIL Estimator",
              description: "Estimate developer contributions and infrastructure levies based on local authority schedules.",
              tag: "Finance",
            },
          ].map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 80}>
              <div
                style={{
                  padding: "28px 24px",
                  background: "var(--glass-bg)",
                  border: "var(--glass-border)",
                  borderRadius: "var(--radius-md)",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                className="feature-card"
              >
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--accent-cyan)",
                    background: "var(--accent-cyan-glow)",
                    padding: "3px 10px",
                    borderRadius: 20,
                    marginBottom: 14,
                  }}
                >
                  {feature.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: "100px 24px", maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <ScrollReveal>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--accent-cyan)",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--text-primary)",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: 48,
            }}
          >
            Frequently asked questions
          </h2>
        </ScrollReveal>

        <div style={{ borderTop: "1px solid rgba(148,163,184,0.1)" }}>
          <FaqItem
            question="What is a site viability assessment?"
            answer="A site viability assessment evaluates whether a proposed development is feasible by analysing planning constraints, policy compliance, environmental designations, and local authority requirements. QPlan automates this by screening 29 government constraint datasets in under 60 seconds."
          />
          <FaqItem
            question="How accurate are the constraint checks?"
            answer="QPlan sources data directly from authoritative government datasets including planning.data.gov.uk, Historic England, the Environment Agency, and Natural England. The constraint data is as accurate as the underlying government records — we do not estimate or interpolate."
          />
          <FaqItem
            question="What do I need to get started?"
            answer="Just a UK postcode or site address. QPlan handles the rest — identifying the site boundary, querying constraint datasets, analysing relevant planning policies, and generating a viability summary with risk flags."
          />
          <FaqItem
            question="Which application types are supported?"
            answer="QPlan supports screening for all major application types including householder extensions, full planning applications, outline planning, change of use, listed building consent, and large-scale residential or commercial developments."
          />
          <FaqItem
            question="How long does a report take to generate?"
            answer="Most reports are generated in under 60 seconds. Complex sites with multiple overlapping constraints may take slightly longer as the system cross-references additional policy frameworks."
          />
          <FaqItem
            question="Can I use QPlan for sites anywhere in England?"
            answer="Yes. QPlan covers all local planning authorities in England. Coverage for Wales, Scotland, and Northern Ireland is on our roadmap and will be added as government data sources become available."
          />
          <FaqItem
            question="Is QPlan a replacement for a planning consultant?"
            answer="No. QPlan is a screening and intelligence tool designed to complement professional advice, not replace it. It helps consultants, developers, and landowners make faster, better-informed decisions about whether to progress with a site — saving time and reducing abortive costs."
          />
          <FaqItem
            question="How is QPlan different from a planning portal search?"
            answer="Planning portal searches show individual constraints one at a time. QPlan aggregates 29 datasets simultaneously, cross-references them against relevant planning policy, and delivers a single viability verdict with risk scoring — turning hours of manual research into seconds."
          />
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section
        style={{
          background: "var(--accent-gradient)",
          padding: "54px 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <QPlanLogo size={28} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.02em", color: "#FFFFFF" }}>
            Plan<span style={{ color: "var(--accent-cyan)" }}>.</span>
          </span>
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 22, color: "#FFFFFF", margin: "0 0 8px 0" }}>
          Know your site before you commit
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", margin: "0 0 20px 0" }}>
          Data-driven planning intelligence for UK property professionals
        </p>
        <a href="#" data-open-waitlist className="btn" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF", padding: "10px 30px", fontSize: 13, fontWeight: 600 }}>
          Join the Waitlist
        </a>
      </section>

      {/* ─── Footer ─── */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "var(--glass-border)",
          background: "var(--header-bg)",
          backdropFilter: "var(--glass-blur)",
          WebkitBackdropFilter: "var(--glass-blur)",
          padding: "48px 32px 32px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, maxWidth: 1120, margin: "0 auto" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <QPlanLogo size={24} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                Plan<span style={{ color: "var(--accent-cyan)" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Planning Intelligence
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 16 }}>
              Product
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="#about" style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}>About</a>
              <a href="#how-it-works" style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}>How it works</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 16 }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:hello@qplan.co.uk" style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}>hello@qplan.co.uk</a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1120, margin: "40px auto 0", paddingTop: 24, borderTop: "1px solid var(--surface-divider)", textAlign: "center", fontSize: "0.8rem", color: "var(--text-dim)" }}>
          &copy; 2026 Q Plan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
