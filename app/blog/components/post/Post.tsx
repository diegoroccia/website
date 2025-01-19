import Link from "next/link";

interface BlogPostTeaserProps {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  slug: string;
}

export default function BlogPostTeaser({
  title,
  description,
  date,
  readingTime,
  slug,
}: BlogPostTeaserProps) {
  return (
    <article className="group relative rounded-lg border p-6 hover:bg-slate-800/50">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="flex items-center space-x-4 text-sm">
        <time>{date}</time>
        <span>•</span>
        <span>{readingTime} read</span>
        <Link href={`/blog/${slug}`}>Read</Link>
      </div>
    </article>
  );
}
