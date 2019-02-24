import React from 'react'
import styled from 'styled-components'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'

const AboutContainer = styled(AppGrid)`
  width: 100%;
  height: 100vh;
  background-color: royalblue;
  /* grid-column: 1 / span 3; */
`

const AboutSection = styled.section`
  display: grid;
  grid-column: 2 / 3;
  justify-content: center;
  align-content: center;
`

const About = (props) => {
  return (
    <AboutContainer id="about">
      <AboutSection>
        <Heading>About Me</Heading>
      </AboutSection>
    </AboutContainer>
  )
}

export default About
 