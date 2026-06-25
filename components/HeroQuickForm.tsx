"use client";

import { useState } from "react";
import * as Label from "@radix-ui/react-label";
import { Select } from "./Select";
import { site } from "@/lib/site";

const needOptions = [
  { value: "Full Truck Build", label: "Full Truck Build" },
  { value: "Lift / Suspension", label: "Lift / Suspension" },
  { value: "Wheel & Tire Package", label: "Wheel & Tire Package" },
  { value: "Tires", label: "Tires" },
  { value: "Brakes", label: "Brakes" },
  { value: "Alignment", label: "Alignment" },
  { value: "Repair / Maintenance", label: "Repair / Maintenance" },
  { value: "Something Else", label: "Something Else" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.927zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function HeroQuickForm() {
  const [need, setNeed] = useState("");
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Add your name so we know who we're talking to.");
      return;
    }
    setError("");

    const lines = [
      `Hi Reyes Tires! I'd like a quote.`,
      ``,
      `Name: ${name}`,
      vehicle ? `Vehicle: ${vehicle}` : "",
      need ? `Looking for: ${need}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldCls =
    "w-full rounded-md border border-sand-200/15 bg-ink-950/40 px-3.5 py-2.5 text-[15px] text-sand-50 outline-none transition-colors placeholder:text-sand-200/40 focus:border-blaze-500 focus:ring-2 focus:ring-blaze-500/25";
  const labelCls = "mb-1.5 block text-xs font-700 uppercase tracking-wide text-sand-200/80";

  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-2 -z-10 rounded-2xl bg-blaze-600/15 blur-2xl" />
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-sand-200/15 bg-ink-800/70 p-6 backdrop-blur sm:p-7"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-ink-950">
            <WhatsAppIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-lg font-700 uppercase tracking-wide text-sand-50">
              Get a Fast Quote
            </p>
            <p className="text-xs text-sand-200/70">
              Message us on WhatsApp — we reply quick.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <Label.Root htmlFor="hq-name" className={labelCls}>
              Name
            </Label.Root>
            <input
              id="hq-name"
              className={fieldCls}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label.Root htmlFor="hq-vehicle" className={labelCls}>
              Vehicle <span className="font-500 normal-case text-sand-200/50">(optional)</span>
            </Label.Root>
            <input
              id="hq-vehicle"
              className={fieldCls}
              placeholder="e.g. 2019 Ford F-150"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </div>
          <div>
            <Label.Root htmlFor="hq-need" className={labelCls}>
              What do you need?
            </Label.Root>
            <Select
              id="hq-need"
              value={need}
              onValueChange={setNeed}
              placeholder="Pick a service"
              options={needOptions}
              dark
            />
          </div>
        </div>

        {error && (
          <p className="mt-3 text-sm font-medium text-blaze-400">{error}</p>
        )}

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 font-700 uppercase tracking-wide text-ink-950 transition-colors hover:bg-[#1ebe5b]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send on WhatsApp
        </button>
        <p className="mt-3 text-center text-xs text-sand-200/50">
          Opens WhatsApp to {site.whatsappDisplay}
        </p>
      </form>
    </div>
  );
}
