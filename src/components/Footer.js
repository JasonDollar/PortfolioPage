import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: cadetblue;
`

const Footer = ({id}) => {
  return (
    <FooterContainer id={id}>
      Footer
    </FooterContainer>
  )
}

export default Footer
