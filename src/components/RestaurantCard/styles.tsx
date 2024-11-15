import styled from 'styled-components'
import { Button, Cores } from '../../GlobalStyles'
import { TagContainer } from '../Tag/styles'

export const RestCard = styled.div`
  background-color: ${Cores.branco};
  border: 1px solid ${Cores.salmao};

  position: relative;
  ${TagContainer} {
    margin-right: 8;
  }

  ${Button} {
    a {
      text-decoration: none;
      color: ${Cores.salmaoClaro};
    }
  }
`

export const RestImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
`

export const Star = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`

export const TituloCard = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
`

export const DescricaoCard = styled.p`
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  margin: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`

export const NameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  align-items: center;
  margin-top: 8px;
  margin-left: 8px;
  margin-bottom: 16px;
`

export const Nota = styled.div`
  display: flex;
`
