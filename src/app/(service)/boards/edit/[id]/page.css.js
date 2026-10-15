import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '24px',
  minHeight: 'calc(100vh - 278px)',
});

export const content = style({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray800,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const cancelBtn = style({
  width: '72px',
  height: '42px',
  fontSize: typographyTokens.fontSize.lg,
  backgroundColor: colorTokens.secondary.gray200,
  color: colorTokens.secondary.gray800,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
});

export const createBtn = style({
  width: '72px',
  height: '42px',
  fontSize: typographyTokens.fontSize.lg,
  backgroundColor: colorTokens.secondary.gray400,
  color: colorTokens.secondary.gray100,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
});

export const fieldLabel = style({
  fontSize: typographyTokens.fontSize['2lg'],
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray800,
});

export const fieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const titleInput = style({
  height: '56px',
  padding: '0 24px',
  backgroundColor: colorTokens.secondary.gray100,
  borderRadius: '12px',
  border: 'none',
  fontSize: typographyTokens.fontSize.lg,
  '::placeholder': {
    fontSize: typographyTokens.fontSize.lg,
    color: colorTokens.secondary.gray400,
  },
});

export const contentTextarea = style({
  minHeight: '282px',
  padding: '16px 24px',
  backgroundColor: colorTokens.secondary.gray100,
  borderRadius: '12px',
  border: 'none',
  resize: 'none',
  fontSize: typographyTokens.fontSize.lg,
  '::placeholder': {
    fontSize: typographyTokens.fontSize.lg,
    color: colorTokens.secondary.gray400,
  },
});

export const isActive = style({
  backgroundColor: colorTokens.primary[100],
});
