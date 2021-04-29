import styled from 'styled-components';
import { size, horizontalMargin } from 'utils/types/literalTypes';
import {
  Check,
  Delete,
  Description,
  Help,
  Home,
  Info,
  MoreHoriz,
  Notification,
  Search,
  Settings,
} from 'atomic/Icon/iconList';
import home from 'assets/static/icons/home.svg';
import { iconColor, sizeToFontSize } from './iconFunc';
import { buttonType, colors } from 'utils/types/literalTypes';
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
};
