import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/globals.css";

export const container = style({
  position: "sticky",
  top: 0,
  padding: "10px 24px",
  background: vars.color.white,
  borderBottom: `1px solid ${vars.color.lightGray}`,
  zIndex: 10,
});

export const inner = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  maxWidth: "1680px",
});

export const navigation = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",
});

export const logo = style({
  flexShrink: 0,
});

export const item = style({
  padding: "20px 16px",
  fontSize: "18px",
  fontWeight: 700,
  color: vars.color.gray[600],

  selectors: {
    '&[aria-current="page"]': { color: vars.color.primary[100] },
  },
});

export const login = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  padding: "12px 24px",
  width: "128px",
  height: "48px",
  fontWeight: 600,
  background: vars.color.primary[100],
  color: vars.color.gray[100],
  borderRadius: "8px",
});
