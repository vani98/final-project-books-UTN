import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-size:10px;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size:1.6rem;

  }
  body{
    /* font-family: 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export default GlobalStyle;
