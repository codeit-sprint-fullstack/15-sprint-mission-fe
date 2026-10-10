import { Header } from "../Header";
import { Footer } from "../Footer";

export default function GlobalLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
