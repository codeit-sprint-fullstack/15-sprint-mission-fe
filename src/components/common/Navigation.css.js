import {
  colorTokens,
  MOBILE_MAX_WIDTH,
  typographyTokens,
} from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '0 24px',
  borderBottom: '1px solid #dfdfdf',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: { padding: '0 16px' },
  },
});

export const wrapper = style({
  margin: '0 auto',
  maxWidth: '1520px',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
  cursor: 'pointer',
});

export const logo = style({
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      display: 'none',
    },
  },
});

export const wordType = style({
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      maxWidth: '81px',
    },
  },
});

export const links = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      gap: '4px',
    },
  },
});

export const menuBoard = style({
  margin: '0 15px',
  fontSize: typographyTokens.fontSize['2lg'],
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray600,
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize.lg,
      margin: '0 4px',
    },
  },
});

export const menuItems = style({
  margin: '0 15px',
  fontSize: typographyTokens.fontSize['2lg'],
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray600,
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize.lg,
      margin: '0 4px',
    },
  },
});

export const activeMenu = style({
  color: colorTokens.primary[100],
});

export const loginButton = style({
  width: '128px',
  height: '48px',
  color: colorTokens.secondary.gray100,
  backgroundColor: colorTokens.primary[100],
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
});

export const loginButtonWithLinks = style({
  maxWidth: '88px',
});
