import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* special-elite-regular - latin */
@font-face {
  font-family: 'Special Elite';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/special-elite-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/special-elite-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}


  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Special Elite', Helvetica, Sans-Serif;
    background-color: Lightblue;
    text-align: center;
  }

  p {
    font-family:  Helvetica, Arial, sans-serif;
    line-height: 1.7;
    font-size: 0.9rem;
  }
`;

export default GlobalStyle;
