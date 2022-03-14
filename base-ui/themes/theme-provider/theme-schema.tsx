export type ThemeSchema = {
  fontFamily: string;

  boxShadow: string;
  textColor: string;
  bgColor: string;
  borderColor: string;

  // social colors
  twitter?: string;
  slack?: string;
  github?: string;

  //  primary  //
  primaryColor: string;
  primaryHeavy: string;
  primaryLight: string;
  textOnPrimary: string;
  primaryBg: string;
  primaryBgHeavy: string;

  //  secondary  //
  secondaryColor: string;
  secondaryHeavy: string;
  secondaryLight: string;
  textOnSecondary: string;
  secondaryBg: string;
  secondaryBgHeavy: string;

  tertiaryColor: string;
  complimentaryColor: string;
};
