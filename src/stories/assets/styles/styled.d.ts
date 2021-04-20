/** @format */

// /** @format */

import 'styled-component';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius;
    backgroundImage;
    fontSize;
    colors;
    border;
    opacity;
    boxShadow;
  }
}

export const color = {
  primary: '#039BE5',
  secondary: '#F4511E',
  warning: '#FB8C00',
  success: '#43A047',
  danger: '#e53935',
  white: '#F5F5F5',
  black: '#212121',
};

export interface primaries {
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
}

export interface secondaries {
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;
}

export interface greies {
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;
}

interface fontSize {
  textSmall: string;
  textBase: string;
  textLarge: string;
  titleSmall: string;
  titleBase: string;
  titleLarge: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
}

interface colors {
  primary: {
    normal: string;
    hover: string;
    active: string;
  };
  primariy: primaries;
  secondary: secondaries;
  grey: greies;
}

interface opacity {
  none: number;
  opacity10: number;
  opacity30: number;
  opacity50: number;
  opacity70: number;
  opacity90: number;
  opacityNone: number;
}

interface border {
  simple: string;
  normal: string;
  thick: string;
  bold: string;
  black: string;
}

interface boxShadow {
  none: string;
  small: string;
  regular: string;
  large: string;
  huge: string;
}

interface borderRadius {
  thickness: {};
}
