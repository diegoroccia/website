import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] px-4">
      <section className="max-w-[800px] w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
            Hi, I&apos;m <span className="text-primary">Diego Roccia</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            A software engineer building modern applications with focus on simplicity and performance.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/blog">
              Read Blog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="https://github.com/diegoroccia" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>

        <div className="pt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <h3 className="font-bold text-primary">Web Dev</h3>
            <p className="text-sm text-muted-foreground">React, Next.js, and modern CSS for high-performance frontends.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-primary">Backend</h3>
            <p className="text-sm text-muted-foreground">Scalable services with Node.js, Go, and PostgreSQL.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-primary">Open Source</h3>
            <p className="text-sm text-muted-foreground">Contributing to tools that make developer lives easier.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
