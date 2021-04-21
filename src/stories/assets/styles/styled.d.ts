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

export interface colors {
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;

  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;

  mono100: string;
  mono200: string;
  mono300: string;
  mono400: string;
  mono500: string;
  mono600: string;
  mono700: string;
  mono800: string;
  mono900: string;
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
  primariy: primary;
  secondary: secondary;
  mono: mono;
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

interface boxShadow {
  none: string;
  tiny: string;
  small: string;
  default: string;
  large: string;
  hulk: string;
}

interface borderRadius {}

interface border {}
