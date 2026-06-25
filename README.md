# Reyes Tires Inc — Landing Page

A single-page marketing site for Reyes Tires Inc (Spring Valley, CA), built with
**Next.js (App Router) + Tailwind CSS + Radix UI**.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To build for production:

```bash
npm run build
npm start
```

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — warm "rugged-premium" palette (sand / stone / clay-rust)
- **Radix UI** — accessible `Select`, `Label`, and `Toast` primitives in the quote form
- **lucide-react** — icons
- Google Fonts: **Oswald** (display) + **Inter** (body)

## Structure

```
app/
  layout.tsx      fonts, metadata
  page.tsx        assembles all sections
  globals.css     Tailwind + small animations
components/
  Header, Hero, TrustStrip, Services, WhyUs,
  Reviews, QuoteForm, Select, Visit, Footer, WheelMark
lib/
  site.ts         business info (name, phone, address, hours, rating)
```

## Things to customize before launch

- **Business info** lives in `lib/site.ts` — update hours, address, phone in one place.
- **Quote form** currently opens a pre-filled email to `quotes@reyestires.com`
  (see `components/QuoteForm.tsx`). Replace the `mailto:` with a real form
  endpoint (e.g. Formspree, Resend, or an API route) and the shop's real inbox.
- **Reviews** in `components/Reviews.tsx` are sample testimonials — swap in real
  Google reviews.
- Add real **photos** (shop, lifted trucks, wheel selection) to the hero and
  services sections for extra punch.
```
