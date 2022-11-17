import { createContext, ReactNode, useReducer } from 'react'
import {
  addNewCoffeeToOrderAction,
  confirmOrderAction,
  deleteOrderAction,
  removeCoffeeAction,
  setPaymentOptionAction,
  setTotalPriceCoffeeOrderAction,
  updateQuantityCoffeeAction,
} from '../reducers/order/actions'
import { Address, Coffee, Order, orderReducer } from '../reducers/order/reducer'

interface OrderContextData {
  addOrUpdateCoffeeToCart: (coffee: Coffee) => void
  setPaymentType: (paymentType: string) => void
  setTotalPriceCoffeeOrder: () => void
  removeCoffee: (coffeeId: number) => void
  confirmOrder: (address: Address) => void
  deleteOrder: () => void
  getCurrentQuantityCoffee: (coffeeId: number) => number
  order: Order
  totalPriceOrder: number | 0
  isOrderConfirmed: boolean
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    order: {
      listCoffee: [],
      address: {
        cep: 0,
        street: '',
        streetNumber: '',
        complement: '',
        city: '',
        district: '',
        uf: '',
      },
      payment: null,
    },
    isOrderCreated: false,
    isOrderConfirmed: false,
    totalPriceOrder: 0,
  })

  const { order, isOrderConfirmed, isOrderCreated, totalPriceOrder } =
    orderState

  function addOrUpdateCoffeeToCart(coffee: Coffee) {
    if (isOrderCreated && isCoffeeAlreadyAdded(coffee.id)) {
      if (coffee.quantity === 0) {
        removeCoffee(coffee.id)
      } else {
        dispatch(updateQuantityCoffeeAction(coffee.id, coffee.quantity))
      }
    } else {
      dispatch(addNewCoffeeToOrderAction(coffee))
    }
  }

  function isCoffeeAlreadyAdded(id: number): boolean {
    return order.listCoffee.some((c) => c.id === id)
  }

  function getCurrentQuantityCoffee(coffeeId: number) {
    const coffee = order.listCoffee.find((coffee) => {
      return coffee.id === coffeeId
    })

    return coffee ? coffee.quantity : 0
  }

  function setPaymentType(paymentType: string) {
    dispatch(setPaymentOptionAction(paymentType))
  }

  function setTotalPriceCoffeeOrder() {
    dispatch(setTotalPriceCoffeeOrderAction())
  }

  function removeCoffee(coffeeId: number) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  function confirmOrder(address: Address) {
    dispatch(confirmOrderAction(address))
  }

  function deleteOrder() {
    dispatch(deleteOrderAction())
  }

  return (
    <OrderContext.Provider
      value={{
        addOrUpdateCoffeeToCart,
        setPaymentType,
        setTotalPriceCoffeeOrder,
        removeCoffee,
        confirmOrder,
        deleteOrder,
        getCurrentQuantityCoffee,
        order,
        totalPriceOrder,
        isOrderConfirmed,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
