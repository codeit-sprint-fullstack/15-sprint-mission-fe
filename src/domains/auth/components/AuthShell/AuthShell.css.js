import { style } from "@vanilla-extract/css";
import { vars, boardMedia } from "@/styles/tokens.css";

export const shell = style({
  minHeight: "100vh",
  padding: "198px 24px 120px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media": {
    [boardMedia.below767]: {
      padding: "66px 16px 80px",
    },
  },
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "40px",

  "@media": {
    [boardMedia.below767]: {
      gap: "8px",
      marginBottom: "24px",
    },
  },
});

export const mark = style({
  width: "104px",
  height: "104px",
  objectFit: "contain",

  "@media": {
    [boardMedia.below767]: {
      width: "52px",
      height: "52px",
    },
  },
});

export const brand = style({

  fontFamily: vars.font.logo,
  fontWeight: 700,
  fontSize: "66px",
  lineHeight: "1",
  color: vars.color.blue,
  letterSpacing: "-1px",

  "@media": {
    [boardMedia.below767]: {
      fontSize: "33px",
    },
  },
});

export const content = style({
  width: "100%",
  maxWidth: "640px",
});