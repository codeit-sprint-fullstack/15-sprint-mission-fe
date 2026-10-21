import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

const shimmer = keyframes({
  from: { transform: "translateX(-100%)" },
  to: { transform: "translateX(100%)" },
});

export const skeleton = style({
  display: "block",
  position: "relative",
  overflow: "hidden",
  background: vars.color.gray100,
  borderRadius: vars.radius.sm,
  flexShrink: "0",
});

export const shimmerOverlay = style({
  "::after": {
    content: "",
    position: "absolute",
    inset: "0",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    animation: `${shimmer} 1.6s ease-in-out infinite`,
  },
});
