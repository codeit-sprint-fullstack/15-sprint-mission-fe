import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const count = style({
  fontSize: "13px",
  lineHeight: "20px",
  color: vars.color.gray500,
  flexShrink: "0",
});

export const over = style({
  color: vars.color.red,
});

export const labelRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
});

export const belowRow = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "-4px",
});

export const inlineStart = style({
  marginRight: "auto",
});
