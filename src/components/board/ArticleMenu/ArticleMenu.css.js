import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  flexShrink: 0,
});

export const menu = style({
  position: "absolute",
  top: "100%",
  right: "12px",
  width: "max-content",
  background: vars.color.white,
  border: `1px solid ${vars.color.gray[300]}`,
  borderRadius: "8px",
  zIndex: 1,
});

export const item = style({
  display: "block",
  width: "100%",
  padding: "12px 40px",
  textAlign: "center",
});
