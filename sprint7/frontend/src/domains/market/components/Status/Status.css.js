import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const box = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  padding: "80px 0",
});

export const spinner = style({
  width: "32px",
  height: "32px",
  border: `3px solid ${vars.color.gray200}`,
  borderTopColor: vars.color.blue,
  borderRadius: vars.radius.full,
  animation: `${spin} 0.8s linear infinite`,

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "2s",
    },
  },
});

export const text = style({
  fontSize: "14px",
  color: vars.color.gray500,
});

export const errorText = style({
  fontSize: "16px",
  color: vars.color.gray500,
  textAlign: "center",
  whiteSpace: "pre-line",
});

export const retry = style({
  height: "42px",
  padding: "0 24px",
  borderRadius: vars.radius.btn,
  background: vars.color.blue,
  color: "#fff",
  fontWeight: 600,

  transition: "background 0.2s ease, transform 0.1s ease",

  selectors: {
    "&:hover": {
      background: vars.color.blueHover,
    },
    "&:active": {
      transform: "scale(0.97)",
    },
  },
});