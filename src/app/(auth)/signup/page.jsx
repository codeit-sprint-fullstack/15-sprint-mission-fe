'use client';

import logo from '@/assets/common/logo.svg';
import wordType from '@/assets/common/word_type.svg';
import icEyeOff from '@/assets/login/ic_eye_off.svg';
import icEyeOn from '@/assets/login/ic_eye_on.svg';
import icGoogle from '@/assets/login/ic_google.svg';
import icKakao from '@/assets/login/ic_kakao.svg';
import { signUp } from '@/lib/api/auth';
import { useAuth } from '@/providers/AuthProvider';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as styles from './page.css';

function SignupPage() {
  const router = useRouter();
  const { login, isLoading, isLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // 페이지 가드
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.replace('/items');
    }
  }, [isLoading, isLoggedIn, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      const authData = await signUp({
        email,
        nickname,
        password,
        passwordConfirmation: passwordConfirm,
      });
      login(authData);

      // 회원가입 성공시 페이지 이동
      router.push('/items');
    } catch (error) {
      console.error('회원가입에 실패했습니다.', error.message);
    } finally {
      setSubmitting(false);
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

  const checkPasswordError = (password) => {
    if (password.length === 0) {
      setPasswordError(false);
    } else {
      setPasswordError(password.length < 8);
    }
  };

  const passwordConfirmError =
    passwordConfirm.length > 0 && password !== passwordConfirm;

  const isEmailValid = email.trim() !== '' && !emailError;
  const isPasswordValid = password.trim() > 8 && !passwordError;
  const isPasswordConfirmValid =
    passwordConfirm.trim() > 8 && password === passwordConfirm;
  const isNicknameValid = nickname.trim() !== '';

  const isFormValid =
    isEmailValid &&
    isPasswordValid &&
    isNicknameValid &&
    isPasswordConfirmValid;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image src={logo} className={styles.symbol} alt="심볼" />
          <Image src={wordType} className={styles.wordType} alt="로고" />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.signupForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                이메일
              </label>
              <input
                id="email"
                type="email"
                value={email}
                autoFocus
                placeholder="이메일을 입력해주세요"
                className={clsx(styles.inputForm, emailError && styles.isError)}
                onChange={(event) => {
                  setEmail(event.target.value);
                  checkEmailError(event.target.value);
                }}
              />
            </div>
            {emailError && (
              <p className={styles.errorMessage}>잘못된 이메일 형식입니다.</p>
            )}
            <div className={styles.inputGroup}>
              <label htmlFor="nickname" className={styles.inputLabel}>
                닉네임
              </label>
              <input
                id="nickname"
                value={nickname}
                type="text"
                placeholder="닉네임을 입력해주세요"
                className={styles.inputForm}
                onChange={(event) => {
                  setNickname(event.target.value);
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>
                비밀번호
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  id="password"
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="비밀번호를 입력해주세요"
                  className={clsx(
                    styles.inputForm,
                    passwordError && styles.isError,
                  )}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    checkPasswordError(event.target.value);
                  }}
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
            <div className={styles.inputGroup}>
              <label htmlFor="passwordConfirm" className={styles.inputLabel}>
                비밀번호 확인
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  id="passwordConfirm"
                  value={passwordConfirm}
                  type={showPasswordConfirm ? 'text' : 'password'}
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  className={clsx(
                    styles.inputForm,
                    passwordConfirmError && styles.isError,
                  )}
                  onChange={(event) => {
                    setPasswordConfirm(event.target.value);
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className={styles.showPasswordButton}
                >
                  {showPasswordConfirm ? (
                    <Image src={icEyeOff} alt="비밀번호 숨기기" />
                  ) : (
                    <Image src={icEyeOn} alt="비밀번호 보이기" />
                  )}
                </button>
              </div>
              {passwordConfirmError && (
                <p className={styles.errorMessage}>
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>
            <button
              disabled={submitting || !isFormValid}
              className={clsx(
                styles.submitButton,
                isFormValid && styles.isActive,
              )}
            >
              회원가입
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
          <div className={styles.loginContainer}>
            <p className={styles.loginQuestion}>이미 회원이신가요?</p>
            <Link href={'/login'} className={styles.loginLink}>
              로그인
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
