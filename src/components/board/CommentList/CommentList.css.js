import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const empty = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
});

export const text = style({
  fontSize: "16px",
  fontWeight: 400,
  color: vars.color.gray[400],
  textAlign: "center",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
