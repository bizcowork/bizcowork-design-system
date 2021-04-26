import styled from 'styled-components';
import { sizeToRem, setMargin } from '../../utils/functions/utils';
import theme from '../../assets/styles/theme';

export interface IconProps {
  iconSize: 'small' | 'default' | 'large' | 'hulk';
  iconSrc: string;
  iconPosition: 'left' | 'right' | 'only' | 'none';
}

const StyledIcon = styled.img<{ iconSrc: string; size: string; position: string }>`
  height: ${(props) => (props.size ? props.size : '0')};
  width: ${(props) => (props.size ? props.size : '0')};
  background-size: cover;
  margin: ${(props) => (props.position !== 'none' ? props.position : 'none')};
  display: ${(props) => (props.position === 'none' ? 'none' : 'inline-block')};
  border: none;
  outline: none;
  & {
    fill: ${theme.colors.mono.tone100};
  }
`;

function Icon(props: IconProps) {
  const rem = sizeToRem(props.iconSize);
  const margin = setMargin(props.iconPosition);

  return <StyledIcon src={props.iconSrc} size={rem} position={margin} {...props}></StyledIcon>;
}

const StyledSvg = styled.div``;

export default Icon;
