import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const headContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "24px auto 0",
  width: "1200px",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "32px",
});

export const headTitle = style({
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "32px" /* 160% */,
});

export const registerBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "42px",
  padding: "12px 23px",

  borderRadius: "8px",
  background: tokens.color.primaryColor,

  color: tokens.color.backgroundColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "26px" /* 160% */,
  cursor: "pointer",   // 활성화 상태 명시

  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      background: tokens.color.textSecondaryColor,
      opacity: 0.5,
    },
  },
});

const textStyle = style({
  color: tokens.color.textSecondaryColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const title = style({
  display: "flex",
  height: "56px",
  padding: "16px 24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  flexShrink: 0,

  borderRadius: "12px",
  outline: "none",
  border: "none",
  background: tokens.color.backgroundColor,
  textStyle,
  margin: "12px 0 24px",
});
export const content = style({
  display: "flex",
  height: "282px",
  padding: "16px 24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  flexShrink: 0,

  borderRadius: "12px",
  outline: "none",
  border: "none",
  background: tokens.color.backgroundColor,
  textStyle,
  margin: "12px 0 24px",
});
