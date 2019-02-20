import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: magenta;
`

const Hero = ({id}) => {
  return (
    <HeroContainer id={id}>
      Hero
    </HeroContainer>
  )
}

export default Hero
