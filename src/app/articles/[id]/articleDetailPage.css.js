import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  margin: "34 auto 200",
  maxWidth: 1200,
  gap: 32,
});

export const article = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const title = style({
  fontWeight: 700,
  fontSize: 20,
  color: vars.color.coolGray[800],
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
});

export const infoBoxes = style({
  display: "flex",
  alignItems: "center",
  gap: 32,
});

export const profileInfoBox = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const dividerLine = style({
  height: "34px",
  paddingRight: "16px",
  borderRight: `1px solid ${vars.color.coolGray[200]}`,
  display: "flex",
  alignItems: "center",
});

export const likesBox = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
  border: `1px solid ${vars.color.secondary[200]}`,
  borderRadius: 35,
  padding: "4 12",
});

export const hr = style({
  alignSelf: "stretch",
  width: "100%",
  flexShrink: 0,
  height: 0,
  border: "none",
  borderTop: "1px solid #E5E7EB",
  margin: 0,
});

export const content = style({
  fontSize: 18,
  color: vars.color.secondary[800],
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const label = style({
  fontWeight: 600,
});

export const textarea = style({
  border: "none",
  background: vars.color.coolGray[100],
  borderRadius: 12,
  padding: "16px 24px",
  minHeight: 104,
  resize: "none",
  selectors: {
    "&::placeholder": {
      color: vars.color.secondary[400],
    },
  },
});

export const commentSubmitButton = style({
  alignSelf: "flex-end",
  padding: "12px 23px",
  border: "none",
  borderRadius: 8,
  background: vars.color.primary[100],
  color: vars.color.coolGray[100],
  fontWeight: 600,
  cursor: "pointer",
  selectors: {
    "&:disabled": {
      background: vars.color.secondary[400],
      cursor: "not-allowed",
    },
  },
});

export const backButton = style({
  display: "flex",
  gap: 8,
  alignSelf: "center",
  borderRadius: 40,
  padding: "12px 64px",
  background: vars.color.primary[100],
  color: vars.color.coolGray[100],
  fontWeight: 600,
  fontSize: 18,
});
