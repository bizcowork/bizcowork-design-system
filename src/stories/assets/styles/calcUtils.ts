/** @format */

import theme from './theme';
import { borderRadius } from './styled';

export const calcRem = (size: number) => `${size / 16}rem`;

// export function calcBorderRadius(radius: typeof theme.borderRadius) {
//   const LT = radius.LT;
//   const RT = radius.RT;
//   const LB = radius.LB;
//   const RB = radius.RB;

//   const result = `${calcRem(LT)} ${calcRem(RT)} ${calcRem(LB)} ${calcRem(RB)}`;
//   return result;
// }

export function calcBorderRadius(value: number, side: 'none' | 'up' | 'down' | 'right' | 'left' = 'none') {
  const radius = `${calcRem(value)}` + ' ';
  const arr = new Array(4);
  switch (side) {
    case 'none':
      return arr.fill(radius);
    case 'up':
      return `${radius} ${radius} 0 0`;
    case 'down':
      return `0 ${radius} ${radius} 0`;
    case 'left':
      return `0 0 ${radius} ${radius}`;
    case 'right':
      return `${radius} 0 0 ${radius}`;
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

/**
 * @param ltRtRbLb leftTop, rightTop, rightBottom, leftBottom 순서로 컴포넌트 코너가 라운딩이 되는 순서. 변수명 바꾸자...
 * @returns 문자열 값으로 리턴.
 */
// export function calcBorderRadius(radius: borderRadius) {
//   const ltRtRbLb = radius;
//   console.log('borderRadius: ' + typeof radius);
//   if (ltRtRbLb.length < 1 || ltRtRbLb.length > 4) {
//     return '0rem 0rem 0rem 0rem';
//   } else {
//     return `${calcRem(ltRtRbLb[0])} ${calcRem(ltRtRbLb[1])} ${calcRem(ltRtRbLb[2])} ${calcRem(ltRtRbLb[3])}`;
//   }
// }
