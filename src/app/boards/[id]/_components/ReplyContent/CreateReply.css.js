import { colorTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const replyTextarea = style({
  marginTop: '8px',
});

export const registerBtn = style({
  marginTop: '16px',
  alignSelf: 'flex-end',
});

export const isActive = style({
  backgroundColor: colorTokens.primary[100],
});
