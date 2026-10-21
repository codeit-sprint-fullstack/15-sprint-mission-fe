import { style } from "@vanilla-extract/css";
import { media, vars } from "@/styles/tokens.css";

export const hero = style({
  width: "100%",
  height: "540px",
  background: "#cfe5ff",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",

  "@media": {
    [media.tabletDown]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  },
});

export const heroInner = style({
  display: "flex",
  paddingRight: "0",
  justifyContent: "center",
  alignItems: "center",
  gap: "7px",

  "@media": {
    [media.tabletDown]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "84px 24px 0",
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      gap: "211px",
    },
    [media.mobileDown]: {
      paddingTop: "48px",
      gap: "132px",
    },
  },
});

export const heroText = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "32px",
  paddingBottom: "40px",
  flexShrink: "0",

  "@media": {
    [media.tabletDown]: {
      width: "512px",
      maxWidth: "100%",
      alignItems: "center",
      paddingBottom: "0",
      gap: "24px",
    },
    [media.mobileDown]: {
      width: "240px",
      maxWidth: "100%",
      gap: "18px",
    },
  },
});

export const heroTitle = style({
  margin: "0",
  color: vars.color.gray700,
  fontFamily: vars.font.body,
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "140%",

  "@media": {
    [media.tabletDown]: {
      alignSelf: "stretch",
      whiteSpace: "nowrap",
    },
    [media.mobileDown]: {
      fontSize: "32px",
      textAlign: "center",
      whiteSpace: "normal",
    },
  },
});

export const heroBreak = style({
  "@media": {
    [media.tabletDown]: {
      display: "none",
    },
    [media.mobileDown]: {
      display: "inline",
    },
  },
});

export const heroCta = style({
  display: "flex",
  height: "56px",
  padding: "16px 124px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  background: vars.color.blue,
  color: vars.color.white,
  borderRadius: vars.radius.pill,
  fontWeight: "700",
  fontSize: "18px",
  transition: "background 0.2s ease, transform 0.1s ease",

  ":hover": {
    background: vars.color.blueHover,
  },

  ":active": {
    transform: "scale(0.97)",
  },

  "@media": {
    [media.mobileDown]: {
      height: "48px",
      width: "100%",
      padding: "12px 16px",
      alignSelf: "stretch",
      fontSize: "16px",
    },
  },
});

export const heroImageWrap = style({
  width: vars.size.heroImageWidth,
  flexShrink: "0",
  alignSelf: "flex-end",

  "@media": {
    [media.tabletDown]: {
      width: "744px",
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    [media.mobileDown]: {
      height: "auto",
    },
  },
});

export const heroImage = style({
  width: "100%",
  maxWidth: vars.size.heroImageWidth,
  height: "auto",

  "@media": {
    [media.tabletDown]: {
      width: "100%",
      height: "auto",
    },
    [media.mobileDown]: {
      width: "100%",
      height: "auto",
      padding: "0",
    },
  },
});

export const features = style({
  background: vars.color.white,
});

export const featuresInner = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "0 auto",
  padding: "120px 24px",
  display: "flex",
  flexDirection: "column",
  gap: "96px",

  "@media": {
    [media.tabletDown]: {
      padding: "64px 24px",
      gap: "64px",
    },
    [media.mobileDown]: {
      padding: "48px 20px",
      gap: "48px",
    },
  },
});

export const featureRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "64px",

  "@media": {
    [media.tabletDown]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "24px",
    },
  },
});

export const featureRowReverse = style({
  flexDirection: "row-reverse",
});

export const featureImage = style({
  width: "100%",
  maxWidth: vars.size.featureImageWidth,
  height: "auto",
  borderRadius: vars.radius.md,
  flexShrink: "0",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.02)",
  },

  "@media": {
    [media.tabletDown]: {
      maxWidth: "100%",
    },
  },
});

export const featureText = style({
  maxWidth: "420px",

  "@media": {
    [media.tabletDown]: {
      maxWidth: "100%",
    },
  },
});

export const featureEyebrow = style({
  fontSize: "14px",
  fontWeight: "700",
  color: vars.color.blue,
  marginBottom: "12px",
});

export const featureTitle = style({
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1.4",
  marginBottom: "16px",

  "@media": {
    [media.tabletDown]: {
      fontSize: "22px",
    },
    [media.mobileDown]: {
      fontSize: "20px",
    },
  },
});

export const featureDescription = style({
  fontSize: "16px",
  lineHeight: "1.6",
  color: vars.color.gray600,

  "@media": {
    [media.mobileDown]: {
      fontSize: "14px",
    },
  },
});

export const featureBreak = style({
  "@media": {
    [media.tabletDown]: {
      display: "none",
    },
  },
});

export const trust = style({
  width: "100%",
  height: "540px",
  background: "#cfe5ff",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",

  "@media": {
    [media.tabletDown]: {
      height: "927px",
    },
    [media.mobileDown]: {
      height: "540px",
    },
  },
});

export const trustInner = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "69px",
  padding: "0 24px",
  textAlign: "left",

  "@media": {
    [media.tabletDown]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "flex-end",
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      padding: "201px 24px 0",
      gap: "217px",
    },
    [media.mobileDown]: {
      padding: "121px 20px 0",
      gap: "131px",
    },
  },
});

export const trustTitle = style({
  fontSize: "40px",
  fontWeight: "700",
  lineHeight: "140%",
  color: vars.color.gray700,

  "@media": {
    [media.tabletDown]: {
      width: "100%",
      fontSize: "32px",
    },
  },
});

export const trustImageWrap = style({
  width: vars.size.trustImageWidth,
  alignSelf: "flex-end",

  "@media": {
    [media.tabletDown]: {
      width: vars.size.trustImageWidth,
      maxWidth: "100%",
      alignSelf: "center",
    },
  },
});

export const trustImage = style({
  width: "100%",
  maxWidth: vars.size.trustImageWidth,
  height: "auto",
});
