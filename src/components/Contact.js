import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: floralwhite;
`

const Contact = ({id}) => {
  return (
    <ContactContainer id={id}>
      Contact
    </ContactContainer>
  )
}

export default Contact
