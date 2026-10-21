import { style } from "@vanilla-extract/css";
import { boardMedia, vars } from "@/styles/tokens.css";

export const label = style({
  display: "block",
  margin: "24px 0 12px",
  fontWeight: "700",
});

export const fieldInput = style({
  height: "56px",
});

export const fieldArea = style({
  height: "282px",
  resize: "none",
});

export const images = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
});

export const upload = style({
  width: "100%",
  height: "120px",
  border: "none",
  borderRadius: vars.radius.md,
  background: vars.color.gray100,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  color: vars.color.gray400,
  fontSize: "16px",
  cursor: "pointer",
  flexShrink: "0",
});

export const preview = style({
  position: "relative",
  maxWidth: "66%",
  borderRadius: vars.radius.md,
  overflow: "hidden",

  "@media": {
    [boardMedia.below767]: {
      maxWidth: "100%",
    },
  },
});

export const previewImg = style({
  maxWidth: "100%",
  height: "auto",
  display: "block",
});

export const remove = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  width: "24px",
  height: "24px",
  border: "none",
  borderRadius: "50%",
  background: "#111827",
  cursor: "pointer",

  "::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "12px",
    height: "2px",
    background: vars.color.white,
    transform: "translate(-50%, -50%) rotate(45deg)",
  },

  "::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "12px",
    height: "2px",
    background: vars.color.white,
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
});

export const imageErrorText = style({
  display: "block",
  marginTop: "8px",
  fontSize: "14px",
  lineHeight: "20px",
  color: vars.color.red,
});
