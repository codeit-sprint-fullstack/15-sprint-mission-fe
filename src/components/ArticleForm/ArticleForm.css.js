import { style } from "@vanilla-extract/css";

export const form = style({
  width: "calc(100% - 48px)",
  maxWidth: 1200,
  margin: "0 auto",
  padding: "26px 0 64px",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  color: "var(--Secondary-800)",
  "@media": {
    "screen and (max-width: 743px)": {
      width: "calc(100% - 32px)",
      paddingTop: 18,
      gap: 24,
    },
  },
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
});

export const heading = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "32px",
});

export const submit = style({
  minWidth: 74,
  height: 42,
  padding: "0 23px",
  border: "none",
  borderRadius: 8,
  backgroundColor: "var(--Primary-100)",
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "26px",
  cursor: "pointer",
  flexShrink: 0,
  ":disabled": {
    backgroundColor: "var(--Cool-Gray-400)",
    color: "var(--Cool-Gray-100)",
    cursor: "not-allowed",
  },
  ":focus-visible": {
    outline: "2px solid var(--Primary-100)",
    outlineOffset: 3,
  },
});

export const fields = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  "@media": { "screen and (max-width: 743px)": { gap: 16 } },
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const label = style({
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "26px",
  "@media": {
    "screen and (max-width: 743px)": { fontSize: 14, lineHeight: "24px" },
  },
});

const control = style({
  width: "100%",
  minWidth: 0,
  border: "none",
  borderRadius: 12,
  backgroundColor: "var(--Cool-Gray-100)",
  color: "var(--Secondary-800)",
  fontFamily: "inherit",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "26px",
  "::placeholder": { color: "var(--Secondary-400)" },
  ":focus-visible": {
    outline: "2px solid var(--Primary-100)",
    outlineOffset: 2,
  },
});

export const input = style([control, { height: 56, padding: "0 24px" }]);
export const textarea = style([
  control,
  {
    height: 282,
    padding: "16px 24px",
    resize: "vertical",
    minHeight: 200,
    "@media": { "screen and (max-width: 743px)": { height: 200 } },
  },
]);
