import { style } from "@vanilla-extract/css";
import { vars, boardMedia } from "@/styles/tokens.css";

export const social = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "24px",
  padding: "16px 23px",
  borderRadius: vars.radius.btn,
  background: vars.color.blueLight,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "26px",
  color: vars.color.gray900,

  "@media": {
    [boardMedia.below767]: {
      marginTop: "16px",
      padding: "8px 23px",
      fontSize: "14px",
    },
  },
});

export const icons = style({
  display: "flex",
  gap: "16px",
});

export const iconLink = style({
  position: "relative",
  display: "block",
  width: "42px",
  height: "42px",
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
});

export const glyph = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});