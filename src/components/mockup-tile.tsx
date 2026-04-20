/**
 * Abstract CSS mockup tiles used in place of real app screenshots
 * on the landing page walkthrough. Each variant suggests WHAT a
 * feature does (map, report, dashboard…) without revealing HOW the
 * actual UI is laid out. Pure presentational component — no client
 * state or effects.
 */

type MockupVariant =
  | "chat"
  | "map"
  | "risk"
  | "report"
  | "bulk"
  | "policy"
  | "dashboard"
  | "feasibility"
  | "fva";

const COLOR_CYAN = "#22D3EE";
const COLOR_ORANGE = "#E8722A";
const COLOR_SURFACE = "#162231";
const COLOR_SURFACE_RAISED = "rgba(255,255,255,0.04)";
const COLOR_DIVIDER = "rgba(148,163,184,0.12)";
const COLOR_TEXT_MUTED = "rgba(148,163,184,0.22)";
const COLOR_TEXT_MUTED_STRONG = "rgba(148,163,184,0.45)";

const tileBase: React.CSSProperties = {
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 10",
  background: `linear-gradient(180deg, ${COLOR_SURFACE} 0%, #0F1923 100%)`,
  padding: "clamp(16px, 4%, 32px)",
  overflow: "hidden",
};

const skeletonLine = (width: string, opacity = 0.38): React.CSSProperties => ({
  height: 6,
  width,
  background: `rgba(203,213,225,${opacity})`,
  borderRadius: 3,
});

export function MockupTile({ variant }: { variant: MockupVariant }) {
  return <div style={tileBase}>{renderVariant(variant)}</div>;
}

function renderVariant(variant: MockupVariant) {
  switch (variant) {
    case "chat":
      return <ChatTile />;
    case "map":
      return <MapTile />;
    case "risk":
      return <RiskTile />;
    case "report":
      return <ReportTile />;
    case "bulk":
      return <BulkTile />;
    case "policy":
      return <PolicyTile />;
    case "dashboard":
      return <DashboardTile />;
    case "feasibility":
      return <FeasibilityTile />;
    case "fva":
      return <FVATile />;
  }
}

/* ─── 01 · Chat ─── */
function ChatTile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%", justifyContent: "center" }}>
      <Bubble align="left" widths={["70%", "55%"]} />
      <Bubble align="right" widths={["60%"]} accent />
      <Bubble align="left" widths={["85%", "70%", "50%"]} />
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderRadius: 999,
          background: COLOR_SURFACE_RAISED,
          border: `1px solid ${COLOR_DIVIDER}`,
        }}
      >
        <div style={skeletonLine("55%", 0.3)} />
        <div
          style={{
            width: 22,
            height: 22,
            marginLeft: "auto",
            borderRadius: "50%",
            background: COLOR_CYAN,
          }}
        />
      </div>
    </div>
  );
}

