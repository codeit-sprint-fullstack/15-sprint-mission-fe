import { style } from "@vanilla-extract/css";

export const section = style({
  marginBottom: "32px",
});

export const title = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "12px",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
