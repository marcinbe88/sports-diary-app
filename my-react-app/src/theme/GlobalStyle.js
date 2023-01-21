import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *::before , *::after {
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family:  Play, sans-serif, -apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: Play, sans-serif, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.linkcolor{
  color:white;
  
}
.linkformat{
    text-decoration:none;
    margin-right:8px;
}
`;