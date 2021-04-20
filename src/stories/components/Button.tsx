import styled from 'styled-components';
import { useState } from 'react';
import { borderRadius } from '../assets/styles/styled.d';
import theme from '../assets/styles/theme';
import { Theme } from '@material-ui/core';

export interface BaseButtonProps {
  label: string;
  backgroundColor?: string;
  color: string;
  border: string;
  boxShadow?: typeof theme.boxShadow;
  borderRadius: borderRadius;
  backgroundImage?: borderRadius;
  onClick?: () => void;
}

const ButtonBase = styled.a<BaseButtonProps>`
  padding: 8px 16px;
  font-size: 18px;
  font-style: bold;
  display: inline-block;
  cursor: pointer;
  user-select: none;

  border: ${(props) => (props.border ? props.border : props.theme.border.normal)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : props.theme.borderRadius)};

  color: ${(props) => (props.color ? props.color : props.theme.colors.grey.grey900)};
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : props.theme.colors.grey.grey100)};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : props.theme.boxShadow.none)};

  &:hover {
    background: ${(props) => props.theme.colors.primary.hover};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.active};
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
