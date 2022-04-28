import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --color-primary: #fff;
  --color-secondary: #00000091;
  --box-shadow: rgba(0, 0, 0, 0.2);
}

html {
  box-sizing: border-box;
  font-size: 16px;
  /* overflow: scroll; */
  overscroll-behavior: contain;
}


*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul, label {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  word-break: break-word;
}

ol, ul {
  list-style: none;
}

a{
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

#root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

`;

export default GlobalStyles;
