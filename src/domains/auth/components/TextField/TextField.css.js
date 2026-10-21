import { style } from "@vanilla-extract/css";
import { vars, boardMedia } from "@/styles/tokens.css";
import { focusRing } from "@/styles/focus";

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  "@media": {
    [boardMedia.below767]: {
      gap: "8px",
    },
  },
});

export const label = style({
  fontSize: "18px",
  fontWeight: 700,
  lineHeight: "26px",
  color: vars.color.gray900,

  "@media": {
    [boardMedia.below767]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
});

export const inputWrap = style({
  position: "relative",
  border: "1px solid transparent",
  borderRadius: vars.radius.md,
  background: vars.color.gray100,

  ":focus-within": {
    ...focusRing,
  },
});

export const hasError = style({
  borderColor: vars.color.red,
});

export const input = style({
  width: "100%",
  height: "54px",
  padding: "0 24px",
  border: "none",
  borderRadius: vars.radius.md,
  background: "transparent",
  fontSize: "16px",
  lineHeight: "26px",
  color: vars.color.gray900,

  ":focus": {
    outline: "none",
  },

  "::placeholder": {
    color: vars.color.gray400,
  },

  "@media": {
    [boardMedia.below767]: {
      height: "46px",
      padding: "0 16px",
      fontSize: "16px",
    },
  },
});

export const eyeButton = style({
  position: "absolute",
  top: "50%",
  right: "24px",
  transform: "translateY(-50%)",
  display: "flex",
  lineHeight: "0",

  "@media": {
    [boardMedia.below767]: {
      right: "16px",
    },
  },
});

export const error = style({
  marginTop: "-8px",
  paddingLeft: "16px",
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: "26px",
  color: vars.color.red,

  "@media": {
    [boardMedia.below767]: {
      marginTop: "0",
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
});