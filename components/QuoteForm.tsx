"use client";

import { useState } from "react";
import * as Label from "@radix-ui/react-label";
import * as Toast from "@radix-ui/react-toast";
import { CheckCircle2, Send } from "lucide-react";
import { Select } from "./Select";
import { site } from "@/lib/site";

const serviceOptions = [
  { value: "build", label: "Full Truck Build" },
  { value: "lift", label: "Lift / Suspension" },
  { value: "package", label: "Wheel & Tire Package" },
  { value: "wheels", label: "Aftermarket Wheels" },
  { value: "tires", label: "New / Used Tires" },
  { value: "brakes", label: "Brakes" },
  { value: "alignment", label: "Alignment" },
  { value: "repair", label: "Repair / Maintenance" },
  { value: "other", label: "Something Else" },
];

export default function QuoteForm() {
  const [service, setService] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    details: "",
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

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

    // No backend wired yet — open a pre-filled email to the shop so the
    // request actually goes somewhere. Swap for a real endpoint when ready.
    const serviceLabel =
      serviceOptions.find((o) => o.value === service)?.label ?? service;
    const subject = encodeURIComponent(`Quote request — ${serviceLabel}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nVehicle: ${form.vehicle}\nService: ${serviceLabel}\n\nDetails:\n${form.details}`
    );
    window.location.href = `mailto:quotes@reyestires.com?subject=${subject}&body=${body}`;

    setOpen(true);
    setForm({ name: "", phone: "", vehicle: "", details: "" });
    setService("");
  }

  const fieldCls =
    "w-full rounded-md border border-sand-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-850 outline-none transition-colors placeholder:text-stone-750/50 focus:border-blaze-500 focus:ring-2 focus:ring-blaze-500/20";
  const labelCls =
    "mb-1.5 block text-sm font-semibold text-stone-850";

  return (
    <Toast.Provider swipeDirection="right">
      <section id="quote" className="relative overflow-hidden bg-sand-100 py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-display text-sm font-700 uppercase tracking-widest text-blaze-600">
              Get a Quote
            </p>
            <h2 className="mt-3 font-display text-4xl font-700 uppercase leading-tight tracking-tight text-stone-850 sm:text-5xl">
              Tell us about your truck — we&apos;ll build the quote
            </h2>
            <p className="mt-4 text-lg text-stone-750">
              Send a quick request and the crew will follow up with pricing and
              availability. Prefer to talk it through?{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-blaze-600 underline-offset-2 hover:underline"
              >
                Call {site.phone}
              </a>
              .
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Free, no-pressure quotes",
                "Full truck builds, start to finish",
                "Lift & suspension sized to your rig",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-stone-850">
                  <CheckCircle2 className="h-5 w-5 text-blaze-600" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-sand-200 bg-white p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label.Root htmlFor="name" className={labelCls}>
                  Name
                </Label.Root>
                <input
                  id="name"
                  className={fieldCls}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <Label.Root htmlFor="phone" className={labelCls}>
                  Phone
                </Label.Root>
                <input
                  id="phone"
                  type="tel"
                  className={fieldCls}
                  placeholder="(619) 555-0123"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label.Root htmlFor="vehicle" className={labelCls}>
                  Vehicle
                </Label.Root>
                <input
                  id="vehicle"
                  className={fieldCls}
                  placeholder="e.g. 2019 Ford F-150"
                  value={form.vehicle}
                  onChange={(e) => update("vehicle", e.target.value)}
                />
              </div>
              <div>
                <Label.Root htmlFor="service" className={labelCls}>
                  Service needed
                </Label.Root>
                <Select
                  id="service"
                  value={service}
                  onValueChange={setService}
                  placeholder="Choose a service"
                  options={serviceOptions}
                />
              </div>
            </div>

            <div className="mt-4">
              <Label.Root htmlFor="details" className={labelCls}>
                Details <span className="font-normal text-stone-750/60">(optional)</span>
              </Label.Root>
              <textarea
                id="details"
                rows={3}
                className={`${fieldCls} resize-none`}
                placeholder="Tire size, wheel specs, lift height, anything helpful…"
                value={form.details}
                onChange={(e) => update("details", e.target.value)}
              />
            </div>

            {error && (
              <p className="mt-3 text-sm font-medium text-clay-700">{error}</p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blaze-500 px-6 py-3.5 font-700 uppercase tracking-wide text-ink-950 shadow-blaze transition-colors hover:bg-blaze-400 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Request My Quote
            </button>
          </form>
        </div>
      </section>

      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        duration={5000}
        className="anim-slide-down flex items-start gap-3 rounded-lg border border-sand-200 bg-white p-4 shadow-card"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blaze-600" />
        <div>
          <Toast.Title className="font-semibold text-stone-850">
            Quote request started
          </Toast.Title>
          <Toast.Description className="text-sm text-stone-750">
            Finish sending the email we opened, or call us to lock it in faster.
          </Toast.Description>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[70] m-4 flex w-80 max-w-[100vw] flex-col gap-2 outline-none" />
    </Toast.Provider>
  );
}
