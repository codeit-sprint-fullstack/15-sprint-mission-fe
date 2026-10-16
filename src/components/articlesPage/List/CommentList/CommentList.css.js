import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const emptyMessage = style({
  textAlign: "center",
  color: vars.color.secondary[400],
  fontSize: 16,
});
