import { style } from "@vanilla-extract/css";
export const list = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 24,
  width: "100%",
  "@media": {
    "(max-width: 1199px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 16,
    },
    "(max-width: 743px)": { gridTemplateColumns: "minmax(0, 1fr)" },
  },
});

export const card = style({
  width: "100%",
  maxWidth: 384,
  height: 169,
  boxSizing: "border-box",
  padding: "0 24px 9px",
  borderRadius: 8,
  backgroundColor: "#F9FAFB",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  "@media": {
    "(max-width: 1199px)": {
      maxWidth: "none",
      height: 198,
      paddingBottom: 16,
      selectors: { "&:nth-child(n + 3)": { display: "none" } },
    },
    "(max-width: 743px)": {
      selectors: { "&:nth-child(n + 2)": { display: "none" } },
    },
  },
});

export const badge = style({
  width: 102,
  height: 30,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  marginBottom: 16,
  borderRadius: "0 0 16px 16px",
  backgroundColor: "#3692FF",
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "26px",
});

export const content = style({
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
  height: 72,
  flexShrink: 0,
  marginBottom: 16,
  "@media": { "(max-width: 1199px)": { height: 80, marginBottom: 32 } },
});

export const title = style({
  flex: 1,
  minWidth: 0,
  margin: 0,
  color: "#1F2937",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "32px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  "@media": {
    "(max-width: 1199px)": {
      fontSize: 18,
      lineHeight: "26px",
      WebkitLineClamp: 3,
    },
  },
});

export const thumbnail = style({
  width: 72,
  height: 72,
  flexShrink: 0,
  boxSizing: "border-box",
  border: "1px solid #E5E7EB",
  borderRadius: 6,
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const footer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "24px",
});
