import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: "204px",
});

export const listWrapper = style({
  width: '100%',
  marginBottom: "64px",
});

export const commentItem = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${tokens.color.borderColor}`,
  backgroundColor: tokens.color.articleBackground,
  width: "100%",
  marginBottom: "24px",
  paddingBottom: "12px",
});

export const header = style({
  display: "flex",
  justifyContent: 'space-between',
  marginBottom: "24px",
});

export const content = style({
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
});

export const dotMenu = style({
  cursor: "pointer",
});

export const info = style({
  display: "flex",
  justifyContent: "flex-start",
});

export const detail = style({
  marginLeft: "8px",
});

export const userName = style({
  color: tokens.color.nameTextColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
});

export const date = style({
  color: tokens.color.textSecondaryColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
});

export const returnBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "40px",
  backgroundColor: tokens.color.primaryColor,
  width: "248px",
  height: "48px",
  paddingBottom: "12px 64px",
  gap: "8px",

  color: "white",
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "26px",
});
