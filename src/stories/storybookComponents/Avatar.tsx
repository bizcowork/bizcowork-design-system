import { Avatar as MaterialAvatar, AvatarProps as MaterialAvatarProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
  Onclick: () => void;
}


export default function Avatar<AvatarProps>(props: AvatarProps) {
  const classes = useStyles();

  return (
    <MaterialAvatar {...props}/>
  );
}

