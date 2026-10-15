import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const articleHeader = style({
  paddingBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  borderBottom: '1px solid #E5E7EB',
});

export const articleHeaderTop = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
});

export const articleTitle = style({
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray800,
});

export const articleHeaderBottom = style({
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
});

export const articleInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const articleInfoProfileContainer = style({
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  overflow: 'hidden',
});

export const articleInfoProfile = style({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const articleInfoUser = style({
  fontSize: typographyTokens.fontSize.md,
  fontWeight: typographyTokens.fontWeight.medium,
  color: colorTokens.secondary.gray600,
});

export const articleInfoDate = style({
  fontSize: typographyTokens.fontSize.md,
  fontWeight: typographyTokens.fontWeight.medium,
  color: colorTokens.secondary.gray400,
});

export const articleInfoDivider = style({
  borderLeft: '1px solid #E5E7EB',
  alignSelf: 'stretch',
});

export const articleBody = style({});

export const articleContent = style({
  fontSize: typographyTokens.fontSize['2lg'],
  color: colorTokens.secondary.gray800,
});
