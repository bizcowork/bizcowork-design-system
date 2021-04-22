/** @format */

import theme from '../../assets/styles/theme';
import { ButtonFigure, ButtonSize } from './types';

export function calcRem(size: number) {
  return `${size / 16}rem`;
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

export function calcBorder(size: number = 0, style: string = 'solid', color: string) {
  return `${calcRem(size)} ${style} ${color}`;
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
        },
        border: {
          border: `${calcBorder(4, 'solid', theme.colors[color].tone500)}`,
          borderNormal: `${calcRem(4)}`,
          borderClick: `${calcRem(4)}`,
          borderStyle: 'solid',
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
        },
        border: {
          borderNormal: `${calcRem(4)}`,
          borderClick: `${calcRem(4)}`,
          borderStyle: 'solid',
          borderColor: theme.colors[color].tone500,
          border: calcBorder(4, 'solid', theme.colors[color].tone200),
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
        },
        border: {
          borderNormal: `${calcRem(4)}`,
          borderClick: `${calcRem(4)}`,
          borderStyle: 'solid',
          borderColor: theme.colors['blackWhite'].white,
          border: calcBorder(0, 'solid', theme.colors['blackWhite'].white),
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
        },
        border: {
          borderNormal: `${calcRem(4)}`,
          borderClick: `${calcRem(4)}`,
          borderStyle: 'solid',
          borderColor: theme.colors[color].tone500,
          border: calcBorder(4, 'solid', theme.colors[color].tone500),
          borderActive: `${theme.colors[color].tone200}`,
        },
        disabled: disabled ? false : true,
        type: type,
      };
      break;
    default:
      return {
        colors: {
          enabled: theme.colors[color].tone500,
          hover: theme.colors[color].tone400,
          active: theme.colors[color].tone600,
          disabled: theme.colors[color].tone200,
          lightFontColor: theme.colors['mono'].tone100,
          darkFontColor: theme.colors[color].tone500,
        },
        border: {
          borderNormal: calcRem(4),
          borderClick: calcRem(4),
          borderStyle: 'solid',
          borderColor: theme.colors[color].tone100,
          border: calcBorder(4, 'solid', theme.colors[color].tone200),
          borderActive: calcBorder(4, 'solid', theme.colors[color].tone200),
        },
        disabled: disabled ? false : true,
        type: type,
      };
  }
  console.log('border color: ' + figure.border.borderColor);
  return figure;
};

export const calcSize = (size: 'small' | 'default' | 'large' | 'hulk' = 'default') => {
  let buttonSize: ButtonSize;
  switch (size) {
    case 'small':
      buttonSize = {
        height: `${calcRem(48)}`,
        font: `${calcRem(20)}`,
        padding: `${calcRem(0)} ${calcRem(24)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
    case 'default':
      buttonSize = {
        height: `${calcRem(56)}`,
        font: `${calcRem(24)}`,
        padding: `${calcRem(0)} ${calcRem(36)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
    case 'large':
      buttonSize = {
        height: `${calcRem(72)}`,
        font: `${calcRem(32)}`,
        padding: `${calcRem(0)} ${calcRem(50)}`,
        boxShadow: theme.boxShadow.small,
      };
      break;
    case 'hulk':
      buttonSize = {
        height: `${calcRem(90)}`,
        font: `${calcRem(40)}`,
        padding: `${calcRem(0)} ${calcRem(50)}`,
        boxShadow: theme.boxShadow.default,
      };
      break;
    default:
      buttonSize = {
        height: `${calcRem(56)}`,
        font: `${calcRem(24)}`,
        padding: `${calcRem(0)} ${calcRem(36)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
  }
  return buttonSize;
};
