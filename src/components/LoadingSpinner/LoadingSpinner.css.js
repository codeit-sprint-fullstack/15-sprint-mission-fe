import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const spinner = style({
  width: "24px",
  height: "24px",
  border: `2px solid ${vars.color.gray300}`,
  borderTopColor: vars.color.blue,
  borderRadius: "50%",
  animation: `${spin} 0.8s linear infinite`,
});

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  padding: "48px 0",
});
