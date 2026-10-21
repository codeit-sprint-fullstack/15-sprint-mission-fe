import { SignInContainer } from "@/domains/auth/containers/SignInContainer";

export const metadata = {
  title: "로그인 | 판다마켓",
  description: "판다마켓에 로그인해 주세요.",
};

export default async function SignInPage({ searchParams }) {
  const { error } = await searchParams;

  return <SignInContainer initialErrorCode={error ?? ""} />;
}
