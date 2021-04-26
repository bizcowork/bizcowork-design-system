import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { ReactComponent as Home } from '../../assets/static/icons/home.svg';
import { sizeToFontSize, useDynamicSVGImport } from './iconFunc';
import { setMargin } from '../../utils/functions/utils';

export interface SvgIconProps {
  // iconName: string;
  iconColor: string;
  iconSize: 'small' | 'default' | 'large' | 'hulk';
  iconPosition: 'left' | 'right' | 'only' | 'none';
}

const StyledSvgIcon = styled.svg<{
  // iconColor: string;
  // iconSize: 'small' | 'default' | 'large' | 'hulk';
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
    <StyledSvgIcon iconMargin={margin}>
      <Home width={size} height={size} fill={props.iconColor} />
    </StyledSvgIcon>
  );
}

// function SvgIcon(src: string, onLoad?: (el: SVGElement) => void) {
//   const [svg, setSvg] = useState<string | null>(null);
//   const svgRef = useRef<any>(null);
//   const isMountedRef = useRef(false);

//   useEffect(() => {
//     isMountedRef.current = true;
//     const fetchSVG = async () => {
//       if (!src) {
//         setSvg(null);
//         return;
//       }

//       const res = await fetch(src);
//       const res2 = await res.text();
//       if (!isMountedRef.current) return;

//       if (onLoad) {
//         const div = document.createElement('div');
//         div.innerHTML = res2;
//         onLoad(div.firstChild as SVGAElement);
//         setSvg(div.innerHTML);
//       } else {
//         setSvg(res2);
//       }
//     };
//     fetchSVG().catch();
//     return () => {
//       isMountedRef.current = false;
//     };
//   }, [src]);
//   return { svg, svgRef };
// }

// fail
// function SvgIcon(props: SvgIconProps) {
//   const DynamicSvg = useDynamicSVGImport(props.iconName);
//   const size = sizeToFontSize(props.iconSize);
//   const margin = setMargin(props.iconPosition);

//   return (
//     <StyledSvgIcon iconMargin={margin}>
//       <DynamicSvg width={size} height={size} fill={props.iconColor} />
//     </StyledSvgIcon>
//   );
// }

export default SvgIcon;
