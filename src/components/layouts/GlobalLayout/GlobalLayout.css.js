import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const main = style({
  flex: 1,
  width: "100%",
  minWidth: 0,
});
