import { globalStyle } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

const toPropertyName = (token) => token.replace(/^var\((--[\w-]+)\)$/, "$1");

const CSS_VARIABLES = {
  [vars.color.blue]: "#3692ff",
  [vars.color.blueHover]: "#1967d9",
  [vars.color.blueLight]: "#e6f2ff",
  [vars.color.gray900]: "#1f2937",
  [vars.color.gray700]: "#374151",
  [vars.color.gray600]: "#4b5563",
  [vars.color.gray500]: "#6b7280",
  [vars.color.gray400]: "#9ca3af",
  [vars.color.gray300]: "#d1d5db",
  [vars.color.gray200]: "#e5e7eb",
  [vars.color.gray100]: "#f3f4f6",
  [vars.color.gray50]: "#f9fafb",
  [vars.color.white]: "#ffffff",
  [vars.color.bg]: "#fcfcfc",
  [vars.color.red]: "#f74747",

  [vars.radius.md]: "12px",
  [vars.radius.btn]: "8px",
  [vars.radius.badge]: "0 0 16px 16px",
  [vars.radius.pill]: "35px",
  [vars.radius.round]: "40px",
  [vars.radius.full]: "50%",
  [vars.radius.sm]: "6px",

  [vars.font.body]: "Pretendard",
  [vars.font.logo]: "ROKAF Sans",

  [vars.size.maxContentWidth]: "1200px",
  [vars.size.heroImageWidth]: "746px",
  [vars.size.featureImageWidth]: "460px",
  [vars.size.trustImageWidth]: "744px",
  [vars.size.avatar]: "24px",
  [vars.size.avatarLg]: "40px",
  [vars.size.thumb]: "72px",
};

globalStyle(
  ":root",
  Object.fromEntries(
    Object.entries(CSS_VARIABLES).map(([token, value]) => [
      toPropertyName(token),
      value,
    ]),
  ),
);

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, blockquote", {
  margin: 0,
  padding: 0,
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  width: "100%",
});

globalStyle("body", {
  fontFamily: vars.font.body,
  color: vars.color.gray900,
  backgroundColor: vars.color.bg,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button, input, textarea, select", {
  font: "inherit",
  color: "inherit",
});

globalStyle("button", {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
});

globalStyle("img", {
  maxWidth: "100%",
  display: "block",
});
