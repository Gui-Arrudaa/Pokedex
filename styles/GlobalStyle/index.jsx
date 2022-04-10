import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body {
    background: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.color};
  }

  ol, ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
