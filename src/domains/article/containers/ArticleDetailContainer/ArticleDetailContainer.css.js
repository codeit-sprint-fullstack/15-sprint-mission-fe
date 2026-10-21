import { style } from "@vanilla-extract/css";
import { boardMedia, vars } from "@/styles/tokens.css";

export const subHeading = style({
  margin: "0 0 16px",
  fontSize: "16px",
});

export const row = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
});

export const avatarLg = style({
  width: vars.size.avatarLg,
  height: vars.size.avatarLg,
});

export const detailTitle = style({
  fontSize: "24px",
  lineHeight: "1.4",

  "@media": {
    [boardMedia.below767]: {
      fontSize: "18px",
    },
  },
});

export const detailAuthor = style({
  padding: "16px 0",
  borderBottom: `1px solid ${vars.color.gray300}`,
  color: vars.color.gray600,
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const detailLike = style({
  marginLeft: "16px",
  padding: "6px 14px",
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.pill,
  background: "none",
  font: "inherit",
  color: "inherit",
  cursor: "pointer",
});

export const detailImages = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  marginTop: "24px",
});

export const detailImageItem = style({
  maxWidth: "66%",
  borderRadius: vars.radius.md,
  overflow: "hidden",
  background: vars.color.gray100,

  "@media": {
    [boardMedia.below767]: {
      maxWidth: "100%",
    },
  },
});

export const detailImage = style({
  maxWidth: "100%",
  height: "auto",
  display: "block",
});

export const detailBody = style({
  margin: "24px 0 48px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap",
});

export const commentArea = style({
  height: "104px",
  resize: "none",
});

export const commentEdit = style({
  height: "80px",
  resize: "none",
  marginBottom: "12px",
});

export const cmt = style({
  padding: "12px 0 16px",
  background: vars.color.bg,
  borderBottom: `1px solid ${vars.color.gray300}`,
  marginBottom: "24px",
  fontSize: "14px",
});

export const cmtText = style({
  margin: "0",
  whiteSpace: "pre-wrap",
});

export const cmtWho = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "20px",
  fontSize: "12px",
  color: vars.color.gray600,
});

export const cmtWhoSmall = style({
  display: "block",
  color: vars.color.gray400,
});

export const cmtCancel = style({
  color: vars.color.gray600,
  fontWeight: "600",
  marginRight: "16px",
});

export const cmtSubmit = style({
  display: "flex",
  justifyContent: "flex-end",
  margin: "16px 0 32px",
});
