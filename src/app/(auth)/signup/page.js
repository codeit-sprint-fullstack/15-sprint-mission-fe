import { SignUpContainer } from "@/domains/auth/containers/SignUpContainer";

export const metadata = {
  title: "회원가입 | 판다마켓",
  description: "판다마켓에 회원가입하고 중고 물품을 거래해 보세요.",
};

export default function SignUpPage() {
  return <SignUpContainer />;
}