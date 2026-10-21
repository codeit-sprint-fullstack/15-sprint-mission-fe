// BoardSearch.css.js
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
  width: "100%",
  "@media": { "(max-width: 743px)": { gap: 8 } },
});

export const input = style({
  flex: 1,
  minWidth: 0,
  height: 42,
  boxSizing: "border-box",
  padding: "0 16px",
  border: "none",
  borderRadius: 12,
  backgroundColor: "#F3F4F6",
  color: "#1F2937",
  fontFamily: "inherit",
  fontSize: 16,
  lineHeight: "26px",

  "::placeholder": {
    color: "#9CA3AF",
  },

  ":focus-visible": {
    outline: "2px solid #3692FF",
    outlineOffset: 2,
  },
});

export const select = style({
  width: 130,
  height: 42,
  flexShrink: 0,
  boxSizing: "border-box",
  padding: "0 12px",
  border: "1px solid #E5E7EB",
  borderRadius: 12,
  backgroundColor: "#FFFFFF",
  color: "#1F2937",
  fontFamily: "inherit",
  fontSize: 16,
  lineHeight: "26px",
  cursor: "pointer",

  ":focus-visible": {
    outline: "2px solid #3692FF",
    outlineOffset: 2,
  },
  "@media": {
    "(max-width: 743px)": { width: 110, padding: "0 8px", fontSize: 14 },
  },
});
