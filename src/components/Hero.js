import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'
import HeadingSmall from '../styles/HeadingSmall'

const HeroContainer = styled(AppGrid)`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ff5f6d, #ffc371);
  grid-template-rows: auto 1fr;
`

const HeroSection = styled.div`

  /* margin: 2rem 0; */
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr repeat(4, 3fr) 1fr;
  gap: 4rem;
  font-family: 'Roboto', sans-serif;
`

const ImagePart = styled.div`
/* flex: 0 1 50%; */
  /* grid-column: 2 / span 3; */
  font-size: 30px;
  grid-column: 1 / 2;
  grid-row: 2/ span 4;
`

const TextPart = styled.div`
/* flex: 1 1 50%; */
font-size: 30px;
grid-column: 2 / 3;
  grid-row: 3/ -1;
`

const HeadingBig = props => <h1 {...props} children={props.children} />

// const HeadingSmall = styled.h3

const Hero = ({id, fixed}) => {
  return (
    <HeroContainer id={id}>
    <NavBar fixed={fixed}/>
      <HeroSection>
        <ImagePart>
          Tu bd zdjecie
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </ImagePart>
        <TextPart>
          <Heading as={HeadingBig} primary>
            Radosław Kaźmierczak
          </Heading>
          <HeadingSmall>
            Junior JavaScript Developer
          </HeadingSmall>
        </TextPart>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero


