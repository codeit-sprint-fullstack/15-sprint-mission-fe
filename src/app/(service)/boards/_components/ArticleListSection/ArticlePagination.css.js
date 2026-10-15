import { colorTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  marginTop: '32px',
  marginBottom: '32px',
});

export const pageNumberList = style({
  display: 'flex',
  gap: '6px',
});

export const pageButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '36px',
  height: '36px',
  padding: '0 8px',
  backgroundColor: colorTokens.secondary.gray100,
  border: `1px solid ${colorTokens.secondary.gray200}`,
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  color: colorTokens.secondary.gray900,
  cursor: 'pointer',

  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: colorTokens.secondary.gray200,
      borderColor: colorTokens.secondary.gray400,
    },
    '&:disabled': {
      color: colorTokens.secondary.gray200,
      backgroundColor: colorTokens.secondary.gray100,
      borderColor: colorTokens.secondary.gray200,
      cursor: 'not-allowed',
    },
  },
});

export const numberButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '36px',
  height: '36px',
  padding: '0 8px',
  backgroundColor: colorTokens.secondary.gray100,
  border: `1px solid ${colorTokens.secondary.gray200}`,
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  color: colorTokens.secondary.gray900,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: colorTokens.secondary.gray200,
      borderColor: colorTokens.secondary.gray400,
    },
  },
});

export const selected = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '36px',
  height: '36px',
  padding: '0 8px',
  backgroundColor: colorTokens.primary[100],
  border: `1px solid ${colorTokens.primary[100]}`,
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  color: '#ffffff',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: colorTokens.primary[100],
      borderColor: colorTokens.primary[100],
    },
  },
});
