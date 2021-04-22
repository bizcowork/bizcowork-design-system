import styled from 'styled-components';
import { calcRem } from '../../utils/functions/utils';

export interface IconProps {
  size: number;
  src: string;
}

const StyledIcon = styled.img<{ src: string; size: number }>`
  height: ${(props) => (props.size ? calcRem(props.size) : 'none')};
  width: ${(props) => (props.size ? calcRem(props.size) : 'none')};
  src: no-repeat url(${(props) => (props.src ? props.src : 'none')});
`;

function Icon(props: IconProps) {
  return <StyledIcon {...props}></StyledIcon>;
}

export default Icon;
