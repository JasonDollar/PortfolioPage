import styled from 'styled-components'

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  width: 100%;
  
  justify-content: space-around;
  /* line-height: 2; */
  padding: 2rem 0;
  @media screen and (min-width: 576px) {
    justify-content: flex-end;
    margin-right: 3rem;
  }
  
`

export default NavList