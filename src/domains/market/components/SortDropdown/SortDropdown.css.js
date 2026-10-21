import { style } from "@vanilla-extract/css";
import { vars, boardMedia } from "@/styles/tokens.css";

export const wrapper = style({
  position: "relative",
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "42px",
  padding: "0 20px",
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.md,
  background: "#fff",
  fontSize: "16px",
  lineHeight: "26px",
  color: vars.color.gray900,

  "@media": {
    [boardMedia.below767]: {
      width: "42px",
      padding: 0,
      justifyContent: "center",
    },
  },
});

export const label = style({
  "@media": {
    [boardMedia.below767]: {
      display: "none",
    },
  },
});

export const caret = style({
  display: "flex",
  lineHeight: 0,

  "@media": {
    [boardMedia.below767]: {
      display: "none",
    },
  },
});

export const mobileIcon = style({
  display: "none",
  lineHeight: 0,

  "@media": {
    [boardMedia.below767]: {
      display: "flex",
    },
  },
});

export const menu = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  zIndex: 30,
  width: "130px",
  padding: 0,
  background: "#fff",
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.md,
  overflow: "hidden",
});

export const menuItem = style({
  selectors: {
    "&:not(:first-child)": {
      borderTop: `1px solid ${vars.color.gray200}`,
    },
  },
});

export const menuButton = style({
  width: "100%",
  height: "42px",
  fontSize: "16px",
  color: vars.color.gray900,

  ":hover": {
    background: vars.color.gray50,
  },
});