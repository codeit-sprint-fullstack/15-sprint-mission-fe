"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { deviceMedia } from "@/styles/tokens.css";

export function useDeviceType() {
  const isDesktop = useMediaQuery(deviceMedia.desktop);
  const isTablet = useMediaQuery(deviceMedia.tablet);

  if (isDesktop) return "desktop";
  if (isTablet) return "tablet";
  return "mobile";
}
