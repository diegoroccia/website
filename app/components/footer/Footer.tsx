import styles from "@/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/diegoroccia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
          Github
        </a>
        <a
          href="https://linkedin.com/in/diegoroccia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.icon} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
