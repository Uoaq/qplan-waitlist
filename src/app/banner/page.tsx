export default function BannerPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #0F1923 0%, #162231 50%, #0F1923 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 80px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.06) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent glow - top right (cyan) */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -60,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Accent glow - bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: 100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Right-aligned content block */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "right" }}>
        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "flex-end", marginBottom: 16 }}>
          {/* QPlan Logo */}
          <svg viewBox="0 0 120 120" fill="none" width={36} height={36}>
            <path
              d="M 88 78 A 36 36 0 1 0 68 92"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <line
              x1="68"
              y1="92"
              x2="96"
              y2="112"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <polyline
              points="82,65 88,78 100,72"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="96" cy="112" r="7" fill="#22D3EE" />
          </svg>
          <span style={{ fontWeight: 800, fontSize: 36, letterSpacing: "-0.02em", color: "#F1F5F9" }}>
            Plan<span style={{ color: "#22D3EE" }}>.</span>
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#F1F5F9",
            lineHeight: 1.35,
            marginBottom: 20,
          }}
        >
          Data-driven planning intelligence
          <br />
          for UK property professionals
        </p>

        <p
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "rgba(148,163,184,0.5)",
            letterSpacing: "0.02em",
          }}
        >
          qplan.co.uk
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, rgba(34,211,238,0.1) 0%, rgba(34,211,238,0.4) 50%, rgba(34,211,238,0.1) 100%)",
        }}
      />
    </div>
  );
}
