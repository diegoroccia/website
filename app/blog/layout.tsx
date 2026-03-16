export default function BlogPageLayouts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto max-w-4xl py-20 px-4">
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
          {children}
        </div>
      </div>
    </div>
  );
}
