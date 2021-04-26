import styled from 'styled-components';
import { calcBoxShadow } from '../utils/functions/calcUtils';
// import { borderRadius } from '../assets/styles/styled.d';

export interface BoxProps {
  height: string;
  width: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  opacity?: number;
  shadow?: string;
}

const StyledBox = styled.div<BoxProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border: ${(props) => (props.border ? props.border : 'none')};
  ${(props) => (props.borderRadius ? props.borderRadius : props.theme.borderRadius.none)};

  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#FFFFFF')};
  background-image: url(${(props) => (props.backgroundImage ? props.backgroundImage : `none`)});
  background-size: cover;
  opacity: ${(props) => (props.opacity ? props.opacity : props.theme.opacity.max)};

  box-shadow: ${(props) => (props.shadow ? calcBoxShadow(props.shadow) : 'small')};
`;

export const Box = (props: BoxProps) => {
  return <StyledBox {...props} />;
};
