import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 6,
  width: "100%",
  marginBottom: 100,
  "@media": { "(max-width: 743px)": { gap: 4, marginBottom: 48 } },
});

export const button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 44,
  height: 44,
  padding: 0,
  boxSizing: "border-box",
  border: "1px solid #E5E7EB",
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  color: "#6B7280",
  fontFamily: "inherit",
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1,
  cursor: "pointer",
  selectors: {
    '&[aria-current="page"]': {
      backgroundColor: "#2F80ED",
      borderColor: "#2F80ED",
      color: "#FFFFFF",
    },
    '&:hover:not(:disabled):not([aria-current="page"])': {
      backgroundColor: "#F3F4F6",
    },
  },
  ":focus-visible": {
    outline: "2px solid #2F80ED",
    outlineOffset: 3,
  },
  ":disabled": {
    color: "#D1D5DB",
    cursor: "not-allowed",
  },
  "@media": { "(max-width: 743px)": { width: 36, height: 36, fontSize: 16 } },
});

export const chevron = style({
  width: 6,
  height: 6,
  borderTop: "2px solid currentColor",
  borderRight: "2px solid currentColor",
});

export const previous = style([chevron, { transform: "rotate(-135deg)" }]);
export const next = style([chevron, { transform: "rotate(45deg)" }]);
