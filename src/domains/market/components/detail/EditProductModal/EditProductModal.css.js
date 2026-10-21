import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";
import { focusRing } from "@/styles/focus";

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

  ":focus": {
    ...focusRing,
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

  ":focus": {
    ...focusRing,
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

export const imageArea = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
});

export const uploadTile = style({
  width: "120px",
  height: "120px",
  border: "none",
  borderRadius: "12px",
  background: vars.color.gray100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  color: vars.color.gray400,
  fontSize: "13px",
  cursor: "pointer",
  flexShrink: "0",
});

export const previewTile = style({
  position: "relative",
  width: "120px",
  height: "120px",
  flexShrink: "0",
});

export const previewImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
});

export const removeTile = style({
  position: "absolute",
  top: "6px",
  right: "6px",
  display: "flex",
  border: "none",
  background: "none",
  cursor: "pointer",
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

  ":disabled": {
    background: vars.color.gray400,
    cursor: "not-allowed",
  },
});