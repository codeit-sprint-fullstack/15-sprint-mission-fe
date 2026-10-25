import { vars } from "@/styles/globals.css";
import { media } from "@/styles/media";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const title = style({
  fontSize: "28px",
  fontWeight: 700,
  color: vars.color.gray[900],

  "@media": {
    [media.tablet]: {
      fontSize: "24px",
    },
    [media.mobile]: {
      fontSize: "20px",
    },
  },
});

export const bestList = style({
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "384px",
  gap: "24px",
  margin: "0 -4px",
  padding: "4px",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  scrollbarWidth: "none",

  "@media": {
    [media.tablet]: { gap: "16px" },
    [media.mobile]: {
      gridAutoColumns: "min(384px, 85%)",
    },
  },
});

globalStyle(`${bestList} > li`, {
  scrollSnapAlign: "start",
});

export const header = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const writeButton = style({
  padding: "10px 24px",
  background: vars.color.primary[100],
  color: vars.color.white,
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 600,
});

export const toolbar = style({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
});

export const normalList = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
