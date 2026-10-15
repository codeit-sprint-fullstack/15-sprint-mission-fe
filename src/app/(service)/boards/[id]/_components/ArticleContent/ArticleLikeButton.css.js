import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 12px',
  minHeight: '40px',
  border: `1px solid ${colorTokens.secondary.gray200}`,
  borderRadius: '35px',
  backgroundColor: '#fff',
  cursor: 'pointer',
});

export const likeIcon = style({
  width: '32px',
  height: 'auto',
});

export const likeCount = style({
  fontSize: typographyTokens.fontSize.lg,
  fontWeight: typographyTokens.fontWeight.medium,
  color: colorTokens.secondary.gray500,
});
