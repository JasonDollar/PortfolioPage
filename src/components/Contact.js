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
  gap: 2rem;
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
  }


`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 1rem;
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
              <Link href="tel:+48517716865" aria-label="Telephone" >
                <FontAwesomeIcon icon="mobile-alt" aria-hidden="true"/>
                <span>517-716-865</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:elrey33@gmail.com" aria-label="Email" >
                <FontAwesomeIcon icon="envelope" aria-hidden="true"/>
                <span>elrey33@gmail.com</span>
              </Link>
            </li>
          </ContactList>
        </ContactData>
        <SocialMedia>
          <HeadingSmall>Social Media</HeadingSmall>
          <ContactList>
            <li>
                <Link href="https://www.facebook.com/HikariYamii">
                  <FontAwesomeIcon icon={['fab', "facebook-square"]} aria-hidden="true"/>
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:elrey33@gmail.com">
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
