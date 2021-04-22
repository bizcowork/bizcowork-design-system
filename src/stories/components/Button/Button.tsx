import styled from 'styled-components';
import { calcSize, setButtonFigure, calcBorderRadius } from './utils';
import { ButtonSize, ButtonFigure } from './types';

export interface ButtonProps {
  label: string;
  type: 'default' | 'outline' | 'inverted' | 'block';
  color: 'primary' | 'secondary' | 'mono';
  size: 'small' | 'default' | 'large' | 'hulk';
  isDisabled: boolean;
  onClick?: () => void;
}

const ButtonBase = styled.button<{ size: ButtonSize; figure: ButtonFigure; isDisabled: boolean }>`
  /* 크기 및 정렬 */
  height: ${(props) => props.size.height};
  padding: ${(props) => props.size.padding};
  text-align: center;
  vertical-align: middle;
  display: ${(props) => (props.figure.type !== 'block' ? 'table-cell' : 'block')};

  /* font */
  font-size: ${(props) => props.size.font};
  color: ${(props) => props.figure.colors.lightFontColor};

  /* border */
  outline: none;

  border: ${(props) => props.figure.border.borderNormal};
  border-style: solid;
  border-color: ${(props) => props.figure.border.borderColor};
  border-radius: ${calcBorderRadius(10)};

  /* background */
  background: ${(props) => (props.isDisabled ? props.figure.colors.disabled : props.figure.colors.enabled)};

  box-shadow: ${(props) => props.size.boxShadow};
  /* background-size: contain; */

  /* 기타 */
  user-select: none;

  &:hover {
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    background: ${(props) => (props.isDisabled ? props.figure.colors.disabled : props.figure.colors.hover)};
  }

  &:active {
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    background: ${(props) => (!props.isDisabled ? props.figure.colors.active : props.figure.colors.disabled)};
    box-shadow: ${(props) => (props.isDisabled ? props.size.boxShadow : 'none')};
    border: ${(props) => props.figure.border.borderNormal};
    border-style: solid;
    border-color: ${(props) => props.figure.border.borderActive};
  }
`;

export function Button(props: ButtonProps) {
  const sizeProps = calcSize(props.size);
  const figureProps = setButtonFigure(props.color, props.type);
  return (
    <ButtonBase onClick={props.onClick} size={sizeProps} figure={figureProps} isDisabled={props.isDisabled}>
      {props.label}
    </ButtonBase>
  );
}

export default Button;
