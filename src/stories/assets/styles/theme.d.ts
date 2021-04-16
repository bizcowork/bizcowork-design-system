/** @format */
import { DefaultTheme } from 'styled-components';
import { calcRem } from './calcUtils';
import { borderRadiusProps } from './calcUtils';
import Colors from './themeColors';

const fontSize = {
  textMin: calcRem(8),
  textSmall: calcRem(11),
  textBase: calcRem(14),
  textLarge: calcRem(16),
  textMax: calcRem(20),
  h1: calcRem(52),
  h2: calcRem(46),
  h3: calcRem(40),
  h4: calcRem(36),
  h5: calcRem(30),
  h6: calcRem(24),
};

const fontWeight = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

const compSize = {
  avatarSmall: calcRem(36),
  avatarBase: calcRem(44),
  avatarLarge: calcRem(52),
};

const opacity = {
  none: 0,
  opacity10: 0.1,
  opacity30: 0.3,
  opacity50: 0.5,
  opacity70: 0.7,
  opacity90: 0.9,
  max: 1,
};

const border = {
  none: 'none',
  simple: `${calcRem(0.5)} solid #D3D3D3`,
  normal: `${calcRem(1)} solid #D3D3D3`,
  thick: `${calcRem(2)} solid #696969`,
  bold: `${calcRem(4)} solid #000000`,
  black: `${calcRem(6)} solid #000000`,
};

const boxShadow = {
  none: 'none',
  small: `${calcRem(0)} ${calcRem(2)} ${calcRem(3)} rgba(0, 0, 0, 0.20)`,
  regular: `${calcRem(0)} ${calcRem(6)} ${calcRem(9)} rgba(0, 0, 0, 0.20)`,
  large: `${calcRem(0)} ${calcRem(12)} ${calcRem(20)} rgba(0, 0, 0, 0.20)`,
  huge: `${calcRem(0)} ${calcRem(20)} ${calcRem(36)} rgba(0, 0, 0, 0.25)`,
};

const theme: DefaultTheme = {
  borderRadius,
  opacity,
  fontSize,
  border,
  boxShadow,
  colors: {
    primary: {
      normal: '#F4762A',
      hover: '#E9610C',
      active: '#C2510A',
    },
  },
};

export default theme;
