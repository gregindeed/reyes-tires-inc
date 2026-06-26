"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { site } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import JsonLd from "./JsonLd";

const faqs = [
  {
    q: "Where is Reyes Tires Inc located?",
    a: `We're at ${site.address}, in Spring Valley, California — easy to reach from across the San Diego East County.`,
  },
  {
    q: "What services does Reyes Tires offer?",
    a: "We're a full truck build shop: new and used tires, aftermarket wheels, lift kits and suspension, wheel and tire packages, brakes, wheel alignment, plus everyday repairs and maintenance.",
  },
  {
    q: "Do you install lift kits and suspension?",
    a: "Yes. We install lift and leveling kits, shocks, and struts — sized to your truck so it clears bigger tires and rides right on the street or the dirt.",
  },
  {
    q: "Do you sell new and used tires?",
    a: "Both. We carry quality new tires and inspected used sets at fair prices, mounted and balanced — most jobs done the same day.",
  },
  {
    q: "Can you build a custom wheel and tire package?",
    a: "Absolutely. Tell us your truck and the look you're after and we'll dial in the right fitment, from street performance to off-road mud-terrains.",
  },
  {
    q: "What are your hours?",
    a: "Monday through Friday 8:00 AM – 6:00 PM, Saturday 8:00 AM – 5:00 PM, closed Sunday.",
  },
  {
    q: "How do I get a quote?",
    a: `Message us on WhatsApp at ${site.whatsappDisplay}, call ${site.phone}, or use the quote form on this page — we'll follow up with pricing and availability.`,
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-sand-50 py-20 sm:py-24">
      <JsonLd data={faqSchema(faqs)} />
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-display text-sm font-700 uppercase tracking-widest text-blaze-600">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl font-700 uppercase tracking-tight text-stone-850 sm:text-5xl">
            Common questions
          </h2>
          <p className="mt-4 text-lg text-stone-750">
            Quick answers about builds, tires, and getting in the door. Don&apos;t
            see yours?{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-blaze-600 underline-offset-2 hover:underline"
            >
              Give us a call.
            </a>
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-sand-200 bg-white shadow-card"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-600 uppercase tracking-wide text-stone-850 outline-none transition-colors hover:text-blaze-600 focus-visible:text-blaze-600">
                  {f.q}
                  <Plus className="h-5 w-5 shrink-0 text-blaze-600 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-stone-750 data-[state=closed]:anim-acc-close data-[state=open]:anim-acc-open">
                <div className="px-5 pb-5">{f.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
