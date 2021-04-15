import styled from 'styled-components';
import {useState} from 'react';

export interface TitleProps {
  fontSize: string;
  label: string;
}

const StyledTitle = styled.p<TitleProps>`
  font-size: ${props => props.theme.fontSize.h1};
  margin: 0px;
  padding: 8px 16px;
  display: inline-block;
  background-color: #b9e7b9;
  font-weight: 900;
`;

export const Title = (props: TitleProps) => {
  const [size, setSize] = useState('28px');

  return (
    <StyledTitle {...props}>
      {props.label}
    </StyledTitle>
  );
};