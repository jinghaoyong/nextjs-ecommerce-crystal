// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  // Fetch top 5 products
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  // Structured Data: WebSite + Organization
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
          "https://www.xiaohongshu.com/user/xxx"
        ]
      },
      {
        "@type": "WebSite",
        url: "https://nextjs-ecommerce-crystal.vercel.app",
        name: "EternalCrystalStore",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://nextjs-ecommerce-crystal.vercel.app/products?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        itemListElement: products.data.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://nextjs-ecommerce-crystal.vercel.app/products/${product.id}`
        }))
      }
    ]
  };

  // Multilingual homepage texts
  const texts = {
    en: {
      welcome: "Welcome to EternalCrystal",
      description: "Discover high-quality crystals and healing bracelets at the best prices. Delivery across Malaysia & Singapore.",
      browse: "Browse All Products"
    },
    zh: {
      welcome: "欢迎来到EternalCrystal",
      description: "探索高品质水晶和疗愈手链，价格实惠。全马来西亚及新加坡配送。",
      browse: "浏览所有产品"
    },
    ms: {
      welcome: "Selamat Datang ke EternalCrystal",
      description: "Temui kristal dan gelang penyembuhan berkualiti tinggi dengan harga terbaik. Penghantaran ke seluruh Malaysia & Singapura.",
      browse: "Lihat Semua Produk"
    }
  };

  // For now, show all 3 languages together (SEO-friendly)
  return (
    <div>
      {/* ===== JSON-LD for SEO ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ===== Hero Section ===== */}
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            {/* English */}
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{texts.en.welcome}</h2>
            <p className="text-neutral-600">{texts.en.description}</p>

            {/* Chinese */}
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{texts.zh.welcome}</h2>
            <p className="text-neutral-600">{texts.zh.description}</p>

            {/* Malay */}
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{texts.ms.welcome}</h2>
            <p className="text-neutral-600">{texts.ms.description}</p>

            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link href="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3">
                {texts.en.browse} / {texts.zh.browse} / {texts.ms.browse}
              </Link>
            </Button>
          </div>

          {/* Hero image (use first product as highlight) */}
          {products.data[0]?.images[0] && (
            <Image
              alt={products.data[0].name}
              src={products.data[0].images[0]}
              className="rounded"
              width={450}
              height={450}
            />
          )}
        </div>
      </section>

      {/* ===== Carousel Section ===== */}
      <section className="py-8">
        <Carousel products={products.data} />
      </section>

      {/* ===== Featured FAQ for SEO ===== */}
      <section className="max-w-4xl mx-auto px-5 py-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <strong>Which crystal suits me? / 哪种水晶适合我？/ Kristal mana sesuai untuk saya?</strong>
            <p>
              Different crystals suit different personalities, energies, and life situations. Contact us via WhatsApp for guidance.
            </p>
          </div>
          <div>
            <strong>Do you deliver in Malaysia & Singapore? / 您们送货到马来西亚和新加坡吗？ / Adakah penghantaran ke Malaysia & Singapura?</strong>
            <p>
              Yes, we deliver everywhere in Malaysia & Singapore with fast and reliable shipping.
            </p>
          </div>
          <div>
            <strong>Can I customise my crystal bracelet? / 我可以定制水晶手链吗？ / Bolehkah saya menyesuaikan gelang kristal saya?</strong>
            <p>
              Absolutely! You can order any crystal and we craft a personalised bracelet according to your budget and intention.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
