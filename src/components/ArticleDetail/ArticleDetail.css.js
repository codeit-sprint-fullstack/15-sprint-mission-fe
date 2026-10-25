import { style } from "@vanilla-extract/css";

export const article = style({
  width: "100%",
  marginBottom: 32,
  display: "flex",
  flexDirection: "column",
  gap: 24,
  color: "var(--Secondary-800)",
  "@media": {
    "(max-width: 743px)": {
      gap: 16,
    },
  },
});
export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});
export const titleRow = style({
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
});
export const title = style({
  flex: 1,
  minWidth: 0,
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "32px",
  overflowWrap: "anywhere",
});
export const metadata = style({
  display: "flex",
  alignItems: "center",
  gap: 32,
  "@media": { "(max-width: 743px)": { gap: 16, flexWrap: "wrap" } },
});
export const likesGroup = style({
  display: "flex",
  alignItems: "center",
  gap: 32,
  "@media": { "(max-width: 743px)": { gap: 16 } },
});
export const likes = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  height: 40,
  padding: "3px 12px",
  border: "1px solid var(--Cool-Gray-200)",
  borderRadius: 35,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "26px",
  color: "var(--Cool-Gray-500)",
  backgroundColor: "#FFFFFF",
});
export const divider = style({ width: "100%", height: 1, overflow: "hidden" });
export const content = style({
  margin: 0,
  fontSize: 18,
  lineHeight: "26px",
  whiteSpace: "pre-wrap",
  overflowWrap: "anywhere",
  "@media": { "(max-width: 743px)": { fontSize: 16 } },
});
export const menu = style({ position: "relative", flexShrink: 0 });
export const menuTrigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  cursor: "pointer",
  listStyle: "none",
  selectors: { "&::-webkit-details-marker": { display: "none" } },
  ":focus-visible": {
    outline: "2px solid var(--Primary-100)",
    outlineOffset: 3,
  },
});
export const menuPanel = style({
  position: "absolute",
  zIndex: 1,
  right: 0,
  top: 32,
  width: 139,
  padding: "2px 0",
  backgroundColor: "#FFFFFF",
  border: "1px solid var(--Cool-Gray-200)",
  borderRadius: 8,
  overflow: "hidden",
  "@media": { "(max-width: 743px)": { width: 102 } },
});
export const menuItem = style({
  display: "block",
  width: "100%",
  height: 44,
  padding: 0,
  border: "none",
  backgroundColor: "#FFFFFF",
  color: "var(--Cool-Gray-400)",
  fontSize: 14,
  cursor: "pointer",
});

export const dividerImage = style({ display: "block", maxWidth: "none" });
