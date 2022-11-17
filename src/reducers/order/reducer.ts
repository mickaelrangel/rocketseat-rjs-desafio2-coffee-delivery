import produce from 'immer'
import { ActionTypes } from './actions'

export interface Coffee {
  id: number
  name?: string
  price: number
  quantity: number
  img?: string
}

export interface Address {
  cep: number
  street: string
  streetNumber: string
  complement: string
  district: string
  city: string
  uf: string
}

export enum PaymentTypes {
  'CREDIT_CARD' = 'Cartão de Crédito',
  'DEBIT_CARD' = 'Cartão de Débito',
  'CASH' = 'Dinheiro',
}

export interface Order {
  listCoffee: Coffee[]
  address: Address
  payment:
    | PaymentTypes.CREDIT_CARD
    | PaymentTypes.DEBIT_CARD
    | PaymentTypes.CASH
    | null
}

export interface OrderState {
  order: Order
  isOrderCreated: boolean
  isOrderConfirmed: boolean
  totalPriceOrder: number
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_ORDER:
      return produce(state, (draft) => {
        draft.order.listCoffee.push(action.payload.coffee)
        draft.isOrderCreated = true
      })
    case ActionTypes.UPDATE_QUANTITY_COFFEE: {
      const coffeeIndex = state.order.listCoffee.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.order.listCoffee[coffeeIndex].quantity = action.payload.quantity
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        const listWithoutRemovedCoffee = draft.order.listCoffee.filter((c) => {
          return action.payload.coffeeId !== c.id
        })

        draft.order.listCoffee = listWithoutRemovedCoffee
      })
    }

    case ActionTypes.CONFIRM_ORDER: {
      return produce(state, (draft) => {
        draft.order.address = action.payload.address
        draft.isOrderConfirmed = true
      })
    }

    case ActionTypes.TOTAL_PRICE_COFFEE_ORDER: {
      const total = state.order.listCoffee.reduce(
        (sum, coffee) => (sum = sum + coffee.quantity * coffee.price),
        0,
      )

      return produce(state, (draft) => {
        draft.totalPriceOrder = total
      })
    }

    case ActionTypes.SET_PAYMENT_OPTION: {
      return produce(state, (draft) => {
        draft.order.payment = action.payload.paymentType
      })
    }

    case ActionTypes.DELETE_ORDER: {
      return produce(state, (draft) => {
        draft.isOrderCreated = false
        draft.isOrderConfirmed = false
        draft.totalPriceOrder = 0
        draft.order.payment = null
        draft.order.listCoffee = []
        draft.order.address = {
          cep: 0,
          street: '',
          streetNumber: '',
          complement: '',
          city: '',
          district: '',
          uf: '',
        }
      })
    }

    default:
      return state
  }
}
