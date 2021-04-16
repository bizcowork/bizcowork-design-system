import React, { useState } from 'react';
import styled from 'styled-components';


export interface AvatarProps {
  imgSrc: string;
  size: string;
}

const StyledAvatar = styled.img`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const AvatarWrapper = styled.div<{ width: string, height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const Avatar = (props: AvatarProps) => {
  const width = props.size === 'small' ? '36px' : props.size === 'middle' ? '50px' : '75px';
  const height = width;

  return (
    <AvatarWrapper width={width} height={height}>
      <StyledAvatar src={props.imgSrc}/>
    </AvatarWrapper>
  );
};