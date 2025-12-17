import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crystal Blog | EternalCrystal Malaysia",
  description:
    "Crystal guides, meanings, and healing tips. Learn which crystal suits you best.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-4xl font-bold mb-8">Crystal Guides & Blog</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 mt-1">{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
