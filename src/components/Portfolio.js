import React from 'react'
import styled from 'styled-components'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'
import TextParagraph from '../styles/TextParagraph'

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
  justify-items: end;
  align-content: center;
  margin: 0 2rem;
`

const Portfolio = ({id}) => {
  return (
    <PortfolioContainer id={id}>
      <PortfolioSection>
        <Heading>Portfolio</Heading>
        <TextParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit natus voluptas alias, impedit neque ad dolor repudiandae esse voluptatem harum, possimus nihil quae, aut iusto incidunt aliquam nisi libero!</TextParagraph>
      </PortfolioSection>
    </PortfolioContainer>
  )
}

export default Portfolio
