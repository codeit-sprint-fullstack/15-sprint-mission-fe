import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const replyList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const emptyContainer = style({
  textAlign: 'center',
});

export const emptyMessage = style({
  fontSize: typographyTokens.fontSize.lg,
  color: colorTokens.secondary.gray400,
  lineHeight: '1.6',
});
