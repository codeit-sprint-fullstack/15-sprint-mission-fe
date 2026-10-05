import { style } from "@vanilla-extract/css";

export const footer = style({
  height: "10rem",
  backgroundColor: "#111827",
  display: "flex",
  padding: "2rem 12.5rem 6.75rem",
  justifyContent: "space-between",
  alignItems: "center",
});
// footer div {
//   flexShrink: "0",
// }
export const copyright = style({
  width: "8rem",
  height: "1.1875rem",
  fontSize: "1rem",
  fontWeight: "400",
  textAlign: "center",
  color: "#9ca3af",
   flexShrink: "0",
}) 
export const policy = style({
  display: "flex",
  gap: "1.875rem",
   color: "#e5e7eb",
    flexShrink: "0",
}) 

export const sns = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  width: "7.25rem",
  height: "1.25rem",
   flexShrink: "0",
}) 
export const snsanchor = style({
  width: "1.25rem",
}) 