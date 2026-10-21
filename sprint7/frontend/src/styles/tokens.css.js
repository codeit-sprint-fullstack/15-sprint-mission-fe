import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    blue: null,
    blueHover: null,
    blueLight: null,
    gray900: null,
    gray700: null,
    gray600: null,
    gray500: null,
    gray400: null,
    gray300: null,
    gray200: null,
    gray100: null,
    gray50: null,
    white: null,
    bg: null,
    red: null,
  },
  radius: {
    md: null,
    btn: null,
    badge: null,
    pill: null,
    round: null,
    full: null,
    sm: null,
  },
  font: {
    body: null,
    logo: null,
  },
  size: {
    maxContentWidth: null,
    heroImageWidth: null,
    featureImageWidth: null,
    trustImageWidth: null,
    avatar: null,
    avatarLg: null,
    thumb: null,
  },
});

export const media = {
  tabletDown: "screen and (max-width: 1024px)",
  mobileDown: "screen and (max-width: 600px)",
};

export const deviceMedia = {
  desktop: "screen and (min-width: 1200px)",
  tablet: "screen and (min-width: 768px) and (max-width: 1199px)",
  mobile: "screen and (max-width: 767px)",
};

export const boardMedia = {
  below1199: "screen and (max-width: 1199px)",
  below767: "screen and (max-width: 767px)",
};

export const gridColumns = {
  desktop: 5,
  tablet: 3,
  mobile: 2,
};
