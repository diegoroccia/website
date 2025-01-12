import styles from "./page.module.css";
import Footer from "./footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image
            alt="Logo"
            src="/logo.png"
            width={100}
            height={100}
            className={styles.logo}
          />
        </div>
        <h1 className={styles.title}>Diego Roccia</h1>
      </main>
      <Footer />
    </div>
  );
}
