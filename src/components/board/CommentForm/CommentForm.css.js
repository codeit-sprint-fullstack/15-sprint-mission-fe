import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const label = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.gray[900],
});

export const textArea = style({
  height: "120px",
  padding: "16px 24px",
  background: vars.color.gray[100],
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 400,
  color: vars.color.gray[800],
  resize: "none",
  scrollbarWidth: "none",
  boxShadow: "1px 1px 3px #0000001f",

  "::placeholder": {
    color: vars.color.gray[400],
  },
});

export const submitButton = style({
  marginTop: "4px",
  alignSelf: "flex-end",
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
