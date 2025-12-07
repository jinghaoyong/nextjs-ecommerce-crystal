// app/about/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | EternalCrystal – Crystal & Healing Bracelets in Malaysia",
  description:
    "EternalCrystal is a Malaysia-based crystal shop offering high-quality natural crystals, healing bracelets, and personalised crystal customisation. We deliver across Malaysia & Singapore.",
  keywords: [
    "crystal malaysia",
    "crystal shop malaysia",
    "healing bracelet malaysia",
    "custom crystal bracelet",
    "crystals for zodiac",
    "which crystal suits me",
    "crystal energy malaysia",
    "天然水晶 马来西亚",
  ],
  openGraph: {
    title:
      "About Us | EternalCrystal – Malaysia Crystal Shop & Healing Bracelets",
    description:
      "We offer crystals, natural stones, customised bracelets and energy-matched stones. Delivery to all Malaysia & Singapore.",
    url: "https://nextjs-ecommerce-crystal.vercel.app/about",
    siteName: "EternalCrystal",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About EternalCrystal – Malaysia Crystal Shop & Custom Bracelets",
    description:
      "Your trusted Malaysia crystal shop. We craft personalised energy bracelets and deliver across MY & SG.",
  },
  alternates: {
    canonical: "https://nextjs-ecommerce-crystal.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ========= JSON-LD Structured Data ========= */}
      <Script
        type="application/ld+json"
        id="about-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EternalCrystal",
            description:
              "Malaysia-based crystal shop offering natural crystals, healing bracelets, and custom-made crystal designs.",
            url: "https://nextjs-ecommerce-crystal.vercel.app",
            image: "https://nextjs-ecommerce-crystal.vercel.app/og-image.jpg",
            telephone: "+60-XXX-XXXXXX",
            address: { "@type": "PostalAddress", addressCountry: "MY" },
            sameAs: [
              "https://www.instagram.com/eternalcrystal_/",
              "https://facebook.com/xxx",
              "https://www.xiaohongshu.com/user/xxx",
            ],
          }),
        }}
      />

      {/* ========= FAQ JSON-LD for SEO ========= */}
      <Script
        type="application/ld+json"
        id="faq-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which crystal suits me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Different crystals suit different personalities, energies, and life situations. You can contact us via WhatsApp and we will guide you on which crystal matches your intention.",
                },
              },
              {
                "@type": "Question",
                name: "Do you deliver crystals in Malaysia and Singapore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we deliver to all locations in Malaysia and Singapore with fast and reliable shipping.",
                },
              },
              {
                "@type": "Question",
                name: "Can I customise my crystal bracelet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Absolutely! You can order any crystal you want at your preferred budget, and we can craft a personalised bracelet based on your intention and energy.",
                },
              },
            ],
          }),
        }}
      />

      {/* ========= PAGE CONTENT ========= */}
      <section className="max-w-4xl mx-auto px-5 py-16 space-y-12">
        {/* ================= ENGLISH ================= */}
        <div>
          <h1 className="text-4xl font-bold mb-6">About EternalCrystal</h1>

          <p className="leading-7 mb-4">
            EternalCrystal is a Malaysia-based crystal and healing bracelet shop,
            specialising in high-quality natural stones, personalised crystal
            crafting, and energy-matched recommendations.
          </p>

          <p className="leading-7 mb-4">
            We deliver everywhere in <strong>Malaysia</strong> and <strong>Singapore</strong>. No matter where you stay—KL, Penang, Johor, Sabah, Sarawak, or Singapore—you will receive your crystals safely and beautifully packaged.
          </p>

          <p className="leading-7 mb-4">
            Our mission is to provide <strong>valuable prices, authenticity, and trust</strong>. Every crystal is carefully selected, cleansed, and checked before sending it to you.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Customised Crystal Bracelet</h2>
          <p className="leading-7 mb-4">
            You can order any crystal based on your budget, intention, or energy. We also offer fully customised bracelet crafting—every piece is unique and made specially for you.
          </p>
          <p className="leading-7 mb-4">
            You may visit our <a href="/custom" className="text-blue-600 underline">customised bracelet gallery</a> to see what we crafted for others.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Not Sure Which Crystal Suits You?</h2>
          <p className="leading-7 mb-4">
            You can ask us anything related to crystals and <strong>磁场（energy field）</strong>. Many people search:
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4 space-y-1">
            <em>“what kind of crystal suits for stress?”</em>
            <em>“which crystal is good for Taurus?”</em>
            <em>“which crystal helps in relationships?”</em>
          </div>
          <p className="leading-7 mb-4">
            We can guide you based on your situation and intention to pick the crystal that supports your energy.
          </p>
        </div>

        {/* ================= 中文 ================= */}
        <div>
          <h1 className="text-4xl font-bold mb-6">关于 EternalCrystal</h1>

          <p className="leading-7 mb-4">
            EternalCrystal 是一家马来西亚水晶与疗愈手链店，专注于高品质天然水晶及个性化定制。
          </p>

          <p className="leading-7 mb-4">
            我们为马来西亚及新加坡各地提供配送服务。
          </p>

          <p className="leading-7 mb-4">
            我们的使命是提供有价值的价格、真实可靠的商品和服务。
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">定制水晶手链</h2>
          <p className="leading-7 mb-4">
            您可以根据预算、意图或能量定制任何水晶。每一件都是为您量身打造的独特作品。
          </p>
          <p className="leading-7 mb-4">
            您可以访问我们的 <a href="/custom" className="text-blue-600 underline">定制手链展示</a> 查看我们为其他客户制作的作品。
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">不确定哪种水晶适合您？</h2>
          <p className="leading-7 mb-4">
            您可以向我们咨询任何与水晶及 <strong>磁场（energy field）</strong> 相关的问题。常见搜索包括：
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4 space-y-1">
            <em>“哪种水晶适合压力？”</em>
            <em>“哪种水晶适合金牛座？”</em>
            <em>“哪种水晶有助于感情？”</em>
          </div>
        </div>

        {/* ================= Malay ================= */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Tentang EternalCrystal</h1>

          <p className="leading-7 mb-4">
            EternalCrystal ialah kedai kristal dan gelang penyembuhan berasaskan Malaysia, pakar dalam batu semula jadi berkualiti tinggi, kraf kristal peribadi, dan cadangan tenaga.
          </p>

          <p className="leading-7 mb-4">
            Kami menghantar ke seluruh Malaysia & Singapura.
          </p>

          <p className="leading-7 mb-4">
            Misi kami ialah menyediakan harga yang berbaloi, ketulenan dan kepercayaan.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Gelang Kristal Custom</h2>
          <p className="leading-7 mb-4">
            Anda boleh menempah sebarang kristal mengikut bajet, niat, atau tenaga anda. Setiap gelang dibuat khas untuk anda.
          </p>
          <p className="leading-7 mb-4">
            Lihat <a href="/custom" className="text-blue-600 underline">galeri gelang custom</a> untuk melihat contoh yang telah kami hasilkan untuk pelanggan lain.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Tidak pasti kristal mana sesuai untuk anda?</h2>
          <p className="leading-7 mb-4">
            Anda boleh bertanya apa sahaja berkaitan kristal dan <strong>medan tenaga (energy field)</strong>. Carian popular termasuk:
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4 space-y-1">
            <em>“kristal mana sesuai untuk stress?”</em>
            <em>“kristal mana bagus untuk Taurus?”</em>
            <em>“kristal mana membantu dalam hubungan?”</em>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Contact & Social Media</h2>
          <p>
            WhatsApp: <a href="https://wa.me/60107640926" className="text-green-600 underline">+60 XXX XXXX</a>
          </p>
          <p>
            Instagram: <a href="https://www.instagram.com/eternalcrystal_/" className="text-blue-600 underline">instagram.com/xxx</a>
          </p>
          <p>
            Facebook: <a href="https://facebook.com/xxx" className="text-blue-600 underline">facebook.com/xxx</a>
          </p>
          <p>
            XiaoHongShu: <a href="https://www.xiaohongshu.com/user/xxx" className="text-red-500 underline">xiaohongshu.com/user/xxx</a>
          </p>
          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mt-4">
            💛 Follow us on social media & DM us for a <strong>5% discount</strong> on your next purchase!
          </div>
        </div>
      </section>
    </>
  );
}
