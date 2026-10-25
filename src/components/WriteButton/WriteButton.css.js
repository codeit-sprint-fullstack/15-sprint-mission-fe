// WriteButton.css.js
import { style } from "@vanilla-extract/css";

export const button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 88,
  height: 42,
  boxSizing: "border-box",
  flexShrink: 0,
  border: "none",
  borderRadius: 8,
  backgroundColor: "#3692FF",
  color: "#FFFFFF",
  fontFamily: "inherit",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "26px",
  textDecoration: "none",
  cursor: "pointer",

  ":hover": {
    backgroundColor: "#1967D6",
  },

  ":focus-visible": {
    outline: "2px solid #1967D6",
    outlineOffset: 3,
  },
});
