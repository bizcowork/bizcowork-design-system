import styled from 'styled-components';
import { calcSize, setButtonFigure, calcBorderRadius } from './utils';
import { ButtonSize, ButtonFigure } from './buttonTypes';

export interface ButtonProps {
  label: string;
  type: 'default' | 'outline' | 'inverted' | 'block';
  color: 'primary' | 'secondary' | 'mono';
  size: 'small' | 'default' | 'large' | 'hulk';
  isDisabled: boolean;
  iconSrc: string;
  isIconLeft: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<{ size: ButtonSize; figure: ButtonFigure; isDisabled: boolean }>`
  /* 크기 및 정렬 */
  height: ${(props) => props.size.height};
  width: ${(props) => (props.figure.type === 'block' ? '100%' : '')};
  padding: ${(props) => props.size.padding};
  text-align: center;
  vertical-align: middle;
  /* display: ${(props) => (props.figure.type !== 'block' ? 'block' : 'block')}; */

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

const StyledIcon = styled.img<{ iconSrc: string }>`
  /* height: 100%;
  width: 100%; */
  src: url(${(props) => (props.iconSrc ? props.iconSrc : '')});
  /* object-fit: scale-down; */
  /* background-size: cover; */
  /* outline: none; */
  /* vertical-align: middle; */
  /* display: table-column; */
`;

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
      <span>
        {props.iconSrc && props.isIconLeft ? <img src={props.iconSrc} /> : <div />}
        {props.label}
        {props.iconSrc && props.isIconLeft ? <div /> : <img src={props.iconSrc} />}
      </span>
    </StyledButton>
  );
}

export default Button;
