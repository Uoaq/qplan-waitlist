// The Q mark. Its form is a fixed brand asset; only the stroke colour may be
// set, so the mark can sit on paper as well as on the night.
export function QPlanLogo({
  size = 28,
  stroke = "white",
  className,
}: {
  size?: number;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Stroke order is the drawing order: the ring runs clockwise from where
          the handle joins it to the arrow tip, then the arrowhead, then the
          handle down to the location dot. pathLength=1 lets each stroke draw
          at its own pace in the load-up; it does not change the static mark. */}
      <path
        className="q-ring"
        d="M 68 92 A 36 36 0 1 1 88 78"
        pathLength={1}
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <line
        className="q-handle"
        pathLength={1}
        x1="68"
        y1="92"
        x2="96"
        y2="112"
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <polyline
        className="q-arrow"
        pathLength={1}
        points="82,65 88,78 100,72"
        stroke={stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle className="q-dot" cx="96" cy="112" r="7" fill="#22D3EE" />
    </svg>
  );
}

// The lock-up: the Q mark plus the "Plan." wordmark. With `load`, it draws
// itself once on arrival, the one motion moment on the page (thesis T8).
export function QPlanMark({
  size = 28,
  load = false,
  stroke = "var(--night-text)",
}: {
  size?: number;
  load?: boolean;
  stroke?: string;
}) {
  return (
    <span className={load ? "mark mark--load" : "mark"} role="img" aria-label="QPlan">
      {/* The Q's drawn edge starts about a sixth into its box (stroke included); pull it back so
          the mark lines up optically with the text beneath it. */}
      <span style={{ display: "inline-flex", marginLeft: -size * 0.16 }}>
        <QPlanLogo size={size} stroke={stroke} className="qmark" />
      </span>
      <span className="mark__word" style={{ fontSize: size * 0.82 }} aria-hidden="true">
        Plan<span className="mark__dot">.</span>
      </span>
    </span>
  );
}
