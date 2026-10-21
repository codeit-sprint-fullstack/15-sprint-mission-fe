import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const titleWrap = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
});

export const titleBlock = style({
  width: "60%",
  height: "34px",
});

export const kebabBlock = style({
  width: "24px",
  height: "24px",
});

export const authorRow = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px 0",
});

export const avatarBlock = style({
  width: vars.size.avatarLg,
  height: vars.size.avatarLg,
  borderRadius: "50%",
});

export const authorName = style({
  width: "80px",
  height: "14px",
});

export const authorDate = style({
  width: "110px",
  height: "14px",
});

export const likeBlock = style({
  width: "64px",
  height: "34px",
  borderRadius: vars.radius.pill,
  marginLeft: "auto",
});

export const contentLines = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  margin: "24px 0 48px",
});

export const commentHeading = style({
  width: "90px",
  height: "22px",
  marginBottom: "16px",
});

export const commentAreaBlock = style({
  width: "100%",
  height: "104px",
  borderRadius: vars.radius.md,
});

export const submitWrap = style({
  display: "flex",
  justifyContent: "flex-end",
  margin: "16px 0 32px",
});

export const submitBlock = style({
  width: "88px",
  height: "42px",
  borderRadius: vars.radius.btn,
});

export const commentItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "12px 0 16px",
  borderBottom: `1px solid ${vars.color.gray300}`,
  marginBottom: "24px",
});

export const commentText = style({
  height: "16px",
});

export const commentMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const commentMetaDot = style({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
});

export const commentMetaName = style({
  width: "64px",
  height: "12px",
});

export const commentMetaDate = style({
  width: "96px",
  height: "12px",
});

export const backBlock = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
});

export const backBtnBlock = style({
  width: "180px",
  height: "48px",
  borderRadius: vars.radius.round,
});
