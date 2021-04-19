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

// export interface borderRadius {
//   lt: string;
//   rt: string;
//   lb: string;
//   rb: string;
// }
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
  ltRtRbLb: number[];
}