function Bubble({
  align,
  widths,
  accent = false,
}: {
  align: "left" | "right";
  widths: string[];
  accent?: boolean;
}) {
  return (
    <div style={{ display: "flex", justifyContent: align === "left" ? "flex-start" : "flex-end" }}>
      <div
        style={{
          width: "62%",
          padding: "10px 14px",
          borderRadius: 14,
          background: accent ? "rgba(34,211,238,0.1)" : "rgba(255,255,255,0.06)",
          border: `1px solid ${accent ? "rgba(34,211,238,0.3)" : "rgba(148,163,184,0.22)"}`,
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {widths.map((w, i) => (
          <div key={i} style={skeletonLine(w, accent ? 0.7 : 0.55)} />
        ))}
      </div>
    </div>
  );
}

/* ─── 02 · Map ─── */
function MapTile() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {/* layer toggles */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {["Flood", "Green Belt", "Conservation", "BNG"].map((label, i) => (
          <div
            key={label}
            style={{
              padding: "4px 12px",
              fontSize: 10,
              fontWeight: 600,
              borderRadius: 999,
              color: i === 0 ? COLOR_CYAN : COLOR_TEXT_MUTED_STRONG,
              background: i === 0 ? "rgba(34,211,238,0.1)" : "transparent",
              border: `1px solid ${i === 0 ? "rgba(34,211,238,0.3)" : COLOR_DIVIDER}`,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {label}
          </div>
        ))}
      </div>
      {/* Map body with dot grid + abstract zone shapes */}
      <div
        style={{
          position: "relative",
          height: "calc(100% - 36px)",
          borderRadius: 10,
          background:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.16) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          border: `1px solid ${COLOR_DIVIDER}`,
          overflow: "hidden",
        }}
      >
        {/* Cyan zone */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "12%",
            width: "42%",
            height: "55%",
            borderRadius: "46% 58% 40% 62% / 50% 42% 58% 50%",
            background: "rgba(34,211,238,0.16)",
            border: "1px solid rgba(34,211,238,0.35)",
          }}
        />
        {/* Orange zone */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "12%",
            width: "38%",
            height: "45%",
            borderRadius: "60% 40% 55% 45% / 52% 48% 60% 40%",
            background: "rgba(232,114,42,0.14)",
            border: "1px solid rgba(232,114,42,0.35)",
          }}
        />
        {/* Site pin */}
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: COLOR_CYAN,
            boxShadow: "0 0 0 4px rgba(34,211,238,0.25), 0 0 0 10px rgba(34,211,238,0.12)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── 03 · Risk verdict ─── */
function RiskTile() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 28, height: "100%" }}>
      {/* Donut gauge */}
      <div style={{ position: "relative", width: 140, height: 140, flexShrink: 0 }}>
        <svg viewBox="0 0 120 120" width="100%" height="100%">
          <circle cx="60" cy="60" r="50" fill="none" stroke={COLOR_DIVIDER} strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke={COLOR_ORANGE}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="220 314"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: "#F1F5F9" }}>62</div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: COLOR_ORANGE }}>
            AMBER
          </div>
        </div>
      </div>
      {/* Breakdown list */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          { color: "#22C55E" },
          { color: COLOR_ORANGE },
          { color: "#22C55E" },
          { color: "#EF4444" },
          { color: COLOR_CYAN },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: row.color, flexShrink: 0 }} />
            <div style={skeletonLine(`${85 - i * 10}%`, 0.28)} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 04 · Report ─── */
function ReportTile() {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <div
        style={{
          width: "58%",
          height: "100%",
          background: "#0B1420",
          border: `1px solid ${COLOR_DIVIDER}`,
          borderRadius: 6,
          padding: "18px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* doc header bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: COLOR_ORANGE }} />
          <div style={skeletonLine("35%", 0.45)} />
        </div>
        <div style={{ ...skeletonLine("72%", 0.35), height: 10 }} />
        <div style={{ height: 1, background: COLOR_DIVIDER, margin: "6px 0" }} />
        {/* body text lines */}
        {[90, 96, 82, 100, 88, 94, 78].map((w, i) => (
          <div key={i} style={skeletonLine(`${w}%`, 0.2)} />
        ))}
        {/* footer signature strip */}
        <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
          <div style={skeletonLine("40%", 0.3)} />
          <div style={{ ...skeletonLine("20%", 0.3), marginLeft: "auto" }} />
        </div>
      </div>
    </div>
  );
}

/* ─── 05a · Bulk upload ─── */
function BulkTile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <div style={{ width: 10, height: 10, borderRadius: 2, background: COLOR_CYAN }} />
        <div style={skeletonLine("30%", 0.4)} />
      </div>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 6,
            background: COLOR_SURFACE_RAISED,
            border: `1px solid ${COLOR_DIVIDER}`,
          }}
        >
          <div style={skeletonLine(`${60 - i * 6}%`, 0.3)} />
          <div
            style={{
              marginLeft: "auto",
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: i < 3 ? "rgba(34,197,94,0.18)" : COLOR_SURFACE_RAISED,
              border: `1px solid ${i < 3 ? "rgba(34,197,94,0.45)" : COLOR_DIVIDER}`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── 05b · Policy library ─── */
function PolicyTile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
      {/* search */}
      <div
        style={{
          padding: "10px 14px",
          borderRadius: 999,
          background: COLOR_SURFACE_RAISED,
          border: `1px solid ${COLOR_DIVIDER}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 6,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            border: `1.5px solid ${COLOR_TEXT_MUTED_STRONG}`,
          }}
        />
        <div style={skeletonLine("60%", 0.28)} />
      </div>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 4px",
            borderBottom: `1px solid ${COLOR_DIVIDER}`,
          }}
        >
          <div
            style={{
              width: 18,
              height: 12,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${COLOR_CYAN}, ${COLOR_ORANGE})`,
              opacity: 0.6,
              flexShrink: 0,
            }}
          />
          <div style={skeletonLine(`${70 - i * 8}%`, 0.3)} />
          <div style={{ ...skeletonLine("15%", 0.22), marginLeft: "auto" }} />
        </div>
      ))}
    </div>
  );
}

