import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const articleCardBox = style({
  display: "flex",
  justifyContent: "space-between",
  background: "#FCFCFC",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
  padding: "16px 16px 24px",
});

export const titleAndProfileInfoBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const profileInfoBox = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const author = style({
  color: vars.color.secondary[600],
  fontSize: "14px",
});

export const date = style({
  color: vars.color.secondary[400],
  fontSize: "14px",
});

export const thumbnailAndLikesInfoBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "16px",
});

export const thumbnail = style({
  border: `1px solid ${vars.color.coolGray[100]}`,
  padding: "12px",
  background: "white",
  borderRadius: "8px",
});

export const likes = style({
  color: vars.color.secondary[500],
  lineHeight: "24px",
});
