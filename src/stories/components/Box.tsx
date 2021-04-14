import styled from 'styled-components';

export interface BoxProps {
  height: string;
  width: string;
  borderRadius: string;
  imgSrc: string;
}

// const StyledBox = styled.img<BoxProps>`
//   border-radius: 50%;
//   height: 48px;
//   width: 48px;
// `;

// export const Box = (props: BoxProps) => {
//   return (
//     <div>
//       <StyledBox {...props}/>
//     </div>
//     );
// };