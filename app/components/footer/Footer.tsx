import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Mail, link: "mailto:diego.roccia@gmail.com", label: "Email" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/diegoroccia", label: "LinkedIn" },
  { icon: Github, link: "https://www.github.com/diegoroccia", label: "GitHub" },
  { icon: Twitter, link: "https://twitter.com/diegoroccia", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 z-50">
      <div className="container flex items-center justify-center gap-4 max-w-screen-2xl">
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
    </footer>
  );
}
