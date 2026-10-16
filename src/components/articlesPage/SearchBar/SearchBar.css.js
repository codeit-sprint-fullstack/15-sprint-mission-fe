import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const searchForm = style({
  display: "flex",
  alignItems: "center",
  flex: 1,
  background: vars.color.secondary[100],
  borderRadius: "12px",
  padding: "9px 20px 9px 16px",
  gap: "10px",
  ":focus-within": {
    outline: `2px solid ${vars.color.primary[100]}`,
  },
});

export const searchInput = style({
  background: "transparent",
  border: "none",
  outline: "none",
  color: "inherit",
  flex: 1,
  minWidth: 0,
  "::placeholder": {
    color: vars.color.secondary[400],
  },
});
