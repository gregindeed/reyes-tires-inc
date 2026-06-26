import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { businessSchema, websiteSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

const title = "Reyes Tires Inc — Full Truck Build Shop in Spring Valley, CA";
const description = `${site.description} ${site.rating}★ from ${site.reviewCount} reviews. Get a free quote.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · Reyes Tires Inc",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  generator: "Next.js",
  keywords: [
    "tire shop Spring Valley",
    "truck build shop San Diego",
    "lift kit installation Spring Valley",
    "aftermarket wheels Spring Valley CA",
    "new and used tires Spring Valley",
    "wheel alignment",
    "brakes",
    "suspension lift",
    "Reyes Tires",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Reyes Tires Inc — Full Truck Build Shop in Spring Valley, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  category: "automotive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0d0b08" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Spring Valley" />
        <meta
          name="geo.position"
          content={`${site.geo.lat};${site.geo.lng}`}
        />
        <meta name="ICBM" content={`${site.geo.lat}, ${site.geo.lng}`} />
      </head>
      <body>
        <JsonLd data={businessSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
      </body>
    </html>
  );
}
