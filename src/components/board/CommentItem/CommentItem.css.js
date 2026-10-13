import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "24px",
  background: vars.color.snow,
  borderRadius: "8px",
  boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.12)",
});

export const group = style({});

export const content = style({
  fontSize: "16px",
  fontWeight: "400",
  color: vars.color.gray[800],
  whiteSpace: "pre-wrap",
});

export const writer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "12px",
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const nickname = style({
  fontSize: "14px",
  fontWeight: 400,
  color: vars.color.gray[600],
});

export const date = style({
  fontSize: "14px",
  fontWeight: 400,
  color: vars.color.gray[400],
});
