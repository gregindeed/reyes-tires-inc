export default function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c0a07" />
          <stop offset="55%" stopColor="#140d09" />
          <stop offset="100%" stopColor="#1d130d" />
        </linearGradient>
        <radialGradient id="hs-glow" cx="52%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#ffb678" stopOpacity="0.95" />
          <stop offset="22%" stopColor="#f4612a" stopOpacity="0.6" />
          <stop offset="48%" stopColor="#dd4d1b" stopOpacity="0.28" />
          <stop offset="74%" stopColor="#dd4d1b" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#dd4d1b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hs-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe0bd" />
          <stop offset="42%" stopColor="#ffa552" />
          <stop offset="78%" stopColor="#f4612a" />
          <stop offset="100%" stopColor="#f4612a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="760" fill="url(#hs-sky)" />
      <rect width="1440" height="760" fill="url(#hs-glow)" />

      {/* sunburst rays */}
      <g opacity="0.10" fill="#f4612a">
        <g transform="translate(750,456)">
          <polygon points="0,0 -900,-120 -900,120" />
          <polygon points="0,0 900,-120 900,120" />
          <polygon points="0,0 -120,-900 120,-900" />
          <polygon points="0,0 -640,-680 -470,-790" />
          <polygon points="0,0 640,-680 470,-790" />
        </g>
      </g>

      {/* sun */}
      <circle cx="750" cy="456" r="150" fill="url(#hs-sun)" />

      {/* far ridge */}
      <path
        d="M0,548 L180,512 L360,540 L520,500 L700,536 L900,498 L1100,540 L1280,510 L1440,544 L1440,760 L0,760 Z"
        fill="#16100b"
      />
      {/* near ridge */}
      <path
        d="M0,604 L240,576 L470,602 L680,572 L900,606 L1160,574 L1440,602 L1440,760 L0,760 Z"
        fill="#0c0907"
      />

      {/* lifted truck silhouette (backlit) */}
      <g fill="#070504">
        <rect x="744" y="420" width="74" height="9" fill="#ffcf4a" />
        <polygon points="600,540 600,492 700,492 700,450 740,432 820,432 846,466 905,472 922,500 922,540" />
        <rect x="648" y="540" width="34" height="56" />
        <rect x="838" y="540" width="34" height="56" />
        <circle cx="665" cy="600" r="48" />
        <circle cx="855" cy="600" r="48" />
        <circle cx="665" cy="600" r="20" fill="#020100" />
        <circle cx="855" cy="600" r="20" fill="#020100" />
      </g>

      {/* dust */}
      <g fill="#f4d9b8">
        <circle cx="430" cy="470" r="2" opacity="0.5" />
        <circle cx="520" cy="520" r="1.5" opacity="0.4" />
        <circle cx="1010" cy="440" r="2" opacity="0.5" />
        <circle cx="1080" cy="520" r="1.5" opacity="0.35" />
        <circle cx="980" cy="560" r="2.5" opacity="0.3" />
        <circle cx="360" cy="540" r="2" opacity="0.35" />
        <circle cx="1180" cy="480" r="1.5" opacity="0.4" />
      </g>
    </svg>
  );
}
