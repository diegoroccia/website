import { getPosts } from "@/lib/utils";

const posts = getPosts();

export function generateStaticParams() {
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

  const post = posts.find((post) => post.slug === p.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
