import { style } from "@vanilla-extract/css";
import { boardMedia, vars } from "@/styles/tokens.css";

export const toolbar = style({
  display: "flex",
  gap: "8px",
  margin: "24px 0 0",
});

export const empty = style({
  textAlign: "center",
  color: vars.color.gray400,
  padding: "60px 0",
  lineHeight: "1.6",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: vars.color.gray500,
  fontSize: "14px",
});

export const metaSpread = style({
  justifyContent: "space-between",
  marginTop: "16px",
});

export const metaSpreadTight = style({
  justifyContent: "space-between",
  marginTop: "24px",
});

export const likesImgSm = style({
  width: "16px",
  height: "16px",
});

export const bestGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  margin: "16px 0 40px",

  "@media": {
    [boardMedia.below1199]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [boardMedia.below767]: {
      gridTemplateColumns: "1fr",
    },
  },
});

export const bestCard = style({
  position: "relative",
  background: vars.color.gray50,
  borderRadius: vars.radius.btn,
  padding: "48px 24px 16px",
  minWidth: "0",
});

export const bestBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  position: "absolute",
  top: "0",
  left: "24px",
  background: vars.color.blue,
  color: vars.color.white,
  fontWeight: "600",
  padding: "4px 20px",
  borderRadius: vars.radius.badge,
});

export const postTop = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
});

export const postTitle = style({
  margin: "0",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.4",
  wordBreak: "keep-all",

  "@media": {
    [boardMedia.below767]: {
      fontSize: "16px",
    },
  },
});

export const thumb = style({
  width: vars.size.thumb,
  height: vars.size.thumb,
  objectFit: "contain",
  padding: "12px",
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.sm,
  background: vars.color.white,
  flexShrink: "0",
});

export const postItem = style({
  display: "block",
  marginTop: "24px",
  padding: "24px 0 16px",
  background: vars.color.bg,
  borderBottom: `2px solid ${vars.color.gray300}`,
});
