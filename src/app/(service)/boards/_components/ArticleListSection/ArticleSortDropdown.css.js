import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const dropdownButton = style({
  width: '140px',
  height: '42px',
  display: 'flex',
  padding: '0 20px',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${colorTokens.secondary.gray200}`,
  borderRadius: '12px',
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: typographyTokens.fontSize.lg,
  color: colorTokens.secondary.gray800,
});

export const menuList = style({
  position: 'absolute',
  top: '52px',
  width: '140px',
  border: `1px solid ${colorTokens.secondary.gray200}`,
  borderRadius: '12px',
  backgroundColor: '#fff',
});

export const menuItem = style({
  lineHeight: '42px',
  height: '42px',
  textAlign: 'center',
  fontSize: typographyTokens.fontSize.lg,
  color: colorTokens.secondary.gray800,
  cursor: 'pointer',
});
