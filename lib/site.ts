export const site = {
  name: "Reyes Tires Inc",
  legalName: "Reyes Tires Inc",
  tagline: "Full Truck Build Shop · Lifts · Wheels · Tires · Service",
  description:
    "Reyes Tires Inc is Spring Valley's full truck build shop — lifts and long-travel suspension, aftermarket wheels and tires, brakes, alignment, repairs and maintenance.",

  // Canonical production URL (no trailing slash)
  url: "https://reyestires.com",

  phone: "(619) 467-7490",
  phoneHref: "tel:+16194677490",
  phoneE164: "+16194677490",
  whatsapp: "16198325500", // wa.me format
  whatsappDisplay: "(619) 832-5500",
  email: "quotes@reyestires.com",

  // Address (split for structured data)
  address: "8637 Troy St B, Spring Valley, CA 91977",
  streetAddress: "8637 Troy St B",
  city: "Spring Valley",
  region: "CA",
  postalCode: "91977",
  country: "US",
  // Approximate coordinates for 8637 Troy St — verify against Google Business Profile.
  geo: { lat: 32.7442, lng: -116.9986 },

  mapsHref:
    "https://www.google.com/maps/dir/?api=1&destination=8637+Troy+St+B+Spring+Valley+CA+91977",

  // Areas served (local SEO)
  areaServed: ["Spring Valley, CA"],

  // Authoritative profiles — add Facebook / Instagram / Google Business URLs here.
  sameAs: [] as string[],

  priceRange: "$$",
  rating: "4.6",
  reviewCount: 289,

  hours: [
    { day: "Monday", time: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
    { day: "Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // Opening hours in schema.org format (24h)
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "17:00" },
  ],

  // Services offered (used for content + structured data)
  services: [
    "New & Used Tires",
    "Aftermarket Wheels",
    "Lift Kits & Suspension",
    "Wheel & Tire Packages",
    "Brakes",
    "Wheel Alignment",
    "Repairs & Maintenance",
  ],
};
