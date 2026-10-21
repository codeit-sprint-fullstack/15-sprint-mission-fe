import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const imageBlock = style({
  width: "100%",
  maxWidth: "480px",
  aspectRatio: "1 / 1",
  borderRadius: vars.radius.md,
  margin: "0 auto 24px",
});

export const nameBlock = style({
  width: "320px",
  maxWidth: "100%",
  height: "34px",
  margin: "0 auto 12px",
});

export const priceBlock = style({
  width: "160px",
  maxWidth: "100%",
  height: "24px",
  margin: "0 auto 12px",
});

export const dateBlock = style({
  width: "120px",
  maxWidth: "100%",
  height: "16px",
  margin: "0 auto",
});
