import styled from 'styled-components'

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: [page-start] 1fr [content-start] minmax(30rem, 120rem) [content-end] 1fr [page-end];
  grid-template-areas: "marginL content content content content marginR"
`

export default AppGrid