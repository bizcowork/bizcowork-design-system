/** @format */
import { DefaultTheme } from 'styled-components';
import { calcRem, calcBorderRadius as borderRadius } from './calcUtils';
import { primaries, secondaries, greies } from './themeColors';

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
  simple: `${calcRem(1)} solid #000000`,
  normal: `${calcRem(2)} solid #000000`,
  thick: `${calcRem(3)} solid #000000`,
  bold: `${calcRem(4)} solid #000000`,
  black: `${calcRem(5)} solid #000000`,
};

const boxShadow = {
  none: 'none',
  small: `${calcRem(0)} ${calcRem(2)} ${calcRem(3)} rgba(0, 0, 0, 0.20)`,
  regular: `${calcRem(0)} ${calcRem(6)} ${calcRem(9)} rgba(0, 0, 0, 0.20)`,
  large: `${calcRem(0)} ${calcRem(12)} ${calcRem(20)} rgba(0, 0, 0, 0.20)`,
  huge: `${calcRem(0)} ${calcRem(26)} ${calcRem(36)} rgba(0, 0, 0, 0.25)`,
};

const backgroundImage = '../static/images/006.png';

const theme: DefaultTheme = {
  borderRadius,
  backgroundImage,
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
    // primary: primaries,
    secondary: secondaries,
    grey: greies,
  },
};

export default theme;
