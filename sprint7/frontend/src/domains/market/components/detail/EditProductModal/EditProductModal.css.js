import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const form = style({
  width: "560px",
  maxWidth: "100%",
  padding: "32px 24px 24px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: vars.color.white,
  borderRadius: "16px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
});

export const heading = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.gray900,
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const fieldLabel = style({
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.gray800,
});

export const input = style({
  width: "100%",
  padding: "12px 16px",
  border: "1px solid transparent",
  borderRadius: "12px",
  background: vars.color.gray100,
  fontSize: "16px",
  lineHeight: "24px",

  selectors: {
    "&:focus": {
      borderColor: vars.color.blue,
    },
  },
});

export const textarea = style({
  width: "100%",
  height: "120px",
  padding: "12px 16px",
  border: "1px solid transparent",
  borderRadius: "12px",
  background: vars.color.gray100,
  fontSize: "16px",
  lineHeight: "24px",
  resize: "none",

  selectors: {
    "&:focus": {
      borderColor: vars.color.blue,
    },
  },
});

export const error = style({
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 600,
  color: vars.color.red,
});

export const serverError = style({
  fontSize: "14px",
  color: vars.color.red,
});

export const buttons = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "24px",
});

export const cancel = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.gray500,
});

export const save = style({
  width: "106px",
  height: "42px",
  borderRadius: "8px",
  background: vars.color.blue,
  color: vars.color.white,
  fontSize: "16px",
  fontWeight: 600,

  selectors: {
    "&:disabled": {
      background: vars.color.gray400,
      cursor: "not-allowed",
    },
  },
});