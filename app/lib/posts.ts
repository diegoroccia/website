import { glob } from "glob";
import matter from "gray-matter";

export async function getAllBlogPosts() {
  // getting all .md files from the posts directory
  const blogPosts = glob.sync(`posts/*.md`);

  const blogData = await Promise.all(
    blogPosts.map(async (file) => {
      const blogPostSlug = file
        .split("/")[1]
        .replace(/ /g, "-")
        .slice(0, -3)
        .trim();
      const blogPostContent = await import(`../../posts/${file}`);
      const data = matter(blogPostContent);

      return {
        slug: blogPostSlug,
        path: file,
        content: blogPostContent,
        frontmatter: data.data,
      };
    }),
  );

  return {
    blogData,
    fallback: false,
  };
}
