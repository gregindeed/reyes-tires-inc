import {
  ArrowUpFromLine,
  CircleDot,
  Disc3,
  Gauge,
  Wrench,
  Octagon,
} from "lucide-react";

const services = [
  {
    icon: CircleDot,
    title: "New & Used Tires",
    desc: "Quality new tires and inspected used sets at fair prices. Mount, balance, and out the door same day.",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    desc: "Oil changes, diagnostics, and everyday repairs done honestly — we keep your vehicle running right, not just rolling.",
  },
  {
    icon: ArrowUpFromLine,
    title: "Lifts & Suspension",
    desc: "Lift and leveling kits, shocks, and struts installed right — clear bigger tires and get the stance and ride you want.",
  },
  {
    icon: Disc3,
    title: "Aftermarket Wheels",
    desc: "Huge selection of rims and custom wheel-and-tire packages. We'll dial in the perfect fitment for your ride.",
  },
  {
    icon: Octagon,
    title: "Brakes",
    desc: "Pads, rotors, and full brake service so you stop as confidently as you roll.",
  },
  {
    icon: Gauge,
    title: "Wheel Alignment",
    desc: "Precision alignment that saves your tires and keeps the truck tracking straight after a lift.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-700 uppercase tracking-widest text-blaze-600">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-700 uppercase tracking-tight text-stone-850 sm:text-5xl">
            Built for trucks, daily drivers &amp; everything between
          </h2>
          <p className="mt-4 text-lg text-stone-750">
            From a fresh set of tires to repairs, maintenance, and a full
            lift-and-suspension build, the Reyes crew handles it under one roof.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-sand-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-blaze-500/50"
            >
              <div className="clip-slash flex h-12 w-12 items-center justify-center bg-blaze-50 text-blaze-600 transition-colors group-hover:bg-blaze-500 group-hover:text-ink-950">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-600 uppercase tracking-wide text-stone-850">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-750">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
