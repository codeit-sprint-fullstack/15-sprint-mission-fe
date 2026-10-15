import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const optionMenuToggleButton = style({
  padding: '0px',
  margin: '0px',
  border: 'none',
  backgroundColor: 'transparent',
  lineHeight: '0px',
  cursor: 'pointer',
});

export const optionMenuContainer = style({
  position: 'absolute',
  right: '0px',
  border: '1px solid #D1D5DB',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

export const optionMenu = style({
  padding: '12px 42px 8px',
  fontSize: typographyTokens.fontSize.lg,
  color: colorTokens.secondary.gray500,
  lineHeight: 1.625,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
});
