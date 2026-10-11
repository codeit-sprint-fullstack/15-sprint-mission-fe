import { colorTokens, typographyTokens } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const backButton = style({
  display: 'flex',
  flex: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  padding: '11px 40px',
  borderRadius: '40px',
  border: 'none',
  color: '#F3F4F6',
  fontSize: typographyTokens.fontSize['2lg'],
  lineHeight: '1.444444',
  textDecoration: 'none',
  backgroundColor: colorTokens.primary[100],
  cursor: 'pointer',
});
