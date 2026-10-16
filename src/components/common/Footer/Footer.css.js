import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const footer = style({
  display: "block",
  background: vars.color.coolGray[900],
  padding: "32px 400px 108px",
});

export const inner = style({
  display: "flex",
  justifyContent: "space-between",
  color: vars.color.secondary[200],
});

export const codeit = style({
  color: vars.color.secondary[400],
});

export const midGroup = style({
  display: "flex",
  gap: "30px",
});

export const icons = style({
  display: "flex",
  gap: "12px",
});
