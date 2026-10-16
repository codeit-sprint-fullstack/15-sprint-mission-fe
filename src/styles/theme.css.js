import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: {
      100: "#3692FF",
    },
    secondary: {
      100: "#F3F4F6",
      200: "#E5E7EB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      800: "#1F2937",
    },
    coolGray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      900: "#111827",
    },
  },
});
