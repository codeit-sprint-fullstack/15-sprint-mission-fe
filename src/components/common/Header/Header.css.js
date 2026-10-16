import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  background: "white",
  height: "70px",
  border: "1px solid #DFDFDF",
});

export const inner = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 200px",
  height: "100%",
});

export const leftGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "32px",
});

export const logoLink = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  whiteSpace: "nowrap",
});

export const logoText = style({
  fontSize: "26px",
  fontWeight: "700",
  color: vars.color.primary[100],
  fontFamily: "var(--font-rokaf), sans-serif",
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "40px",
});

export const navLink = style({
  fontWeight: "700",
  fontSize: "1.125rem",
  whiteSpace: "nowrap",
  color: vars.color.secondary[600],
});

export const navLinkActive = style({
  color: vars.color.primary[100],
});

export const loginButton = style({
  display: "inline-block",
  background: vars.color.primary[100],
  padding: "12px 23px",
  borderRadius: "8px",
  color: "white",
  fontWeight: "600",
  whiteSpace: "nowrap",
});
