"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#builds", label: "Builds" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="clip-slash flex h-9 w-9 items-center justify-center bg-ink-900 font-display text-lg font-700 tracking-tight text-blaze-500">
            RT
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-700 uppercase tracking-wide text-stone-850">
              Reyes Tires
            </span>
            <span className="text-[10px] font-700 uppercase tracking-[0.2em] text-blaze-600">
              We Perform Better
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-stone-750 transition-colors hover:text-blaze-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-stone-850 sm:flex"
          >
            <Phone className="h-4 w-4 text-blaze-600" />
            {site.phone}
          </a>
          <a
            href="#quote"
            className="rounded-md bg-blaze-500 px-4 py-2 text-sm font-700 uppercase tracking-wide text-ink-950 shadow-sm transition-colors hover:bg-blaze-400"
          >
            Start a Build
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sand-200 bg-sand-50 md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-stone-750"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="py-2.5 text-sm font-semibold text-blaze-600"
            >
              Call {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
