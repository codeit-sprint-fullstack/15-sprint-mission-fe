import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const card = style({
  display: "block",
  minWidth: 0,
});

export const imageWrap = style({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: "16px",
  overflow: "hidden",
  background: vars.color.gray100,
});

export const image = style({
  objectFit: "cover",
});

export const noImage = style({
  width: "100%",
  height: "100%",
  background: vars.color.gray100,
});

export const name = style({
  marginTop: "16px",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "24px",
  color: vars.color.gray900,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const price = style({
  marginTop: "6px",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "26px",
  color: vars.color.gray900,
});

export const favorite = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginTop: "6px",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "18px",
  color: vars.color.gray600,
});