import styled from 'styled-components'

const NavItem = styled.li`
  
  margin: 0 1rem;

  & .link {
    &:link,
    &:visited {
      text-decoration: none;
      padding: .5rem;
      border-bottom: 2px solid #acacac00;
      transition: all .2s;
      color: ${props => props.theme.textColor};
      /* font-weight: bold; */
      letter-spacing: 2px;
    }
    &:hover,
    &:active {
      cursor: pointer;
      border-bottom: 2px solid ${props => props.theme.color1};
      
      /* margin-bottom: -2px; */
    }
    &.active {
      
      color: ${props => props.theme.textColor};
    }
    /* &:focus {
      outline: 2px solid ${props => props.theme.color1};
    } */
  }
`

export default NavItem