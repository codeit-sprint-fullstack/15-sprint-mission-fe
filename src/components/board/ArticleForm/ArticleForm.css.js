import { vars } from "@/styles/globals.css";
import { media } from "@/styles/media";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const header = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
});

export const title = style({
  fontSize: "28px",
  fontWeight: 700,
  color: vars.color.gray[800],

  "@media": {
    [media.tablet]: {
      fontSize: "24px",
    },
    [media.mobile]: {
      fontSize: "20px",
    },
  },
});

export const submitButton = style({
  padding: "10px 24px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.white,
  background: vars.color.primary[100],

  ":disabled": {
    background: vars.color.gray[400],
    cursor: "default",
  },
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const label = style({
  fontSize: "24px",
  fontWeight: 700,
  color: vars.color.gray[800],

  "@media": {
    [media.tablet]: {
      fontSize: "20px",
    },
    [media.mobile]: {
      fontSize: "16px",
    },
  },
});

const fieldBase = style({
  padding: "16px 24px",
  background: vars.color.gray[100],
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 400,
  color: vars.color.gray[800],
  boxShadow: "1px 1px 4px #0000001f",
  "::placeholder": { color: vars.color.gray[400] },
});

export const input = style([fieldBase, { height: "60px" }]);

export const textarea = style([
  fieldBase,
  { height: "280px", resize: "none", scrollbarWidth: "none" },
]);
