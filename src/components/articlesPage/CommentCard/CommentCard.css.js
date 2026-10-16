import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: "16px 0",
  borderBottom: `1px solid ${vars.color.coolGray[200]}`,
});

export const profileInfo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const profileDetails = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const authorAndTimeBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const author = style({
  color: vars.color.secondary[600],
  fontSize: 14,
});

export const date = style({
  color: vars.color.secondary[400],
  fontSize: 14,
});

export const commentHeaderBox = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const content = style({
  margin: 0,
  color: vars.color.secondary[800],
  whiteSpace: "pre-wrap",
});

export const editBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 8,
});

export const editTextarea = style({
  width: "100%",
  minHeight: 88,
  padding: 12,
  border: "none",
  background: vars.color.coolGray[100],
  borderRadius: 8,
  resize: "none",
  font: "inherit",
});

export const editActions = style({
  display: "flex",
  gap: 8,
});

export const cancelEditButton = style({
  padding: "8px 14px",
  border: `1px solid ${vars.color.coolGray[200]}`,
  borderRadius: 8,
  background: "white",
  color: vars.color.secondary[600],
  cursor: "pointer",
});

export const saveEditButton = style({
  padding: "8px 14px",
  border: 0,
  borderRadius: 8,
  background: vars.color.primary[100],
  color: vars.color.coolGray[100],
  cursor: "pointer",
  selectors: {
    "&:disabled": {
      background: vars.color.secondary[400],
      cursor: "not-allowed",
    },
  },
});
