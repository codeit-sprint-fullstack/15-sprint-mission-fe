import { style } from "@vanilla-extract/css";
import { vars } from "./globals.css";

export const image = style({
  flexShrink: 0,
});

export const hero = style({
  width: "100%",
  height: "540px",
  background: vars.color.skyblue,
});

export const heroInner = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "7px",
  margin: "0 auto",
  maxWidth: "1920px",
  height: "100%",
});

export const heroHeaders = style({
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "32px",
  height: "340px",
});

export const heroTitle = style({
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "56px",
  color: vars.color.gray[700],
});

export const heroLink = style({
  marginBottom: "60px",
  padding: "16px 124px",
  background: vars.color.primary[100],
  borderRadius: "40px",
  color: vars.color.gray[50],
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "32px",
});

export const section = style({
  background: vars.color.white,
});

export const inner = style({
  display: "flex",
  justifyContent: "center",
  padding: "138px 0",
  maxWidth: "1920px",
  margin: "0 auto",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "64px",
  width: "988px",
});

export const header = style({
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const tag = style({
  marginBottom: "12px",
  color: vars.color.primary[100],
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "26px",
});

export const title = style({
  marginBottom: "24px",
  letterSpacing: "0.8px",
  color: vars.color.gray[700],
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "56px",
});

export const text = style({
  color: vars.color.gray[700],
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "32px",
});

export const bottom = style({
  background: vars.color.snow,
});

export const bottomInner = style({
  width: "100%",
  height: "100%",
  background: vars.color.skyblue,
});

export const bottomWrapper = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "69px",
  margin: "0 auto",
  paddingTop: "143px",
  maxWidth: "1920px",
  height: "100%",
});

export const bottomHeader = style({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  height: "397px",
});

export const bottomTitle = style({
  marginBottom: "60px",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "56px",
  color: vars.color.gray[700],
});
