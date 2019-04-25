import React from 'react'
import styled from 'styled-components'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'
import TextParagraph from '../styles/TextParagraph'
import Project from './Project'

import {projects} from '../projects'

const PortfolioContainer = styled(AppGrid)`
  width: 100%;
  /* background-color: mediumaquamarine; */
  background-color: #f8f8f8;
  grid-column: 1 / span 3;
  padding: 6rem 0;
`

const PortfolioSection = styled.section`
  display: grid;
  grid-column: 2 / 3;
  justify-content: center;
  /* justify-items: end; */
  align-content: center;
  margin: 0 2rem;

  .projects {
    padding: 2rem 1rem;
    
  }
`

const Portfolio = ({id}) => {
  return (
    <PortfolioContainer id={id}>
      <PortfolioSection>
        <Heading>Portfolio</Heading>
          <div className="projects">
            {projects.map(item => <Project key={item.id} project={item} />)}
          </div>
      </PortfolioSection>
    </PortfolioContainer>
  )
}

export default Portfolio
