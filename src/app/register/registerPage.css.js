import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const registerForm = style({
  margin: "0 auto",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  marginTop: "24px",
  marginBottom: 800,
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const formTitle = style({
  fontWeight: "700",
  fontSize: 20,
});

export const registerButton = style({
  padding: "12px 23px",
  borderRadius: "8px",
  background: vars.color.secondary[400],
  color: vars.color.coolGray[100],
  fontWeight: "600",
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export const inputBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const label = style({
  fontWeight: 700,
  fontSize: "18px",
  color: vars.color.secondary[800],
});

export const titleInput = style({
  outline: "none",
  border: "none",
  background: vars.color.coolGray[100],
  padding: "16px 24px",
  borderRadius: "12px",
  "&::placeholder": {
    color: vars.color.secondary[400],
  },
});

export const contentTextarea = style([
  titleInput,
  { minHeight: "282px", resize: "none" },
]);
