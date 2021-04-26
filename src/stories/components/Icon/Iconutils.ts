import { calcRem } from '../../utils/functions/utils';

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
