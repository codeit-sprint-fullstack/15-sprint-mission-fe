"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/domains/auth/components/AuthShell";
import { TextField } from "@/domains/auth/components/TextField";
import { SocialLogin } from "@/domains/auth/components/SocialLogin";
import { AlertModal } from "@/components/Modal";
import { useRedirectIfLoggedIn } from "@/domains/auth/hooks/useRedirectIfLoggedIn";
import { useSignIn } from "@/domains/auth/hooks/useAuthQueries";
import { getErrorMessage } from "@/apis/httpClient";
import * as styles from "../AuthForm.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignInContainer() {
  const router = useRouter();
  const redirecting = useRedirectIfLoggedIn();
  const [modalMessage, setModalMessage] = useState("");
  const { mutate, isPending } = useSignIn();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: () => router.push("/items"),
      onError: (error) => {
        setError("email", { type: "server", message: "이메일을 확인해 주세요." });
        setError("password", { type: "server", message: "비밀번호를 확인해 주세요." });
        setModalMessage(getErrorMessage(error, "로그인에 실패했어요."));
      },
    });
  };

  if (redirecting) return null;

  return (
    <AuthShell>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          id="email"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="email"
          error={errors.email}
          registration={register("email", {
            required: "이메일을 입력해주세요.",
            pattern: { value: EMAIL_PATTERN, message: "잘못된 이메일입니다." },
          })}
        />
        <TextField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          autoComplete="current-password"
          error={errors.password}
          registration={register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: { value: 8, message: "비밀번호를 8자 이상 입력해주세요." },
          })}
        />
        <button type="submit" className={styles.submit} disabled={!isValid || isPending}>
          로그인
        </button>
      </form>

      <SocialLogin />

      <p className={styles.bottom}>
        판다마켓이 처음이신가요?
        <Link href="/signup" className={styles.switchLink}>
          회원가입
        </Link>
      </p>

      {modalMessage && <AlertModal message={modalMessage} onClose={() => setModalMessage("")} />}
    </AuthShell>
  );
}