// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Crystal Blog | EternalCrystal Malaysia",
  description:
    "Crystal guides, meanings, and healing tips. Learn which crystal suits you best.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-neutral-100 to-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-200 px-4 py-1 text-sm">
            <Sparkles className="h-4 w-4" />
            Crystal Knowledge & Guides
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Crystal Guides & Healing Blog
          </h1>

          <p className="text-neutral-600 max-w-2xl mx-auto">
            Learn about crystal meanings, healing properties, zodiac matches,
            and how to choose the right crystal for your intention.
          </p>

          <div className="text-sm text-neutral-500 space-y-1">
            <p>水晶含义 · 疗愈指南 · 能量搭配</p>
            <p>Panduan kristal · Makna & tenaga penyembuhan</p>
          </div>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <ul className="grid gap-6 sm:grid-cols-2">
          {posts?.map((post) => (
            <li
              key={post.slug}
              className="group rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-3">
                <h2 className="flex items-start gap-2 text-lg font-semibold group-hover:underline">
                  <BookOpen className="h-5 w-5 mt-1 text-neutral-500" />
                  {post.title}
                </h2>

                <p className="text-sm text-neutral-600">
                  {post.description}
                </p>

                <span className="inline-block text-sm font-medium text-blue-600">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Empty state (optional) */}
        {posts?.length === 0 && (
          <div className="text-center text-neutral-500 mt-12">
            No articles yet. Please check back soon ✨
          </div>
        )}
      </section>
    </>
  );
}
