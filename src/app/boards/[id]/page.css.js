import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  maxWidth: 1248,
  boxSizing: "border-box",
  margin: "0 auto",
  padding: "34px 24px 64px",
  "@media": {
    "(max-width: 743px)": {
      padding: "26px 16px 48px",
    },
  },
});

export const commentTitle = style({
  fontSize: 16,
  fontWeight: 600,
});
