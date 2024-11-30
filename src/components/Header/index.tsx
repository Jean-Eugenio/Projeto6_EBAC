import logo from '../../assets/images/logo.png'
import { HeaderBar, Titulo } from './styles'
import { Logo } from '../../GlobalStyles'

const Header = () => (
  <HeaderBar>
    <Logo src={logo} />
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </HeaderBar>
)

export default Header
