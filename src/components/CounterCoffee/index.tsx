import { Minus, Plus } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { OrderContext } from '../../contexts/OrderContext'
import { Counter, CounterInput, IncrementArrowsButton } from './styles'

interface CounterCoffeeProps {
  coffeId: number
  updateQuantityCoffee: (quantity: number) => void
  updateQuantityCoffeeByCoffeeId: (coffeeId: number, quantity: number) => void
}

export function CounterCoffee({
  coffeId,
  updateQuantityCoffee,
  updateQuantityCoffeeByCoffeeId,
}: CounterCoffeeProps) {
  const { getCurrentQuantityCoffee } = useContext(OrderContext)
  const [quantityCoffee, setQuantityCoffee] = useState<number>(0)
  const theme = useTheme()

  useEffect(() => {
    const currentQuantity = getCurrentQuantityCoffee(coffeId)
    setQuantityCoffee(currentQuantity)
  }, [getCurrentQuantityCoffee, coffeId])

  function handleDecreaseQuantity() {
    if (quantityCoffee === 0) {
      return
    }

    const actualQuantity = quantityCoffee - 1
    update(actualQuantity)
  }

  function handleAddQuantity() {
    const actualQuantity = quantityCoffee + 1
    update(actualQuantity)
  }

  function update(actualQuantity: number) {
    setQuantityCoffee(actualQuantity)
    updateQuantityCoffee(actualQuantity)
    updateQuantityCoffeeByCoffeeId(coffeId, actualQuantity)
  }

  return (
    <Counter>
      <IncrementArrowsButton
        type="button"
        onClick={handleDecreaseQuantity}
        disabled={quantityCoffee === 0}
      >
        <Minus size={14} weight="bold" color={theme.purple} />
      </IncrementArrowsButton>
      <CounterInput
        type="number"
        id="counter"
        step={1}
        min={1}
        value={quantityCoffee}
        onChange={() => {}}
      />
      <IncrementArrowsButton type="button" onClick={handleAddQuantity}>
        <Plus size={14} weight="bold" color={theme.purple} />
      </IncrementArrowsButton>
    </Counter>
  )
}
