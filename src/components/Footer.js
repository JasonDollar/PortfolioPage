import React from 'react'
import styled from 'styled-components'

// import Heading from '../styles/Heading'
// import AppGrid from '../styles/AppGrid'

const FooterContainer = styled.footer`
  width: 100%;
  /* height: 20vh; */
  background-color: ${props => props.theme.background};
  grid-column: 1 / span 3;
  text-align: center;
  span {
    display: block;
    padding: 3rem;
  }
`

const Footer = ({id}) => {
  return (
    <FooterContainer id={id}>
      <span>
        Radosław Kaźmierczak &copy; {new Date().getFullYear()}
      
      </span>
    </FooterContainer>
  )
}

export default Footer
