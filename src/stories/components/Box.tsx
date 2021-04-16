import styled from 'styled-components';
import theme from '../assets/styles/theme.d';
import { calcBorderRadius, calcBoxShadow, calcBorder } from '../assets/styles/calcUtils';


export interface BoxProps {
  height: string;
  width: string;
  border?: string;
  borderRadius?: number;
  backgroundColor?: string;
  opacity?: number;
  backgroundImage?: string;
  shadow?: string;
}

const StyledBox = styled.div<BoxProps>`
  height: ${props => props.height};
  width: ${props => props.width};
  border: ${props => props.border ? calcBorder(props.border) : props.theme.border.simple };
  border-radius: ${props => props.borderRadius ? calcBorderRadius(props.borderRadius) : theme.borderRadius.radiusNone};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF' };
  opacity: ${props => props.opacity ? props.opacity : props.theme.opacity.max};
  box-shadow: ${props => props.shadow ? calcBoxShadow(props.shadow) : 'small' };
`;

const StyledImg = styled.img<BoxProps>`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 0;
  border-radius: ${props => props.borderRadius ? calcBorderRadius(props.borderRadius) : theme.borderRadius.radiusNone};
`;

export const Box = (props: BoxProps) => {
  return (
    <StyledBox {...props}>
      {props.backgroundImage ? <StyledImg src={props.backgroundImage} {...props}/> : <div/>}
    </StyledBox>
  );
};