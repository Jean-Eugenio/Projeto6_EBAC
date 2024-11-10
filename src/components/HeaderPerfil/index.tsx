import logo from '../../assets/images/logo.png'
import Button from '../Button'
import { LinkCart, PerfilHeader } from './styles'

import cart from '../../assets/images/shopping-cart.svg'

const HeaderPerfil = () => (
  <PerfilHeader>
    <div className="container">
      <Button to="/">Restaurantes</Button>
      <img src={logo} alt="logo" />
      <LinkCart>
        0 - produto(s)
        <img src={cart} alt="carrinho" />
      </LinkCart>
    </div>
  </PerfilHeader>
)

export default HeaderPerfil
