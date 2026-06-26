import { Mountain, Wrench, Gauge, CircleGauge, ArrowRight } from "lucide-react";

const stages = [
  {
    no: "01",
    icon: Mountain,
    title: "Suspension & Long-Travel",
    desc: "Lifts, leveling, shocks and struts tuned for the street or the dirt. We set the height and the ride — not just one or the other.",
  },
  {
    no: "02",
    icon: CircleGauge,
    title: "Wheels & Tires",
    desc: "Staggered fitment, mud-terrains to street performance, mounted and balanced. Clean fitment that clears the build.",
  },
  {
    no: "03",
    icon: Gauge,
    title: "Stance & Alignment",
    desc: "Geometry dialed after every lift so the truck tracks straight and drives as good as it looks.",
  },
  {
    no: "04",
    icon: Wrench,
    title: "Repairs & Upkeep",
    desc: "Brakes, maintenance, and honest repairs to keep the build running strong season after season.",
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
            <span className="display-italic inline-block text-blaze-500">
              Send it.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand-200/85">
            Bring us the truck and the vision. We&apos;ll build it from the
            ground up — suspension, wheels, stance, and the upkeep to keep it
            dialed. From a clean weekend daily to a desert-ready rig.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {stages.map((s) => (
            <div
              key={s.no}
              className="group relative overflow-hidden rounded-xl border border-sand-200/12 bg-sand-50/[0.04] p-7 transition-colors hover:border-blaze-500/50"
            >
              <span className="pointer-events-none absolute -right-2 -top-3 font-display text-7xl font-700 text-sand-50/[0.06] transition-colors group-hover:text-blaze-500/15">
                {s.no}
              </span>
              <s.icon className="h-8 w-8 text-blaze-500" />
              <h3 className="mt-5 font-display text-2xl font-700 uppercase tracking-wide text-sand-50">
                {s.title}
              </h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-sand-200/80">
                {s.desc}
              </p>
            </div>
          ))}
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
