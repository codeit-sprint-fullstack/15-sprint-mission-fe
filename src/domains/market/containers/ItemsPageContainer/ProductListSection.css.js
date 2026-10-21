import { style } from "@vanilla-extract/css";
import { boardMedia, vars } from "@/styles/tokens.css";

export const section = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "40px auto 0",
  padding: "0 16px",
});

export const toolbar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
  marginBottom: "24px",

  "@media": {
    [boardMedia.below767]: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gridTemplateAreas: `
        "title    register"
        "search   sort"
      `,
      alignItems: "center",
      rowGap: "8px",
      columnGap: "0px",
      marginBottom: "16px",
    },
  },
});

export const title = style({
  fontSize: "20px",
  margin: "0",

  "@media": {
    [boardMedia.below767]: {
      gridArea: "title",
    },
  },
});

export const controls = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",

  "@media": {
    [boardMedia.below767]: {
      display: "contents",
    },
  },
});

export const registerBtn = style({
  background: vars.color.blue,
  color: vars.color.white,
  padding: "12px 23px",
  height: "42px",
  border: "none",
  borderRadius: vars.radius.btn,
  fontWeight: "600",
  whiteSpace: "nowrap",
  flexShrink: "0",
  transition: "background 0.2s ease, transform 0.1s ease",

  ":hover": {
    background: vars.color.blueHover,
  },

  ":active": {
    transform: "scale(0.97)",
  },

  "@media": {
    [boardMedia.below767]: {
      gridArea: "register",
    },
  },
});

export const message = style({
  color: vars.color.gray600,
  padding: "24px 0",
  textAlign: "center",
});

export const grid = style({
  display: "grid",
  gap: "40px 24px",
  transition: "opacity 0.15s ease",
});

export const gridLoading = style({
  opacity: "0.4",
  pointerEvents: "none",
});

export const gridDesktop = style({
  gridTemplateColumns: "repeat(5, 1fr)",
});

export const gridTablet = style({
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px 16px",
});

export const gridMobile = style({
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "32px 8px",
});

export const card = style({
  display: "block",
});

export const imageWrap = style({
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: vars.radius.md,
  overflow: "hidden",
  background: vars.color.gray100,
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const name = style({
  margin: "16px 0 6px",
  fontSize: "16px",
  color: vars.color.gray900,
});

export const price = style({
  fontWeight: "700",
  margin: "0 0 4px",
});

export const detailPage = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "0 auto",
  padding: "80px 16px",
  textAlign: "center",
});

export const detailTitle = style({
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 12px",
});

export const detailImage = style({
  width: "100%",
  maxWidth: "480px",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: vars.radius.md,
  background: vars.color.gray100,
  margin: "0 auto 24px",
});

export const detailId = style({
  color: vars.color.gray600,
});
