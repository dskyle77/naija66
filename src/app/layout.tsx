import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://naija66.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Naija66 — Explore Nigeria. Then. Now. Everywhere in between.",
    template: "%s · Naija66",
  },
  description:
    "Learn Nigeria through a timeline, a map of the 36 states and FCT, quizzes, and national symbols — from independence in 1960 to Nigeria @66.",
  applicationName: "Naija66",
  keywords: [
    "Nigeria",
    "Naija66",
    "Independence Day",
    "Nigerian states",
    "Nigerian flag",
    "national anthem",
    "FESTAC 77",
    "Abuja",
    "Lagos",
    "civic education",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Naija66",
    title: "Naija66 — Explore Nigeria",
    description:
      "Timeline, map, quizzes, and national symbols of Nigeria — 1960 to 2026.",
    images: [
      {
        url: "/images/ogImage.jpg",
        width: 1200,
        height: 630,
        alt: "Naija66 — Explore Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naija66 — Explore Nigeria",
    description:
      "Timeline, map, quizzes, and national symbols of Nigeria — 1960 to 2026.",
    images: ["/images/ogImage.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Naija66",
              url: siteUrl,
              description:
                "Learn Nigeria through a timeline, map, quizzes, and national symbols.",
              inLanguage: "en",
            }),
          }}
        />
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}