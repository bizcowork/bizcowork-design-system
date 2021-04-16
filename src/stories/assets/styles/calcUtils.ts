/** @format */

import theme from './theme.d';

export function calcBorderRadius(radius: number) {
  switch (radius) {
    case 0:
      return theme.borderRadius.radiusNone;
    case 3:
      return theme.borderRadius.radius03;
    case 5:
      return theme.borderRadius.radius05;
    case 10:
      return theme.borderRadius.radius10;
    case 15:
      return theme.borderRadius.radius15;
    case 20:
      return theme.borderRadius.radius20;
    case 25:
      return theme.borderRadius.radius25;
    case 50:
      return theme.borderRadius.radiusHalf;
    default:
      return theme.borderRadius.radiusNone;
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
