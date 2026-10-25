import { style, styleVariants } from "@vanilla-extract/css";

const containerBase = style({
  display: "flex",
  alignItems: "center",
  minWidth: 0,
});
export const container = styleVariants({
  list: [containerBase, { gap: 8 }],
  best: [containerBase],
  detail: [containerBase, { gap: 16 }],
  comment: [containerBase, { alignItems: "flex-start", gap: 8 }],
});

const textBase = style({
  display: "flex",
  minWidth: 0,
  gap: 8,
  alignItems: "center",
  fontSize: 14,
  lineHeight: "24px",
});
export const text = styleVariants({
  list: [textBase, { flexWrap: "wrap" }],
  best: [textBase, { width: "100%", justifyContent: "space-between" }],
  detail: [textBase, { flexWrap: "wrap", fontWeight: 500 }],
  comment: [
    textBase,
    {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 4,
      fontSize: 12,
      lineHeight: "18px",
    },
  ],
});
export const name = style({
  color: "var(--Secondary-600)",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
export const date = style({
  color: "var(--Secondary-400)",
  fontWeight: 400,
  flexShrink: 0,
  whiteSpace: "nowrap",
});

const profileBase = style({
  display: "block",
  borderRadius: "50%",
  flexShrink: 0,
  overflow: "hidden",
});
export const profile = styleVariants({
  list: [profileBase, { width: 24, height: 24 }],
  detail: [profileBase, { width: 40, height: 40 }],
  comment: [profileBase, { width: 32, height: 32 }],
});
export const profileImage = style({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "contain",
});
