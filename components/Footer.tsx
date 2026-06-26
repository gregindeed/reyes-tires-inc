import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  Star,
  Facebook,
  Instagram,
} from "lucide-react";
import { site } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.927zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const services = [
  { label: "Lifts & Suspension", href: "#services" },
  { label: "Aftermarket Wheels", href: "#services" },
  { label: "New & Used Tires", href: "#services" },
  { label: "Wheel & Tire Packages", href: "#builds" },
  { label: "Brakes & Alignment", href: "#services" },
  { label: "Repairs & Maintenance", href: "#services" },
];

const explore = [
  { label: "Builds", href: "#builds" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Directions", href: site.mapsHref },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-sand-200">
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-stripes opacity-20 [mask-image:linear-gradient(to_left,black,transparent)] lg:block" />
      <div className="absolute inset-x-0 top-0 h-1 bg-blaze-500" />

      {/* CTA band */}
      <div className="relative border-b border-sand-200/10">
        <div className="container-x flex flex-col items-start justify-between gap-5 py-10 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl font-700 uppercase leading-none tracking-tight text-sand-50 sm:text-4xl">
              Ready to build your rig?
            </h2>
            <p className="mt-2 text-sand-200/80">
              Free quotes, honest pricing, trophy-truck attitude.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-md bg-blaze-500 px-6 py-3 font-700 uppercase tracking-wide text-white shadow-blaze transition-colors hover:bg-blaze-600"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-700 uppercase tracking-wide text-ink-950 transition-colors hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* brand + map */}
      <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[5fr_7fr] lg:items-center">
        <div>
          {/* slanted banner logo */}
          <div className="relative inline-flex items-center">
            <span className="absolute inset-0 -skew-x-[14deg] bg-stone-850" />
            <span className="relative z-10 flex flex-col px-5 py-1.5 leading-none">
              <span className="font-display text-2xl font-700 italic uppercase tracking-tight text-sand-50">
                Reyes Tires
              </span>
              <span className="mt-1 text-[9px] font-600 italic uppercase tracking-[0.32em] text-royal-400">
                We Perform Better
              </span>
            </span>
          </div>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-sand-200/70">
            Spring Valley&apos;s full truck build shop — lifts and suspension,
            aftermarket wheels and tires, brakes, alignment, repairs and
            maintenance. From daily driver to desert-ready.
          </p>

          {/* Google reviews badge */}
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-lg border border-sand-200/12 bg-sand-50/[0.04] px-4 py-2.5 transition-colors hover:border-blaze-500/40"
          >
            <span className="font-display text-2xl font-700 text-sand-50">
              {site.rating}
            </span>
            <span>
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-blaze-500 text-blaze-500" />
                ))}
              </span>
              <span className="text-xs text-sand-200/70">
                {site.reviewCount} Google reviews
              </span>
            </span>
          </a>

          {/* social */}
          {(site.social.facebook || site.social.instagram) && (
            <div className="mt-6 flex items-center gap-3">
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-sand-200/15 text-sand-200 transition-colors hover:border-blaze-500/50 hover:text-blaze-500"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-sand-200/15 text-sand-200 transition-colors hover:border-blaze-500/50 hover:text-blaze-500"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* map */}
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-xl border border-sand-200/12 ring-1 ring-inset ring-black/20 transition-colors hover:border-blaze-500/40"
        >
          <iframe
            src={site.mapEmbed}
            title="Reyes Tires Inc location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="pointer-events-none h-56 w-full lg:h-64"
          />
        </a>
      </div>

      {/* link columns */}
      <div className="container-x relative grid gap-10 border-t border-sand-200/10 py-12 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-widest text-blaze-500">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-sand-200/75 transition-colors hover:text-sand-50">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-widest text-blaze-500">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {explore.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sand-200/75 transition-colors hover:text-sand-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-widest text-blaze-500">
            Visit / Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sand-200/75 transition-colors hover:text-sand-50"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blaze-500" />
                {site.address}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-sand-200/75 transition-colors hover:text-sand-50">
                <Phone className="h-4 w-4 shrink-0 text-blaze-500" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sand-200/75 transition-colors hover:text-sand-50"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-blaze-500" />
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-sand-200/75 transition-colors hover:text-sand-50">
                <Mail className="h-4 w-4 shrink-0 text-blaze-500" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 pt-1 text-sand-200/75">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blaze-500" />
              <span className="space-y-0.5">
                {site.hoursShort.map((h) => (
                  <span key={h.days} className="flex justify-between gap-6">
                    <span>{h.days}</span>
                    <span className="text-sand-200/55">{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-sand-200/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-sand-200/50 sm:flex-row">
          <p>
            © {year} Reyes Tires Inc · Spring Valley, CA · All rights reserved.
          </p>
          <p className="font-display uppercase tracking-[0.25em] text-sand-200/40">
            We Perform Better
          </p>
        </div>
      </div>
    </footer>
  );
}
