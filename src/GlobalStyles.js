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
.btn{
  display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    gap: 5px;
    padding-inline: 22px;
    padding-block: 8px;
    color: white;
    cursor: pointer;
    max-height: 31px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
}

#root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.overflow-hidden{
  overflow-x: clip;
}
`;

export default GlobalStyles;
