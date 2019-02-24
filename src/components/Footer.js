import React from 'react'
import styled from 'styled-components'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'

const FooterContainer = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: cadetblue;
  grid-column: 1 / span 3;
`

const Footer = ({id}) => {
  return (
    <FooterContainer id={id}>
      Footer
    </FooterContainer>
  )
}

export default Footer
