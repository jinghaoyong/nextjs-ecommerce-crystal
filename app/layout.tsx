import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import WhatsappButton from "@/components/ui/WhatsappButton";

const params = "example";

export const metadata: Metadata = {
  title: "EternalCrystalStore",
  description: "Ecommerce website for crystals and gemstones",
  keywords: ["Ecommerce", "Crystals", "Gemstones", "Shop"],
  authors: [{ name: "Sky Yong", url: "https://jinghaoyong.github.io/myportfolio/" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EternalCrystalStore",
    description: "Ecommerce website for crystals and gemstones",
    url: "https://nextjs-ecommerce-crystal.vercel.app/",
    siteName: "EternalCrystalStore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EternalCrystalStore",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `https://nextjs-ecommerce-crystal.vercel.app/`,
  },
};

// export async function generateMetadata({params,}: any): Promise<Metadata> {
//   const product = products[params.id as keyof typeof products];
//   if(!product){
//     return {
//       title:"Product Not Found - EternalCrystalStore",
//       description:"The product you are looking for does not exist.",
//     };  
//   }
// }

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
          <WhatsappButton />
        </main>
        <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "EternalCrystalStore",
            url: "https://nextjs-ecommerce-crystal.vercel.app/",
            logo: "https://nextjs-ecommerce-crystal.vercel.app/logo.png",
          }),
        }}
      />
      </body>
    </html>
  );
}
