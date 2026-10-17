import localFont from "next/font/local";
import "@/styles/main.css";
import "@/styles/reset.css";

const pretendardFont = localFont({
  src: "../fonts/Pretendard-Regular.woff2",
});

export const metadata = {
  title: "Panda Market",
  description: "Feel free to buy and sell items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendardFont.className}>
      <body>{children}</body>
    </html>
  );
}
