import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import styled, {keyframes} from 'styled-components'

const elementAppear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Container = styled.header`
  /* position: sticky; */
  width: 100%;
  background: #fff;
  /* transition: all .2s; */
  position: relative;
  /* left: 0;
  top: 0; */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 0px 10px 0 0 blue;
    opacity: 0;
    /* transition: all 2s; */

  }

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    background: seagreen;
    animation: ${elementAppear} .5s backwards;
  }
  &.fixed::after {
    /* opacity: 1; */
    animation: ${elementAppear} .5s forwards;

  }
`

const NavBar = ({fixed}) => {
  return (
    <Container className={fixed ? 'fixed' : ''}>
      Nav
      <Link 
        to="hero"
        smooth={true}
        duration={2000}
      >
        Home
      </Link>

      <Link 
        to="about"
        smooth={true}
        duration={2000}
      >
        About
      </Link>

      <Link 
        to="section1"
        smooth={true}
        duration={2000}
      >
        Portfolio
      </Link>
      
      <Link 
        to="contact"
        smooth={true}
        duration={2000}
      >
        Contact
      </Link>
    </Container>
  )
}

export default NavBar
