import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This function gets all markdown files from the posts directory
export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.filter(fileName => fileName.endsWith(".md")).map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "2026-02-19",
      content,
    };
  });
}
