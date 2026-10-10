import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/globals.css";

export const container = style({
  position: "sticky",
  top: 0,
  padding: "9px 200px",
  background: vars.color.white,
  borderBottom: `1px solid ${vars.color.lightGray}`,
  zIndex: 10,
});

export const inner = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  maxWidth: "1920px",
});

export const navigation = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",
});

export const logo = style({
  flexShrink: 0,
});

export const group = style({
  padding: "0 15px",
});

export const item = style({
  padding: "21px 15px",
  fontSize: "18px",
  fontWeight: 700,
  lineHeight: "26px",
  color: vars.color.gray[600],
});

export const login = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  padding: "12px 23px",
  width: "128px",
  height: "48px",
  fontWeight: 600,
  lineHeight: "26px",
  background: vars.color.primary[100],
  color: vars.color.gray[100],
  borderRadius: "8px",
});
