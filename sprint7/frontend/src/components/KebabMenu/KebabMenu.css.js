import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";
import { boardMedia } from "@/styles/tokens.css";

export const wrapper = style({
  position: "relative",
  display: "inline-flex",
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
});

export const menu = style({
  position: "absolute",
  top: "calc(100% + 4px)",
  right: 0,
  zIndex: 20,
  width: "139px",
  background: vars.color.white,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: "8px",
  overflow: "hidden",

  "@media": {
    [boardMedia.below767]: {
      width: "101px",
    },
  },
});

export const menuButton = style({
  width: "100%",
  height: "44px",
  fontSize: "16px",
  color: vars.color.gray500,
  textAlign: "center",

  selectors: {
    "&:hover": {
      background: vars.color.gray50,
      color: vars.color.gray800,
    },
  },

  "@media": {
    [boardMedia.below767]: {
      height: "42px",
      fontSize: "14px",
    },
  },
});