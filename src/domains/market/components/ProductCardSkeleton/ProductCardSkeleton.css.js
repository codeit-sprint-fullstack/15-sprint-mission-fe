import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const imageWrap = style({
  width: "100%",
  aspectRatio: "1 / 1",
});

export const image = style({
  width: "100%",
  height: "100%",
  borderRadius: vars.radius.md,
});

export const name = style({
  marginTop: "16px",
});

export const price = style({
  marginTop: "8px",
});
