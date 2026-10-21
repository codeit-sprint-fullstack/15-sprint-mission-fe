import { style } from "@vanilla-extract/css";
import { vars, boardMedia } from "@/styles/tokens.css";
import { focusRing } from "@/styles/focus";

export const container = style({
  width: "calc(100% - 48px)",
  maxWidth: "1200px",
  margin: "0 auto",
  paddingTop: "24px",

  "@media": {
    [boardMedia.below767]: {
      width: "calc(100% - 32px)",
      paddingTop: "16px",
    },
  },
});

export const section = style({});

export const gridItem = style({
  minWidth: 0,
});

export const sectionSpacing = style({
  marginTop: "40px",

  "@media": {
    [boardMedia.below767]: {
      marginTop: "32px",
    },
  },
});

export const title = style({
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "32px",
  color: vars.color.gray900,
});

export const bestGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",
  marginTop: "16px",

  "@media": {
    "(min-width: 744px) and (max-width: 1199px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "10px",
    },
    [boardMedia.below767]: {
      gridTemplateColumns: "1fr",
    },
  },
});

export const head = style({
  display: "grid",
  gridTemplateColumns: "1fr 324px 132px 130px",
  gridTemplateAreas: '"title search add sort"',
  alignItems: "center",
  gap: "12px",

  "@media": {
    "(min-width: 744px) and (max-width: 1199px)": {
      gridTemplateColumns: "1fr 242px 133px 130px",
    },
    [boardMedia.below767]: {
      gridTemplateColumns: "1fr auto",
      gridTemplateAreas: '"title add" "search sort"',
      rowGap: "16px",
    },
  },
});

export const headTitle = style({
  gridArea: "title",
});

export const search = style({
  gridArea: "search",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  height: "42px",
  padding: "0 16px",
  borderRadius: vars.radius.md,
  background: vars.color.gray100,

  ":focus-within": {
    ...focusRing,
  },
});

export const searchInput = style({
  flex: 1,
  minWidth: 0,
  border: "none",
  background: "transparent",
  fontSize: "16px",
  lineHeight: "26px",

  ":focus": {
    outline: "none",
  },

  "::placeholder": {
    color: vars.color.gray400,
  },
});

export const addButton = style({
  gridArea: "add",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "42px",
  borderRadius: vars.radius.md,
  background: vars.color.blue,
  color: "#fff",
  fontSize: "16px",
  fontWeight: 600,

  transition: "background 0.2s ease, transform 0.1s ease",

  ":hover": {
    background: vars.color.blueHover,
  },
  ":active": {
    transform: "scale(0.97)",
  },

  "@media": {
    [boardMedia.below767]: {
      width: "133px",
    },
  },
});

export const sort = style({
  gridArea: "sort",

  "@media": {
    [boardMedia.below767]: {
      justifySelf: "end",
    },
  },
});

export const listGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "40px 24px",
  marginTop: "24px",
  transition: "opacity 0.15s",

  "@media": {
    "(min-width: 744px) and (max-width: 1199px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px 16px",
    },
    [boardMedia.below767]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "32px 8px",
    },
  },
});

export const stale = style({
  opacity: 0.6,
});

export const empty = style({
  padding: "80px 0",
  textAlign: "center",
  color: vars.color.gray500,
});

export const pagination = style({
  marginTop: "60px",
  marginBottom: "40px",

  "@media": {
    [boardMedia.below767]: {
      marginTop: "40px",
    },
  },
});