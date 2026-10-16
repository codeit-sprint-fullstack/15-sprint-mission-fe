import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  background: vars.color.coolGray[50],
  display: "flex",
  flexDirection: "column",
  padding: "46px 24px 16px",
  borderRadius: "8px",
  gap: "18px",
  position: "relative",
});

export const badge = style({
  position: "absolute",
  top: "0px",
  left: "24px",
});

export const thumbnail = style({
  display: "block",
  flexShrink: 0,
  border: `1px solid ${vars.color.coolGray[200]}`,
  padding: "12px",
  borderRadius: "6px",
  width: "72px",
  height: "72px",
});

export const titleGroup = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  minWidth: "336px",
});

export const title = style({
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  wordBreak: "keep-all",
  fontSize: "20px",
  fontWeight: "600",
});

export const articleInfoGroup = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  fontSize: "14px",
  color: vars.color.secondary[400],
});

export const authorAndLikesGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: vars.color.secondary[600],
});
