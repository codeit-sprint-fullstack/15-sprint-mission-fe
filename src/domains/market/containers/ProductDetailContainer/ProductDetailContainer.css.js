import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";
import { boardMedia } from "@/styles/tokens.css";

export const container = style({
  width: "calc(100% - 48px)",
  maxWidth: "1200px",
  margin: "0 auto",
  paddingTop: "24px",

  "@media": {
    [boardMedia.below767]: {
      width: "calc(100% - 32px)",
      paddingTop: "16px",
    },
  },
});

export const rule = style({
  height: "1px",
  margin: "44px 0 0",
  border: "none",
  background: vars.color.gray200,

  "@media": {
    [boardMedia.below1199]: {
      marginTop: "40px",
    },
    [boardMedia.below767]: {
      marginTop: "24px",
    },
  },
});