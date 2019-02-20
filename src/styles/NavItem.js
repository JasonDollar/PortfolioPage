import styled from 'styled-components'

const NavItem = styled.li`
  
  margin: 0 1rem;

  & a {
    text-decoration: none;
    padding: .5rem;
    border-bottom: 2px solid #acacac00;
    transition: all .2s;
    color: ${props => props.theme.textColor};
    &:hover {
      /* color: yellow; */
      cursor: pointer;
      border-bottom: 2px solid #acacacff;
    }
    &.active {
      /* background: pink; */
      /* border-bottom: 2px solid #777; */
      color: ${props => props.theme.textColor};
    }
  }
`

export default NavItem