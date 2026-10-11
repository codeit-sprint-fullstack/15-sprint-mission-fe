import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});

export const backButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const backButton = style({
  display: 'flex',
  flex: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  padding: '11px 40px',
  borderRadius: '40px',
  color: '#F3F4F6',
  fontSize: typographyTokens.fontSize['2lg'],
  lineHeight: '1.444444',
  textDecoration: 'none',
  backgroundColor: colorTokens.primary[100],
});
