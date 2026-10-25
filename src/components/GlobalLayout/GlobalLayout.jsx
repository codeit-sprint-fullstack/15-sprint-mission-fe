import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export default function GlobalLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main style={{ flex: 1, paddingTop: "68px" }}>{children}</main>
      <Footer />
    </div>
  );
}
