/** @format */

import theme from './theme';

export const calcRem = (size: number) => `${size / 16}rem`;

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
      return `${rem} ${rem} ${rem} ${rem}`;
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

export function calcBorder(size: number = 0, style: string = 'solid', color: string = '#000000') {
  return `${calcRem(size)} ${style} ${color}`;
}
