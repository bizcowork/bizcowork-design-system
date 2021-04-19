/** @format */

import theme, { borderRadius } from './theme.d';

export const calcRem = (size: number) => `${size / 16}rem`;

export function calcBorderRadius(radius: typeof borderRadius) {
  const LT = radius.LT;
  const RT = radius.RT;
  const LB = radius.LB;
  const RB = radius.RB;

  const result = `${calcRem(LT)} ${calcRem(RT)} ${calcRem(LB)} ${calcRem(RB)}`;
  return result;
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

export function calcBorder(size: string) {
  switch (size) {
    case 'none':
      return theme.border.none;
    case 'simple':
      return theme.border.simple;
    case 'normal':
      return theme.border.normal;
    case 'thick':
      return theme.border.thick;
    case 'bold':
      return theme.border.bold;
    case 'black':
      return theme.border.black;
    default:
      return theme.border.none;
  }
}
