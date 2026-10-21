import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const wrapper = style({
  padding: "64px 16px",
  textAlign: "center",
});

export const message = style({
  fontSize: "16px",
  color: vars.color.gray600,
});
