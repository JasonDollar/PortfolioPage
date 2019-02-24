import styled from 'styled-components'

const Heading = styled.h2`
  font-size: ${props => props.primary ? '6rem' : '4.8rem'};
  margin: 0;
  position: relative;
  line-height: 2;
  font-family: 'Roboto', sans-serif;
  /* padding: 2rem 1rem; */

  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: -2px;
    height: 10px;
    width: 10px;
    /* transform: translateY(50%); */
    border-radius: 50%;
    background: currentColor;
    z-index: 100;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 2px;
    width: 100px;
    background: currentColor;
    z-index: 100;
  }
`

export default Heading