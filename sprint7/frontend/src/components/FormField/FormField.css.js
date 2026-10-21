import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const label = style({
  fontSize: "14px",
  fontWeight: "600",
  color: vars.color.gray900,
});

export const input = style({
  width: "100%",
  padding: "12px 14px",
  fontSize: "16px",
  color: vars.color.gray900,
  background: vars.color.white,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: "8px",
  outline: "none",
  resize: "vertical",

  "::placeholder": {
    color: vars.color.gray500,
  },

  ":focus": {
    borderColor: vars.color.blue,
  },
});

export const error = style({
  fontSize: "13px",
  color: "#f74747",
});
