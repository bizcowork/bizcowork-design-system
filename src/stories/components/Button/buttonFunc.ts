import { calcRem } from '../../utils/functions/utils';
import { ButtonFigure, ButtonSize } from './buttonTypes';
import theme from '../../assets/styles/theme';

export const setButtonFigure = (
  color: 'primary' | 'secondary' | 'mono' = 'primary',
  type: 'default' | 'outline' | 'inverted' | 'block' = 'default',
  size: 'small' | 'default' | 'large' | 'hulk',
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
          borderColor: theme.colors[color].tone500,
          borderActive: theme.colors[color].tone200,
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
          activeBorderColor: theme.colors[color].tone200,
        },
        border: {
          borderThickness: `solid ${calcRem(8)}`,
          borderColor: theme.colors[color].tone500,
          borderActive: theme.colors[color].tone200,
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
          activeBorderColor: theme.colors[color].tone100,
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
          borderColor: theme.colors[color].tone500,
          borderActive: theme.colors[color].tone200,
        },
        disabled: disabled ? false : true,
        type: type,
      };
      break;
  }
  switch (size) {
    case 'small':
      figure.border.borderThickness = calcRem(3);
      break;
    case 'default':
      figure.border.borderThickness = calcRem(4);
      break;
    case 'large':
      figure.border.borderThickness = calcRem(5);
      break;
    case 'hulk':
      figure.border.borderThickness = calcRem(6);
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
        height: `${calcRem(48)}`,
        font: `${calcRem(20)}`,
        padding: `${calcRem(0)} ${calcRem(8)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
  }
  return buttonSize;
};

export const iconColor = (
  color: 'primary' | 'secondary' | 'mono' | 'blackWhite',
  type: 'default' | 'outline' | 'inverted' | 'block',
) => {
  if (color === 'primary' && (type === 'default' || type === 'block')) {
    return theme.colors.mono.tone100;
  } else if (color === 'primary' && (type === 'outline' || type === 'inverted')) {
    return theme.colors.primary.tone500;
  }
  if (color === 'secondary' && (type === 'default' || type === 'block')) {
    return theme.colors.mono.tone100;
  } else if (color === 'secondary' && (type === 'outline' || type === 'inverted')) {
    return theme.colors.secondary.tone500;
  }
  if (color === 'mono' && (type === 'default' || type === 'block')) {
    return theme.colors.mono.tone100;
  } else if (color === 'mono' && (type === 'outline' || type === 'inverted')) {
    return theme.colors.mono.tone500;
  }
};
