import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: royalblue;
`

const About = (props) => {
  return (
    <SectionContainer id={props.id}>
      About
    </SectionContainer>
  )
}

export default About
 