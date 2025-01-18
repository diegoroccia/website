import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const socialLinks: { network: IconName; link: string }[] = [
  { network: "telegram", link: "mailto:diego.roccia@gmail.com" },
  { network: "linkedin", link: "https://www.linkedin.com/in/diegoroccia" },
  { network: "github", link: "https://www.github.com/diegoroccia" },
  { network: "facebook", link: "https://www.facebook.com/diego.roccia" },
  { network: "instagram", link: "https://www.instagram.com/diegoroccia" },
];

export default function Footer() {
  return (
    <footer className="flex-auto w-full text-slate-600 fixed bottom-0 p-4">
      <div className="flex justify-end space-x-2">
        {socialLinks.map((social) => (
          <a
            key={social.network}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.network}
          >
            <FontAwesomeIcon
              icon={["fab", social.network as IconName]}
              className="w-4 h-4"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
