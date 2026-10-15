import {
  colorTokens,
  TABLET_MAX_WIDTH,
  typographyTokens,
} from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '384px',
  flexShrink: '0',
  gap: '16px',
  padding: '0 24px 16px',
  backgroundColor: colorTokens.secondary.gray50,
  borderRadius: '8px',
  textDecoration: 'none',
  color: 'inherit',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      flexBasis: '340px',
    },
  },
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  gap: '4px',
  padding: '2px 24px 2px',
  backgroundColor: colorTokens.primary[100],
  borderRadius: '0 0 16px 16px',
  fontSize: typographyTokens.fontSize.lg,
  fontWeight: typographyTokens.fontWeight.semibold,
  lineHeight: '1.666666',
  color: '#fff',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      gap: '40px',
    },
  },
});

export const itemInfoContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  alignItems: 'center',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      gap: '40px',
    },
  },
});

export const itemTitle = style({
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.semibold,
  lineHeight: '1.6',
  color: colorTokens.secondary.gray800,
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['2lg'],
    },
  },
});

export const articleInfoContent = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const articleInfoUser = style({
  display: 'flex',
  gap: '8px',
});

export const articleInfoUserName = style({
  fontSize: typographyTokens.fontSize.md,
  color: colorTokens.secondary.gray600,
});

export const articleInfoLikeContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: typographyTokens.fontSize.md,
  color: colorTokens.secondary.gray500,
});

export const articleInfoDate = style({
  fontSize: typographyTokens.fontSize.md,
  color: colorTokens.secondary.gray400,
});
