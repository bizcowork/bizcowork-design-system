import { useEffect, useRef, useState, useCallback, MutableRefObject, Ref } from 'react';
import { calcRem } from 'utils/functions/calcFuntions';
import theme from 'assets/styles/theme';
import { size, colors, horizontalMargin } from 'utils/types/literalTypes';
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

export function sizeToFontSize(size: 'small' | 'default' | 'large' | 'hulk') {
  // 20, 24, 32, 40
  let result: string;
  switch (size) {
    case 'small':
      result = calcRem(20);
      break;
    case 'default':
      result = calcRem(24);
      break;
    case 'large':
      result = calcRem(32);
      break;
    case 'hulk':
      result = calcRem(40);
      break;
  }
  return result;
}

export function customLoadSvg(src: string, onLoad?: (el: SVGElement) => void) {
  const path = `/src/stories/assets/static/icons/${name}.svg`;
  const [svg, setSVG] = useState<string | null>();
  const svgRef = useRef<any>(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    const fetchSVG = async () => {
      if (!src) {
        setSVG(null);
        return;
      }

      const res = await fetch(src);
      const res2 = await res.text();

      if (!isMountedRef.current) {
        return;
      }

      if (onLoad) {
        const div = document.createElement('div');
        div.innerHTML = res2;
        onLoad(div.firstChild as SVGAElement);
        setSVG(div.innerHTML);
      } else {
        setSVG(res2);
      }
    };
    fetchSVG().catch();
    return () => {
      isMountedRef.current = false;
    };
  }, [src]);
  return { svg, svgRef };
}

export const setMargin = (position: horizontalMargin) => {
  let margin: string;
  switch (position) {
    case 'left':
      margin = `0 ${calcRem(8)} 0 0`;
      break;
    case 'right':
      margin = `0 0 0 ${calcRem(12)}`;
      break;
    case 'only':
      margin = `0 ${calcRem(4)} 0 ${calcRem(4)}`;
      break;
    default:
      margin = '0 0 0 0';
      break;
  }
  return margin;
};

export const iconColor = (
  color: 'primary' | 'secondary' | 'mono' | 'blackWhite',
  type: 'default' | 'outline' | 'inverted' | 'block',
) => {
  if (color === 'primary' && (type === 'default' || type === 'block')) {
    return theme.colors.mono.tone100;
  } else if (color === 'primary' && (type === 'outline' || type === 'inverted')) {
    return theme.colors.primary.tone500;
  }
  if (color === 'secondary' && (type === 'default' || type === 'block')) {
    return theme.colors.mono.tone100;
  } else if (color === 'secondary' && (type === 'outline' || type === 'inverted')) {
    return theme.colors.secondary.tone500;
  }
  if (color === 'mono' && (type === 'default' || type === 'block')) {
    return theme.colors.mono.tone100;
  } else if (color === 'mono' && (type === 'outline' || type === 'inverted')) {
    return theme.colors.mono.tone500;
  }
};

export function setSvgIcon(name: string) {
  switch (name) {
    case 'home':
      console.log(name);
      return Home;
    case 'delete':
      return Delete;
    default:
      return Notification;
  }
}
