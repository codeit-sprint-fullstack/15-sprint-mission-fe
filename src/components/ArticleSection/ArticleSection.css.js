import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const articleHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
});

export const title = style({
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "32px",
});

export const writeBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "42px",
  padding: "12px 23px",

  color: 'white',
  borderRadius: "8px",
  background: tokens.color.primaryColor,
  cursor: 'pointer',
});
