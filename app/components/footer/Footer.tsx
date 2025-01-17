import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Footer() {
  return (
    <footer className="flex-auto w-full text-slate-600 absolute bottom-4 pb-4 pr-4">
      <div className="flex justify-end space-x-2">
        <a
          href="https://github.com/diegoroccia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} className=" w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/diegoroccia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="w-4 s-4" />
        </a>
      </div>
    </footer>
  );
}
