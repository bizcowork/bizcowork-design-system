import styled from 'styled-components';
import { useState } from 'react';
import { borderRadius } from '../assets/styles/styled.d';
import theme from '../assets/styles/theme';
import { Theme } from '@material-ui/core';

export interface BaseButtonProps {
  label: string;
  state: 'enabled' | 'disabled' | 'hover' | 'active' | 'loading';
  backgroundColor?: string;
  color: string;
  border: string;
  boxShadow?: typeof theme.boxShadow;
  borderRadius: borderRadius;
  backgroundImage?: borderRadius;
  cursor: boolean;
  onClick?: () => void;
}

const ButtonBase = styled.a<BaseButtonProps>`
  padding: 8px 16px;
  font-size: 18px;
  font-style: bold;
  display: inline-block;

  user-select: none;

  cursor: ${(props) => (props.state === 'enabled' ? 'pointer' : 'default')};

  border: ${(props) => (props.border ? props.border : props.theme.border.normal)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : props.theme.borderRadius)};

  color: ${(props) => (props.color ? props.color : props.theme.colors.grey.grey900)};
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : props.theme.colors.grey.grey100)};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : props.theme.boxShadow.none)};

  /* &:hover {
    background: ${(props) => props.theme.colors.primary.primary600};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  } */
  &:hover {
    background: ${(props) => (props.color ? calcButtonState(props, 'primary') : props.theme.colors.grey.grey100)};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.primary800};
  }
`;

const calcButtonState = (props: BaseButtonProps, color: 'primary' | 'secondary' | 'grey') => {
  const calcColor = (color: 'primary' | 'secondary' | 'grey') => {
    switch (color) {
      case 'primary':
        return theme.colors.primary.primary300;
      case 'secondary':
        return theme.colors.seconday.secondary300;
      case 'grey':
        return theme.colors.grey.grey300;
    }
  };

  switch (props.state) {
    case 'enabled':
      return calcColor(color);
    case 'disabled':
      return calcColor(color);
    case 'hover':
      return calcColor(color);
    case 'active':
      return calcColor(color);
    case 'loading':
      return calcColor(color);
  }
};

export const Button = (props: BaseButtonProps) => {
  return (
    <ButtonBase onClick={props.onClick} {...props}>
      {props.state !== 'loading' ? props.label : 'loading...'}
    </ButtonBase>
  );
};
export default Button;
