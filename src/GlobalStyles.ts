import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  salmao: '#E66767',
  branco: '#FFFFFF',
  salmaoClaro: '#FFEBD9',
  fundo: '#fff7f0'
}

export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
  body{
    background-color: ${Cores.fundo};
    color: ${Cores.salmao};

  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: ${Cores.salmao};
  color: ${Cores.salmaoClaro};
  margin: 8px;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
`
