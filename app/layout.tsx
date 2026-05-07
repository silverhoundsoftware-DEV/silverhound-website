import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SilverHound Enterprises",
  description:
    "SilverHound Enterprises provides digital marketing, SEO & automation, institutional furniture trading, civil and general order supply, and raw metal trading solutions across India.",

  keywords: [
    "SilverHound Enterprises",
    "digital marketing company in Panchkula",
    "SEO services in Haryana",
    "SEO and automation company",
    "digital advertising agency",
    "institutional furniture trading",
    "commercial furniture supplier",
    "office furniture supplier",
    "raw metal trading company",
    "metal suppliers in India",
    "civil material supplier",
    "general order supplier",
    "procurement services",
    "industrial trading company",
    "business automation services",
    "B2B service provider",
    "commercial supply solutions",
    "infrastructure supply company",
    "digital growth agency",
    "automation solutions company",
    "Panchkula business services",
    "Haryana trading company",
    "India digital marketing agency",
  ],

  icons: {
    icon: "/favicon.png",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SilverHound Enterprises",
  url: "https://silverhoundenterprises.in",
  logo: "https://silverhoundenterprises.in/favicon.png",
  description:
    "SilverHound Enterprises provides digital marketing, SEO & automation, institutional furniture trading, civil and general order supply, and raw metal trading solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SCO 192, SF, Sector 16",
    addressLocality: "Panchkula",
    addressRegion: "Haryana",
    postalCode: "134113",
    addressCountry: "IN",
  },
  services: [
    "Digital Marketing",
    "SEO & Automation",
    "Institutional Furniture Trading",
    "Civil & General Order Supply",
    "Raw Metal Trading",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <Navbar />

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </body>
    </html>
  );
}