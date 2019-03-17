import React from 'react'
import styled from 'styled-components'


import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'
import TextParagraph from '../styles/TextParagraph'

const AboutContainer = styled(AppGrid)`
  width: 100%;
  height: 100vh;
  background-color: #7678ed;
  /* grid-column: 1 / span 3; */
`

const AboutSection = styled.section`
  display: grid;
  grid-column: 2 / 3;
  justify-content: start;
  align-content: center;
  margin: 0 2rem;
`

const About = (props) => {
  return (
    <AboutContainer id="about">
      <AboutSection>
        <Heading>About Me</Heading>
        <TextParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius unde soluta nostrum quo fugit fuga eos quae vitae, at corporis pariatur debitis fugiat molestiae blanditiis porro, hic ratione nam!</TextParagraph>
      
      </AboutSection>
    </AboutContainer>
  )
}

export default About
 