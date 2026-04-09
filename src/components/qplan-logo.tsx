export function QPlanLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
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
  );
}
