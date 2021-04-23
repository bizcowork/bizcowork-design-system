import { DefaultTheme } from 'styled-components';
import { calcRem, calcBorderRadius as borderRadius } from '../../utils/functions/utils';

export const primary = {
  tone100: '#B3E5FC',
  tone200: '#81D4FA',
  tone300: '#4FC3F7',
  tone400: '#29B6F6',
  tone500: '#03A9F4',
  tone600: '#039BE5',
  tone700: '#0288D1',
  tone800: '#0277BD',
  tone900: '#01579B',
};

export const secondary = {
  tone100: '#FFCCBC',
  tone200: '#FFAB91',
  tone300: '#FF8A65',
  tone400: '#FF7043',
  tone500: '#FF5722',
  tone600: '#F4511E',
  tone700: '#E64A19',
  tone800: '#D84315',
  tone900: '#BF360C',
};

export const mono = {
  tone100: '#F5F5F5',
  tone200: '#EEEEEE',
  tone300: '#E0E0E0',
  tone400: '#BDBDBD',
  tone500: '#9E9E9E',
  tone600: '#757575',
  tone700: '#616161',
  tone800: '#424242',
  tone900: '#212121',
};

export const blackWhite = {
  black: '#000000',
  white: 'rgba(255, 255, 255, 1)',
};

export const colors = {
  primary: primary,
  secondary: secondary,
  mono: mono,
  blackWhite: blackWhite,
};

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

const boxShadow = {
  none: 'none',
  tiny: `${calcRem(0)} ${calcRem(4)} ${calcRem(2)} ${calcRem(2)} rgba(0, 0, 0, 0.20)`,
  small: `${calcRem(0)} ${calcRem(6)} ${calcRem(3)} rgba(0, 0, 0, 0.20)`,
  default: `${calcRem(0)} ${calcRem(8)} ${calcRem(4)} rgba(0, 0, 0, 0.20)`,
  large: `${calcRem(0)} ${calcRem(12)} ${calcRem(8)} rgba(0, 0, 0, 0.20)`,
  hulk: `${calcRem(0)} ${calcRem(18)} ${calcRem(12)} rgba(0, 0, 0, 0.25)`,
};

const backgroundImage = '../static/images/006.png';

const theme: DefaultTheme = {
  // calcBorder,
  // calcBorderRadius,
  // border,
  borderRadius,
  backgroundImage,
  opacity,
  fontSize,
  boxShadow,
  colors,
};

export default theme;
