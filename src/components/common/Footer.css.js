import { colorTokens, MOBILE_MAX_WIDTH } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '160px',
  padding: '0 24px',
  paddingTop: '32px;',
  backgroundColor: colorTokens.secondary.gray900,
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      padding: '0 16px',
      paddingTop: '32px;',
    },
  },
});

export const content = style({
  maxWidth: '1520px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridRowGap: '24px',
    },
  },
});
export const contentLeft = style({
  color: colorTokens.secondary.gray400,
});

export const policy = style({
  textDecoration: 'none',
  color: colorTokens.secondary.gray200,
});

export const faq = style({
  textDecoration: 'none',
  color: colorTokens.secondary.gray200,
});

export const contentCenter = style({
  display: 'flex',
  gap: '30px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      order: '-1',
    },
  },
});

export const contentRight = style({
  display: 'flex',
  gap: '12px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      justifyContent: 'flex-end',
      order: '-1',
    },
  },
});
