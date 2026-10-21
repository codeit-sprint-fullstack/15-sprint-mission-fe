import { style } from "@vanilla-extract/css";
import { vars, boardMedia } from "@/styles/tokens.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  "@media": {
    [boardMedia.below767]: {
      gap: "16px",
    },
  },
});

export const submit = style({
  width: "100%",
  height: "56px",
  marginTop: "8px",
  borderRadius: vars.radius.round,
  background: vars.color.blue,
  color: "#fff",
  fontSize: "20px",
  fontWeight: 600,
  transition: "background 0.2s ease, transform 0.1s ease",

  selectors: {
    "&:hover:not(:disabled)": {
      background: vars.color.blueHover,
    },
    "&:active:not(:disabled)": {
      transform: "scale(0.97)",
    },
  },

  ":disabled": {
    background: vars.color.gray400,
    cursor: "not-allowed",
  },

  "@media": {
    [boardMedia.below767]: {
      height: "48px",
      fontSize: "16px",
    },
  },
});

export const bottom = style({
  marginTop: "24px",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: 500,
  lineHeight: "26px",
  color: vars.color.gray900,

  "@media": {
    [boardMedia.below767]: {
      marginTop: "16px",
      fontSize: "14px",
    },
  },
});

export const switchLink = style({
  marginLeft: "4px",
  color: vars.color.blue,
  textDecoration: "underline",
});