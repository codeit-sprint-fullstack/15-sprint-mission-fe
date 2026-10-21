import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const container = style({
  width: "100%",
  maxWidth: vars.size.maxContentWidth,
  margin: "0 auto",
  padding: "40px 16px 80px",
});
