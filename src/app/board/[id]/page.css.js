import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "64px",
});

export const article = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingBottom: "16px",
  borderBottom: `1px solid ${vars.color.gray[200]}`,
});

export const titleRow = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
});

export const title = style({
  fontSize: "28px",
  fontWeight: 700,
  color: vars.color.gray[800],
});

export const meta = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "32px",
});

export const group = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
});

export const nickname = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
  fontSize: "16px",
  color: vars.color.gray[600],
});

export const profileImg = style({
  objectFit: "contain",
});

export const date = style({
  fontSize: "16px",
  fontWeight: 400,
  color: vars.color.gray[400],
});

export const like = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
  padding: "4px 12px",
  fontSize: "16px",
  color: vars.color.gray[500],
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: "35px",
  background: vars.color.white,
});

export const content = style({
  minHeight: "20svh",
  fontSize: "18px",
  fontWeight: 400,
  color: vars.color.gray[800],
  whiteSpace: "pre-wrap",
});

export const backButton = style({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "flex-end", // svg 아이콘 안쪽 여백으로, 시각적 조정 작업
  margin: "0 auto",
  padding: "12px 40px",
  background: vars.color.primary[100],
  borderRadius: "40px",
  color: vars.color.white,
  fontSize: "18px",
  fontWeight: 600,
});
