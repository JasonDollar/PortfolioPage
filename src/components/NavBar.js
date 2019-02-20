import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
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

const Container = styled.nav`
  width: 100%;
  /* background: transparent; */

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    /* width: 100%; */
    background: seagreen;
    animation: ${elementAppear} .3s backwards;
  }
`


const NavBar = ({fixed}) => {
  return (
    <Container className={fixed ? 'fixed' : ''}>
      <Row>
        <NavList>
          <NavItem>
            <Link 
              to="hero"
              smooth={true}
              duration={300}
              spy={true}
            >
              Home
            </Link>
          </NavItem>

          <NavItem>
            <Link 
              to="about"
              smooth={true}
              duration={250}
              spy={true}
            >
              About
            </Link>
          </NavItem>

          <NavItem>
            <Link 
              to="portfolio"
              smooth={true}
              duration={250}
              spy={true}
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
}

export default NavBar
