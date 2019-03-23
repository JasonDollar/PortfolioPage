import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import AppGrid from '../styles/AppGrid'
import HeadingBig from '../styles/HeadingBig'
import HeadingSmall from '../styles/HeadingSmall'

const HeroContainer = styled(AppGrid)`
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(to bottom right, #ff5f6d, #ffc371); */
  background: linear-gradient(to bottom right, #fff, #ccc);
  /* background: linear-gradient(to bottom right, #fc848e, #ffd9a3); */
  grid-template-rows: minmax(6.7rem, max-content) 1fr;
`

const HeroSection = styled.div`

  /* margin: 2rem 0; */
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: grid;
  /* grid-template-rows: 1fr 3fr; */
  justify-content: center;
  align-content: center;
  font-family: 'Roboto', sans-serif;
  @media screen and (min-width: 990px)  {
    
    /* grid-template-columns: 1fr 2fr; */
    grid-template-rows: 1fr repeat(4, 3fr) 1fr;
    gap: 4rem;
  }
`

const ImagePart = styled.div`
/* flex: 0 1 50%; */
  /* grid-column: 2 / span 3; */
  font-size: 30px;
  @media screen and (min-width: 990px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

  }
`

const TextPart = styled.div`
/* flex: 1 1 50%; */
  font-size: 30px;
  & span {
    color: ${props => props.theme.color1}
  }
  & h1, & h3 {
    margin-left: 2rem;
    line-height: 1.4;
    padding-bottom: 1.5rem;
  }
  @media screen and (min-width: 990px) {
    grid-column: 2 / 3;
    grid-row: 3/ -1;
    & h1, & h3 {
    margin-left: 0;
    /* line-height: 2; */
    padding-bottom: 0;
  }
  }
`

const HeroHeadingSmall = styled(HeadingSmall)`

`

const Hero = ({id, fixed}) => {
  return (
    <HeroContainer id={id}>
    <NavBar fixed={fixed}/>
      <HeroSection>
        <ImagePart>
          {' '}
        </ImagePart>
        <TextPart>
          <HeadingBig>
            Hello, my name is <span>Radek</span>.
          </HeadingBig>
          <HeroHeadingSmall>
            I am a Junior <span>Front End</span> Developer.
          </HeroHeadingSmall>
        </TextPart>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero


