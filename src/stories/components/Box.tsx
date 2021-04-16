import styled from 'styled-components';

export interface BoxProps {
  height: string;
  width: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  opacity?: number;
  backgroundImage?: string;
}

const StyledBox = styled.div<BoxProps>`
  height: ${props => props.height};
  width: ${props => props.width};
  border: ${props => props.border ? props.border : props.theme.border.simple };
  border-radius: ${props => props.borderRadius ? props.borderRadius : props.theme.borderRadius.radius15};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF' };
  opacity: ${props => props.opacity ? props.opacity : props.theme.opacity.max};
`;

const StyledImg = styled.img<BoxProps>`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
  border-radius: ${props => props.borderRadius ? props.borderRadius : props.theme.borderRadius.radius15 };
`;

export const Box = (props: BoxProps) => {
  return (
    <StyledBox {...props}>
      <StyledImg src={props.backgroundImage} {...props}/>
    </StyledBox>
  );
};