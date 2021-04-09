import { Avatar as MaterialAvatar, AvatarProps as MaterialAvatarProps } from '@material-ui/core';
import { useState } from 'react';

export interface AvatarProps extends MaterialAvatarProps {
  /**
   * 테스트용 랜덤 이미지 교체
   */
  onClick: () => string;
}

export default function Avatar(props: AvatarProps) {
  const [imgPath, setImage] = useState(props.src ?? '');

  return (
    <MaterialAvatar className={props.sizes} {...props} src={imgPath} onClick={() => setImage(props.onClick())} />
  );
}

