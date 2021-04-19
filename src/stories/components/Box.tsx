import styled from 'styled-components';
import theme from '../assets/styles/theme';
import { calcBorderRadius, calcBoxShadow, calcBorder, calcRem } from '../assets/styles/calcUtils';
import { borderRadius } from '../assets/styles/styled.d';

export interface BoxProps {
  height: string;
  width: string;
  border?: string;
  borderRadius: borderRadius;
  backgroundColor?: string;
  opacity?: number;
  backgroundImage?: string;
  shadow?: string;
}

const StyledBox = styled.div<BoxProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: ${(props) => (props.border ? calcBorder(props.border) : props.theme.border.simple)};

  border-radius: ${(props) =>
    props.borderRadius ? calcBorderRadius(props.borderRadius) : [calcRem(15), calcRem(15), calcRem(15), calcRem(15)]};

  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#FFFFFF')};
  opacity: ${(props) => (props.opacity ? props.opacity : props.theme.opacity.max)};

  box-shadow: ${(props) => (props.shadow ? calcBoxShadow(props.shadow) : 'small')};
`;

const StyledImg = styled.img<BoxProps>`
  object-fit: scale-down;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: hidden;
  border: 0;
  border-radius: ${(props) =>
    props.borderRadius ? calcBorderRadius(props.borderRadius) : calcBorderRadius(theme.borderRadius)};
`;

export const Box = (props: BoxProps) => {
  console.log('border-radius: ' + props.borderRadius);
  console.log(theme.borderRadius);
  return (
    <StyledBox {...props}>
      {props.backgroundImage ? <StyledImg src={props.backgroundImage} {...props} /> : <div />}
    </StyledBox>
  );
};
