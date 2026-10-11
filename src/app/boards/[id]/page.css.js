import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '24px',
  minHeight: 'calc(100vh - 278px)',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  margin: '0 auto',
  maxWidth: '1200px',
});
