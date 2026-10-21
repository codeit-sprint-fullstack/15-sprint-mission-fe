import { style } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  width: 240,
  maxWidth: "100%",
  height: 48,
  margin: "64px auto 0",
  padding: "0 24px",
  border: "none",
  borderRadius: 40,
  backgroundColor: "var(--Primary-100)",
  color: "var(--Cool-Gray-100)",
  fontFamily: "inherit",
  fontSize: 18,
  fontWeight: 600,
  lineHeight: "26px",
  whiteSpace: "nowrap",
  cursor: "pointer",
  ":focus-visible": {
    outline: "2px solid var(--Primary-100)",
    outlineOffset: 3,
  },
  "@media": {
    "(max-width: 743px)": { marginTop: 40 },
  },
});

export const icon = style({
  position: "relative",
  width: 24,
  height: 24,
  flexShrink: 0,
});

export const arrow = style({
  position: "absolute",
  top: 3.6,
  left: 2.5,
});
