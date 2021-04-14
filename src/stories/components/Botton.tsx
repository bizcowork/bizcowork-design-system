import styled from 'styled-components';
import React from 'react';

export interface BaseButtonProps {
  label: string;
  backgroundColor: string;
  color: string;
  border: string;
  borderRadius: string;
  onClick?: () => void;
}

const ButtonBase = styled.a<BaseButtonProps>`
  padding: 6px 10px;
  text-decoration: none;
  display: inline-block;
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => props.border};

  &:hover{
    background-color: green;
  }
`;

export const BaseButton = (
  props: BaseButtonProps
) => {
  return (
    <ButtonBase {...props}>
      {props.label}
    </ButtonBase>
  );
};


// export const BaseButton: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
//   return (
//     <div {...props}>
//       {props.label}
//     </div>);
// };

export default BaseButton;