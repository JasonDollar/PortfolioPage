import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *::before, *::after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  background: ${props => props.theme.background};
}

`


export default GlobalStyle