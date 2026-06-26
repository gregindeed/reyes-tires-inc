import { site } from "./site";

const ogImage = `${site.url}/og.png`;
const logo = `${site.url}/logo.png`;

// Primary local-business entity. AutoRepair is a LocalBusiness subtype that
// search + AI engines understand for an auto / tire / truck shop.
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "TireShop", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: ogImage,
    logo,
    priceRange: site.priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsHref,
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: site.openingHours.map((o) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
      bestRating: "5",
    },
    makesOffer: site.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: "en-US",
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
