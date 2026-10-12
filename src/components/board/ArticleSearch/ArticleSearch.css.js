import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  flexGrow: 1,
});

export const input = style({
  padding: "10px 16px 10px 48px",
  width: "100%",
  borderRadius: "12px",
  backgroundColor: vars.color.gray[100],
  backgroundImage: "url(/icon/search.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "16px center",
  backgroundSize: "24px",
});
