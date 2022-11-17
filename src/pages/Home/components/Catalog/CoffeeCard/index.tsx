import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import { CounterCoffee } from '../../../../../components/CounterCoffee'
import { OrderContext } from '../../../../../contexts/OrderContext'
import { Coffee } from '../../../../../reducers/order/reducer'
import {
  AddCartButton,
  AddCartContainer,
  CoffeeContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeType,
  Currency,
  ImageCoffee,
  Price,
  Type,
} from './styles'

interface CoffeeProps {
  id: number
  name: string
  description: string
  type: string[]
  price: number
  srcImg: string
}

export function CoffeeCard({ ...props }: CoffeeProps) {
  const { addOrUpdateCoffeeToCart, setTotalPriceCoffeeOrder } =
    useContext(OrderContext)
  const [currentQuantity, setCurrentQuantity] = useState(0)
  const theme = useTheme()

  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function updateQuantityCoffee(quantity: number) {
    setCurrentQuantity(quantity)
  }

  function handleAddCoffeeToCart() {
    const coffee: Coffee = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: currentQuantity,
      img: props.srcImg,
    }
    addOrUpdateCoffeeToCart(coffee)
    setTotalPriceCoffeeOrder()
  }

  return (
    <CoffeeContainer>
      <ImageCoffee>
        <img src={`assets/${props.srcImg}.svg`} alt="" />
      </ImageCoffee>

      <CoffeType>
        {props.type.map((t) => (
          <Type key={t}>{t.toUpperCase()}</Type>
        ))}
      </CoffeType>
      <CoffeeName>{props.name}</CoffeeName>
      <CoffeeDescription>{props.description}</CoffeeDescription>
      <AddCartContainer>
        <Currency>R$</Currency>
        <Price>{priceFormatter.format(props.price).replace('R$', '')}</Price>
        <CounterCoffee
          coffeId={props.id}
          updateQuantityCoffee={updateQuantityCoffee}
          updateQuantityCoffeeByCoffeeId={() => {}}
        />
        <AddCartButton type="button" onClick={handleAddCoffeeToCart}>
          <ShoppingCart size={22} weight="fill" color={theme['base-card']} />
        </AddCartButton>
      </AddCartContainer>
    </CoffeeContainer>
  )
}
