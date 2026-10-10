import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/globals.css";

export const container = style({
  background: vars.color.gray[900],
  padding: "32px 200px",
  height: "160px",
});

export const inner = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  margin: "0 auto",
  maxWidth: "1920px",
});

export const company = style({
  flexShrink: 0,
  fontWeight: 400,
  lineHeight: "26px",
  color: vars.color.gray[400],
});

export const info = style({
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  gap: "30px",
});

globalStyle(`${info} a`, {
  fontWeight: 400,
  lineHeight: "26px",
  color: vars.color.gray[200],
});

export const social = style({
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  gap: "12px",
});
