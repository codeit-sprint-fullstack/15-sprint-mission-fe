import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";
import { boardMedia } from "@/styles/tokens.css";

export const backWrap = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "64px",
  marginBottom: "64px",

  "@media": {
    [boardMedia.below767]: {
      marginTop: "40px",
      marginBottom: "40px",
    },
  },
});

export const back = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: "240px",
  height: "48px",
  borderRadius: "40px",
  background: vars.color.blue,
  color: vars.color.white,
  fontSize: "18px",
  fontWeight: 600,

  transition: "background 0.2s ease, transform 0.1s ease",

  selectors: {
    "&:hover": {
      background: vars.color.blueHover,
    },
    "&:active": {
      transform: "scale(0.97)",
    },
  },
});