import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR);

  return files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: data.slug,
      title: data.title,
      description: data.description,
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  return {
    content,
    frontMatter: data,
  };
}
