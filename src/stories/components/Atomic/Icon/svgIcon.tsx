import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/static/icons/home.svg';
import { sizeToFontSize, setMargin } from '../../../utils/functions/calcFuntions';
import { size, iconPosition } from '../../../utils/types/literalTypes';

export interface SvgIconProps {
  // iconType: string; // 동적으로 아이콘을 임포트해보자
  iconColor: string;
  iconSize: size;
  iconPosition: iconPosition;
}

const StyledSvgIcon = styled.div<{
  iconColor: string;
  iconSize: size;
  iconMargin: string;
}>`
  background-color: 'none';
  display: flex;
  margin: ${(props) => props.iconMargin};
`;

function SvgIcon(props: SvgIconProps) {
  const size = sizeToFontSize(props.iconSize);
  const margin = setMargin(props.iconPosition);

  return (
    <StyledSvgIcon iconMargin={margin} iconColor={props.iconColor} iconSize={props.iconSize}>
      <Home width={size} height={size} fill={props.iconColor} />
    </StyledSvgIcon>
  );
}
