import styled from 'styled-components';
import { calcBorderRadius, calcRem } from '../assets/styles/calcUtils';
import theme from '../assets/styles/theme';

interface ButtonSize {
  height: string;
  font: string;
  padding: string;
  boxShadow: string;
}

interface ButtonStateColor {
  enabled: string;
  disabled: string;
  hover: string;
  active: string;
  lightFontColor: string;
  darkFontColor: string;
}

interface BorderStyle {
  borderActive: string;
  borderNegative: string;
  borderStyle: string;
  borderColor: string;
}

interface ButtonFigure {
  colors: ButtonStateColor;
  border: BorderStyle;
  disabled: boolean;
}

// interface ButtonColorSet {
//   default: string;
//   hover: string;
//   active: string;
//   disabled: string;
// }

export interface BaseButtonProps {
  label: string;
  type: 'default' | 'outline' | 'inverted' | 'block';
  color: 'primary' | 'secondary' | 'mono';
  size: 'small' | 'default' | 'large' | 'hulk';
  backgroundImage: string;
  isDisabled: boolean;
  onClick?: () => void;
}

// button 크기에 따라 폰트크기, 패딩, 높이 변경 함수
const calcSize = (size: 'small' | 'default' | 'large' | 'hulk' = 'default') => {
  let buttonSize: ButtonSize;
  switch (size) {
    case 'small':
      buttonSize = {
        height: `${calcRem(48)}`,
        font: `${calcRem(20)}`,
        padding: `${calcRem(12)} ${calcRem(24)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
    case 'default':
      buttonSize = {
        height: `${calcRem(56)}`,
        font: `${calcRem(24)}`,
        padding: `${calcRem(14)} ${calcRem(36)}`,
        boxShadow: theme.boxShadow.tiny,
      };
      break;
    case 'large':
      buttonSize = {
        height: `${calcRem(72)}`,
        font: `${calcRem(32)}`,
        padding: `${calcRem(17)} ${calcRem(50)}`,
        boxShadow: theme.boxShadow.small,
      };
      break;
    case 'hulk':
      buttonSize = {
        height: `${calcRem(90)}`,
        font: `${calcRem(40)}`,
        padding: `${calcRem(20)} ${calcRem(50)}`,
        boxShadow: theme.boxShadow.default,
      };
      break;
  }
  return buttonSize;
};

const setButtonFigure = (
  color: 'primary' | 'secondary' | 'mono' = 'primary',
  type: 'default' | 'outline' | 'inverted' | 'block' = 'default',
  disabled: boolean = false,
): ButtonFigure => {
  switch (type) {
    case 'default' || 'block':
      return {
        colors: {
          enabled: theme.colors[color].tone500,
          hover: theme.colors[color].tone300,
          active: theme.colors[color].tone600,
          disabled: theme.colors[color].tone200,
          lightFontColor: theme.colors['mono'].tone100,
          darkFontColor: theme.colors[color].tone500,
        },
        border: {
          borderActive: '0px',
          borderNegative: '2px',
          borderStyle: 'solid',
          borderColor: theme.colors[color].tone200,
        },
        disabled: disabled ? true : false,
      };
    case 'outline':
      return {
        colors: {
          enabled: theme.colors['mono'].tone100,
          hover: theme.colors[color].tone500,
          active: theme.colors[color].tone600,
          disabled: theme.colors['mono'].tone200,
          lightFontColor: theme.colors[color].tone500,
          darkFontColor: theme.colors['mono'].tone100,
        },
        border: {
          borderActive: '2px',
          borderNegative: '4px',
          borderStyle: 'solid',
          borderColor: theme.colors[color].tone500,
        },
        disabled: disabled ? true : false,
      };
    case 'inverted':
      return {
        colors: {
          enabled: theme.colors['mono'].tone100,
          hover: theme.colors[color].tone200,
          active: theme.colors['mono'].tone100,
          disabled: theme.colors['mono'].tone200,
          lightFontColor: theme.colors[color].tone500,
          darkFontColor: theme.colors['mono'].tone500,
        },
        border: {
          borderActive: '0px',
          borderNegative: '2px',
          borderStyle: 'solid',
          borderColor: theme.colors[color].tone200,
        },
        disabled: disabled ? true : false,
      };
    default:
      return {
        colors: {
          enabled: theme.colors[color].tone500,
          hover: theme.colors[color].tone300,
          active: theme.colors[color].tone600,
          disabled: theme.colors[color].tone200,
          lightFontColor: theme.colors['mono'].tone100,
          darkFontColor: theme.colors[color].tone500,
        },
        border: {
          borderActive: '0px',
          borderNegative: '2px',
          borderStyle: 'solid',
          borderColor: theme.colors[color].tone200,
        },
        disabled: disabled ? true : false,
      };
  }
};

const ButtonBase = styled.a<BaseButtonProps>`
  /* 크기 및 정렬 */
  height: ${(props) => calcSize(props.size).height};
  padding: ${(props) => (props.size ? calcSize(props.size).padding : calcSize().padding)};
  text-align: center;
  vertical-align: middle;

  /* font */
  font-size: ${(props) => (props.size ? calcSize(props.size).font : calcSize().font)};
  color: ${(props) => setButtonFigure(props.color, props.type).colors.lightFontColor};

  display: ${(props) => (props.type !== 'block' ? 'inline-block' : 'block')};
  /* cursor: ${(props) => (setButtonFigure(props.color, props.type).disabled === false ? 'pointer' : 'not-allowed')}; */

  /* border */
  border: ${(props) => setButtonFigure(props.color, props.type).border.borderActive};
  border-style: solid;
  border-color: ${(props) => setButtonFigure(props.color, props.type).border.borderColor};
  border-radius: ${(props) => calcBorderRadius(10)};

  /* background */
  background: ${(props) =>
    props.isDisabled
      ? setButtonFigure(props.color, props.type).colors.disabled
      : setButtonFigure(props.color, props.type).colors.enabled};

  /* background-image: url(${(props) => (props.backgroundImage ? props.backgroundImage : '')}); */
  box-shadow: ${(props) => calcSize(props.size).boxShadow};
  /* background-size: contain; */

  /* 기타 */
  user-select: none;

  &:hover {
    cursor: ${(props) => (setButtonFigure(props.color, props.type).disabled === false ? 'pointer' : 'not-allowed')};
    background: ${(props) =>
      props.isDisabled
        ? setButtonFigure(props.color, props.type).colors.disabled
        : setButtonFigure(props.color, props.type).colors.hover};
  }

  &:active {
    cursor: ${(props) => (setButtonFigure(props.color, props.type).disabled === false ? 'pointer' : 'not-allowed')};
    border: ${(props) => (props.isDisabled ? '' : setButtonFigure(props.color, props.type).border.borderNegative)};
    border-color: ${(props) =>
      props.isDisabled
        ? setButtonFigure(props.color, props.type).colors.disabled
        : setButtonFigure(props.color, props.type).colors.hover};
    background: ${(props) => setButtonFigure(props.color, props.type).colors.active};
  }
`;

export function Button(props: BaseButtonProps) {
  console.log('height: ' + calcSize(props.size).height);
  return (
    <ButtonBase onClick={props.onClick} {...props}>
      {props.label}
    </ButtonBase>
  );
}

export default Button;
