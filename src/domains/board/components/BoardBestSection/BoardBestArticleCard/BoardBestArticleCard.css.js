import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const card = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "14px 16px",
  background: vars.color.gray100,
  borderRadius: "8px",

  ":hover": {
    background: "#e8f2ff",
  },
});

export const rank = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  fontWeight: "700",
  color: vars.color.blue,
  flexShrink: "0",
});

export const title = style({
  flex: 1,
  minWidth: 0,
  fontSize: "15px",
  color: vars.color.gray900,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
