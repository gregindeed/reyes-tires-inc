"use client";

import { useEffect, useState } from "react";
import * as Label from "@radix-ui/react-label";
import { X, Send, CheckCircle2, Phone } from "lucide-react";
import { Select } from "./Select";
import { site } from "@/lib/site";

const serviceOptions = [
  { value: "Lift / Suspension", label: "Lift / Suspension" },
  { value: "Aftermarket Wheels", label: "Aftermarket Wheels" },
  { value: "Tires", label: "New / Used Tires" },
  { value: "Wheel & Tire Package", label: "Wheel & Tire Package" },
  { value: "Brakes", label: "Brakes" },
  { value: "Alignment", label: "Alignment" },
  { value: "Repair / Maintenance", label: "Repair / Maintenance" },
  { value: "Full Truck Build", label: "Full Truck Build" },
  { value: "Something Else", label: "Something Else" },
];

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", details: "" });
  const [error, setError] = useState("");

  // Open whenever the URL hash is #quote (every "Get a Quote" CTA links there).
  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#quote") setOpen(true);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  // Esc to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    setTimeout(() => setSent(false), 200);
    if (window.location.hash === "#quote") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  function update(key: keyof typeof form, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !service) {
      setError("Please add your name, phone, and the service you need.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Quote request — ${service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nVehicle: ${form.vehicle}\nService: ${service}\n\nDetails:\n${form.details}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", phone: "", vehicle: "", details: "" });
    setService("");
  }

  if (!open) return null;

  const fieldCls =
    "w-full rounded-md border border-sand-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-850 outline-none transition-colors placeholder:text-stone-750/50 focus:border-blaze-500 focus:ring-2 focus:ring-blaze-500/20";
  const labelCls = "mb-1.5 block text-sm font-semibold text-stone-850";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
      />

      <div className="anim-slide-down relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-sand-200 bg-sand-50 shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-blaze-500" />
        <button
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-md text-stone-750 transition-colors hover:bg-sand-200/60 hover:text-stone-950"
        >
          <X className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="px-7 py-12 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-blaze-600" />
            <h2 className="mt-4 font-display text-2xl font-700 uppercase tracking-tight text-stone-850">
              Quote request started
            </h2>
            <p className="mt-2 text-stone-750">
              Finish sending the email we opened, or call us to lock it in faster.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-blaze-500 px-6 py-3 font-700 uppercase tracking-wide text-white transition-colors hover:bg-blaze-600"
            >
              <Phone className="h-4 w-4" />
              Call {site.phone}
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-7 sm:px-8">
            <p className="font-display text-sm font-700 uppercase tracking-widest text-blaze-600">
              Get a Quote
            </p>
            <h2 className="mt-1 font-display text-3xl font-700 uppercase leading-none tracking-tight text-stone-850">
              Tell us about your truck
            </h2>
            <p className="mt-2 text-sm text-stone-750">
              We&apos;ll follow up with pricing and availability. Prefer to talk?{" "}
              <a href={site.phoneHref} className="font-semibold text-blaze-600 hover:underline">
                Call {site.phone}
              </a>
              .
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <Label.Root htmlFor="qm-name" className={labelCls}>Name</Label.Root>
                <input id="qm-name" className={fieldCls} placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} />
              </div>
              <div>
                <Label.Root htmlFor="qm-phone" className={labelCls}>Phone</Label.Root>
                <input id="qm-phone" type="tel" className={fieldCls} placeholder="(619) 555-0123" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label.Root htmlFor="qm-vehicle" className={labelCls}>Vehicle</Label.Root>
                <input id="qm-vehicle" className={fieldCls} placeholder="e.g. 2019 Ford F-150" value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} />
              </div>
              <div>
                <Label.Root htmlFor="qm-service" className={labelCls}>Service needed</Label.Root>
                <Select id="qm-service" value={service} onValueChange={setService} placeholder="Choose a service" options={serviceOptions} />
              </div>
            </div>

            <div className="mt-4">
              <Label.Root htmlFor="qm-details" className={labelCls}>
                Details <span className="font-normal text-stone-750/60">(optional)</span>
              </Label.Root>
              <textarea id="qm-details" rows={3} className={`${fieldCls} resize-none`} placeholder="Tire size, wheel specs, lift height, anything helpful…" value={form.details} onChange={(e) => update("details", e.target.value)} />
            </div>

            {error && <p className="mt-3 text-sm font-medium text-blaze-700">{error}</p>}

            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blaze-500 px-6 py-3.5 font-700 uppercase tracking-wide text-white shadow-blaze transition-colors hover:bg-blaze-600">
              <Send className="h-4 w-4" />
              Request My Quote
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
