import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

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
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '40px',
})

export const goComment = style({
  marginBottom: '9px',
})

export const content = style({
  display: "flex",
  width: '100%',
  height: "104px",
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
  marginBottom: "16px",
});

export const locateBtn = style({
  display: 'flex',
  justifyContent: 'flex-end',
})

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