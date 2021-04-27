import styled from 'styled-components';
import { calcBorderRadius, calcRem } from '../../../utils/functions/calcFuntions';
import { calcSize, setButtonFigure, iconColor } from './buttonFunc';
import { ButtonSize, ButtonFigure } from './buttonTypes';
import Icon from '../Icon/Icon';
import { size, colors, buttonType, iconPosition } from '../../../utils/types/literalTypes';

export interface ButtonProps {
  label: string;
  type: buttonType;
  color: colors;
  size: size;
  isDisabled: boolean;
  iconName?: string;
  iconPosition: iconPosition;
  onClick?: () => void;
}

const StyledButton = styled.button<{
  figure: ButtonFigure;
  size: ButtonSize;
  isDisabled: boolean;
  iconPosition: string;
  // iconName: string;
}>`
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
  border: ${(props) => props.figure.border.borderThickness};
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
    border-color: ${(props) => (props.isDisabled ? props.theme.colors.disabled : props.figure.colors.hover)};
  }

  &:active {
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    background: ${(props) => (!props.isDisabled ? props.figure.colors.enabled : props.figure.colors.disabled)};
    box-shadow: ${(props) => (props.isDisabled ? props.size.boxShadow : 'none')};
    border: ${(props) => props.figure.border.borderThickness};
    border-style: solid;
    border-color: ${(props) =>
      props.isDisabled ? props.figure.colors.disabled : props.figure.colors.activeBorderColor};
  }
`;

export function Button(props: ButtonProps) {
  const sizeProps = calcSize(props.size);
  const figureProps = setButtonFigure(props.color, props.type, props.size);
  const color = iconColor(props.color, props.type);
  const iconSrc = `../../assets/static/icons/${props.iconName}.svg`;

  return (
    <StyledButton
      onClick={props.isDisabled ? undefined : props.onClick}
      size={sizeProps}
      figure={figureProps}
      isDisabled={props.isDisabled}
      iconPosition={props.iconPosition}
    >
      {props.iconPosition === 'left' && (
        <Icon iconSrc={iconSrc} iconSize={props.size} iconPosition={props.iconPosition}></Icon>
      )}
      {props.iconPosition !== 'only' && <span>{props.label}</span>}
    </StyledButton>
  );
}

export default Button;
