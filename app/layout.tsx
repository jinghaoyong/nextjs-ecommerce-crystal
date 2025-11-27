import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";


export const metadata: Metadata = {
  title: "EternalCrystal",
  description: "Ecommerce website for crystals and gemstones",
  keywords: ["Ecommerce", "Crystals", "Gemstones", "Shop"],
  authors: [{ name: "Jinghan Li", url: "https://jinghanli.com" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EternalCrystal",
    description: "Ecommerce website for crystals and gemstones",
    url: "https://eternalcrystal.vercel.app",
    siteName: "EternalCrystal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EternalCrystal",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
