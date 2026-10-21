import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const kebab = style({
  position: "relative",
});

export const dots = style({
  display: "flex",
  padding: "0",
});

globalStyle(`${dots} img`, {
  width: "24px",
  height: "24px",
});

export const menu = style({
  position: "absolute",
  right: "0",
  top: "100%",
  zIndex: "10",
  width: "140px",
  display: "flex",
  flexDirection: "column",
  background: vars.color.white,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.btn,
  overflow: "hidden",
});

globalStyle(`${menu} button`, {
  padding: "12px",
  color: vars.color.gray600,
});

globalStyle(`${menu} button:hover`, {
  background: vars.color.gray100,
});
