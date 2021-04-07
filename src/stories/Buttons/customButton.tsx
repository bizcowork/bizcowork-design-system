/** @format */

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

// export interface CustomButtonStyleProps {
//   background: string;
//   borderTick: number;
//   borderStyle: string;
//   borderColor: string;
// }

// const CustomButtonStyle = styled(Button)<CustomButtonStyleProps>`
//   background: ${props => props.background};
// ` as React.ComponentType<ButtonProps>;

// export interface CustomButtonProps {
//   name: string;
//   style: CustomButtonStyleProps;
// }

// export default function CusttomButtom(props: CustomButtonProps) {
//   return (
//     <div>
//       <CustomButtonStyle {...props.style}>
//       {props.name}
//     </CustomButtonStyle>
//     </div>
//   );
// }

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