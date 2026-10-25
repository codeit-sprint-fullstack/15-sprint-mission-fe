import "../reset.css";
import "../index.css";
import GlobalLayout from "../components/GlobalLayout/GlobalLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
