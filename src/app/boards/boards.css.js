import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: 1200,
  width: "calc(100% - 48px)",
  margin: "0 auto",
  paddingTop: 24,
  display: "flex",
  flexDirection: "column",
  gap: 40,
  "@media": {
    "(max-width: 1199px)": { gap: 24 },
    "(max-width: 743px)": { width: "calc(100% - 32px)", paddingTop: 18 },
  },
});

export const title = style({
  fontSize: 20,
  fontWeight: 700,
});

export const boardHeader = style({
  width: "100%",
  height: 42,
  display: "flex",
  justifyContent: "space-between",
});
