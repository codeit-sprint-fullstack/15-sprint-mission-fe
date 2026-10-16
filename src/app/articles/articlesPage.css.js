import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({});

export const bestArticlesContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  maxWidth: "1200px",
  margin: "24px auto 0",
});

export const title = style({
  fontWeight: "700",
  fontSize: "20px",
  color: vars.color.coolGray[900],
  textAlign: "left",
});

export const articlesListContainer = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  margin: "40px auto",
  gap: "24px",
});

export const articlesListHeader = style({
  display: "flex",
  justifyContent: "space-between",
});

export const registerButton = style({
  background: vars.color.primary[100],
  padding: "12px 23px",
  borderRadius: "8px",
  color: "white",
  fontWeight: "600",
});

export const optionsContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
})
