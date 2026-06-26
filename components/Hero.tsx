import { Star, MapPin, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import HeroQuickForm from "./HeroQuickForm";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-center overflow-hidden bg-ink-900 lg:min-h-[720px]"
    >
      {/* backlit desert / lifted-truck scene — fallback until the photo loads */}
      <HeroScene className="absolute inset-0 h-full w-full" />
      {/* hero photo (public/hero.jpg). If absent, the SVG scene shows through. */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-grain opacity-[0.07]" />
      {/* cinematic darken + legibility gradients (lighter — let the photo show) */}
      <div className="absolute inset-0 bg-ink-950/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/45 via-transparent to-ink-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/20 to-transparent" />
      {/* top blaze rule */}
      <div className="absolute inset-x-0 top-0 z-10 h-1 bg-blaze-500" />

      <div className="container-x relative z-10 grid w-full gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="clip-slash bg-blaze-500 px-3.5 py-1 text-xs font-700 uppercase tracking-widest text-ink-950">
              Full Truck Build Shop
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-sand-200/80">
              Spring Valley, CA
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-700 uppercase leading-[0.9] tracking-tight text-sand-50 text-balance sm:text-6xl lg:text-7xl">
            From Daily Driver to{" "}
            <span className="display-italic inline-block text-blaze-500">
              Desert-Ready
            </span>
          </h1>
          <span className="speed-bar mt-5 w-28" />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-200/90">
            Reyes Tires Inc is Spring Valley&apos;s full truck build shop —
            lifts and long-travel suspension, aftermarket wheels and tires,
            brakes, alignment, repairs and maintenance. Trophy-truck attitude,
            honest neighborhood pricing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-md bg-blaze-500 px-6 py-3.5 font-700 uppercase tracking-wide text-ink-950 shadow-blaze transition-colors hover:bg-blaze-400"
            >
              Start Your Build
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-sand-200/25 px-6 py-3.5 font-semibold text-sand-50 transition-colors hover:bg-sand-50/5"
            >
              <MapPin className="h-4 w-4 text-blaze-400" />
              Get Directions
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-sand-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-blaze-500 text-blaze-500"
                />
              ))}
            </div>
            <span className="text-sm font-medium">
              <strong className="text-sand-50">{site.rating}</strong> from{" "}
              {site.reviewCount} Google reviews
            </span>
          </div>
        </div>

        <div className="relative">
          <HeroQuickForm />
        </div>
      </div>
    </section>
  );
}
