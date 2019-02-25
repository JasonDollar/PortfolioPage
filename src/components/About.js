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
        <TextParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque. Doloremque sequi vel distinctio quo. Minus, saepe optio? Quisquam officiis quam nemo natus cum veniam ad tempora ea, ullam error.Eveniet repellendus asperiores reiciendis, exercitationem rerum impedit. Ratione atque fuga expedita, natus placeat tempore nobis impedit! At ipsa ad, illo qui perferendis eius sequi, dolore atque consequatur fugiat, error deleniti!</TextParagraph>
      </AboutSection>
    </AboutContainer>
  )
}

export default About
 