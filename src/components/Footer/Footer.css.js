import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const footer = style({
  background: "#111827",
  color: "#e5e7eb",
  minHeight: "93px",
});

export const inner = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "0 auto",
  padding: "24px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "12px",
  fontSize: "14px",
});

export const links = style({
  display: "flex",
  gap: "16px",
});

export const sns = style({
  display: "flex",
  gap: "12px",
});

export const snsLink = style({
  transition: "opacity 0.2s ease",
  ":hover": {
    opacity: "0.6",
  },
});
