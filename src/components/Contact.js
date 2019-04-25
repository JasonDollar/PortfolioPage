import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'
import HeadingSmall from '../styles/HeadingSmall'

const ContactContainer = styled(AppGrid)`
  width: 100%;
  /* min-height: 50vh; */
  background-color: ${props => props.theme.color1};
  color: ${props => props.theme.textWhite};
  /* grid-column: 1 / span 3; */
  /* display: grid; */
  /* grid-template-columns: fit-content(1fr); */
`

const ContactSection = styled.section`
  padding: 6rem 0;
  /* margin: 0 auto; */
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  column-gap: 4rem;
  justify-content: center;
  justify-items: center;
  @media screen and (min-width: 576px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
  }
`

const ContactHeading = styled(Heading)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  /* padding: 1rem; */
`



const ContactData = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / span 1;
  justify-self: center;
  text-align: center;
  @media screen and (min-width: 576px) {
    grid-row: 2 / 3;
    justify-self: end;
    text-align: left;
    /* grid-column: 1 /2; */
  }
`

const SocialMedia = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  justify-self: center;
  text-align: center;
  @media screen and (min-width: 576px) {
    grid-row: 2 / 3;
    grid-column: 2 /3;
    justify-self: start;
    text-align: left;
  }
`

const ContactList = styled.ul`
list-style: none;
font-size: 2.4rem;
padding: 0;
  li {
    margin: 2rem 0;
    /* &:not(&:last-child) {
      margin-bottom: 1rem;
    } */
    /* margin-left: 0; */
  }


`

const Link = styled.a`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: currentColor;
    transition: all .2s;
  }
  &:link,
  &:visited {
  text-decoration: none;
  color: inherit;
  padding: 1rem 0;
  position: relative;
  
  /* padding-left: 0; */
  }
  &:hover::after {
    width: 100%;
  }
  & span {
    
    margin-left: 1rem;
  } 
`



const Contact = ({id}) => {
  return (
    <ContactContainer id={id}>
      <ContactSection>
        <ContactHeading noColor>
          Contact Me
        </ContactHeading>
        <ContactData>
          <HeadingSmall>Contact</HeadingSmall>
          <ContactList>
            <li>
              <Link href="tel:+48699528921" aria-label="Telephone" >
                <FontAwesomeIcon icon="mobile-alt" aria-hidden="true"/>
                <span>+48 699-528-921</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:radekkazmierczak@icloud.com" aria-label="Email" >
                <FontAwesomeIcon icon="envelope" aria-hidden="true"/>
                <span>radekkazmierczak@icloud.com</span>
              </Link>
            </li>
          </ContactList>
        </ContactData>
        <SocialMedia>
          <HeadingSmall>Social Media</HeadingSmall>
          <ContactList>
            <li>
              <Link href="https://www.linkedin.com/in/rados%C5%82aw-ka%C5%BAmierczak-a90057182" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', "linkedin"]} aria-hidden="true"/>
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/JasonDollar"  target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', "github"]} aria-hidden="true"/>
              <span>Github</span>
              </Link>
            </li>
          </ContactList>
        </SocialMedia>
       
      </ContactSection>
    </ContactContainer>
  )
}

export default Contact
