import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <FontAwesomeIcon icon={faCloud} />
        </div>
        <h1 className={styles.title}>Diego Roccia</h1>
      </main>
      <Footer />
    </div>
  );
}
