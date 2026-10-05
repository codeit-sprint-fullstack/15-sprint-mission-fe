import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  color: {
    primaryColor: "#3692FF",
    primaryColorHover: "#5495e9",
    backgroundColor: "#f3f4f6",
    articleBackground: '#fcfcfc',
    cardBackground: "#ffffff",
    textColor: "#1f2937",
    textSecondaryColor: "#9CA3AF",
    nameTextColor: '#4B5563',
    subtleTextColor: "#6b7280",
    borderColor: "#e5e7eb",
    borderSecondColor: '#D1D5DB',
    dangerColor: "#dc2626",
    dangerColorHover: "#b91c1c",
  },
});
