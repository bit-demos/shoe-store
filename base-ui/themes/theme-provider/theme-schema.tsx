export type ThemeSchema = {
  fontFamily?: string;

  light20?: string;
  light30?: string;
  light50?: string;

  dark20?: string;
  dark30?: string;
  dark50?: string;

  boxShadow?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;

  // social colors
  twitter?: string;
  slack?: string;
  github?: string;

  //  primary  //
  primaryColor?: string;
  primaryHeavy?: string;
  primaryLight?: string;
  primaryText?: string;
  primaryTextHeavy?: string;
  textOnPrimary?: string;
  primaryBg?: string;
  primaryBgHeavy?: string;

  //  secondary  //
  secondaryColor?: string;
  secondaryHeavy?: string;
  secondaryLight?: string;
  secondaryText?: string;
  secondaryTextHeavy?: string;
  textOnSecondary?: string;
  secondaryBg?: string;
  secondaryBgHeavy?: string;

  tertiaryColor?: string;
  complimentaryColor?: string;
};
