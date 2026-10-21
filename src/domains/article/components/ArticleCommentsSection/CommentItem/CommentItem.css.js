import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const item = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
  padding: "14px 0",
  borderBottom: `1px solid ${vars.color.gray100}`,
});

export const body = style({
  flex: 1,
  minWidth: 0,
});

export const date = style({
  fontSize: "13px",
  color: vars.color.gray500,
  marginBottom: "4px",
});

export const content = style({
  fontSize: "15px",
  lineHeight: "1.5",
  color: vars.color.gray700,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

export const actions = style({
  display: "flex",
  gap: "6px",
  flexShrink: "0",
});
