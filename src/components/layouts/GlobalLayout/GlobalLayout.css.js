import { style } from "@vanilla-extract/css";

export const Wrapper = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const nav = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 200px",
  borderBottom: "1px solid #dfdfdf",
  background: "#fff",
});
export const navContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  // margin: "0 auto",
});
export const logoLink = style({
  flexShrink: 0,
});
export const logoImg = style({
  display: "flex",
  width: "153px",
  height: "60px",
  padding: "5px 0 5px 0",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "8px",
  flexShrink: "0",
  cursor: "pointer",
});
export const login = style({
  display: "flex",
  flexShrink: "0",
  width: "88px",
  height: "42px",
  padding: "12px 23px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "8px",
  background: "var(--Primary-100, #3692ff)",
  color: "var(--Cool-Gray-100, #f3f4f6)",
  cursor: "pointer",

  /* pretendard/lg-16px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "26px" /* 162.5% */,
});

export const main = style({
  flex: 1,
});

const commonCss = style({
  flexShrink: 0,
  color: "var(--Secondary-600, #4b5563)",
  textAlign: "center",
  cursor: "pointer",
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "26px",
  textDecoration: "none",
});
export const goBoard = style([commonCss]);
export const secondShop = style([commonCss, { marginLeft: "1rem" }]);


