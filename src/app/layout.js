import "@/styles/reset.css.js";
import "@/styles/globals.css.js";
import { GlobalLayout } from "@/components/layouts/GlobalLayout";

export const metadata = {
  title: "판다마켓",
  description:
    "판다마켓은 따뜻한 중고거래를 위한 커뮤니티 플랫폼이에요. 여러분은 이곳에서 상품을 등록하고, 다른 사용자들과 소통하며, 자유롭게 이야기를 나눌 수 있어요.",
  icons: {
    icon: "/logo/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
