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
import { useSignUp } from "@/domains/auth/hooks/useAuthQueries";
import { getErrorMessage } from "@/apis/httpClient";
import * as styles from "../AuthForm.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignUpContainer() {
  const router = useRouter();
  const redirecting = useRedirectIfLoggedIn();
  const [modalMessage, setModalMessage] = useState("");
  const [modalIsSuccess, setModalIsSuccess] = useState(false);
  const { mutate, isPending } = useSignUp();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = (values) => {
    if (values.password !== values.passwordConfirmation) {
      setModalIsSuccess(false);
      setModalMessage("비밀번호가 일치하지 않아요.");
      return;
    }
    mutate(values, {
      onSuccess: () => {
        setModalIsSuccess(true);
        setModalMessage("가입이 완료되었습니다.");
      },
      onError: (error) => {
        setModalIsSuccess(false);
        setModalMessage(getErrorMessage(error, "회원가입에 실패했어요."));
      },
    });
  };

  const handleModalClose = () => {
    setModalMessage("");
    if (modalIsSuccess) {
      router.push("/items");
    }
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
          id="nickname"
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          autoComplete="nickname"
          error={errors.nickname}
          registration={register("nickname", {
            required: "닉네임을 입력해주세요.",
          })}
        />
        <TextField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          autoComplete="new-password"
          error={errors.password}
          registration={register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: { value: 8, message: "비밀번호를 8자 이상 입력해주세요." },
            deps: ["passwordConfirmation"],
          })}
        />
        <TextField
          id="passwordConfirmation"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          autoComplete="new-password"
          error={errors.passwordConfirmation}
          registration={register("passwordConfirmation", {
            required: "비밀번호를 다시 한 번 입력해주세요.",
            validate: (value) => value === getValues("password") || "비밀번호가 일치하지 않아요.",
          })}
        />
        <button type="submit" className={styles.submit} disabled={!isValid || isPending}>
          회원가입
        </button>
      </form>

      <SocialLogin />

      <p className={styles.bottom}>
        이미 회원이신가요?
        <Link href="/signin" className={styles.switchLink}>
          로그인
        </Link>
      </p>

      {modalMessage && <AlertModal message={modalMessage} onClose={handleModalClose} />}
    </AuthShell>
  );
}