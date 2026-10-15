import {
  colorTokens,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  typographyTokens,
} from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '24px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      padding: '16px',
    },
  },
});

export const content = style({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      gap: '24px',
    },
  },
});

export const sectionTitle = style({
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray900,
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['2lg'],
    },
  },
});

export const articleListSectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const articleWriteBtn = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '88px',
  height: '42px',
  backgroundColor: colorTokens.primary[100],
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#fff',
});

export const bestArticleSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      gap: '16px',
    },
  },
});

export const articleListSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      gap: '16px',
    },
  },
});
