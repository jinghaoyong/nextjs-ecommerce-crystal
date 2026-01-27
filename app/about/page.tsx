// app/about/page.tsx
import { Sparkles, Gem, Truck, MessageCircle, ShieldCheck } from "lucide-react";
import Script from "next/script";

export default function AboutPage() {
  return (
    <>
      {/* ========= JSON-LD (unchanged) ========= */}
      {/* ... keep your Script blocks exactly as-is ... */}

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-neutral-100 to-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-200 px-4 py-1 text-sm">
            <Sparkles className="h-4 w-4" />
            About Eternal Crystal
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A Trusted Crystal & Healing Bracelet Store in Malaysia
          </h1>

          <p className="text-neutral-600 max-w-2xl mx-auto">
            We specialise in high-quality natural crystals, personalised healing
            bracelets, and energy-matched recommendations — delivered across
            Malaysia & Singapore.
          </p>

          <div className="text-sm text-neutral-500 space-y-1">
            <p>马来西亚天然水晶 · 疗愈手链 · 个性化定制</p>
            <p>Kedai kristal & gelang penyembuhan berasaskan Malaysia</p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-16">

        {/* --- Who We Are --- */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Gem className="h-5 w-5" /> Who We Are
            </h2>
            <p className="text-neutral-600">
              EternalCrystal is a Malaysia-based crystal and healing bracelet
              shop. We carefully source, cleanse, and check every crystal before
              sending it to you.
            </p>
            <p className="text-neutral-600">
              Our mission is simple: <strong>authenticity, fair pricing, and trust</strong>.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Truck className="h-5 w-5" /> Delivery Coverage
            </h2>
            <p className="text-neutral-600">
              We deliver to all areas in <strong>Malaysia</strong> and
              <strong> Singapore</strong> — KL, Penang, Johor, Sabah, Sarawak &
              beyond.
            </p>
            <p className="text-neutral-600">
              Every order is safely packed and beautifully presented.
            </p>
          </div>
        </div>

        {/* --- Custom Bracelet --- */}
        <div className="rounded-2xl bg-neutral-50 p-8 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-semibold">
            <Sparkles className="h-6 w-6" /> Customised Crystal Bracelets
          </h2>
          <p className="text-neutral-700">
            You can customise any crystal bracelet based on your budget,
            intention, zodiac, or current life situation. Each piece is crafted
            uniquely for you.
          </p>
          <a
            href="/custom"
            className="inline-block text-sm font-medium text-blue-600 underline"
          >
            View customised bracelet gallery →
          </a>
        </div>

        {/* --- Guidance --- */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm space-y-3">
            <h3 className="flex items-center gap-2 font-semibold">
              <MessageCircle className="h-5 w-5" />
              Not sure which crystal suits you?
            </h3>
            <p className="text-sm text-neutral-600">
              Many people ask:
            </p>
            <ul className="text-sm italic text-neutral-500 space-y-1">
              <li>“Which crystal helps with stress?”</li>
              <li>“Which crystal suits Taurus?”</li>
              <li>“Which crystal helps relationships?”</li>
            </ul>
            <p className="text-sm text-neutral-600">
              We guide you based on your energy & intention.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm space-y-3">
            <h3 className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="h-5 w-5" />
              Authentic & Carefully Selected
            </h3>
            <p className="text-sm text-neutral-600">
              Every crystal is hand-selected, cleansed, and checked before
              delivery to ensure quality and authenticity.
            </p>
          </div>
        </div>

        {/* --- Contact --- */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">Contact & Social</h2>

          <div className="space-y-2 text-sm">
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/60107640926"
                target="_blank"
                className="text-green-600 underline"
              >
                Chat In WhatsApp
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/eternalcrystal_/"
                target="_blank"
                className="text-blue-600 underline"
              >
                @eternalcrystal_
              </a>
            </p>
            <p>
              XiaoHongShu:{" "}
              <a
                href="https://xhslink.com/m/5Te6oJtVVS8"
                target="_blank"
                className="text-red-500 underline"
              >
                小红书
              </a>
            </p>
          </div>

          <div className="rounded-lg bg-yellow-50 border border-yellow-300 p-4 text-sm">
            💛 Follow us & DM us to enjoy a <strong>5% discount</strong> on your next purchase.
          </div>
        </div>
      </section>
    </>
  );
}
