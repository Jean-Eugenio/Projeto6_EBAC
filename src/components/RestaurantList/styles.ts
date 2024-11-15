import styled from 'styled-components'

export const RestList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;

  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
