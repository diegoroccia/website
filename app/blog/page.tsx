import BlogPostTeaser from "./components/post/Post";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="container mx-auto max-w-6xl py-20 px-4">
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Blog Posts
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on software engineering, technology, and learning.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogPostTeaser
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={String(post.date)}
              readingTime="5 min"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
