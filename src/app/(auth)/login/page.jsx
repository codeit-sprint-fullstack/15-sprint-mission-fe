'use client';

import logo from '@/assets/common/logo.svg';
import wordType from '@/assets/common/word_type.svg';
import icEyeOff from '@/assets/login/ic_eye_off.svg';
import icEyeOn from '@/assets/login/ic_eye_on.svg';
import icGoogle from '@/assets/login/ic_google.svg';
import icKakao from '@/assets/login/ic_kakao.svg';
import { signIn } from '@/lib/api/auth';
import { useAuth } from '@/providers/AuthProvider';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as styles from './page.css';

function LoginPage() {
  const router = useRouter();
  const { login, isLoading, isLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  // 페이지 가드
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.replace('/items');
    }
  }, [isLoading, isLoggedIn, router]);

  const checkPasswordError = (password) => {
    if (password.length === 0) {
      setPasswordError(false);
    } else {
      setPasswordError(password.length < 8);
    }
  };

  const checkEmailError = (email) => {
    if (email.length === 0) {
      setEmailError(false);
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailRegex.test(email));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);

      const authData = await signIn({ email, password });

      login(authData);

      // 로그인 성공시 페이지 이동
      router.push('/items');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert(error.message || '로그인에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  const isEmailValid = email.trim() !== '' && !emailError;
  const isPasswordValid = password.trim().length >= 8 && !passwordError;
  const isFormValid = isEmailValid && isPasswordValid;

  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image src={logo} className={styles.symbol} alt="심볼" />
          <Image src={wordType} className={styles.wordType} alt="로고" />
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="email">
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                checkEmailError(e.target.value);
              }}
              placeholder="아이디를 입력해주세요"
              className={clsx(styles.inputForm, emailError && styles.isError)}
            />
            {emailError && (
              <p className={styles.errorMessage}>잘못된 이메일 형식입니다.</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="password">
              비밀번호
            </label>
            <div className={styles.passwordInputContainer}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkPasswordError(e.target.value);
                }}
                placeholder="비밀번호를 입력해주세요"
                className={clsx(
                  styles.inputForm,
                  passwordError && styles.isError,
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.showPasswordButton}
              >
                {showPassword ? (
                  <Image src={icEyeOff} alt="비밀번호 숨기기" />
                ) : (
                  <Image src={icEyeOn} alt="비밀번호 보이기" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className={styles.errorMessage}>
                비밀번호는 8자 이상이어야 합니다.
              </p>
            )}
          </div>
          <button
            className={clsx(
              styles.submitButton,
              isFormValid && styles.isActive,
            )}
            type="submit"
            disabled={!isFormValid || submitting}
          >
            로그인
          </button>
        </form>
        <div className={styles.simpleLoginContainer}>
          <p className={styles.simpleLoginHeader}>간편 로그인하기</p>
          <div className={styles.simpleLoginButtons}>
            <button type="button" className={styles.simpleLoginButton}>
              <Image src={icGoogle} alt="구글 로그인" />
            </button>
            <button type="button" className={styles.simpleLoginButton}>
              <Image src={icKakao} alt="카카오 로그인" />
            </button>
          </div>
        </div>
        <div className={styles.registerContainer}>
          <p className={styles.registerQuestion}>
            아직 판다마켓이 처음이신가요?
          </p>
          <Link href={'/signup'} className={styles.registerLink}>
            회원가입
          </Link>
        </div>
      </div>
    </article>
  );
}

export default LoginPage;
