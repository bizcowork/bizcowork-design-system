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

export const setButtonFigure = (
  color: 'primary' | 'secondary' | 'mono' = 'primary',
  type: 'default' | 'outline' | 'inverted' | 'block' = 'default',
  disabled: boolean = false,
): ButtonFigure => {
  let figure: ButtonFigure;
  switch (type) {
    case 'default':
      figure = {
        colors: {
          enabled: theme.colors[color].tone500,
          hover: theme.colors[color].tone400,
          active: theme.colors[color].tone600,
          disabled: theme.colors[color].tone200,
          lightFontColor: theme.colors['mono'].tone100,
          darkFontColor: theme.colors[color].tone500,
          activeBorderColor: theme.colors[color].tone300,
        },
        border: {
          borderThickness: `solid ${calcRem(8)}`,
          borderColor: `${theme.colors[color].tone500}`,
          borderActive: `${theme.colors[color].tone200}`,
        },
        disabled: disabled ? false : true,
        type: type,
      };
      break;
    case 'outline':
      figure = {
        colors: {
          enabled: theme.colors['blackWhite'].white,
          hover: theme.colors['mono'].tone100,
          active: theme.colors['blackWhite'].white,
          disabled: theme.colors['mono'].tone100,
          lightFontColor: theme.colors[color].tone500,
          darkFontColor: theme.colors['mono'].tone100,
          activeBorderColor: theme.colors[color].tone300,
        },
        border: {
          borderThickness: `solid ${calcRem(8)}`,
          borderColor: theme.colors[color].tone300,
          borderActive: `${theme.colors[color].tone200}`,
        },
        disabled: disabled ? false : true,
        type: type,
      };
      break;
    case 'inverted':
      figure = {
        colors: {
          enabled: theme.colors['blackWhite'].white,
          hover: theme.colors['mono'].tone100,
          active: theme.colors['blackWhite'].white,
          disabled: theme.colors['mono'].tone100,
          lightFontColor: theme.colors[color].tone500,
          darkFontColor: theme.colors['mono'].tone500,
          activeBorderColor: theme.colors[color].tone300,
        },
        border: {
          borderThickness: `solid ${calcRem(8)}`,
          borderColor: theme.colors['blackWhite'].white,
          borderActive: theme.colors['blackWhite'].white,
        },
        disabled: disabled ? false : true,
        type: type,
      };
      break;
    case 'block':
      figure = {
        colors: {
          enabled: theme.colors[color].tone500,
          hover: theme.colors[color].tone400,
          active: theme.colors[color].tone600,
          disabled: theme.colors[color].tone200,
          lightFontColor: theme.colors['mono'].tone100,
          darkFontColor: theme.colors[color].tone500,
          activeBorderColor: theme.colors[color].tone300,
        },
        border: {
          borderThickness: `solid ${calcRem(8)}`,
          // borderStyle: 'solid',
          borderColor: theme.colors[color].tone500,
          borderActive: `${theme.colors[color].tone200}`,
        },
        disabled: disabled ? false : true,
        type: type,
      };
      break;
  }
  return figure;
};

export const calcSize = (size: 'small' | 'default' | 'large' | 'hulk' = 'default') => {
  let buttonSize: ButtonSize;
  switch (size) {
    case 'small':
      buttonSize = {
        height: `${calcRem(48)}`,
        font: `${calcRem(20)}`,
        padding: `${calcRem(0)} ${calcRem(8)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
    case 'default':
      buttonSize = {
        height: `${calcRem(56)}`,
        font: `${calcRem(24)}`,
        padding: `${calcRem(0)} ${calcRem(12)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
    case 'large':
      buttonSize = {
        height: `${calcRem(72)}`,
        font: `${calcRem(32)}`,
        padding: `${calcRem(0)} ${calcRem(16)}`,
        boxShadow: theme.boxShadow.small,
      };
      break;
    case 'hulk':
      buttonSize = {
        height: `${calcRem(90)}`,
        font: `${calcRem(40)}`,
        padding: `${calcRem(0)} ${calcRem(22)}`,
        boxShadow: theme.boxShadow.default,
      };
      break;
    default:
      buttonSize = {
        height: `${calcRem(56)}`,
        font: `${calcRem(24)}`,
        padding: `${calcRem(0)} ${calcRem(26)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
  }
  return buttonSize;
};

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
  console.log('result: ' + result);
  return result;
};

export const setMargin = (position: 'left' | 'right' | 'only' | 'none') => {
  let margin: string;
  switch (position) {
    case 'left':
      margin = `0 ${calcRem(8)} 0 0`;
      break;
    case 'right':
      margin = `0 0 0 ${calcRem(8)}`;
      break;
    case 'only':
      margin = `0 ${calcRem(4)} 0 ${calcRem(4)}`;
      break;
    case 'none':
      margin = `0 0 0 0`;
      break;
  }
  return margin;
};
