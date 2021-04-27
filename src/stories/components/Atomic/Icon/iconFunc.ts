import { useEffect, useRef, useState, useCallback, MutableRefObject, Ref } from 'react';
import { calcRem } from '../../../utils/functions/calcFuntions';

export function useDynamicSVGImport(name: string) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const importIcon = async () => {
        // ImportedIconRef.current = (await import(`../../assets/static/icons/${name}.svg`)).ReactComponent;
        ImportedIconRef.current = (await import(`../../assets/static/icons/${name}.svg`)).ReactComponent;
        console.log('current: ' + ImportedIconRef.current);
        importIcon();
      };
    } catch (error) {
      console.log('error: ' + error);
    } finally {
      setLoading(false);
    }
  });
  const SvgIcon = ImportedIconRef.current;
  console.log('svg: ' + SvgIcon);
  return SvgIcon;
  // return { SvgIcon: ImportedIconRef.current };
}

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

export const setMargin = (position: 'left' | 'right' | 'only' | 'none') => {
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
    case 'none':
      margin = `0 0 0 0`;
      break;
    default:
      margin = '0 0 0 0';
      break;
  }
  return margin;
};
