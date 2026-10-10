import { media } from "@/styles/media";
import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "0 auto",
  padding: "0 24px",
  maxWidth: "1248px",
  "@media": {
    [media.mobile]: { padding: "0 16px" },
  },
});
