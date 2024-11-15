import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyle } from './GlobalStyles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
