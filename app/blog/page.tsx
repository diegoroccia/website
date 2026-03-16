import BlogPostTeaser from "./components/post/Post";
import { getAllPosts } from "@/lib/utils";

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return blogPosts.map((post) => (
    <BlogPostTeaser
      key={post.slug}
      slug={post.slug}
      title={post.title}
      description={post.description}
      date={String(post.date)}
      readingTime="5 min"
    />
  ));
}
