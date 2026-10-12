import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const readOnlyContainer = style({
  paddingBottom: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  backgroundColor: '#FCFCFC',
  borderBottom: `1px solid ${colorTokens.secondary.gray200}`,
});

export const replyTop = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4px',
});

export const replyContent = style({
  fontSize: typographyTokens.fontSize.md,
  color: colorTokens.secondary.gray800,
  lineHeight: '1.7',
});

export const replyBottom = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const replyProfileContainer = style({
  width: '32px',
  height: '32px',
});

export const replyProfileImage = style({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const replyInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const replyUser = style({
  fontSize: typographyTokens.fontSize.xs,
  color: colorTokens.secondary.gray600,
});

export const replyDate = style({
  fontSize: typographyTokens.fontSize.xs,
  color: colorTokens.secondary.gray400,
});

export const editContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const editTextarea = style({
  padding: '16px 24px',
  width: '100%',
  minHeight: '80px',
  resize: 'none',
  backgroundColor: colorTokens.secondary.gray100,
  border: 'none',
  borderRadius: '12px',
  fontSize: typographyTokens.fontSize.md,
  color: colorTokens.secondary.gray800,
  '::placeholder': {
    fontSize: typographyTokens.fontSize.md,
    color: colorTokens.secondary.gray400,
  },
});

export const cancelButton = style({
  width: '70px',
  height: '42px',
  border: 'none',
  backgroundColor: '#fff',
  fontSize: typographyTokens.fontSize.lg,
  fontWeight: typographyTokens.fontWeight.semibold,
  color: colorTokens.secondary.gray500,
  cursor: 'pointer',
});

export const submitButton = style({
  width: '106px',
  height: '42px',
  border: 'none',
  borderRadius: '12px',
  backgroundColor: colorTokens.primary[100],
  fontSize: typographyTokens.fontSize.lg,
  fontWeight: typographyTokens.fontWeight.semibold,
  color: colorTokens.secondary.gray100,
  cursor: 'pointer',
});

export const replyEditBottom = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const buttonGroup = style({
  display: 'flex',
  gap: '4px',
});
