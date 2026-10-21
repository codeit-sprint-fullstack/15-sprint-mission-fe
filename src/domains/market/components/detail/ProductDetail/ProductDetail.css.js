import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";
import { boardMedia } from "@/styles/tokens.css";

export const product = style({
  display: "grid",
  gridTemplateColumns: "486px 1fr",
  gap: "24px",

  "@media": {
    [boardMedia.below1199]: {
      gridTemplateColumns: "340px 1fr",
      gap: "16px",
    },
    [boardMedia.below767]: {
      gridTemplateColumns: "1fr",
      gap: "16px",
    },
  },
});

export const gallery = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  minWidth: 0,
});

export const thumbList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const thumb = style({
  width: "72px",
  height: "72px",
  padding: 0,
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.md,
  overflow: "hidden",
  background: vars.color.gray100,
  cursor: "pointer",
  flexShrink: 0,
});

export const thumbActive = style({
  border: `2px solid ${vars.color.blue}`,
});

export const thumbImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const imageWrap = style({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: "16px",
  overflow: "hidden",
  background: vars.color.gray100,
});

export const image = style({
  objectFit: "cover",
});

export const noImage = style({
  width: "100%",
  height: "100%",
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
});

export const titleRow = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "16px",
});

export const name = style({
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "32px",
  color: vars.color.gray800,
  wordBreak: "break-word",

  "@media": {
    [boardMedia.below1199]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
    [boardMedia.below767]: {
      fontSize: "16px",
      lineHeight: "26px",
    },
  },
});

export const price = style({
  marginTop: "16px",
  paddingBottom: "16px",
  borderBottom: `1px solid ${vars.color.gray200}`,
  fontSize: "40px",
  fontWeight: 600,
  lineHeight: "48px",
  color: vars.color.gray800,

  "@media": {
    [boardMedia.below1199]: {
      marginTop: "8px",
      paddingBottom: "12px",
      fontSize: "32px",
      lineHeight: "40px",
    },
    [boardMedia.below767]: {
      paddingBottom: "16px",
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
});

export const label = style({
  marginTop: "24px",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  color: vars.color.gray800,

  "@media": {
    [boardMedia.below1199]: {
      marginTop: "16px",
      fontSize: "12px",
    },
    [boardMedia.below767]: {
      marginTop: "16px",
    },
  },
});

export const tagLabel = style({
  marginTop: "24px",

  "@media": {
    [boardMedia.below1199]: {
      marginTop: "16px",
    },
  },
});

export const description = style({
  marginTop: "16px",
  fontSize: "14px",
  lineHeight: "26px",
  color: vars.color.gray800,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",

  "@media": {
    [boardMedia.below767]: {
      fontSize: "16px",
    },
  },
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px 8px",
  marginTop: "16px",

  "@media": {
    [boardMedia.below1199]: {
      gap: "12px 8px",
    },
  },
});

export const tag = style({
  height: "36px",
  padding: "0 16px",
  borderRadius: "26px",
  background: vars.color.gray100,
  fontSize: "16px",
  lineHeight: "36px",
  color: vars.color.gray800,

  "@media": {
    [boardMedia.below1199]: {
      height: "34px",
      padding: "0 14px",
      lineHeight: "34px",
    },
    [boardMedia.below767]: {
      height: "36px",
      lineHeight: "36px",
    },
  },
});

export const owner = style({
  display: "flex",
  alignItems: "center",
  marginTop: "auto",
  paddingTop: "40px",

  "@media": {
    [boardMedia.below1199]: {
      paddingTop: "28px",
    },
    [boardMedia.below767]: {
      paddingTop: "32px",
    },
  },
});

export const ownerInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  flex: 1,
  minWidth: 0,
});

export const ownerAvatar = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
});

export const ownerName = style({
  fontSize: "14px",
  lineHeight: "24px",
  color: vars.color.gray600,
});

export const date = style({
  fontSize: "14px",
  lineHeight: "24px",
  color: vars.color.gray400,
});

export const divider = style({
  margin: "0 24px",

  "@media": {
    [boardMedia.below767]: {
      margin: "0 16px",
    },
  },
});

export const favorite = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  padding: "6px 14px",
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.pill,
  background: "none",
  font: "inherit",
  color: "inherit",
  cursor: "pointer",
});