export default function BlogPageLayouts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
        </div>

        {/* Blog post list */}
        <div className="grid gap-6">{children}</div>
      </div>
    </div>
  );
}
