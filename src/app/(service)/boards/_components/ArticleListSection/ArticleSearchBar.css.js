import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  flexGrow: '1',
});

export const searchIcon = style({
  position: 'absolute',
  left: '16px',
  top: 'calc(50% - 12px)',
});

export const searchInput = style({
  width: '100%',
  height: '42px',
  paddingLeft: '40px',
  borderRadius: '12px',
  border: 'none',
  backgroundColor: colorTokens.secondary.gray100,
  fontSize: typographyTokens.fontSize.lg,
  '::placeholder': {
    fontSize: typographyTokens.fontSize.lg,
    color: colorTokens.secondary.gray400,
  },
});
