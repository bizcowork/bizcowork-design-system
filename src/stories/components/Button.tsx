import styled from 'styled-components';
import React from 'react';

export interface BaseButtonProps {
  label: string;
  backgroundColor?: string;
  color: string;
  borderRadius: string;
  onClick?: () => void;
}

const ButtonBase = styled.a<BaseButtonProps>`
  padding: 8px 16px;
  font-size: 18px;
  font-style: bold;
  display: inline-block;
  border-radius: 10px;
  background-color: #F4762A;
  color: #FFFFFF;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  user-select: none;

  &:hover{
    background: linear-gradient(#F4772A, #E9610C);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  &:active{
    background: linear-gradient(#F4772A, #D5590B);
  }
`;

export const Button = (
  props: BaseButtonProps
) => {
  return (
    <ButtonBase onClick={props.onClick} {...props}>
      {props.label}
    </ButtonBase>
  );
};

export default Button;