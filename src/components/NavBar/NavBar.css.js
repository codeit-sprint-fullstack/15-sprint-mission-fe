import { style } from "@vanilla-extract/css";
import { media, vars } from "@/styles/tokens.css";

export const header = style({
  borderBottom: "1px solid #f3f4f6",
  background: "#fff",
});

export const inner = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "0 auto",
  height: "64px",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media": {

    [media.mobileDown]: {
      padding: "0 16px",
    },
  },
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: "32px",
});

export const logoLink = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: vars.font.logo,
  fontWeight: 700,
  fontSize: "25.633px",
  color: vars.color.blue,
  whiteSpace: "nowrap",

  "@media": {
    [media.mobileDown]: {
      fontSize: "18px",
    },
  },
});

export const logoIcon = style({
  width: "40px",
  height: "40px",
  flexShrink: "0",

  "@media": {
    [media.mobileDown]: {
      width: "32px",
      height: "32px",
    },
  },
});

export const nav = style({
  display: "flex",
  gap: "16px",
  fontWeight: 600,
  fontSize: "18px",
});

export const navLink = style({});

export const navLinkActive = style({
  color: vars.color.blue,
});

export const right = style({
  display: "flex",
  alignItems: "center",
  flexShrink: "0",
});

export const login = style({
  height: "42px",
  background: vars.color.blue,
  color: "#fff",
  padding: "12px 23px",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "16px",
  transition: "background 0.2s ease, transform 0.1s ease",
  ":hover": {
    background: vars.color.blueHover,
  },

  ":active": {
    background: vars.color.blueHover,
    transform: "scale(0.97)",
  },

  "@media": {
    [media.mobileDown]: {
      height: "36px",
      padding: "8px 8px",
      fontSize: "14px",
      whiteSpace: "nowrap",
    },
  },
});

export const profile = style({
  position: "relative",
});

export const profileButton = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const avatar = style({
  width: "40px",
  height: "40px",
  borderRadius: vars.radius.full,
  objectFit: "cover",

  "@media": {
    [media.mobileDown]: {
      width: "32px",
      height: "32px",
    },
  },
});

export const nickname = style({
  fontSize: "14px",
  color: vars.color.gray600,
  whiteSpace: "nowrap",

  "@media": {
    [media.mobileDown]: {
      display: "none",
    },
  },
});

export const menu = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  minWidth: "120px",
  padding: "4px",
  background: "#fff",
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.btn,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
});

export const menuButton = style({
  width: "100%",
  height: "40px",
  fontSize: "14px",
  color: vars.color.gray500,

  ":hover": {
    color: vars.color.gray900,
  },
});