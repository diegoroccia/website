import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import MermaidRenderer from "@/components/MermaidRenderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Diego Roccia`,
    description: post.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="mx-auto py-20 px-8 md:px-16 lg:px-32">
      <header className="mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
          {post.title}
        </h1>
        <p className="text-muted-foreground">
          Published on {post.date} • {post.readingTime} read
        </p>
      </header>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <MermaidRenderer />
    </article>
  );
}
