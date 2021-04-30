import styled from 'styled-components';
import { buttonType, colors, horizontalMargin, size } from 'utils/types/literalTypes';
import {
  Check,
  Delete,
  Description,
  Expand,
  Help,
  Home,
  Info,
  MoreHoriz,
  Notification,
  Right,
  Search,
  Settings,
} from 'atomic/Icon/iconList';
import { iconColor, sizeToFontSize } from './iconFunc';
import { setMargin } from 'utils/functions/calcFuntions';

export interface SVGProps {
  fill: colors;
  size: size;
  position: horizontalMargin;
  iconType: buttonType;
}

export const StyledSvgIcon = styled.div<{
  size: string;
  margin: string;
}>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  margin: ${(props) => props.margin};
`;

function IconHome(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={size} margin={margin}>
      <Home fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconCheck(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Check fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconDelete(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Delete fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconDescription(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Description fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconHelp(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Help fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconInfo(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Info fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconMoreHoriz(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <MoreHoriz fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconNotification(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Notification fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconSearch(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Search fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconSettings(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Settings fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconRight(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Right fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

function IconExpand(props: SVGProps) {
  const fill = iconColor(props.fill, props.iconType);
  const size = sizeToFontSize(props.size);
  const margin = setMargin(props.position);

  return (
    <StyledSvgIcon size={props.size} margin={margin}>
      <Expand fill={fill} width={size} height={size} />
    </StyledSvgIcon>
  );
}

export {
  IconCheck,
  IconDelete,
  IconDescription,
  IconHelp,
  IconHome,
  IconInfo,
  IconMoreHoriz,
  IconNotification,
  IconSearch,
  IconSettings,
  IconRight,
  IconExpand,
};
