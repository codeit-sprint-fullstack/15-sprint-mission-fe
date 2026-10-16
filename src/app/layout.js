import "@/styles/global.css.js";
import "@/styles/reset.css.js";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "판다마켓",
  description: "중고마켓",
};

const pretendard = localFont({
  src: "../assets/fonts/Pretendard-Variable.woff2",
  weight: "45 920",
  display: "swap",
});

const rokafSans = localFont({
  src: [
    { path: "../assets/fonts/ROKAF-Sans-Medium.otf", weight: "500" },
    { path: "../assets/fonts/ROKAF-Sans-Bold.otf", weight: "700" },
  ],
  display: "swap",
  variable: "--font-rokaf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={rokafSans.variable}>
      <body className={pretendard.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
