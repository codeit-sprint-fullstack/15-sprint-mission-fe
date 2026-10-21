import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import * as styles from "./GlobalLayout.css.js";

export default function GlobalLayout({ children }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
