// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import { Sparkles, Truck, ShieldCheck } from "lucide-react";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "EternalCrystal",
        url: "https://nextjs-ecommerce-crystal.vercel.app",
        logo: "https://nextjs-ecommerce-crystal.vercel.app/logo.png",
        sameAs: [
          "https://instagram.com/xxx",
          "https://facebook.com/xxx",
          "https://www.xiaohongshu.com/user/xxx",
        ],
      },
      {
        "@type": "WebSite",
        url: "https://nextjs-ecommerce-crystal.vercel.app",
        name: "EternalCrystalStore",
      },
    ],
  };

  return (
    <div>
      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-100 to-white py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">

          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 rounded-full bg-neutral-200 px-4 py-1 text-sm">
              <Sparkles className="h-4 w-4" />
              Premium Natural Crystals
            </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
Welcome to
<br />
<span className="relative inline-block mt-2 font-extrabold
bg-gradient-to-r from-[#4F628E] to-[#6F85B8]
bg-clip-text text-transparent
drop-shadow-[0_1px_2px_rgba(79,98,142,0.35)]">
Eternal Crystal
</span>
</h1>
            <p className="text-neutral-600 max-w-xl mx-auto md:mx-0">
              Discover high-quality crystals and healing bracelets at the best prices.
              Delivery across Malaysia & Singapore.
            </p>

            {/* Secondary languages */}
            <div className="space-y-1 text-sm text-neutral-500">
              <p>欢迎来到 EternalCrystal｜探索高品质水晶与疗愈手链</p>
              <p>Selamat Datang｜Kristal & gelang penyembuhan berkualiti tinggi</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/products">Browse All Products</Link>
              </Button>
            </div>

            {/* Trust icons */}
            <div className="flex justify-center md:justify-start gap-6 pt-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" /> MY & SG Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Authentic Crystals
              </div>
            </div>
          </div>

          {/* Image */}
          {products.data[0]?.images[0] && (
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              <Image
                src={products.data[0].images[0]}
                alt={products.data[0].name}
                width={500}
                height={500}
                priority
                className="rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>
      </section>

      {/* ================= CAROUSEL ================= */}
      <section className="py-12">
        <Carousel products={products.data} />
      </section>

      {/* ================= FAQ ================= */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              q: "Which crystal suits me?",
              a: "Different crystals suit different personalities and intentions. Contact us via WhatsApp for guidance.",
            },
            {
              q: "Do you deliver to Malaysia & Singapore?",
              a: "Yes! We provide fast and reliable delivery across Malaysia & Singapore.",
            },
            {
              q: "Can I customise my bracelet?",
              a: "Absolutely. We craft personalised bracelets based on your intention and budget.",
            },
            {
              q: "Are your crystals authentic?",
              a: "Yes, all crystals are carefully sourced and quality-checked.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <p className="font-medium">{item.q}</p>
              <p className="mt-2 text-sm text-neutral-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
