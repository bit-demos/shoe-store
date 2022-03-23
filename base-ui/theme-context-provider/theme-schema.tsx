export type ThemeSchema = {
  fontFamily: string;
  fontFamilyHeadings: string;
  fontFamilyBody: string;
  fontFamilySerif: string;
  fontFamilyMono: string;

  // heading sizes
  headingXxs: string;
  headingXs: string;
  headingSm: string;
  headingMd: string;
  headingLg: string;
  headingXl: string;
  headingXxl: string;

  // font sizes
  fontXxs: string;
  fontXs: string;
  fontSm: string;
  fontMd: string;
  fontLg: string;
  fontXl: string;
  fontXxl: string;

  // font Weights
  fontWeightLight: number;
  fontWeightNormal: number;
  fontWeightSemiBold: number;
  fontWeightBold: number;

  // border radius
  borderRadiusSmall: string;
  borderRadiusMedium: string;
  borderRadiusLarge: string;
  borderRadiusXLarge: string;
  borderRadiusCircle: string;
  borderRadiusPill: string;

  //  primary
  primaryColor: string;
  primaryHeavy: string;
  primaryLight: string;
  textOnPrimary: string;
  primaryBg: string;
  primaryBgHeavy: string;

  //  secondary
  secondaryColor: string;
  secondaryHeavy: string;
  secondaryLight: string;
  textOnSecondary: string;
  secondaryBg: string;
  secondaryBgHeavy: string;

  // text colors
  textColor: string;
  textBright: string;
  textMuted: string;

  //background colors
  bgColor: string;
  backgroundBody: string;
  background: string;
  backgroundAlt: string;

  // form colors
  formPlaceholder: string;
  formText: string;

  // border
  borderColor: string;
  borderSize1: string;
  borderSize2: string;
  borderSize3: string;
  borderSize4: string;

  // outline colors
  colorFocusOutline: string;

  // elevation
  boxShadow: string;
  boxShadowXSmall: string;
  boxShadowSmall: string;
  boxShadowMedium: string;
  boxShadowLarge: string;
  boxShadowXLarge: string;
  boxShadowOutline: string;

  // other colors
  tertiaryColor: string;
  complimentaryColor: string;

  // error colors
  errorColor: string;
  errorHeavy: string;
  errorLight: string;
  errorBg: string;
  errorBgHeavy: string;

  // social colors
  twitter: string;
  slack: string;
  github: string;
};
