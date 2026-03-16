import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <article className="group relative flex flex-col items-start p-6 rounded-2xl border border-border bg-card transition-colors hover:border-primary/50">
      <h2 className="text-xl font-bold tracking-tight text-foreground">
        <Link href={`/blog/${slug}`}>
          <span className="absolute inset-0 rounded-2xl" />
          {title}
        </Link>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-6 flex items-center gap-4 text-xs font-medium text-muted-foreground">
        <time>{date}</time>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{readingTime} read</span>
      </div>
      <div className="mt-4 flex items-center text-xs font-bold text-primary group-hover:underline">
        Read more <ArrowRight className="ml-1 h-3 w-3" />
      </div>
    </article>
  );
}
