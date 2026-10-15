import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const replyLabel = style({
  fontSize: typographyTokens.fontSize.lg,
  color: colorTokens.secondary.gray800,
});

export const replyTextarea = style({
  marginTop: '8px',
  minHeight: '104px',
  padding: '16px 24px',
  resize: 'none',
  border: 'none',
  borderRadius: '12px',
  backgroundColor: '#F3F4F6',
  fontSize: typographyTokens.fontSize.lg,
  color: colorTokens.secondary.gray800,
  '::placeholder': {
    fontSize: typographyTokens.fontSize.lg,
    color: colorTokens.secondary.gray400,
  },
});

export const registerBtn = style({
  marginTop: '16px',
  width: '74px',
  height: '42px',
  alignSelf: 'flex-end',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: colorTokens.secondary.gray400,
  color: colorTokens.secondary.gray100,
});

export const isActive = style({
  backgroundColor: colorTokens.primary[100],
});
