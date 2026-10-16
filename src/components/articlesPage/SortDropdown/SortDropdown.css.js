import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const sortDropdownContainer = style({
  position: "relative",
});

export const sortDropdown = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 20px",
  background: "white",
  border: `1px solid ${vars.color.coolGray[200]}`,
  color: vars.color.secondary[800],
  borderRadius: "12px",
  cursor: "pointer",
  minWidth: "130px",
  outline: "none",
});

export const arrowIcon = style({
  display: "block",
  pointerEvents: "none",
  transition: "transform 0.2s ease",
});

export const rotate = style({
  transform: "rotate(180deg)",
});

export const dropdownList = style({
  position: "absolute",
  top: "100%",
  left: 0,
  margin: 0,
  width: "100%",
  listStyle: "none",
  border: `1px solid ${vars.color.coolGray[200]}`,
  borderRadius: "12px",
  overflow: "hidden",
  zIndex: 100,
});

export const dropdownItem = style({
  padding: "12px 20px",
  cursor: "pointer",
  color: vars.color.secondary[800],
  background: "white",

  selectors: {
    "&:not(:last-child)": {
      borderBottom: `1px solid ${vars.color.coolGray[200]}`,
    },

    "&:hover": {
      backgroundColor: vars.color.coolGray[200],
    },
  },
});

export const selected = style({
  fontWeight: "700",
});
