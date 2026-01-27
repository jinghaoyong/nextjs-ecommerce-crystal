// app/custom/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Custom Crystal Bracelets Malaysia | Personalised Healing Bracelets – EternalCrystal",
  description:
    "Order custom crystal bracelets in Malaysia. Personalised crystal & healing bracelets crafted based on your intention, energy and budget. Delivery across Malaysia & Singapore.",
  keywords: [
    "custom crystal bracelets malaysia",
    "customised crystal bracelet",
    "healing bracelet malaysia",
    "personalised crystal bracelet",
    "which crystal suits me",
    "crystal bracelet malaysia",
    "定制水晶手链 马来西亚",
    "gelang kristal khas malaysia",
  ],
  openGraph: {
    title:
      "Custom Crystal Bracelets Malaysia | EternalCrystal",
    description:
      "Personalised crystal & healing bracelets crafted based on your intention, energy and budget. Delivery across Malaysia & Singapore.",
    url: "https://yourdomain.com/custom",
    siteName: "EternalCrystal",
    locale: "en_MY",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/custom",
  },
};

export default function CustomPage() {
  return (
    <>
      {/* ========= SERVICE STRUCTURED DATA ========= */}
      <Script
        id="custom-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom Crystal Bracelet Malaysia",
            description:
              "Personalised crystal bracelets crafted based on energy, intention, zodiac and budget. Available in Malaysia & Singapore.",
            provider: {
              "@type": "LocalBusiness",
              name: "EternalCrystal",
              areaServed: ["MY", "SG"],
            },
            areaServed: {
              "@type": "Country",
              name: "Malaysia",
            },
          }),
        }}
      />

      {/* ========= FAQ STRUCTURED DATA ========= */}
      <Script
        id="custom-faq-jsonld"
        type="application/ld+json"
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
                    "Different crystals suit different intentions such as wealth, protection, love, focus or emotional balance. You can contact us and we will recommend crystals based on your situation and energy.",
                },
              },
              {
                "@type": "Question",
                name: "Can I customise my crystal bracelet in Malaysia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We offer fully customised crystal bracelets in Malaysia based on your budget, intention, zodiac and energy.",
                },
              },
              {
                "@type": "Question",
                name: "Do you deliver to Singapore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We deliver custom crystal bracelets to both Malaysia and Singapore.",
                },
              },
            ],
          }),
        }}
      />

      {/* ========= PAGE CONTENT ========= */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* ================= ENGLISH ================= */}
        <section>
          <h1 className="text-4xl font-bold mb-6">
            Custom Crystal Bracelets in Malaysia
          </h1>

          <p className="leading-7 mb-4">
            EternalCrystal specialises in <strong>custom crystal bracelets in Malaysia</strong>,
            crafted based on your intention, personal energy, zodiac and budget.
          </p>

          <p className="leading-7 mb-4">
            Whether you are looking for crystals for wealth, protection, love,
            focus, emotional balance or healing, we personalise every bracelet
            specially for you.
          </p>

          <p className="leading-7 mb-4">
            We deliver across <strong>Malaysia</strong> and <strong>Singapore</strong>.
          </p>
        </section>

        {/* ================= CHINESE ================= */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            马来西亚定制水晶手链
          </h2>

          <p className="leading-7 mb-4">
            EternalCrystal 提供 <strong>马来西亚定制水晶手链</strong>，
            根据您的需求、预算、星座与个人磁场能量量身打造。
          </p>

          <p className="leading-7 mb-4">
            无论是招财、护身、感情、情绪稳定或专注力，
            我们都会为您推荐最适合的水晶组合。
          </p>

          <p className="leading-7 mb-4">
            支持全马来西亚及新加坡寄送。
          </p>
        </section>

        {/* ================= MALAY ================= */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Gelang Kristal Khas di Malaysia
          </h2>

          <p className="leading-7 mb-4">
            EternalCrystal menyediakan <strong>gelang kristal khas di Malaysia</strong>
            berdasarkan niat, tenaga peribadi, bajet dan zodiak anda.
          </p>

          <p className="leading-7 mb-4">
            Sama ada untuk kekayaan, perlindungan, kasih sayang, fokus atau keseimbangan emosi,
            setiap gelang direka khas untuk anda.
          </p>

          <p className="leading-7 mb-4">
            Penghantaran tersedia ke seluruh Malaysia dan Singapura.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-yellow-50 border border-yellow-300 p-6 rounded">
          <p className="mb-3 font-semibold">
            💬 Not sure which crystal suits you?
          </p>
          <p className="mb-4">
            Contact us on WhatsApp and we will guide you personally.
          </p>
          <Link
            href="https://wa.me/60107640926"
            target="_blank"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded font-medium"
          >
            WhatsApp Us Now
          </Link>
        </section>
      </section>
    </>
  );
}
