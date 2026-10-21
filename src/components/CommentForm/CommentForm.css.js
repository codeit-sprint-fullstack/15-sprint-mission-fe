import { style } from "@vanilla-extract/css";
import { submit } from "../ArticleForm/ArticleForm.css.js";

export const form = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 16,
  width: "100%",
});
export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: 9,
  width: "100%",
});
export const label = style({
  color: "var(--Secondary-900)",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "26px",
});
export const input = style({
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  minWidth: 0,
  height: 104,
  minHeight: 104,
  padding: "16px 24px",
  resize: "none",
  overflowY: "auto",
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
export const button = style([
  submit,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 74,
    height: 42,
    padding: 0,
    whiteSpace: "nowrap",
  },
]);
