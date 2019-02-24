import React from 'react'
import styled from 'styled-components'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'

const PortfolioContainer = styled(AppGrid)`
  width: 100%;
  height: 100vh;
  background-color: mediumaquamarine;
  grid-column: 1 / span 3;
`

const PortfolioSection = styled.section`
  display: grid;
  grid-column: 2 / 3;
  justify-content: center;
  align-content: center;
`

const Portfolio = ({id}) => {
  return (
    <PortfolioContainer id={id}>
      <PortfolioSection>
        <Heading>Portfolio</Heading>
      </PortfolioSection>
    </PortfolioContainer>
  )
}

export default Portfolio
