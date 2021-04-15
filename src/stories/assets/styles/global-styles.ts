/** @format */

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html{
    font-size: 62.5%;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body{
    overflow: hidden;
  }

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
