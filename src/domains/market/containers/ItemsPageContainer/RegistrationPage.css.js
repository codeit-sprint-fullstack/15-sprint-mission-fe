import { globalStyle, style } from "@vanilla-extract/css";
import { boardMedia, vars } from "@/styles/tokens.css";
import { focusRing } from "@/styles/focus";

export const registration = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "40px auto 0",
  padding: "0 16px 80px",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  marginBottom: "8px",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
});

export const submit = style({
  height: "42px",
  padding: "0 23px",
  background: vars.color.blue,
  color: vars.color.white,
  border: "none",
  borderRadius: vars.radius.btn,
  fontWeight: "600",
  fontSize: "15px",
  flexShrink: "0",
  transition: "background 0.2s ease, transform 0.1s ease",

  ":hover": {
    background: vars.color.blueHover,
  },

  ":active": {
    transform: "scale(0.97)",
  },

  ":disabled": {
    background: vars.color.gray400,
    cursor: "default",
  },
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "24px",
});

export const label = style({
  fontSize: "14px",
  fontWeight: "600",
  color: vars.color.gray900,
});

export const input = style({
  width: "100%",
  padding: "16px 24px",
  fontSize: "16px",
  font: "inherit",
  color: vars.color.gray900,
  background: vars.color.gray100,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.md,
  outline: "none",

  ":focus": {
    ...focusRing,
  },
});

export const inputError = style({
  borderColor: vars.color.red,
});

export const textarea = style({
  width: "100%",
  minHeight: "160px",
  padding: "16px 24px",
  fontSize: "16px",
  font: "inherit",
  color: vars.color.gray900,
  background: vars.color.gray100,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.md,
  outline: "none",
  resize: "vertical",

  ":focus": {
    ...focusRing,
  },
});

export const textareaError = style({
  borderColor: vars.color.red,
});

export const error = style({
  fontSize: "13px",
  color: vars.color.red,
});

globalStyle(`${input}::placeholder, ${textarea}::placeholder`, {
  color: vars.color.gray500,
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const tag = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  padding: "6px 12px",
  fontSize: "13px",
  fontWeight: "600",
  color: vars.color.gray900,
  background: vars.color.gray100,
  border: "1px solid #e5e7eb",
  borderRadius: vars.radius.btn,

  ":hover": {
    borderColor: vars.color.gray300,
  },
});

export const tagHash = style({
  color: vars.color.gray500,
});

export const tagRemove = style({
  width: "12px",
  height: "12px",
});

export const images = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
  "@media": {
    [boardMedia.below767]: {
      gap: "16px",
    },
  },
});

export const upload = style({
  width: "282px",
  height: "282px",
  border: "none",
  borderRadius: vars.radius.md,
  background: vars.color.gray100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  color: vars.color.gray400,
  fontSize: "16px",
  cursor: "pointer",
  flexShrink: "0",
  "@media": {
    [boardMedia.below1199]: {
      width: "168px",
      height: "168px",
    },
  },
});

export const preview = style({
  position: "relative",
  width: "282px",
  height: "282px",
  flexShrink: "0",
  "@media": {
    [boardMedia.below1199]: {
      width: "168px",
      height: "168px",
    },
  },
});

export const previewImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: vars.radius.md,
  display: "block",
});

export const removeImage = style({
  position: "absolute",
  top: "11px",
  right: "11px",
  display: "flex",
  border: "none",
  background: "none",
  cursor: "pointer",
});

export const imageError = style({
  fontSize: "14px",
  lineHeight: "20px",
  color: vars.color.red,
});
