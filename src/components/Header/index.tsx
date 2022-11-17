import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { OrderContext } from '../../contexts/OrderContext'
import {
  CartButton,
  HeaderContainer,
  InfoLocation,
  LocationAndCartContainer,
} from './styles'

export function Header() {
  const { order } = useContext(OrderContext)
  const theme = useTheme()

  return (
    <nav>
      <HeaderContainer>
        <NavLink to="/" title="">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <LocationAndCartContainer>
          <InfoLocation>
            <MapPin size={22} weight="fill" color={theme.purple} />
            Brasília, DF
          </InfoLocation>

          <NavLink to="/checkout" title="Carrinho">
            <CartButton>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme['yellow-dark']}
              />
              {order?.listCoffee && order.listCoffee.length > 0 ? (
                <span>
                  <strong>{order.listCoffee.length}</strong>
                </span>
              ) : (
                <></>
              )}
            </CartButton>
          </NavLink>
        </LocationAndCartContainer>
      </HeaderContainer>
    </nav>
  )
}
