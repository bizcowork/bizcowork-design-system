import React, { useState } from 'react';
import styled from 'styled-components';
import { calcRem } from '../../../utils/functions/calcFuntions';
import { size } from '../../../utils/types/literalTypes';

export interface AvatarProps {
  imgSrc: string;
  size: size;
}

const StyledAvatar = styled.img`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* border: '1rem solid black'; */
`;

const AvatarWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Avatar = (props: AvatarProps) => {
  const width = (radius: string) => {
    let size: string;
    switch (radius) {
      case 'small':
        size = calcRem(36);
        break;
      case 'default':
        size = calcRem(50);
        break;
      case 'large':
        size = calcRem(75);
        break;
      case 'hulk':
        size = calcRem(90);
        break;
      default:
        return calcRem(36);
    }
    return size;
  };

  const height = width;

  return (
    <AvatarWrapper width={width} height={height}>
      <StyledAvatar src={props.imgSrc} />
    </AvatarWrapper>
  );
};
