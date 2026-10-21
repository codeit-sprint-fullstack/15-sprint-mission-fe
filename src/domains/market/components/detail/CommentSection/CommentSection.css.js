import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";
import { focusRing } from "@/styles/focus";
import { boardMedia } from "@/styles/tokens.css";

export const section = style({
  marginTop: "40px",

  "@media": {
    [boardMedia.below767]: {
      marginTop: "24px",
    },
  },
});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "26px",
  color: vars.color.gray900,
});

export const textarea = style({
  display: "block",
  width: "100%",
  height: "104px",
  marginTop: "10px",
  padding: "16px 24px",
  border: `1px solid transparent`,
  borderRadius: "12px",
  background: vars.color.gray100,
  fontSize: "16px",
  lineHeight: "26px",
  color: vars.color.gray800,
  resize: "none",

  "::placeholder": {
    color: vars.color.gray400,
  },
  ":focus": {
    ...focusRing,
  },

  "@media": {
    [boardMedia.below767]: {
      padding: "16px",
      fontSize: "16px",
    },
  },
});

export const submitRow = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "16px",
});

export const submit = style({
  width: "74px",
  height: "42px",
  borderRadius: "8px",
  background: vars.color.blue,
  color: vars.color.white,
  fontSize: "16px",
  fontWeight: 600,
  transition: "background 0.2s ease, transform 0.1s ease",

  selectors: {
    "&:hover:not(:disabled)": {
      background: vars.color.blueHover,
    },
    "&:active:not(:disabled)": {
      transform: "scale(0.97)",
    },
  },
  ":disabled": {
    background: vars.color.gray400,
    cursor: "not-allowed",
  },
});

export const item = style({
  padding: "24px 0 17px",
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const contentRow = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "16px",
});

export const content = style({
  flex: 1,
  minWidth: 0,
  fontSize: "14px",
  lineHeight: "24px",
  color: vars.color.gray800,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

export const author = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "26px",
});

export const authorFlat = style({
  marginTop: 0,
});

export const avatar = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const nickname = style({
  fontSize: "12px",
  lineHeight: "18px",
  color: vars.color.gray600,
});

export const time = style({
  fontSize: "12px",
  lineHeight: "18px",
  color: vars.color.gray400,
});

export const editing = style({
  paddingTop: "24px",
});

export const editTextarea = style({
  display: "block",
  width: "100%",
  height: "80px",
  padding: "16px 24px",
  border: `1px solid transparent`,
  borderRadius: "12px",
  background: vars.color.gray100,
  fontSize: "14px",
  lineHeight: "24px",
  color: vars.color.gray800,
  resize: "none",

  ":focus": {
    ...focusRing,
  },

  "@media": {
    [boardMedia.below767]: {
      padding: "16px",
    },
  },
});

export const editRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "16px",
});

export const editButtons = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",

  "@media": {
    [boardMedia.below767]: {
      gap: "16px",
    },
  },
});

export const cancel = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.gray500,
});

export const save = style({
  width: "106px",
  height: "42px",
  borderRadius: "8px",
  background: vars.color.blue,
  color: vars.color.white,
  fontSize: "16px",
  fontWeight: 600,

  transition: "background 0.2s ease, transform 0.1s ease",

  selectors: {
    "&:hover:not(:disabled)": {
      background: vars.color.blueHover,
    },
    "&:active:not(:disabled)": {
      transform: "scale(0.97)",
    },
  },
  ":disabled": {
    background: vars.color.gray400,
    cursor: "not-allowed",
  },
});

export const empty = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "56px",
  fontSize: "16px",
  lineHeight: "26px",
  color: vars.color.gray400,
});

export const emptyImage = style({
  marginBottom: "40px",

  "@media": {
    [boardMedia.below767]: {
      marginBottom: "24px",
    },
  },
});

export const emptyPc = style({
  "@media": {
    [boardMedia.below767]: {
      display: "none",
    },
  },
});

export const emptyMobile = style({
  display: "none",

  "@media": {
    [boardMedia.below767]: {
      display: "block",
    },
  },
});