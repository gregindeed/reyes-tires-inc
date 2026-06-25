import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Reyes Tires Inc — Full Truck Build Shop in Spring Valley, CA",
  description:
    "Spring Valley's full truck build shop. Lifts & long-travel suspension, aftermarket wheels & tires, brakes, alignment, repairs and maintenance. 4.6★ from 289 reviews. Start your build.",
  openGraph: {
    title: "Reyes Tires Inc — Full Truck Build Shop, Spring Valley CA",
    description:
      "Lifts, suspension, wheels & tires, brakes, alignment, repairs. From daily driver to desert-ready. Start your build.",
    type: "website",
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
