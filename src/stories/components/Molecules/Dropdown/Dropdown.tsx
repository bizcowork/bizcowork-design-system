import { useState } from 'react';
import styled from 'styled-components';
import IconButton, { IconButtonProps } from 'atomic/Button/IconButton';
import { buttonType, colors, size, horizontalMargin } from 'utils/types/literalTypes';
import { Expand } from 'icons/iconExpand.stories';
import Box from 'atomic/Box/Box';
import { calcSize } from 'components/atomic/Button/buttonFunc';
import { calcRem } from 'utils/functions/calcFuntions';
import { createElement } from 'react';
import { setConstantValue, setSyntheticTrailingComments } from 'typescript';

export interface DropdownProps extends IconButtonProps {
  contents: string[];
}

export interface DropdownListContainer {
  onClick?: (...args: any) => Element;
}

const StyledListContainer = styled.ul`
  width: 200px;
  height: 80px;
  background-color: blue;
  display: none;
`;

const StyledDropdown = styled(IconButton)`
  &:active + ${StyledListContainer} {
    background-color: red;
    display: block;
  }
`;

function DropdownListContainer(props: DropdownListContainer) {
  return <StyledListContainer {...props}></StyledListContainer>;
}

function DropdownListItem() {}

function Dropdown(props: DropdownProps) {
  return (
    <div>
      <StyledDropdown {...props} />
      <DropdownListContainer onClick={props.onClick}></DropdownListContainer>
    </div>
  );
}

export default Dropdown;
