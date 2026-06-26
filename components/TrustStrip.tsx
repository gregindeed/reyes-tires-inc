const items = [
  "Tires",
  "Repairs",
  "Maintenance",
  "Lifts & Suspension",
  "Wheels",
  "Brakes & Alignment",
];

export default function TrustStrip() {
  return (
    <div className="border-b border-sand-200/10 bg-ink-950">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 font-display text-sm font-600 uppercase tracking-[0.15em] text-sand-200/80">
        {items.map((it, i) => (
          <span key={it} className="flex items-center gap-8">
            {it}
            {i < items.length - 1 && (
              <span className="hidden h-1.5 w-1.5 rotate-45 bg-royal-500 sm:inline-block" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
