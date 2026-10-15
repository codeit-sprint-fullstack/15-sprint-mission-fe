import {
  colorTokens,
  MOBILE_MAX_WIDTH,
  typographyTokens,
} from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  paddingBottom: '25px',
  backgroundColor: '#FCFCFC',
  color: 'inherit',
  textDecoration: 'none',
  borderBottom: '1px solid #E5E7EB',
});

export const articleItemTop = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
});

export const articletTitle = style({
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.semibold,
  lineHeight: '1.6',
  color: colorTokens.secondary.gray800,
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['2lg'],
    },
  },
});

export const articleItemBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const articleUser = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const articleUserName = style({
  fontSize: typographyTokens.fontSize.md,
  color: colorTokens.secondary.gray600,
});

export const articleCreatedAt = style({
  fontSize: typographyTokens.fontSize.md,
  color: colorTokens.secondary.gray400,
});

export const articleLike = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: typographyTokens.fontSize.lg,
  color: colorTokens.secondary.gray500,
});
