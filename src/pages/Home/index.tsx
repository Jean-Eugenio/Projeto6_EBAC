import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
