import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { CounterCoffee } from '../../../../components/CounterCoffee'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Coffee } from '../../../../reducers/order/reducer'
import {
  ActionsContainer,
  CoffeeContainer,
  ConfirmOrder,
  ConfirmOrderButton,
  Detail,
  OrderSummary,
  Price,
  RemoveButton,
  SelectedCoffee,
  TotalValueItems,
  ValueItem,
  ValueItemDescription,
  ValueOrder,
  ValueOrderGroup,
} from './styles'

interface CoffeeSummaryProps {
  isSubmitDisabled: boolean
}

export function CoffeeSummary({ isSubmitDisabled }: CoffeeSummaryProps) {
  const {
    order,
    totalPriceOrder,
    addOrUpdateCoffeeToCart,
    setTotalPriceCoffeeOrder,
    removeCoffee,
  } = useContext(OrderContext)

  const theme = useTheme()

  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const priceDelivery = 3.5

  function updateQuantityCoffeeByCoffeeId(coffeId: number, quantity: number) {
    const coffeeToUpdateQuantity: Coffee = {
      id: coffeId,
      price: 0,
      quantity,
    }

    addOrUpdateCoffeeToCart(coffeeToUpdateQuantity)
    setTotalPriceCoffeeOrder()
  }

  function handleRemoveCoffeeFromList(coffeeId: number) {
    removeCoffee(coffeeId)
    setTotalPriceCoffeeOrder()
  }

  return (
    <CoffeeContainer>
      <span>Cafés selecionados</span>
      <OrderSummary>
        {order?.listCoffee.map((coffee) => {
          return (
            <SelectedCoffee key={coffee.id}>
              <img src={`assets/${coffee.img}.svg`} alt="" />
              <Detail>
                <span>{coffee.name}</span>
                <ActionsContainer>
                  <CounterCoffee
                    coffeId={coffee.id}
                    updateQuantityCoffeeByCoffeeId={
                      updateQuantityCoffeeByCoffeeId
                    }
                    updateQuantityCoffee={() => {}}
                  />
                  <RemoveButton
                    type="button"
                    onClick={() => handleRemoveCoffeeFromList(coffee.id)}
                  >
                    <Trash size={16} color={theme.purple} />
                    REMOVER
                  </RemoveButton>
                </ActionsContainer>
              </Detail>
              <Price>{priceFormatter.format(coffee.price)}</Price>
            </SelectedCoffee>
          )
        })}
        <ValueOrder>
          <ValueOrderGroup>
            <ValueItemDescription>Total de itens</ValueItemDescription>
            <ValueItem>{priceFormatter.format(totalPriceOrder)}</ValueItem>
          </ValueOrderGroup>
          <ValueOrderGroup>
            <ValueItemDescription>Entrega</ValueItemDescription>
            <ValueItem>{priceFormatter.format(priceDelivery)}</ValueItem>
          </ValueOrderGroup>
          <ValueOrderGroup>
            <TotalValueItems>Total</TotalValueItems>
            <TotalValueItems>
              {priceFormatter.format(totalPriceOrder + priceDelivery)}
            </TotalValueItems>
          </ValueOrderGroup>
        </ValueOrder>
        <ConfirmOrder>
          <ConfirmOrderButton type="submit">
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </ConfirmOrder>
      </OrderSummary>
    </CoffeeContainer>
  )
}
