import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/static/icons/home_black_24dp.svg';
import { sizeToFontSize } from './Iconutils';
import { setMargin } from '../../utils/functions/utils';

export interface SvgIconProps {
  fill: string;
  iconSize: 'small' | 'default' | 'large' | 'hulk';
  iconPosition: 'left' | 'right' | 'only' | 'none';
}

const StyledSvgIcon = styled.div<{ position: 'left' | 'right' | 'only' | 'none' }>`
  margin: ${(props) => (props.position !== 'none' ? props.position : 'none')};
`;

function SvgIcon(props: SvgIconProps) {
  const size = sizeToFontSize(props.iconSize);
  const margin = setMargin(props.iconPosition);

  return (
    <StyledSvgIcon position={props.iconPosition}>
      <Home width={size} height={size} fill={props.fill} />
    </StyledSvgIcon>
  );
}

export default SvgIcon;
