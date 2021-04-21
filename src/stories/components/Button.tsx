import styled from 'styled-components';
import { borderRadius } from '../assets/styles/styled.d';
import theme from '../assets/styles/theme';

export interface BaseButtonProps {
  label: string;
  state: 'enabled' | 'disabled' | 'hover' | 'active' | 'loading';
  colorType: 'primary' | 'secondary' | 'mono';
  color: string;
  border: string;
  boxShadow?: typeof theme.boxShadow;
  borderRadius: borderRadius;
  cursor: boolean;
  loadingImage?: string;
  onClick?: () => void;
}

const ButtonBase = styled.a<BaseButtonProps>`
  min-height: 40px;
  padding: 8px 16px;
  font-size: 18px;
  font-style: bold;
  display: inline-block;

  user-select: none;

  cursor: ${(props) => (props.state === 'enabled' ? 'pointer' : 'default')};

  border: ${(props) => (props.border ? props.border : props.theme.border.normal)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : props.theme.borderRadius)};

  color: ${(props) => (props.color ? props.color : props.theme.colors.mono900)};
  background: ${(props) => calcButtonState(props.state, props.colorType)};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : props.theme.boxShadow.none)};

  background-image: url(${(props) => (props.loadingImage && props.state === 'loading' ? props.loadingImage : null)});
  background-size: contain;
  text-align: center;
  /* vertical-align: middle; */

  &:hover {
    background: ${(props) => calcButtonState(props.state, props.colorType)};
  }

  &:active {
    background: ${(props) => calcButtonState(props.state, props.colorType)};
  }
`;

export function calcButtonState(
  state: 'enabled' | 'disabled' | 'hover' | 'active' | 'loading',
  colorType: 'primary' | 'secondary' | 'mono',
) {
  console.log(state + ' ' + colorType);
  if (state === 'enabled' || 'loading' || 'active') {
    console.log('1st');
    switch (state) {
      case 'enabled':
        return theme.colors.primary500;
      case 'loading':
        return theme.colors.primary500;
      case 'active':
        return theme.colors.primary500;
    }
  } else if (state === 'hover') {
    console.log('2nd');
    switch (colorType) {
      case 'primary':
        return theme.colors.primary300;
      case 'secondary':
        return theme.colors.secondary300;
      case 'mono':
        return theme.colors.grey300;
    }
  } else if (state === 'disabled') {
    console.log('3rd');
    switch (colorType) {
      case 'primary':
        return theme.colors.primary200;
      case 'secondary':
        return theme.colors.secondary200;
      case 'mono':
        return theme.colors.grey200;
    }
  }
}

export function Button(props: BaseButtonProps) {
  console.log('color: ' + props.colorType);
  return (
    <ButtonBase onClick={props.onClick} {...props}>
      {props.state === 'loading' ? null : props.label}
    </ButtonBase>
  );
}

export default Button;

export interface Sample {
  label: string;
  state: 'enabled' | 'disabled' | 'hover' | 'active' | 'loading';
  colors: 'primary' | 'secondary' | 'grey';
  buttonType: 'default' | 'outlined' | 'inverted' | 'block' | 'dropdown';

  // button 타입 & 상태로 결정할 수 있는 것들
  // color: string;
  // border: string;
  // cursor: boolean;
  // loadingImage?: string;

  // 그냥 기본으로 들어갈 것들
  // boxShadow?: typeof theme.boxShadow;
  // borderRadius?: borderRadius;

  // onClick
  onClick?: () => void;
}

interface ButtonColorSet {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}

const setColor = (color: Sample['colors']) => {
  let colorSet: ButtonColorSet;
  switch (color) {
    case 'primary':
      colorSet = {
        default: theme.colors.primary500,
        hover: theme.colors.primary.primary300,
        active: theme.colors.primary.primary600,
        disabled: theme.colors.primary.primary200,
      };
      break;
    case 'secondary':
      colorSet = {
        default: theme.colors.buttonColor.secondaryButtonSet.default,
        hover: theme.colors.buttonColor.secondaryButtonSet.over,
        active: theme.colors.buttonColor.secondaryButtonSet.active,
        disabled: theme.colors.buttonColor.secondaryButtonSet.outline,
      };
      break;
    case 'grey':
      colorSet = {
        default: theme.colors.buttonColor.greyButtonSet.default,
        hover: theme.colors.buttonColor.greyButtonSet.over,
        active: theme.colors.buttonColor.greyButtonSet.active,
        disabled: theme.colors.buttonColor.greyButtonSet.outline,
      };
      break;
  }
  return colorSet;
};

// buttonType: 'default' | 'outlined' | 'inverted' | 'block' | 'dropdown';
const setColorFromColorsType = (color: Sample['colors'] = 'primary', type: Sample['buttonType'] = 'default') => {
  let colorSet: ButtonColorSet;
  switch (type) {
    case 'default':
      break;
    case 'outlined':
      break;
    case 'inverted':
      break;
    case 'block':
      break;
    case 'dropdown':
      break;
  }

  return null;
};

const StyledSampleButton = styled.div<Sample>`
  display: inline-block;
  height: 40px;
`;
