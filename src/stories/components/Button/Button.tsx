import styled from 'styled-components';
import { calcSize, setButtonFigure, calcBorderRadius } from '../../utils/functions/utils';
import { ButtonSize, ButtonFigure } from './buttonTypes';
import { ReactComponent as Home } from './../../assets/static/icons/home_black_24dp.svg';
import Icon from '../Icon/Icon';
import home from '../../assets/static/icons/home_black_24dp.svg';

export interface ButtonProps {
  label: string;
  type: 'default' | 'outline' | 'inverted' | 'block';
  color: 'primary' | 'secondary' | 'mono';
  size: 'small' | 'default' | 'large' | 'hulk';
  isDisabled: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<{ size: ButtonSize; figure: ButtonFigure; isDisabled: boolean }>`
  /* 크기 및 정렬 */
  height: ${(props) => props.size.height};
  width: ${(props) => (props.figure.type === 'block' ? '100%' : '')};
  padding: ${(props) => props.size.padding};
  text-align: center;
  /* vertical-align: middle; */
  display: ${(props) => (props.figure.type !== 'block' ? 'flex' : 'block')};
  align-items: center;
  justify-content: center;

  /* font */
  font-size: ${(props) => props.size.font};
  color: ${(props) => props.figure.colors.lightFontColor};

  /* border */
  outline: none;
  border: ${(props) => props.figure.border.borderNormal};
  border-style: solid;
  border-color: ${(props) => (props.isDisabled ? props.figure.colors.disabled : props.figure.border.borderColor)};
  border-radius: ${calcBorderRadius(10)};

  /* background */
  background: ${(props) => (props.isDisabled ? props.figure.colors.disabled : props.figure.colors.enabled)};

  box-shadow: ${(props) => props.size.boxShadow};

  /* 기타 */
  user-select: none;

  &:hover {
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    background: ${(props) => (props.isDisabled ? props.figure.colors.disabled : props.figure.colors.hover)};
    border-color: ${(props) => (props.isDisabled ? props.figure.colors.disabled : props.figure.border.borderColor)};
  }

  &:active {
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    background: ${(props) => (!props.isDisabled ? props.figure.colors.active : props.figure.colors.disabled)};
    box-shadow: ${(props) => (props.isDisabled ? props.size.boxShadow : 'none')};
    border: ${(props) => props.figure.border.borderNormal};
    border-style: solid;
    border-color: ${(props) => (props.isDisabled ? props.figure.colors.disabled : props.figure.border.borderActive)};
  }
`;

// const IconWrapper = styled.svg`
//   height: 100%;
//   width: 100%;
// `;

// const StyledIcon = styled.image<{ iconSrc: string }>`
//   href: url(${(props) => (props.iconSrc ? props.iconSrc : '')});
//   /* background-size: cover; */
//   /* display: inline-block; */
// `;

export function Button(props: ButtonProps) {
  const sizeProps = calcSize(props.size);
  const figureProps = setButtonFigure(props.color, props.type);
  // const icon = setIconToButton(props.iconSrc);

  return (
    <StyledButton
      onClick={props.isDisabled ? undefined : props.onClick}
      size={sizeProps}
      figure={figureProps}
      isDisabled={props.isDisabled}
    >
      <Icon size={Number(sizeProps.height)} src={home} />
      <span>{props.label}</span>
    </StyledButton>
  );
}

export default Button;
