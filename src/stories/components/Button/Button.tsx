import styled from 'styled-components';
import { calcBorderRadius, calcRem } from '../../utils/functions/utils';
import { calcSize, setButtonFigure, iconColor } from './buttonFunc';
import { ButtonSize, ButtonFigure } from './buttonTypes';
import SvgIcon from '../Icon/svgIcon';
import theme from '../../assets/styles/theme';

export interface ButtonProps {
  label: string;
  type: 'default' | 'outline' | 'inverted' | 'block';
  color: 'primary' | 'secondary' | 'mono';
  size: 'small' | 'default' | 'large' | 'hulk';
  isDisabled: boolean;
  iconComp: typeof SvgIcon;
  iconPosition: 'left' | 'right' | 'only' | 'none';
  onClick?: () => void;
}

const StyledButton = styled.button<{
  figure: ButtonFigure;
  size: ButtonSize;
  isDisabled: boolean;
  iconPosition: string;
  iconComp: typeof SvgIcon;
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
  console.log(figureProps);

  return (
    <StyledButton
      onClick={props.isDisabled ? undefined : props.onClick}
      size={sizeProps}
      figure={figureProps}
      isDisabled={props.isDisabled}
      iconPosition={props.iconPosition}
      iconComp={props.iconComp}
    >
      {/* left icon */}
      {props.iconPosition !== 'none' && props.iconPosition === 'left' && (
        <SvgIcon iconColor={color} iconSize={props.size} iconPosition={props.iconPosition} />
      )}

      {/* label */}
      {props.iconPosition === 'only' ? (
        <SvgIcon iconColor={color} iconSize={props.size} iconPosition={props.iconPosition} />
      ) : (
        <span>{props.label}</span>
      )}

      {/* right icon */}
      {props.iconPosition !== 'none' && props.iconPosition === 'right' && (
        <SvgIcon iconColor={color} iconSize={props.size} iconPosition={props.iconPosition} />
      )}
    </StyledButton>
  );
}

export default Button;
