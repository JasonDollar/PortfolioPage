import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import htmlLogo from '../img/html-small.png'
import cssLogo from '../img/css-small.png'
import sassLogo from '../img/sass-small.png'
import jsLogo from '../img/js-small.png'
import reactLogo from '../img/react-small.png'
import reduxLogo from '../img/redux-small.png'
import jestLogo from '../img/jest-small.png'
import firebaseLogo from '../img/firebase-small.png'
import gitLogo from '../img/git-small.png'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'

const TechContainer = styled(AppGrid)`
  width: 100%;
  /* height: 100vh; */
  background-color: #fafafa;
  /* grid-column: 1 / span 3; */
`

const TechSection = styled.section`
  grid-column: 2 / 3;
  display: grid;
  /* justify-content: start; */
  /* align-content: center;  */
  /* overflow: hidden; */
  margin: 0 2rem;
  padding: 6rem 0;
`

const TechHeading = styled(Heading)`
  margin-bottom: 3rem;
  justify-self: center;
  @media (max-width: 360px) {
    font-size: 4.2rem;
  }
  /* grid-column: 1 / -1; */
  /* padding: 1rem; */
`

const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 16rem);

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, 30rem);
  }

  figure {
    text-align: center;
    margin-right: 0;
    margin-left: 0;
  }

  figcaption {
    text-align: center;
    font-size: 2rem;
  }

  .tech__icon {
    height: 6rem;
    margin-bottom: 1rem;
  }
`

const Tech = (props) => {
  return (
    <TechContainer id="tech">
      <TechSection>
        <TechHeading>Technologies I use</TechHeading>
        <TechList>
          <li>
            <figure>
              <img src={htmlLogo} alt="HTML logo" className="tech__icon"/>
              <figcaption>HTML</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={cssLogo} alt="CSS logo" className="tech__icon"/>
              <figcaption>CSS</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <img src={jsLogo} alt="Javascript logo" className="tech__icon"/>
              <figcaption>JavaScript</figcaption>
            </figure>
          </li>
          <li>
            <figure>
            <img src={reactLogo} alt="React logo" className="tech__icon"/>
              <figcaption>React</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={reduxLogo} alt="Redux logo" className="tech__icon"/>
              <figcaption>Redux</figcaption>
            </figure>
          </li>
          <li>
            <figure>
            <img src={jestLogo} alt="Jest logo" className="tech__icon"/>
              <figcaption>Jest</figcaption>
            </figure>
          </li>
          <li>
            <figure>
            <img src={firebaseLogo} alt="Firebase logo" className="tech__icon"/>
              <figcaption>Firebase</figcaption>
            </figure>
          </li>
          <li>
            <figure>
            <img src={gitLogo} alt="Git logo" className="tech__icon"/>
              <figcaption>Git</figcaption>
            </figure>
          </li>
        </TechList>
      </TechSection>
    </TechContainer>
  )
}

export default Tech

/*
          <li>
            <figure>
              <img src={sassLogo} alt="CSS logo" className="tech__icon"/>
              <figcaption>SASS</figcaption>
            </figure>
          </li>
*/