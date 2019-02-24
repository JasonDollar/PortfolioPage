import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Heading from '../styles/Heading'
import AppGrid from '../styles/AppGrid'

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

const SmallHeading = styled.h3`
  color: inherit;
  font-size: 3rem;
`

const ContactData = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / span 1;
  justify-self: center;
  @media screen and (min-width: 576px) {
    grid-row: 2 / 3;
    justify-self: end;
    /* grid-column: 1 /2; */
  }
`

const SocialMedia = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  justify-self: center;
  @media screen and (min-width: 576px) {
    grid-row: 2 / 3;
    grid-column: 2 /3;
    justify-self: start;
  }
`

const ContactList = styled.ul`
list-style: none;
font-size: 2rem;
padding: 0;
  li {
    padding: 1rem 0;
  }


`

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  & span {
    margin-left: 1rem;
  } 
`



const Contact = ({id}) => {
  return (
    <ContactContainer id={id}>
      <ContactSection>
        <ContactHeading>
          Contact Me
        </ContactHeading>
        <ContactData>
          <SmallHeading>Contact</SmallHeading>
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
          <SmallHeading>Social Media</SmallHeading>
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
        </SocialMedia>
       
      </ContactSection>
    </ContactContainer>
  )
}

export default Contact
