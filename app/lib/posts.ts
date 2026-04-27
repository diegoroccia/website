import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  readingTime: string;
}

function computeReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}

// This function gets all markdown files from the posts directory
export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "posts");
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date ? String(data.date) : "",
        content,
        readingTime: computeReadingTime(content),
      };
    })
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getPostBySlug(slug: string): Post | undefined {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date ? String(data.date) : "",
    content,
    readingTime: computeReadingTime(content),
  };
}
