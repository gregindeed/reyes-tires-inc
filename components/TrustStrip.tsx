"use client";

import { useState } from "react";

// "Brands We Install" strip.
// Drop logo files into /public/brands (e.g. bilstein.svg) and they appear
// automatically; until a file exists, the brand name shows as a wordmark.
type Brand = { name: string; logo: string };

const brands: Brand[] = [
  { name: "Bilstein", logo: "/brands/bilstein.svg" },
  { name: "Fox", logo: "/brands/fox.svg" },
  { name: "KING Shocks", logo: "/brands/king.svg" },
  { name: "ICON", logo: "/brands/icon.svg" },
  { name: "Rough Country", logo: "/brands/rough-country.svg" },
  { name: "Method Race Wheels", logo: "/brands/method.svg" },
  { name: "Fuel Off-Road", logo: "/brands/fuel.svg" },
  { name: "BFGoodrich", logo: "/brands/bfgoodrich.svg" },
  { name: "Nitto", logo: "/brands/nitto.svg" },
  { name: "Falken", logo: "/brands/falken.svg" },
  { name: "Toyo Tires", logo: "/brands/toyo.svg" },
];

function BrandItem({ b }: { b: Brand }) {
  const [broken, setBroken] = useState(false);
  return (
    <span className="flex items-center gap-10">
      {!broken ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={b.logo}
          alt={b.name}
          onError={() => setBroken(true)}
          className="h-7 w-auto opacity-80 brightness-0 invert"
        />
      ) : (
        <span className="font-display text-lg font-600 uppercase tracking-wide text-sand-200/80">
          {b.name}
        </span>
      )}
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-royal-500" />
    </span>
  );
}

export default function TrustStrip() {
  return (
    <div className="overflow-hidden border-b border-sand-200/10 bg-ink-950 py-5">
      <p className="container-x mb-3 text-center text-[11px] font-700 uppercase tracking-[0.25em] text-blaze-500">
        Brands We Carry &amp; Install
      </p>
      <div className="relative flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <BrandItem key={i} b={b} />
        ))}
      </div>
    </div>
  );
}
