import { style } from "@vanilla-extract/css";
import { input, button } from "../CommentForm/CommentForm.css.js";
export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
  margin: "40px 0 0",
  padding: 0,
  listStyle: "none",
  "@media": { "(max-width: 743px)": { marginTop: 24, gap: 16 } },
});
export const item = style({
  display: "flex",
  alignItems: "flex-start",
  gap: 4,
  paddingBottom: 12,
  borderBottom: "1px solid var(--Cool-Gray-200)",
  backgroundColor: "#FCFCFC",
});
export const body = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  flex: 1,
  minWidth: 0,
});
export const content = style({
  margin: 0,
  fontSize: 14,
  lineHeight: "24px",
  color: "var(--Secondary-800)",
  whiteSpace: "pre-wrap",
  overflowWrap: "anywhere",
});
export const empty = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
  margin: "40px 0 0",
  padding: "48px 16px",
  color: "var(--Secondary-400)",
  textAlign: "center",
  lineHeight: "26px",
});

export const editForm = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});
export const editInput = style([input, { fontSize: 14, lineHeight: "24px" }]);
export const editActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
});
export const saveButton = style([
  button,
  { width: "auto", minWidth: 88, padding: "0 16px" },
]);
export const cancelButton = style([
  button,
  {
    width: 74,
    backgroundColor: "#FFFFFF",
    color: "var(--Secondary-600)",
    border: "1px solid var(--Cool-Gray-200)",
  },
]);
