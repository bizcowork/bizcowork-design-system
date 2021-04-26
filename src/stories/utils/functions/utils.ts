/** @format */

import theme from '../../assets/styles/theme';
import { ButtonFigure, ButtonSize } from '../../components/Button/buttonTypes';

export function calcRem(size: number) {
  return `${size / 16}rem`;
}

export function remToPixel(size: string) {
  const px = Number(size.split('rem')[0]) * 16 * 1.16;
  return px;
}

export function calcBorderRadius(radius: number = 0, direction: 'none' | 'up' | 'right' | 'down' | 'left' = 'none') {
  const rem = calcRem(radius);
  switch (direction) {
    case 'none':
      return `${rem} ${rem} ${rem} ${rem}`;
    case 'up':
      return `${rem} ${rem} 0 0`;
    case 'right':
      return `0 ${rem} ${rem} 0`;
    case 'down':
      return `0 0 ${rem} ${rem}`;
    case 'left':
      return `${rem} 0 0 ${rem}`;
    default:
      return '0 0 0 0';
  }
}

export function calcBoxShadow(size: string) {
  switch (size) {
    case 'none':
      return theme.boxShadow.none;
    case 'small':
      return theme.boxShadow.small;
    case 'regular':
      return theme.boxShadow.regular;
    case 'large':
      return theme.boxShadow.large;
    case 'huge':
      return theme.boxShadow.huge;
  }
}

export const sizeToRem = (size: 'small' | 'default' | 'large' | 'hulk') => {
  let result: string;
  switch (size) {
    case 'small':
      result = calcRem(20 * 1.16);
      break;
    case 'default':
      result = calcRem(24 * 1.16);
      break;
    case 'large':
      result = calcRem(32 * 1.16);
      break;
    case 'hulk':
      result = calcRem(40 * 1.16);
      break;
  }
  return result;
};

export const setMargin = (position: 'left' | 'right' | 'only' | 'none') => {
  let margin: string;
  switch (position) {
    case 'left':
      margin = `0 ${calcRem(8)} 0 0`;
      break;
    case 'right':
      margin = `0 0 0 ${calcRem(12)}`;
      break;
    case 'only':
      margin = `0 ${calcRem(4)} 0 ${calcRem(4)}`;
      break;
    case 'none':
      margin = `0 0 0 0`;
      break;
    default:
      margin = '0 0 0 0';
      break;
  }
  return margin;
};
