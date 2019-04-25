import React from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";
import styled, {keyframes} from 'styled-components'

import NavList from '../styles/NavList'
import NavItem from '../styles/NavItem'
import Row from '../styles/Row'

const elementAppear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const elementDisappear = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const Container = styled.nav`
  width: 100%;
  grid-column: 2 / 3;
  font-size: 2rem;
  /* animation: ${elementDisappear} .3s backwards; */
  @media screen and (min-width: 576px) {
    font-size: 2.2rem;
  }

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 500;
    /* width: 100%; */
    background: ${props => props.theme.background};
    box-shadow: 0px 0px 15px -5px black;
    animation: ${elementAppear} .3s backwards;
  }
  .desktop-only {
    display: none;
    @media (min-width: 576px) {
      display: block;
    }
  }
`


const NavBar = ({fixed}) => {
  const onNavLinkClick = e => {
    e.preventDefault();
    console.log(e)
    document.querySelector('#home').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  return (
    <Container className={fixed ? 'fixed' : ''}>
      <Row>
        <NavList>
          <NavItem className="desktop-only">
            <a href="#home" className="link" onClick={onNavLinkClick}>Home</a>
          </NavItem>

          <NavItem>
            <a href="#about" className="link">About</a>
          </NavItem>

          <NavItem>
            <a href="#portfolio" className="link">Portfolio</a>
          </NavItem>
          
          <NavItem>
            <a href="#tech" className="link">Skills</a>
          </NavItem>

          <NavItem>
            <a href="#contact" className="link">Contact</a>
          </NavItem>

        </NavList>
      </Row>
    </Container>
  )
}

export default NavBar

/*
    <Container className={fixed ? 'fixed' : ''}>
      <Row>
        <NavList>
          <NavItem>
            <Link 
              to="hero"
              smooth={true}
              duration={300}
              // spy={true}
            >
              Home
            </Link>
            <a href="#hero">Hero</a>
          </NavItem>

          <NavItem>
            <Link 
              to="about"
              smooth={true}
              duration={250}
              
            >
              About
            </Link>
          </NavItem>

          <NavItem>
            <Link 
              to="portfolio"
              smooth={true}
              duration={250}
              
            >
              Portfolio
            </Link>
          </NavItem>

          <NavItem>
            <Link 
              to="contact"
              smooth={true}
              duration={300}
              spy={true}
            >
              Contact
            </Link>
          </NavItem>

        </NavList>
      </Row>
    </Container>
  )

*/