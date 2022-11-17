import { useContext, useEffect } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Catalog } from './components/Catalog'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  const { isOrderConfirmed, deleteOrder } = useContext(OrderContext)

  useEffect(() => {
    if (isOrderConfirmed) {
      deleteOrder()
    }
  }, [])

  return (
    <HomeContainer>
      <Intro />
      <Catalog />
    </HomeContainer>
  )
}
