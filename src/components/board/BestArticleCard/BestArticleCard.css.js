import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  background: vars.color.gray[50],
  borderRadius: "8px",
  boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.12)",
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "0 24px 16px",
  height: "100%",
});

export const content = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "16px",
});

export const title = style({
  fontSize: "20px",
  fontWeight: 600,
  color: vars.color.gray[800],
});

export const thumbnail = style({
  flexShrink: 0,
  padding: "12px",
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: "6px",
  background: vars.color.white,
});

export const thumbnailImg = style({
  objectFit: "contain",
});

export const info = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: 400,
});

export const group = style({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
});

export const nickname = style({
  color: vars.color.gray[600],
});

export const like = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
  color: vars.color.gray[500],
});

export const date = style({
  color: vars.color.gray[400],
});
