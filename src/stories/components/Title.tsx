import styled from 'styled-components';
import {useState} from 'react';

export interface TitleProps {
  fontSize: string;
  label: string;
}

const StyledTitle = styled.p<TitleProps>`
  font-size: ${props => props.theme.fontSize.textLarge};
  margin: 0px;
  /* font-weight: 400; */
  font-style: bold;
`;

export const Title = (props: TitleProps) => {
  const [size, setSize] = useState('28px');

  return (
    <StyledTitle {...props}>
      {props.label}
    </StyledTitle>
  );
};