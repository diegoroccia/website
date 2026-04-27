import Image from "next/image";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full px-4 py-4">
      <AnimatedBackground />
      <section className="max-w-[800px] mx-auto text-center space-y-4 md:space-y-8">
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
            Building things, learning constantly, loving the journey.
          </p>
          <p className="text-base text-muted-foreground animate-in fade-in duration-500">
            Italian, currently based in Berlin
          </p>
        </div>

        {/* <div className="pt-4 md:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-left">
          <div className="p-6 space-y-2 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm animate-in fade-in duration-500 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <h3 className="font-bold text-primary">Professional</h3>
            <p className="text-sm text-muted-foreground">Platform engineering, cloud infrastructure, FinOps, and leading teams to build resilient systems at scale.</p>
          </div>
          <div className="p-6 space-y-2 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm animate-in fade-in duration-500 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <h3 className="font-bold text-primary">Tech Projects</h3>
            <p className="text-sm text-muted-foreground">Home automation, open source contributions, and experimenting with new technologies.</p>
          </div>
          <div className="p-6 space-y-2 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm animate-in fade-in duration-500 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <h3 className="font-bold text-primary">Life</h3>
            <p className="text-sm text-muted-foreground">Family time, cooking adventures, parenting, board games, and discovering Berlin.</p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
