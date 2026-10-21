import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const badgeBar = style({
  position: "absolute",
  top: "0",
  left: "24px",
  width: "72px",
  height: "32px",
});

export const cardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const cardTop = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
});

export const titleLines = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
});

export const thumbBlock = style({
  width: "72px",
  height: "72px",
  borderRadius: vars.radius.sm,
});

export const metaLine = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  marginTop: "16px",
});

export const searchBlock = style({
  width: "325px",
  maxWidth: "100%",
  height: "42px",
  borderRadius: vars.radius.md,
});

export const sortBlock = style({
  width: "120px",
  height: "42px",
  borderRadius: vars.radius.btn,
});

export const writeButtonBlock = style({
  width: "100px",
  height: "42px",
  borderRadius: vars.radius.btn,
});

export const paginationBlock = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  margin: "40px 0",
});
