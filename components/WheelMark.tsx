export default function WheelMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* tire */}
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="6" opacity="0.35" />
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      {/* tread ticks */}
      {[...Array(36)].map((_, i) => {
        const a = (i / 36) * Math.PI * 2;
        const x1 = 100 + Math.cos(a) * 80;
        const y1 = 100 + Math.sin(a) * 80;
        const x2 = 100 + Math.cos(a) * 90;
        const y2 = 100 + Math.sin(a) * 90;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="3"
            opacity="0.3"
          />
        );
      })}
      {/* rim */}
      <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="4" />
      <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="4" />
      {/* spokes */}
      {[...Array(6)].map((_, i) => {
        const a = (i / 6) * Math.PI * 2;
        const x1 = 100 + Math.cos(a) * 20;
        const y1 = 100 + Math.sin(a) * 20;
        const x2 = 100 + Math.cos(a) * 56;
        const y2 = 100 + Math.sin(a) * 56;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="100" cy="100" r="6" fill="currentColor" />
    </svg>
  );
}
