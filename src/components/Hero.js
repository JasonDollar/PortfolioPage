import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'

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
  gap: 2rem;
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

const Hero = ({id, fixed}) => {
  return (
    <HeroContainer id={id}>
    <NavBar fixed={fixed}/>
      <HeroSection>
        <ImagePart>
          Tu bd zdjecie
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quaerat aliquid quis ipsam iure? Beatae, asperiores. Officia officiis voluptate voluptates, velit qui veritatis possimus ad porro excepturi. Praesentium, deserunt quas.
        </ImagePart>
        <TextPart>
          Hero Tekst
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id nostrum animi accusamus fuga deleniti inventore recusandae nisi repellat hic dolorum perspiciatis ut, dolorem aliquam ea ipsam enim modi iusto.
        </TextPart>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero


