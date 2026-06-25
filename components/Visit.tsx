import { MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/lib/site";

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Visit() {
  return (
    <section id="visit" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm font-600 uppercase tracking-widest text-blaze-600">
            Visit the Shop
          </p>
          <h2 className="mt-3 font-display text-4xl font-700 uppercase tracking-tight text-stone-850 sm:text-5xl">
            Stop by or give us a call
          </h2>

          <div className="mt-8 space-y-5">
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-lg border border-sand-200 bg-white p-5 shadow-card transition-colors hover:border-blaze-400"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blaze-600" />
              <div>
                <p className="font-semibold text-stone-850">Address</p>
                <p className="text-stone-750">{site.address}</p>
                <p className="mt-1 text-sm font-semibold text-blaze-600">
                  Get directions →
                </p>
              </div>
            </a>

            <a
              href={site.phoneHref}
              className="flex items-start gap-4 rounded-lg border border-sand-200 bg-white p-5 shadow-card transition-colors hover:border-blaze-400"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blaze-600" />
              <div>
                <p className="font-semibold text-stone-850">Phone</p>
                <p className="text-stone-750">{site.phone}</p>
                <p className="mt-1 text-sm font-semibold text-blaze-600">
                  Tap to call →
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-sand-200 bg-white p-7 shadow-card">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blaze-600" />
            <h3 className="font-display text-xl font-600 uppercase tracking-wide text-stone-850">
              Hours
            </h3>
          </div>
          <ul className="mt-5 divide-y divide-sand-200">
            {site.hours.map((h) => {
              const isToday = h.day === today;
              return (
                <li
                  key={h.day}
                  className={`flex items-center justify-between py-3 text-[15px] ${
                    isToday ? "font-semibold text-blaze-700" : "text-stone-750"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {h.day}
                    {isToday && (
                      <span className="rounded-full bg-blaze-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blaze-600">
                        Today
                      </span>
                    )}
                  </span>
                  <span>{h.time}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
