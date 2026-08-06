"use client";

import { usePathname } from "next/navigation";

export default function NotFoundTerminal() {
  const pathname = usePathname();

  return (
    <div className="text-left w-full max-w-md rounded-lg border border-border bg-card p-4 text-sm leading-relaxed">
      <p className="text-muted-foreground">
        <span className="text-primary">guest@roccia.sh</span>:
        <span className="text-primary">~</span>${" "}
        <span className="text-foreground">cd {pathname}</span>
      </p>
      <p className="mt-1 text-destructive">
        bash: cd: {pathname}: No such file or directory
      </p>
      <p className="mt-3 text-muted-foreground">
        <span className="text-primary">guest@roccia.sh</span>:
        <span className="text-primary">~</span>${" "}
        <span className="cursor-blink text-foreground">▋</span>
      </p>
    </div>
  );
}
