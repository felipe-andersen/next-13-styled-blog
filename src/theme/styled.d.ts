import "styled-components";

interface HeadingInterface {
  size: number;
  height: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    base: null | string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      white: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
      body: string;
      dark: string;
      orange: string;
      transparentPrimary: string;
      transparentSecondary: string;
      transparentTertiary: string;
      transparentQuaternary: string;
      transparentSuccess: string;
      transparentDanger: string;
      transparentWarning: string;
      transparentInfo: string;
    };
    font: {
      family: string;
      size: string;
      height: string;
    };
    // The breakpoints used throughout the theme.
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
    // The width of the container.
    container: {
      center: boolean;
      padding: string;
    };
    // The base font size used throughout the theme.
    baseFontSize: string;
    // The base font unit to use for font size.
    baseFontUnit: string;
    // The line height to use throughout the theme.
    baseLineHeight: number;
    // The list of typographic scale ratios to use for rem units.
    typography: {
      // The base ratio to use to generate rems.
      baseRatio: number;
      // The ratio for the headings.
      h1: HeadingInterface;
      h2: HeadingInterface;
      h3: HeadingInterfaceq;
      h4: HeadingInterface;
      h5: HeadingInterface;
      h6: HeadingInterface;
      body: HeadingInterface;
    };
    fontWeight: {
      thin: number;
      extraLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      black: number;
    };
  }
}
