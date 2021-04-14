import styled from 'styled-components';
import { isPropertySignature } from 'typescript';

interface TitleProps {
  weight?: number;
  color?: string;
}

export const Title = styled.p<TitleProps>`
  color: ${props => props.color ? props.color : 'white'};
`;

export const BaseTitle = (props: TitleProps) => {
  <div>

  </div>;
};