import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Mail, link: "mailto:diego.roccia@gmail.com", label: "Email" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/diegoroccia", label: "LinkedIn" },
  { icon: Github, link: "https://www.github.com/diegoroccia", label: "GitHub" },
  { icon: Twitter, link: "https://twitter.com/diegoroccia", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-2xl">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <span className="font-bold text-primary">Diego Roccia</span>. The source code is available on <a href="https://github.com/diegoroccia" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">GitHub</a>.
          </p>
        </div>
        <div className="flex gap-4 px-8 md:px-0">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
