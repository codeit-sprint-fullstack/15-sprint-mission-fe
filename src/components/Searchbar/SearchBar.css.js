import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const searchBar = style({
  display: "flex",
  width: "85%",
  height: "42px",
  padding: "9px 20px 9px 16px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  flexShrink: 0,

  borderRadius: "12px",
  outline: 'none',
  border: 'none',
  background: tokens.color.backgroundColor,
});
