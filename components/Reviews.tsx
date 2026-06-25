import { Star, Quote } from "lucide-react";
import { site } from "@/lib/site";

// Sample testimonials — swap in real Google reviews before launch.
const reviews = [
  {
    name: "Marcus T.",
    text: "Got a leveling kit and new wheels on my F-150. Truck looks unreal and the price beat everyone else in the area.",
  },
  {
    name: "Daniela R.",
    text: "Needed two tires same day before a road trip. In and out in 40 minutes, super friendly crew. Highly recommend.",
  },
  {
    name: "Kevin P.",
    text: "Honest shop. They told me which tire actually needed replacing instead of upselling me four. Earned a customer for life.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-sand-100 py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-600 uppercase tracking-widest text-blaze-600">
              Reviews
            </p>
            <h2 className="mt-3 font-display text-4xl font-700 uppercase tracking-tight text-stone-850 sm:text-5xl">
              Don&apos;t take our word for it
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-sand-200 bg-white px-4 py-3 shadow-card">
            <span className="font-display text-3xl font-700 text-stone-850">
              {site.rating}
            </span>
            <div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blaze-500 text-blaze-500" />
                ))}
              </div>
              <p className="text-xs font-medium text-stone-750">
                {site.reviewCount} Google reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-xl border border-sand-200 bg-white p-7 shadow-card"
            >
              <Quote className="h-7 w-7 text-blaze-400" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-stone-850">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-blaze-500 text-blaze-500"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-stone-750">
                  {r.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
