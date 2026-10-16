import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
});

export const menuButton = style({
  display: "flex",
  padding: 0,
  border: 0,
  background: "transparent",
  cursor: "pointer",
});

export const dropdown = style({
  position: "absolute",
  zIndex: 10,
  top: "calc(100% + 8px)",
  right: 0,
  width: 200,
  margin: 0,
  padding: 0,
  listStyle: "none",
  overflow: "hidden",
  border: `1px solid ${vars.color.coolGray[200]}`,
  borderRadius: 12,
  background: "white",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
});

export const dropdownItem = style({
  width: "100%",
  padding: "16px 20px",
  border: 0,
  background: "white",
  color: vars.color.secondary[600],
  fontSize: 18,
  cursor: "pointer",
  selectors: {
    "&:hover": { background: vars.color.coolGray[100] },
  },
});

export const dropdownRow = style({
  selectors: {
    "&:not(:last-child)": {
      borderBottom: `1px solid ${vars.color.coolGray[200]}`,
    },
  },
});

export const modalOverlay = style({
  position: "fixed",
  zIndex: 1000,
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 24,
  background: "rgba(0, 0, 0, 0.4)",
});

export const modal = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
  maxWidth: 400,
  padding: 24,
  borderRadius: 16,
  background: "white",
  textAlign: "center",
});

export const modalActions = style({
  display: "flex",
  justifyContent: "center",
  gap: 12,
});

export const cancelButton = style({
  padding: "10px 20px",
  border: `1px solid ${vars.color.coolGray[200]}`,
  borderRadius: 8,
  background: "white",
  color: vars.color.secondary[600],
  cursor: "pointer",
});

export const deleteButton = style({
  padding: "10px 20px",
  border: 0,
  borderRadius: 8,
  background: vars.color.primary[100],
  color: vars.color.coolGray[100],
  cursor: "pointer",
  selectors: {
    "&:hover": { filter: "brightness(0.9)" },
  },
});

export const error = style({
  margin: 0,
  color: "#D32F2F",
});
