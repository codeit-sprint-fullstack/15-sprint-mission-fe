import { style } from "@vanilla-extract/css";

export const articlesGrid = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
})