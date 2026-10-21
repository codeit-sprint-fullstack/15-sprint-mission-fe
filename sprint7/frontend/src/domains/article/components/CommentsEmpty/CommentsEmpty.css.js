import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const empty = style({
  textAlign: "center",
  color: vars.color.gray400,
  padding: "40px 0",
});

globalStyle(`${empty} p`, {
  margin: "16px 0 0",
  lineHeight: "1.6",
});
