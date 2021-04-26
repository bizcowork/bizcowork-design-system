import { useEffect, useRef, useState, useCallback, MutableRefObject, Ref } from 'react';
import { calcRem } from '../../utils/functions/utils';

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
