import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Nav } from "@/components/common/Header/Nav";

export default function WithNavLayout({ children }) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <div>{children}</div>
      <Footer />
    </>
  );
}
