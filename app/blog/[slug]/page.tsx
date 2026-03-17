import { getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import MermaidRenderer from "@/components/MermaidRenderer";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await params;
  const posts = getAllPosts();

  const post = posts.find((post) => post.slug === p.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="mx-auto py-20 px-8 md:px-16 lg:px-32">
      <header className="mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
          {post.title}
        </h1>
        <p className="text-muted-foreground">
          Published on {String(post.date)} • 5 min read
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
