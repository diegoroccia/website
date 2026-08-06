import Link from "next/link";
import type { Metadata } from "next";
import NotFoundTerminal from "./components/NotFoundTerminal";

export const metadata: Metadata = {
  title: "Not Found | Diego Roccia",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-4 font-mono">
      <NotFoundTerminal />
      <p className="text-muted-foreground max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-primary underline underline-offset-4 hover:no-underline transition-all"
      >
        cd ~
      </Link>
    </div>
  );
}
