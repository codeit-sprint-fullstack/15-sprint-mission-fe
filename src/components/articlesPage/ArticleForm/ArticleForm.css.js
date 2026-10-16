import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

const form = style({
  margin: "24px auto 0",
  width: "calc(100% - 48px)",
  maxWidth: 1200,
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

export const registerForm = style([form, { marginBottom: 800 }]);
export const editForm = style([form, { marginBottom: 200 }]);

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const title = style({
  margin: 0,
  color: vars.color.secondary[800],
  fontWeight: 700,
  fontSize: 20,
});

export const submitButton = style({
  padding: "12px 23px",
  border: 0,
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

export const fields = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const label = style({
  fontWeight: 700,
  fontSize: 18,
  color: vars.color.secondary[800],
});

export const titleInput = style({
  outline: "none",
  border: "none",
  background: vars.color.coolGray[100],
  padding: "16px 24px",
  borderRadius: 12,
  selectors: {
    "&::placeholder": {
      color: vars.color.secondary[400],
    },
  },
});

export const contentTextarea = style([
  titleInput,
  { minHeight: 282, resize: "vertical" },
]);
