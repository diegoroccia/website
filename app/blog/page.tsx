import { Metadata } from "next";
import BlogPostTeaser from "./components/post/Post";

export const metadata: Metadata = {
  title: "Blog | Diego Roccia",
  description:
    "Read my thoughts on software development, technology, and more.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-slate-400">
            My thoughts on software development, technology, and more.
          </p>
        </div>

        {/* Blog post list */}
        <div className="grid gap-6">
          <BlogPostTeaser
            title="Getting Started with Next.js 14"
            description="An introduction to the latest features in Next.js 14 and how to use them effectively."
            date="December 1, 2023"
            readingTime="5 min"
          />
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
