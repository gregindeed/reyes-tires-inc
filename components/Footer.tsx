import { Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-12">
      <div className="container-x flex flex-col items-start justify-between gap-8 sm:flex-row">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blaze-500 font-display text-lg font-700 text-sand-50">
              RT
            </span>
            <span className="font-display text-lg font-600 uppercase tracking-wide text-sand-50">
              Reyes Tires Inc
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-200/70">
            Tires, repairs, maintenance, aftermarket wheels, brakes, alignment &
            lift & suspension work in Spring Valley, California.
          </p>
        </div>

        <div className="space-y-3 text-sm text-sand-200/80">
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-sand-50"
          >
            <MapPin className="h-4 w-4 text-blaze-400" />
            {site.address}
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 hover:text-sand-50"
          >
            <Phone className="h-4 w-4 text-blaze-400" />
            {site.phone}
          </a>
        </div>
      </div>

      <div className="container-x mt-10 border-t border-sand-200/10 pt-6">
        <p className="text-xs text-sand-200/50">
          © {new Date().getFullYear()} Reyes Tires Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
