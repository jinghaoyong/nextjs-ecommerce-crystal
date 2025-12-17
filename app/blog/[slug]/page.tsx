import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Script from "next/script";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    keywords: post.frontMatter.keywords,
    alternates: {
      canonical: `https://yourdomain.com/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  return (
    <>
      {/* Article Schema */}
      <Script
        type="application/ld+json"
        id="article-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.frontMatter.title,
            description: post.frontMatter.description,
            author: {
              "@type": "Organization",
              name: "EternalCrystal",
            },
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-5 py-16 prose">
        <h1>{post.frontMatter.title}</h1>
        <MDXRemote source={post.content} />
      </article>
    </>
  );
}
