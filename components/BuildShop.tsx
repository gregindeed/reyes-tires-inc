"use client";

import { useState } from "react";
import { Mountain, Wrench, Gauge, CircleGauge, ArrowRight } from "lucide-react";

const stages = [
  {
    no: "01",
    icon: Mountain,
    title: "Suspension & Long-Travel",
    desc: "Lifts, leveling, shocks and struts tuned for the street or the dirt. We set the height and the ride — not just one or the other.",
    img: "/builds/build1.jpg",
  },
  {
    no: "02",
    icon: CircleGauge,
    title: "Wheels & Tires",
    desc: "Staggered fitment, mud-terrains to street performance, mounted and balanced. Clean fitment that clears the build.",
    img: "/builds/build2.jpg",
  },
  {
    no: "03",
    icon: Gauge,
    title: "Stance & Alignment",
    desc: "Geometry dialed after every lift so the truck tracks straight and drives as good as it looks.",
    img: "/builds/build3.jpg",
  },
  {
    no: "04",
    icon: Wrench,
    title: "Repairs & Upkeep",
    desc: "Brakes, maintenance, and honest repairs to keep the build running strong season after season.",
    img: "/builds/build4.jpg",
  },
];

const marquee = [
  "Lift Kits",
  "Long-Travel",
  "Leveling",
  "Off-Road Wheels",
  "Mud-Terrains",
  "Brakes",
  "Alignment",
  "Daily-Driver Builds",
  "Desert-Ready",
];

export default function BuildShop() {
  const [active, setActive] = useState(0);

  return (
    <section id="builds" className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-grain opacity-[0.07]" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-stripes opacity-30 [mask-image:linear-gradient(to_right,black,transparent)]" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="clip-slash inline-block bg-blaze-500 px-3.5 py-1 text-xs font-700 uppercase tracking-widest text-white">
            The Build Shop
          </span>
          <h2 className="mt-5 font-display text-4xl font-700 uppercase leading-[0.95] tracking-tight text-sand-50 sm:text-5xl">
            Spec it. Build it.{" "}
            <span className="display-italic inline-block text-blaze-500">Send it.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand-200/85">
            Bring us the truck and the vision. We&apos;ll build it from the
            ground up — suspension, wheels, stance, and the upkeep to keep it
            dialed. Tap a panel to take a closer look.
          </p>
        </div>

        {/* expanding image panels */}
        <div className="mt-12 flex h-[560px] flex-col gap-2.5 lg:h-[520px] lg:flex-row">
          {stages.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.no}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-expanded={isActive}
                style={{ flexGrow: isActive ? 6 : 1 }}
                className={`group relative min-h-0 min-w-0 overflow-hidden rounded-xl border text-left transition-[flex-grow,border-color] duration-500 ease-out ${
                  isActive ? "border-blaze-500/60" : "border-sand-200/10"
                }`}
              >
                {/* image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                    isActive ? "scale-100 grayscale-0" : "scale-105 grayscale"
                  }`}
                />
                {/* overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10"
                      : "bg-ink-950/65"
                  }`}
                />

                {/* number watermark */}
                <span className="pointer-events-none absolute right-3 top-2 font-display text-6xl font-700 text-sand-50/15">
                  {s.no}
                </span>

                {/* content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <s.icon
                    className={`h-7 w-7 text-blaze-500 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-80"
                    }`}
                  />
                  <h3
                    className={`mt-3 font-display font-700 uppercase tracking-wide text-sand-50 transition-all duration-300 ${
                      isActive ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`max-w-md text-[15px] leading-relaxed text-sand-200/85 transition-all duration-300 ${
                      isActive
                        ? "mt-2 max-h-32 opacity-100"
                        : "pointer-events-none mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <a
          href="#quote"
          className="group mt-10 inline-flex items-center gap-2 rounded-md bg-blaze-500 px-7 py-3.5 font-700 uppercase tracking-wide text-white shadow-blaze transition-colors hover:bg-blaze-600"
        >
          Start Your Build
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* scrolling build-terms marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-sand-200/10 py-4">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-sm font-600 uppercase tracking-[0.2em] text-sand-200/60"
            >
              {m}
              <span className="h-1.5 w-1.5 rotate-45 bg-royal-500" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
