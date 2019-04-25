import React from 'react'
import styled from 'styled-components'


import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'
import TextParagraph from '../styles/TextParagraph'

const AboutContainer = styled(AppGrid)`
  width: 100%;
  /* height: 100vh; */
  background-color: mediumaquamarine;
  padding: 6rem 0;
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
        <TextParagraph>
          Hello, my name is Radek. I build web aplications with React.
        </TextParagraph>
      
      </AboutSection>
    </AboutContainer>
  )
}

export default About
 