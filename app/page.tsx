import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] px-4 overflow-hidden">
      <AnimatedBackground />
      <section className="max-w-[800px] w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center mb-6 animate-in fade-in duration-500">
            <Image
              src="/profile.jpg"
              alt="Diego Roccia"
              width={150}
              height={150}
              className="rounded-full border-4 border-primary/20 shadow-lg"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground animate-in fade-in duration-500">
            Hi, I&apos;m <span className="text-primary">Diego Roccia</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto animate-in fade-in duration-500">
            Platform & Cloud Infrastructure Engineer specializing in FinOps and Technical Leadership.
          </p>
          <p className="text-md text-muted-foreground animate-in fade-in duration-500">
            Based in Berlin, Germany
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-500">
          <Button asChild size="lg" className="rounded-full px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
            <Link href="/about">
              About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
            <Link href="/blog">
              Blog
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
            <a href="https://github.com/diegoroccia" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>

        <div className="pt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="space-y-2 animate-in fade-in duration-500 transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-primary">Cloud & FinOps</h3>
            <p className="text-sm text-muted-foreground">AWS cloud architecture optimization and cost management at scale.</p>
          </div>
          <div className="space-y-2 animate-in fade-in duration-500 transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-primary">Platform Leadership</h3>
            <p className="text-sm text-muted-foreground">Building and leading teams to deliver resilient infrastructure platforms.</p>
          </div>
          <div className="space-y-2 animate-in fade-in duration-500 transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-primary">Beyond Code</h3>
            <p className="text-sm text-muted-foreground">Passionate about cooking, board games, home automation, and family time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
