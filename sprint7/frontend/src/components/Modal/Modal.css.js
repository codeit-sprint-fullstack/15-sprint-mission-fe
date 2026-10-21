import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const dialog = style({
  position: "fixed",
  inset: 0,
  margin: "auto",
  width: "max-content",
  maxWidth: "calc(100vw - 32px)",
  padding: 0,
  border: "none",
  borderRadius: vars.radius.md,
  outline: "none",
  background: "transparent",

  "::backdrop": {
    background: "rgba(0, 0, 0, 0.4)",
  },
});

export const alert = style({
  width: "540px",
  maxWidth: "100%",
  padding: "40px 24px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  background: "#fff",
  borderRadius: vars.radius.btn,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
});

export const alertMessage = style({
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "26px",
  color: vars.color.gray900,
  textAlign: "center",
  whiteSpace: "pre-line",
});

export const alertButton = style({
  alignSelf: "center",
  width: "120px",
  height: "48px",
  borderRadius: vars.radius.btn,
  background: vars.color.blue,
  color: "#fff",
  fontSize: "16px",
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

export const confirm = style({
  width: "327px",
  maxWidth: "100%",
  padding: "32px 24px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
});

export const check = style({
  position: "relative",
  display: "block",
  width: "24px",
  height: "24px",
});

export const checkMark = style({
  position: "absolute",
  top: "6px",
  left: "6px",
});

export const confirmMessage = style({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "26px",
  color: vars.color.gray900,
  textAlign: "center",
});

export const confirmButtons = style({
  display: "flex",
  gap: "8px",
});

export const cancelButton = style({
  width: "96px",
  height: "48px",
  borderRadius: vars.radius.btn,
  fontSize: "16px",
  fontWeight: 600,
  background: vars.color.gray50,
  border: `1px solid ${vars.color.red}`,
  color: vars.color.red,
});

export const confirmButton = style({
  width: "96px",
  height: "48px",
  borderRadius: vars.radius.btn,
  fontSize: "16px",
  fontWeight: 600,
  background: vars.color.red,
  color: "#fff",
  transition: "transform 0.1s ease",

  selectors: {
    "&:hover": {
      filter: "brightness(0.95)",
    },
    "&:active": {
      transform: "scale(0.97)",
    },
  },

  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});