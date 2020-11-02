import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
     padding: 0;
     margin: 0;
     outline: none;
  }

  body, input, button, textarea {
    font: 600 16px Roboto, sans-serif;
  }
`;
export default GlobalStyle;
