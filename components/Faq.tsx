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
    q: "What does Reyes Tires specialize in?",
    a: "Suspension, tires, and wheels are our specialty — lift kits, leveling, shocks and struts, new and used tires, and custom wheel-and-tire packages. We also handle brakes, alignment, repairs and maintenance.",
  },
  {
    q: "Do you install lift kits and suspension?",
    a: "Yes. We install lift and leveling kits, shocks, and struts from the brands you trust — sized to your truck so it clears bigger tires and rides right.",
  },
  {
    q: "Do you sell new and used tires?",
    a: "Both. Quality new tires and inspected used sets at fair prices, mounted and balanced — most jobs done the same day.",
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
    a: `Tap any "Get a Quote" button, message us on WhatsApp at ${site.whatsappDisplay}, or call ${site.phone} — we'll follow up with pricing and availability.`,
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative border-t border-sand-200/10 scroll-mt-20"
    >
      <JsonLd data={faqSchema(faqs)} />
      <div className="container-x grid gap-8 py-12 lg:grid-cols-[4fr_8fr]">
        <div>
          <p className="font-display text-sm font-700 uppercase tracking-widest text-blaze-500">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-2xl font-700 uppercase tracking-tight text-sand-50">
            Common questions
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-2.5">
          {faqs.map((f, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-lg border border-sand-200/12 bg-sand-50/[0.03]"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left font-display text-base font-600 uppercase tracking-wide text-sand-100 outline-none transition-colors hover:text-blaze-500 focus-visible:text-blaze-500">
                  {f.q}
                  <Plus className="h-4 w-4 shrink-0 text-blaze-500 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-sand-200/70 data-[state=closed]:anim-acc-close data-[state=open]:anim-acc-open">
                <div className="px-4 pb-4">{f.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
