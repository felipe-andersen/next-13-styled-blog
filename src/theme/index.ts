import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  name: "default",
  base: null,
  colors: {
    primary: "#00a8d1",
    secondary: "#F96647",
    tertiary: "#EF9A91",
    quaternary: "#F1E6B9",
    success: "#00A389",
    danger: "#FF5B5B",
    warning: "#FFBB54",
    info: "#58CDFF",
    white: "#FFFFFF",
    grey1: "#FCFCFC",
    grey2: "#5F5F5F",
    grey3: "#D0D6DE",
    grey4: "#B9BBBD",
    grey5: "#A3A3A3",
    body: "#464255",
    dark: "#000000",
    orange: "#F96647",
    transparentPrimary: "rgb(48 138 156 / 12%)",
    transparentSecondary: "rgb(183 219 249 / 15%)",
    transparentTertiary: "rgb(239 154 145 / 15%)",
    transparentQuaternary: "rgb(241 230 185 / 15%)",
    transparentSuccess: "rgb(46 214 163 / 15%)",
    transparentDanger: "rgb(255 91 91 / 15%)",
    transparentWarning: "rgb(255 187 84 / 15%)",
    transparentInfo: "rgb(88 205 255 / 15%)",
  },
  // The font used throughout the theme.
  font: {
    family: "DM Sans, sans-serif",
    size: "16px",
    height: "24px",
  },
  // The breakpoints used throughout the theme.
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
    xxxl: 1600,
  },
  // The width of the container.
  container: {
    center: false,
    padding: "1rem",
  },
  // The base font size used throughout the theme.
  baseFontSize: "16px",
  // The base font unit to use for font size.
  baseFontUnit: "rem",
  // The line height to use throughout the theme.
  baseLineHeight: 1.5,
  // The list of typographic scale ratios to use for rem units.
  typography: {
    // The base ratio to use to generate rems.
    baseRatio: 10,
    // The ratio for the headings.
    h1: {
      size: 3.2,
      height: 4.8,
    },
    h2: {
      size: 2.4,
      height: 3.6,
    },
    h3: {
      size: 2.1,
      height: 3.15,
    },
    h4: {
      size: 1.8,
      height: 2.7,
    },
    h5: {
      size: 1.5,
      height: 2.4,
    },
    h6: {
      size: 1.4,
      height: 2.3,
    },
    // The ratio for the body.
    body: {
      size: 1.6,
      height: 2.4,
    },
  },
  // List of font weights to use.
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
};
export type ThemeType = typeof theme;

export default theme;
