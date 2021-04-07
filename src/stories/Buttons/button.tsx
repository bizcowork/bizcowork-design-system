import styled from 'styled-components';

export interface ButtonProps {
  text: string;
  textColor: string;
  background?: string;
  borderColor?: string;
  borderRadius?: number;
  border?: string;
  buttonSize?: 'small' | 'regular' | 'large';
  buttonState?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
  icon?: 'none' | 'path';
  iconPosition?: 'default' | 'back';
  isDropDown?: true | false;
}

const ButtonStyle = styled.button<{background: string, color: string, textColor: string}>`
  margin: 0;
  padding: 5px 8px;
  color: ${props => props.color};
  background: ${props => props.background };

`;

