import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import Row from '../styles/Row'

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ff5f6d, #ffc371);
`

const HeroSection = styled(Row)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

const ImagePart = styled.div`
/* flex: 0 1 50%; */

  font-size: 30px;
`

const TextPart = styled.div`
/* flex: 1 1 50%; */
font-size: 30px;
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


