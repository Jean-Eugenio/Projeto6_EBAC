import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twiter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import { FooterStyle, Redes } from './styles'

const Footer = () => (
  <FooterStyle>
    <img src={logo} alt="logo" />
    <Redes>
      <img src={instagram} alt="instagram" />
      <img className="facebook" src={facebook} alt="facebook" />
      <img src={twiter} alt="twiter" />
    </Redes>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </FooterStyle>
)

export default Footer
