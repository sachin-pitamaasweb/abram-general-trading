import localFont from "next/font/local";
import "./globals.css";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterBottom from "@/components/Footer/FooterBottom";

const geistSans = localFont({
  src: "./fonts/MADE-Tommy-Soft-Light-PERSONAL-USE.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/MADE-Tommy-Soft-Light-PERSONAL-USE.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Abram General Trading L.L.C. | Quality Agro Products Exporter",
  description: "Abram General Trading L.L.C. exports premium Basmati Rice, Spices, Pulses, Tea, and Dairy Products globally. Based in Dubai, we ensure quality.",
  keywords:
    "Abram General Trading, Agro Products Exporter, Basmati Rice, Chickpeas, Groundnuts, Spices, Pulses, Sugar, Dairy Products, Agro Products Dubai, Indian Agro Products Exporter, Gulf Agro Supplier",
  author: "Abram General Trading Team",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.abramgeneraltrading.com/" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:site_name" content="Abram General Trading L.L.C." />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.abramgeneraltrading.com/" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Abram General Trading L.L.C.",
            "url": "https://www.abramgeneraltrading.com/",
            "logo": "https://www.abramgeneraltrading.com/logo.png",
            "description": metadata.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressRegion": "UAE",
              "addressCountry": "United Arab Emirates",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-xxx-xxxx",
              "contactType": "Customer Service",
            },
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <FooterBottom />
      </body>
    </html>
  );
}
