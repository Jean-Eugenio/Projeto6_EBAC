import styled from 'styled-components'
import { Cores } from '../../GlobalStyles'

export const Card = styled.div`
  background-color: ${Cores.salmao};
  color: ${Cores.salmaoClaro};

  border: 8px solid ${Cores.salmao};
`
export const FoodImg = styled.div`
  width: 100%;
  height: 160px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767px) {
    height: 200px;
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;

  margin-top: 8px;
`

export const DescrFood = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: justify;
`

export const CardButton = styled.button`
  background-color: ${Cores.salmaoClaro};
  color: ${Cores.salmao};
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  border: none;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  transition: opacity 0.5s ease;

  &.visivel {
    display: flex;
    justify-content: center;
    transition: opacity 0.5s ease;
    align-items: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;

  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Cores.salmao};
  color: ${Cores.salmaoClaro};
  padding: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  .infoFood {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 280px;
  }

  ${CardTitle} {
    margin-top: 0;
  }

  ${CardButton} {
    width: 40%;
  }

  @media (max-width: 767px) {
    display: block;
    padding: 16px;
    width: 90%;
    height: 95%;
    img {
      width: 100%;
      height: 150px;
    }
    ${CardTitle} {
      margin-top: 8px;
    }
    ${CardButton} {
      width: 100%;
    }
  }
`
