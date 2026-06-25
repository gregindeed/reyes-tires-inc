import { ShieldCheck, Clock4, HandCoins, Users } from "lucide-react";

const points = [
  {
    icon: HandCoins,
    stat: "Fair",
    label: "Honest pricing",
    desc: "Up-front quotes, no surprise add-ons.",
  },
  {
    icon: Clock4,
    stat: "Same-day",
    label: "Fast turnaround",
    desc: "Most tire & wheel jobs done while you wait.",
  },
  {
    icon: Users,
    stat: "289",
    label: "Happy reviews",
    desc: "A 4.6★ reputation built on repeat customers.",
  },
  {
    icon: ShieldCheck,
    stat: "Pro",
    label: "Done right",
    desc: "Proper torque, balance & alignment every time.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
      <div className="absolute inset-0 bg-grain opacity-[0.06]" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-700 uppercase tracking-widest text-blaze-500">
            Why Reyes
          </p>
          <h2 className="mt-3 font-display text-4xl font-700 uppercase tracking-tight text-sand-50 sm:text-5xl">
            Build-shop skill, neighborhood trust
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-sand-200/15 bg-sand-50/5 p-6"
            >
              <p.icon className="h-7 w-7 text-blaze-500" />
              <p className="mt-5 font-display text-3xl font-700 text-sand-50">
                {p.stat}
              </p>
              <p className="mt-1 font-display text-sm font-600 uppercase tracking-wide text-sand-200">
                {p.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-sand-200/80">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
