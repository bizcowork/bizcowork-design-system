import styled from 'styled-components';
import theme from '../assets/styles/theme.d';

export interface TitleProps {
  isTitle: boolean;
  size?: number;
  text: string;
  align?: 'left' | 'center' | 'right';
}

function calcFontSize(size = 3) {
  switch (size) {
    case 1:
      return theme.fontSize.h1;
    case 2:
      return theme.fontSize.h2;
    case 3:
      return theme.fontSize.h3;
    case 4:
      return theme.fontSize.h4;
    case 5:
      return theme.fontSize.h5;
    case 6:
      return theme.fontSize.h6;
    default:
      return theme.fontSize.h3;
  }
}

const StyledTitle = styled.p<TitleProps>`
  font-weight: ${(props) => (props.isTitle ? 700 : 300)};
  font-size: ${(props) => (props.size ? calcFontSize(props.size) : props.theme.fontSize.h3)};
  padding: 8px 16px;
  margin: 0px;
  display: inline-block;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;

export const Title = (props: TitleProps) => {
  return <StyledTitle {...props}>{props.text}</StyledTitle>;
};
