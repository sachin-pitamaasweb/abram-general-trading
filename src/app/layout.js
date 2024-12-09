import localFont from "next/font/local";
import "./globals.css";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
  description:
    "Abram General Trading L.L.C. offers high-quality Basmati Rice, Chickpeas, Groundnuts, Spices, Pulses, Sugar, Dairy Products, Tea, Coffee Beans, and other agro products. Headquartered in Dubai, we serve Gulf and worldwide clients with premium agro exports.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
