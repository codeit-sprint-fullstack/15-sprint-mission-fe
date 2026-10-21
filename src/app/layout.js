import "@/styles/globals.css.js";
import Providers from "./providers";

export const metadata = {
  title: "판다 마켓",
  description: "중고 물품을 사고팔 수 있는 판다마켓입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
