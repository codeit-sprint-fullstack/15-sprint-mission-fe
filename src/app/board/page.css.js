import { media } from "@/styles/media";
import { style } from "@vanilla-extract/css";

export const container = style({
  paddingTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  "@media": {
    [media.tablet]: { gap: "24px" },
    [media.mobile]: { paddingTop: "16px" },
  },
});
