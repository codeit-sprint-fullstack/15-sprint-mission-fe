import { style } from "@vanilla-extract/css";
import { boardMedia, vars } from "@/styles/tokens.css";

export const nameBlock = style({
  width: "140px",
  height: "28px",
});

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  margin: "40px 0",
});

export const grid = style({
  display: "grid",
  gap: "40px 24px",
  gridTemplateColumns: "repeat(5, 1fr)",
  marginTop: "24px",

  "@media": {
    [boardMedia.below1199]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px 16px",
    },
    [boardMedia.below767]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "32px 8px",
    },
  },
});

export const cardImage = style({
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: vars.radius.md,
});

export const cardName = style({
  height: "16px",
  marginTop: "16px",
});

export const cardPrice = style({
  width: "48%",
  height: "18px",
  marginTop: "8px",
});
