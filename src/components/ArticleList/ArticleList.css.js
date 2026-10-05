import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
})

