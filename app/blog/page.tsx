import BlogPostTeaser from "./components/post/Post";
import { getAllBlogPosts } from "../lib/posts";

const blogPosts = await getAllBlogPosts();

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p>My thoughts on software development, technology, and more.</p>
        </div>

        {/* Blog post list */}
        <div className="grid gap-6">
          {blogPosts.blogData.map((post, idx) => (
            <BlogPostTeaser
              key={idx}
              title={post.slug}
              description={post.frontmatter.title}
              date={post.frontmatter.date}
              readingTime="5 min"
            />
          ))}
          <BlogPostTeaser
            title="Understanding TypeScript Generics"
            description="A deep dive into TypeScript generics and their practical applications."
            date="November 15, 2023"
            readingTime="8 min"
          />
        </div>
      </div>
    </div>
  );
}
