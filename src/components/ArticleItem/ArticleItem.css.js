import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const listContainer = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${tokens.color.borderColor}`,
  backgroundColor: tokens.color.articleBackground,
  width: "100%",
  marginBottom: '24px',
  paddingBottom: '24px',
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${tokens.color.borderColor}`,
  borderRadius: '8px',
  backgroundColor: tokens.color.articleBackground,
  padding: '0 24px',
});

export const bestSticker = style({
  backgroundColor: tokens.color.primaryColor,
  color: 'white',
  width: '25%',
  padding: '2px 24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'cetner',
  gap: '4px',
  marginBottom: '18px',

  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "26px",

  borderRadius: '0 0 16px 16px',
})

export const header = style({
  display: "flex",
  gap: "8px",
  justifyContent: "space-between",
  marginBottom: "16px",
});

export const title = style({
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "32px" /* 160% */,
});

export const defaultImg = style({
  display: "flex",
  width: "72px",
  height: "72px",
  padding: "13.713px 12px 13.715px 12px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: '8px',
  border: `1px solid ${tokens.color.backgroundColor}`,
  backgroundColor: tokens.color.cardBackground,
});

export const info = style({
  display: "flex",
  justifyContent: "space-between",
});

export const userInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
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

export const like = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: tokens.color.subtleTextColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
});
