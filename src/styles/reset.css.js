import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
});

globalStyle("header, footer, nav, section", {
  display: "block",
});

globalStyle("body", {
  lineHeight: 1,
  fontFamily: "var(--font-pretendard), sans-serif",
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("button", {
  border: "none",
  outline: "none",
  backgroundColor: "inherit",
  cursor: "pointer",
});
