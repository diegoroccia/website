import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Diego Roccia</h1>
      </main>
      <Footer />
    </div>
  );
}
