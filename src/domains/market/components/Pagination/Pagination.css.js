import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  gap: "4px",
});

export const item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.full,
  background: "#fff",
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.gray500,

  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
});

export const current = style({
  background: "#2f80ed",
  borderColor: "#2f80ed",
  color: "#fff",
});

globalStyle(`${item}:hover:not(:disabled):not(.${current})`, {
  background: vars.color.gray50,
});