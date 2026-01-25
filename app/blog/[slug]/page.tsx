import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Script from "next/script";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    keywords: post.frontMatter.keywords,
    alternates: {
      canonical: `https://yourdomain.com/blog/${slug}`,
    },
  };
}


export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
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

