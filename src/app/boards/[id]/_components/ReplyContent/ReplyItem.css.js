import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
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
