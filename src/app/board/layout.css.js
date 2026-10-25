import { media } from "@/styles/media";
import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "0 auto",
  padding: "40px 24px 80px",
  maxWidth: "1248px",

  "@media": {
    [media.mobile]: { padding: "24px 16px 48px" },
  },
});
