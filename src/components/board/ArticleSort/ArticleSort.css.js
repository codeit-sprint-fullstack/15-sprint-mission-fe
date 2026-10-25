import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  flexShrink: 0,
  padding: "12px 48px 12px 20px",
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 400,
  appearance: "none",
  backgroundColor: vars.color.white,
  backgroundImage: "url(/icon/arrow-down.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 16px center",
  backgroundSize: "24px",
  cursor: "pointer",
});
