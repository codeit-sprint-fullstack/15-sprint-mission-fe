import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
});

export const article = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  paddingBottom: 24,
  borderBottom: "1px solid #E5E7EB",
  backgroundColor: "#FCFCFC",
  cursor: "pointer",
});

export const content = style({
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
  textDecoration: "none",
  color: "inherit",
});

export const title = style({
  flex: 1,
  minWidth: 0,
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "32px",
  color: "#1F2937",
  overflowWrap: "anywhere",
  "@media": { "(max-width: 743px)": { fontSize: 18, lineHeight: "26px" } },
});

export const thumbnail = style({
  width: 72,
  height: 72,
  flexShrink: 0,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #F3F4F6",
  borderRadius: 8,
  backgroundColor: "#FFFFFF",
  overflow: "hidden",
});

export const footer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
});

export const likes = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  flexShrink: 0,
  color: "#6B7280",
  fontSize: 16,
  lineHeight: "26px",
});

export const empty = style({
  margin: 0,
  padding: "64px 0",
  textAlign: "center",
  color: "#9CA3AF",
  fontSize: 16,
});
