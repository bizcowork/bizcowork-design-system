/** @format */

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


export interface CustomButtonProps {
  label: string;
  variant: string;
  color: string;
}

export default function CustomButton<CustomButtonProps>(props: CustomButtonProps) {
  return (
    <Button {...props}>
      {props.label}
    </Button>    
  );
}