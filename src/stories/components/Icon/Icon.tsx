import styled from 'styled-components';
import { calcRem } from '../../utils/functions/utils';
import home from '../../assets/static/icons/home_black_24dp.svg';

export interface IconProps {
  iconSize: 'small' | 'default' | 'large' | 'hulk';
  iconSrc: string;
  iconPosition: 'left' | 'right' | 'only' | 'none';
}

const StyledIcon = styled.img<{ iconSrc: string; iconSize: string; iconPosition: string }>`
  height: ${(props) => (props.iconSize ? props.iconSize : '0')};
  width: ${(props) => (props.iconSize ? props.iconSize : '0')};
  src: url(${(props) => (props.iconSrc ? props.iconSrc : 'none')});
  margin: 0;
  outline: none;
  border: none;
`;

function Icon(props: IconProps) {
  return <StyledIcon iconSize={props.iconSize} iconSrc={props.iconSrc} iconPosition={props.iconPosition}></StyledIcon>;
}

export default Icon;
