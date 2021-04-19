import styled from 'styled-components';
import { useState } from 'react';
import { calcBorderRadius } from '../assets/styles/calcUtils';
import { borderRadius } from '../assets/styles/styled.d';
import theme from '../assets/styles/theme';

export interface BaseButtonProps {
  label: string;
  backgroundColor?: string;
  color: string;
  borderRadius: borderRadius;
  backgroundImage?: borderRadius;
  onClick?: () => void;
}

const ButtonBase = styled.a<BaseButtonProps>`
  padding: 8px 16px;
  font-size: 18px;
  font-style: bold;
  display: inline-block;
  border-radius: ${(props) => (props.borderRadius ? calcBorderRadius(props.borderRadius) : theme.borderRadius)};
  background: ${(props) => props.theme.colors.primary.normal};
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  user-select: none;

  &:hover {
    background: linear-gradient(#f4772a, #e9610c);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: linear-gradient(#f4772a, #d5590b);
  }
`;

export const Button = (props: BaseButtonProps) => {
  return (
    <ButtonBase onClick={props.onClick} {...props}>
      {props.label}
    </ButtonBase>
  );
};
export default Button;
