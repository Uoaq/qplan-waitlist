import { QPlanLogo } from "@/components/qplan-logo";
import { MockupTile } from "@/components/mockup-tile";
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
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#" data-open-waitlist
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 14px",
              marginLeft: 4,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--btn-primary-text)",
              background: "var(--btn-primary-bg)",
              border: "var(--btn-ghost-border)",
              borderRadius: 2,
              textDecoration: "none",
              whiteSpace: "nowrap",
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

        <div className="hero-brand" style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", gap: 20, marginBottom: 16 }}>
          <QPlanLogo size={80} />
          <span
            className="hero-brand-text"
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
          The complete planning intelligence platform — from site screening
          and constraint analysis to feasibility appraisals, planning statements,
          and professional reports. Powered by 30+ government data integrations.
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

        {/* Step 1 — Conversational Briefing */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>01</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                Brief through conversation
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                No forms. Chat naturally with a planning-specialist assistant that captures your site address, proposal type, and development intent. It extracts entities, triggers planning history lookups, and builds your project brief in real time.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <MockupTile variant="chat" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 2 — Constraint Map */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <MockupTile variant="map" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>02</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                30+ constraint layers, mapped instantly
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                The pipeline queries 30+ government data sources in parallel — flood zones, Green Belt, conservation areas, listed buildings, SSSI, ancient woodland, mining risk, heritage at risk, and more. Vector tiles from planning.data.gov.uk, plus Environment Agency, Natural England, Historic England, and Coal Authority adapters. Every constraint overlaid on an interactive map with toggleable layers.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 3 — Assessment Results */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>03</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                Risk verdict with full breakdown
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                Every assessment delivers a professional risk score, constraint count, estimated survey costs, and a clear go/no-go verdict. Heritage screening, BNG compliance, grey belt eligibility (NPPF Dec 2024), and 7-dimension risk scoring run automatically through specialist agents.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <MockupTile variant="risk" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 4 — Professional Reports */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <MockupTile variant="report" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>04</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                Professional branded reports
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                Export to branded Word (.docx), PDF, or Excel with auto-generated table of contents, numbered sections, policy citations, compliance matrices, heritage and BNG appendices, and colour-coded scoring. Client-ready from day one.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 5 — Bulk Upload & Policy Library */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>05</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.2 }}>
                Bulk screening &amp; policy library
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>
                Upload CSV, Excel, JSON, or plain text files to batch-assess up to 500 sites at once with progress tracking. Browse indexed planning policies across 50 local authority configurations with semantic search.
              </p>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
              <ScrollReveal delay={0}>
                <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                  <MockupTile variant="bulk" />
                  <div style={{ padding: "14px 20px" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Bulk Upload</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "var(--text-secondary)" }}>Batch-assess up to 100 sites via CSV</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                  <MockupTile variant="policy" />
                  <div style={{ padding: "14px 20px" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Policy Library</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "var(--text-secondary)" }}>Browse indexed policies by LPA</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Step 6 — Dashboard */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>06</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.2 }}>
                Your command centre
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>
                Track every assessment from one dashboard. Three assessment types — Site Screen, Feasibility, and Full Viability — with project stats, quick-launch tools, bulk upload, and your top LPA at a glance. Manage, archive, and share reports across your team.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)", maxWidth: 1000, margin: "0 auto" }}>
                <MockupTile variant="dashboard" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 7 — Feasibility Appraisal */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>07</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                Financial feasibility appraisal
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                RICS-aligned residual appraisal with multi-option financial modelling. GDV calculation, BCIS build costs, CIL liability, SDLT, disposal costs, bridging finance, and profit-on-cost analysis across development scenarios — with sensitivity testing and Excel export.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <MockupTile variant="feasibility" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Step 8 — Full Viability Assessment (FVA) */}
        <div className="walkthrough-panel" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
            <ScrollReveal>
              <div className="glass-card" style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                <MockupTile variant="fva" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, color: "var(--accent-cyan)", letterSpacing: "0.05em", marginBottom: 16 }}>08</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: "var(--text-primary)", marginBottom: 16, lineHeight: 1.2 }}>
                Full Viability Assessment
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                RICS-aligned residual method per RICS <em>Valuation of Development Property</em> and <em>Financial Viability in Planning</em>. GDV from Land Registry comparables, BCIS build costs, residual land value calculation, and a clear viable/marginal/unviable verdict — plus recommended surveys with indicative costs.
              </p>
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
              desc: "The pipeline queries 30+ government datasets — flood zones, green belt, conservation areas, listed buildings, and more.",
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
        <ScrollReveal>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent-cyan)", marginBottom: 12, textAlign: "center" }}>
            Platform
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 32,
              letterSpacing: -0.5,
              color: "var(--text-primary)",
              textAlign: "center",
              margin: "0 0 12px 0",
            }}
          >
            Everything you need, one platform
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-secondary)", textAlign: "center", maxWidth: 560, margin: "0 auto 56px", lineHeight: 1.6 }}>
            Site screening, feasibility appraisals, planning statements, and professional exports — all from a single postcode.
          </p>
        </ScrollReveal>
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { tag: "Screening", title: "30+ Automated Constraint Checks", desc: "Green Belt, flood zones, heritage, SSSI, TPOs, archaeological sites, contaminated land, minerals safeguarding, heritage at risk, irreplaceable habitat, and more — queried simultaneously from government datasets." },
            { tag: "Intelligence", title: "NPPF & Local Policy Analysis", desc: "Semantic search across 180+ NPPF paragraphs and per-LPA local plan policies using RAG retrieval. Every constraint is interpreted against current policy." },
            { tag: "Appraisal", title: "Multi-Option Feasibility Engine", desc: "Full developer appraisals with GDV calculation, BCIS build costs, CIL liability, SDLT, bridging finance, and profit-on-cost analysis across 3 development options." },
            { tag: "Scoring", title: "15-Dimension Excellence Scoring", desc: "Every assessment graded across legal framework, NPPF coverage, design quality, heritage, biodiversity, climate, and more. Exemplary to Inadequate ratings." },
            { tag: "Risk", title: "Heritage, BNG & Appeal Scoring", desc: "Specialist screening agents for heritage impact, biodiversity net gain compliance, and 7-dimension risk scoring with appeal outcome predictions." },
            { tag: "Data", title: "Planning History & Comparables", desc: "Live planning history from council portals via PlanIt API, comparable decision analysis, approval rates, and Land Registry price-paid evidence." },
            { tag: "Finance", title: "Sensitivity & Viability Analysis", desc: "Residual land valuation, ±10% scenario modelling, IRR calculations, affordable housing viability thresholds, and maximum acquisition pricing." },
            { tag: "Export", title: "Professional Report Exports", desc: "Branded Word (.docx), PDF, and Excel exports with compliance matrices, policy citations, risk appendices, and auto-generated table of contents." },
            { tag: "Workflow", title: "Conversational Briefing Interface", desc: "Natural language intake with a planning-specialist chat assistant. Live sidebar captures site data as you brief — no forms, no friction." },
            { tag: "Policy", title: "Grey Belt Screening", desc: "NPPF December 2024 grey belt eligibility assessment. Identifies previously developed land within Green Belt boundaries and applies the updated policy framework for potential release." },
            { tag: "Coverage", title: "50 LPA Configurations", desc: "Per-authority local plan policies, affordable housing thresholds, CIL rates, density guidelines, and parking standards. Coverage map shows which authorities are live." },
            { tag: "Samples", title: "Real-World Sample Reports", desc: "Seven sample scenarios across the full risk spectrum — from green-light brownfield to red-flag floodplain, plus three feasibility appraisals. See exactly what you get before you buy." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 60}>
              <div className="glass-card" style={{ padding: "28px 24px", height: "100%" }}>
                <span style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent-cyan)", background: "var(--accent-cyan-glow)", padding: "3px 10px", borderRadius: 20, marginBottom: 14 }}>
                  {item.tag}
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
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Social Proof / Stats ─── */}
      <section style={{ padding: "100px 24px", maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "var(--text-muted)", textAlign: "center", marginBottom: 40, letterSpacing: "0.02em" }}>
          Built for planning professionals across the UK
        </p>
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { value: "30+", label: "Government Data Integrations" },
            { value: "180+", label: "NPPF Paragraphs Indexed" },
            { value: "50", label: "LPA Configurations" },
            { value: "15", label: "Excellence Scoring Dimensions" },
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
            The complete planning intelligence platform for UK property professionals
          </p>
        </div>

        {/* Mission */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: 16 }}>
            Our Mission
          </div>
          <div className="glass-card" style={{ padding: 32 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 16 }}>
              Q Plan is a full-stack planning intelligence platform that takes property professionals from initial site screening through to feasibility appraisals and professional reports. By combining 30+ government data integrations, semantic policy retrieval, specialist screening agents, and multi-option financial modelling, Q Plan delivers in minutes what currently takes days of manual research.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text-body)", lineHeight: 1.75 }}>
              Our goal is to raise the quality floor for every planning assessment in England — from householder extensions to large-scale major developments — by making professional-grade constraint analysis, viability modelling, and policy interpretation accessible to practices of every size.
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
              Q Plan uses a multi-agent computational architecture with parallel execution, purpose-built for UK planning applications. Specialist agents for heritage screening, biodiversity net gain, risk assessment, and policy analysis run concurrently — combining deterministic data checks with LLM-powered interpretation. The feasibility engine layers financial modelling on top, producing multi-option appraisals aligned to RICS standards.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { n: "1", title: "Site Intake", desc: "Conversational briefing captures address, proposal type, and site details" },
                { n: "2", title: "Constraint Screening", desc: "30+ parallel checks across planning.data.gov.uk, EA, Historic England, Natural England, and Coal Authority" },
                { n: "3", title: "Policy Retrieval", desc: "RAG search across 180+ NPPF paragraphs and local plan policies via ChromaDB" },
                { n: "4", title: "Specialist Agents", desc: "Heritage, BNG, and risk agents run in parallel with deterministic + LLM screening" },
                { n: "5", title: "Feasibility Appraisal", desc: "Multi-option financial modelling with GDV, build costs, CIL, and sensitivity analysis" },
                { n: "6", title: "Professional Export", desc: "Branded Word, PDF, and Excel reports with policy citations and compliance matrices" },
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
            What&apos;s coming next
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
            The platform is growing fast. Here&apos;s what we&apos;re building next.
          </p>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {[
            {
              title: "Planning Statement Generation",
              description: "Automated 7–11 section planning statements tailored to application type — from householder to major. Professional-grade documents with NPPF and local policy citations.",
              tag: "Now Live",
            },
            {
              title: "Bulk Portfolio Screening",
              description: "Upload CSV, Excel, or JSON to batch-assess up to 500 sites at once. Rank by development potential and constraint severity with progress tracking.",
              tag: "Now Live",
            },
            {
              title: "Appeal Statement Generator",
              description: "Planning Inspectorate precedent mapping, inspector concern addressing, and comparable appeal outcome analysis for strategic mitigation.",
              tag: "Coming Soon",
            },
            {
              title: "Constraint Change Alerts",
              description: "Get notified when policy changes, new designations, or emerging constraints affect your saved sites.",
              tag: "Coming Soon",
            },
            {
              title: "Wales, Scotland & NI Coverage",
              description: "Extending constraint screening and policy analysis beyond England as devolved government data sources become available.",
              tag: "Expansion",
            },
            {
              title: "Pre-Application Engagement Tracker",
              description: "Log LPA advice, consultation responses, and track how pre-app recommendations have been addressed in your submission.",
              tag: "Coming Soon",
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
                    color: feature.tag === "Now Live" ? "#16a34a" : feature.tag === "Coming Soon" ? "var(--accent)" : "var(--accent-cyan)",
                    background: feature.tag === "Now Live" ? "rgba(22,163,74,0.1)" : feature.tag === "Coming Soon" ? "rgba(184,107,62,0.1)" : "var(--accent-cyan-glow)",
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
            question="What does QPlan actually do?"
            answer="QPlan is a complete planning intelligence platform. It screens sites against 30+ government data sources, analyses constraints against NPPF and local plan policy, runs specialist heritage and biodiversity screening, generates multi-option feasibility appraisals with full financial modelling, and exports professional branded reports — all from a single postcode."
          />
          <FaqItem
            question="How accurate are the constraint checks?"
            answer="QPlan sources data directly from authoritative government datasets including planning.data.gov.uk, Historic England, the Environment Agency, Natural England, the Coal Authority, and Land Registry. The constraint data is as accurate as the underlying government records — we do not estimate or interpolate."
          />
          <FaqItem
            question="What is the feasibility appraisal?"
            answer="The feasibility engine generates 3 development options per site with full financial modelling — GDV calculation using regional Land Registry rates, BCIS build costs, professional fees, CIL liability, SDLT, bridging finance, and profit-on-cost analysis. It includes ±10% sensitivity analysis and residual land valuation aligned to RICS standards."
          />
          <FaqItem
            question="What is the 15-dimension excellence scoring?"
            answer="Every assessment is graded across 15 dimensions including legal framework, NPPF coverage, local plan coverage, design quality, heritage, biodiversity net gain, climate and sustainability, and planning balance. Scores range from Exemplary (38–45 points) to Inadequate (below 20), with adaptive scoring that excludes irrelevant dimensions."
          />
          <FaqItem
            question="How does the conversational briefing work?"
            answer="Instead of filling in forms, you chat naturally with a planning-specialist assistant. It captures your site address, proposal type, constraints, and development intent through conversation — extracting entities, triggering planning history lookups, and building your project brief in real time via a live sidebar."
          />
          <FaqItem
            question="What data sources does QPlan integrate with?"
            answer="30+ integrations including planning.data.gov.uk (32 datasets), Environment Agency flood maps and contaminated land, Historic England listings and heritage at risk, Natural England SSSI and ancient woodland, Coal Authority mining risk, Land Registry price-paid data, EPC register, BCIS build cost indices, MHCLG land values, and live council planning portals via PlanIt API."
          />
          <FaqItem
            question="What export formats are available?"
            answer="QPlan generates branded Word (.docx) documents with auto-generated table of contents, numbered sections, compliance matrices, and appendices. PDF and Excel exports are also available. All reports include policy citations, confidence indicators, and colour-coded scoring."
          />
          <FaqItem
            question="Can I use QPlan for sites anywhere in England?"
            answer="Yes. QPlan currently has 50 local planning authority configurations across England, each with local plan policies, affordable housing thresholds, CIL rates, density guidelines, and parking standards. New LPAs are being added regularly. Coverage for Wales, Scotland, and Northern Ireland is on our roadmap."
          />
          <FaqItem
            question="Is QPlan a replacement for a planning consultant?"
            answer="No. QPlan is a professional-grade intelligence tool designed to complement expert advice. It helps consultants, developers, and landowners make faster, better-informed decisions — reducing abortive applications and wasted spend while raising the quality floor for every submission."
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
          Site screening, feasibility appraisals, and professional reports — all from a single postcode
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
