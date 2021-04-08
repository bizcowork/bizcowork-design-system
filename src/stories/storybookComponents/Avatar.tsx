import { Avatar as MaterialAvatar, AvatarProps as MaterialAvatarProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    }
  })
);

export interface AvatarProps extends MaterialAvatarProps {
  onClick: () => string;
}

export default function Avatar(props: AvatarProps) {
  const classes = useStyles();
  const [imgPath, setImage] = useState(props.src ?? '');
  

  return (
    <MaterialAvatar {...props} src={ imgPath } onClick={ () => setImage(props.onClick()) } />
  );
}

