import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  margin: "40px 0",
});

export const arrowButton = style({
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.gray300}`,
  background: vars.color.white,

  selectors: {
    "&:hover": {
      background: vars.color.gray100,
    },
    "&:disabled": {
      opacity: "0.35",
      cursor: "not-allowed",
    },
  },
});

export const arrowIcon = style({
  width: "16px",
  height: "16px",
});

export const arrowButtonDisabled = style({
  opacity: "0.35",
  cursor: "not-allowed",
  pointerEvents: "none",
});

export const pageButton = style({
  width: "40px",
  height: "40px",
  borderRadius: vars.radius.full,
  border: "1px solid #e5e7eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.gray600,
  fontSize: "14px",

  ":hover": {
    background: vars.color.gray100,
  },
});

export const pageButtonActive = style({
  background: vars.color.blue,
  borderColor: vars.color.blue,
  color: vars.color.white,
  fontWeight: "700",

  ":hover": {
    background: vars.color.blue,
  },
});

export const searchBar = style({
  position: "relative",
  width: "325px",
  maxWidth: "100%",
});

export const searchInput = style({
  width: "100%",
  height: "42px",
  padding: "9px 20px 9px 40px",
  border: "none",
  borderRadius: vars.radius.md,
  background: vars.color.gray100,
  fontSize: "14px",
  outline: "none",

  "::placeholder": {
    color: vars.color.gray400,
  },

  ":focus": {
    outline: `2px solid ${vars.color.blue}`,
    outlineOffset: "-1px",
  },
});

export const searchIcon = style({
  position: "absolute",
  left: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "18px",
  height: "18px",
  pointerEvents: "none",
});

export const searchBarFluid = style([searchBar, { width: "auto", flex: 1 }]);

export const sortDropdown = style({
  position: "relative",
  justifySelf: "end",
});

export const sortTrigger = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  height: "42px",
  padding: "0 12px 0 16px",
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.md,
  background: vars.color.white,
  fontSize: "16px",
  lineHeight: "26px",
  color: vars.color.gray900,
});

export const sortArrow = style({
  width: "20px",
  height: "20px",
});

export const sortMenu = style({
  position: "absolute",
  top: "44px",
  right: "0",
  zIndex: 30,
  background: vars.color.white,
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.md,
  overflow: "hidden",
  minWidth: "130px",
});

globalStyle(`${sortMenu} button`, {
  display: "block",
  width: "100%",
  height: "42px",
  padding: "0 14px",
  textAlign: "left",
  fontSize: "16px",
  color: vars.color.gray900,
});

globalStyle(`${sortMenu} button:hover`, {
  background: vars.color.gray50,
});

export const board = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "0 auto",
  padding: "24px 16px 0",
});

export const heading = style({
  margin: "0",
  fontSize: "20px",
  fontWeight: "700",
});

export const head = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
});

export const btn = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "42px",
  padding: "0 23px",
  background: vars.color.blue,
  color: vars.color.white,
  border: "none",
  borderRadius: vars.radius.btn,
  fontWeight: "600",
  transition: "background 0.2s ease, transform 0.1s ease",

  ":hover": {
    background: vars.color.blueHover,
  },

  ":active": {
    transform: "scale(0.97)",
  },

  ":disabled": {
    background: vars.color.gray400,
    cursor: "default",
  },
});

export const avatar = style({
  display: "inline-block",
  width: vars.size.avatar,
  height: vars.size.avatar,
  verticalAlign: "middle",
  flexShrink: "0",
});

export const likes = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
});

export const likesImg = style({
  width: "24px",
  height: "24px",
});

export const field = style({
  width: "100%",
  border: "none",
  borderRadius: vars.radius.md,
  background: vars.color.gray100,
  padding: "16px 24px",
  font: "inherit",
  color: "inherit",
  outline: "none",

  "::placeholder": {
    color: vars.color.gray400,
  },

  ":focus": {
    outline: `2px solid ${vars.color.blue}`,
  },
});