/* ─── 06 · Dashboard ─── */
function DashboardTile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
      <div style={{ display: "flex", gap: 12 }}>
        {[
          { label: "Assessments", color: COLOR_CYAN },
          { label: "Feasibility", color: COLOR_ORANGE },
          { label: "Viability", color: "#A78BFA" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            style={{
              flex: 1,
              padding: "14px 14px",
              borderRadius: 10,
              background: COLOR_SURFACE_RAISED,
              border: `1px solid ${COLOR_DIVIDER}`,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ ...skeletonLine("55%", 0.35), height: 4 }} />
            <div style={{ height: 18, width: "40%", background: kpi.color, borderRadius: 2, opacity: 0.9 }} />
          </div>
        ))}
      </div>
      <div
        style={{
          flex: 1,
          borderRadius: 10,
          background: COLOR_SURFACE_RAISED,
          border: `1px solid ${COLOR_DIVIDER}`,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={skeletonLine("35%", 0.4)} />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={skeletonLine(`${45 - i * 4}%`, 0.22)} />
            <div style={{ ...skeletonLine("10%", 0.18), marginLeft: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 07 · Feasibility ─── */
function FeasibilityTile() {
  const bars = [62, 84, 48, 92, 70, 58];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
      <div style={{ display: "flex", gap: 10 }}>
        {[{ l: "GDV" }, { l: "Profit" }, { l: "RLV" }].map((chip) => (
          <div
            key={chip.l}
            style={{
              padding: "5px 10px",
              fontSize: 10,
              fontWeight: 600,
              borderRadius: 4,
              fontFamily: "'Inter', sans-serif",
              background: "rgba(34,211,238,0.08)",
              color: COLOR_CYAN,
              border: "1px solid rgba(34,211,238,0.25)",
            }}
          >
            {chip.l}
          </div>
        ))}
        <div style={{ marginLeft: "auto", ...skeletonLine("80px", 0.28) }} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 12,
          padding: "0 6px 6px",
          borderBottom: `1px solid ${COLOR_DIVIDER}`,
        }}
      >
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background:
                i % 2 === 0
                  ? `linear-gradient(180deg, ${COLOR_CYAN}, rgba(34,211,238,0.25))`
                  : `linear-gradient(180deg, ${COLOR_ORANGE}, rgba(232,114,42,0.25))`,
              borderRadius: "3px 3px 0 0",
              opacity: 0.85,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── 08 · Full Viability (FVA) ─── */
function FVATile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <div
          style={{
            padding: "4px 10px",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            borderRadius: 999,
            background: "rgba(34,197,94,0.15)",
            color: "#22C55E",
            border: "1px solid rgba(34,197,94,0.4)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          VIABLE
        </div>
        <div style={{ ...skeletonLine("40%", 0.3) }} />
      </div>
      {/* Residual waterfall */}
      {[
        { label: 96, color: COLOR_CYAN },
        { label: 74, color: COLOR_ORANGE },
        { label: 58, color: COLOR_ORANGE },
        { label: 42, color: "#A78BFA" },
        { label: 28, color: "#22C55E" },
      ].map((row, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ ...skeletonLine("22%", 0.3) }} />
          <div style={{ flex: 1, position: "relative", height: 14 }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: `${row.label}%`,
                borderRadius: 3,
                background: row.color,
                opacity: 0.75,
              }}
            />
          </div>
          <div style={{ width: 40, ...skeletonLine("100%", 0.28) }} />
        </div>
      ))}
    </div>
  );
}
