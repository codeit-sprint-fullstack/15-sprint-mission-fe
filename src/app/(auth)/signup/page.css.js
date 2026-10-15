import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '0 53px',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
});

export const content = style({
  width: '100%',
  maxWidth: '640px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

// formContainer
export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

// signupForm
export const signupForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const submitButton = style({
  minHeight: '56px',
  border: 'none',
  borderRadius: '40px',
  backgroundColor: colorTokens.secondary.gray400,
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.semibold,
  color: colorTokens.secondary.gray100,
  cursor: 'pointer',
});

export const isActive = style({
  backgroundColor: colorTokens.primary[100],
});

// inputs
export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const inputLabel = style({
  fontSize: typographyTokens.fontSize['2lg'],
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray800,
});

export const inputForm = style({
  width: '100%',
  minHeight: '26px',
  padding: '15px 24px',
  border: 'none',
  borderRadius: '12px',
  fontSize: typographyTokens.fontSize.lg,
  fontWeight: typographyTokens.fontWeight.regular,
  color: colorTokens.secondary.gray800,
  backgroundColor: colorTokens.secondary.gray100,
  '::placeholder': {
    color: colorTokens.secondary.gray400,
  },
});

// logo
export const logoContainer = style({
  paddingBottom: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '22px',
});

export const symbol = style({
  width: '103px',
  height: 'auto',
});

export const wordType = style({
  width: '266px',
  height: 'auto',
});

// form
export const passwordInputContainer = style({
  position: 'relative',
});

export const showPasswordButton = style({
  position: 'absolute',
  right: '24px',
  top: '50%',
  transform: 'translateY(-50%)',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

// simplelogin
export const simpleLoginContainer = style({
  padding: '16px 23px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#E6F2FF',
});

export const simpleLoginHeader = style({
  fontSize: typographyTokens.fontSize.lg,
  fontWeight: typographyTokens.fontWeight.medium,
  color: colorTokens.secondary.gray800,
});

export const simpleLoginButtons = style({
  display: 'flex',
  gap: '16px',
});

export const simpleLoginButton = style({
  padding: '0px',
  margin: '0px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

// login
export const loginContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
});

export const loginQuestion = style({
  fontSize: typographyTokens.fontSize.md,
  fontWeight: typographyTokens.fontWeight.medium,
  color: colorTokens.secondary.gray800,
});

export const loginLink = style({
  fontSize: typographyTokens.fontSize.md,
  fontWeight: typographyTokens.fontWeight.medium,
  color: colorTokens.primary[100],
});

export const errorMessage = style({
  fontSize: typographyTokens.fontSize.md,
  fontWeight: typographyTokens.fontWeight.semibold,
  color: colorTokens.error.red,
});

export const isError = style({
  outline: '1px solid ' + colorTokens.error.red,
});
