import { Address, Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_ORDER = 'ADD_COFFEE_TO_ORDER',
  UPDATE_QUANTITY_COFFEE = 'UPDATE_QUANTITY_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_PAYMENT_OPTION = 'SET_PAYMENT_OPTION',
  TOTAL_PRICE_COFFEE_ORDER = 'TOTAL_PRICE_COFFEE_ORDER',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
  DELETE_ORDER = 'DELETE_ORDER',
}

export function addNewCoffeeToOrderAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_ORDER,
    payload: { coffee },
  }
}

export function updateQuantityCoffeeAction(coffeeId: number, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_COFFEE,
    payload: { coffeeId, quantity },
  }
}

export function removeCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffeeId },
  }
}

export function setPaymentOptionAction(paymentType: string) {
  return {
    type: ActionTypes.SET_PAYMENT_OPTION,
    payload: { paymentType },
  }
}

export function setTotalPriceCoffeeOrderAction() {
  return {
    type: ActionTypes.TOTAL_PRICE_COFFEE_ORDER,
  }
}

export function confirmOrderAction(address: Address) {
  return {
    type: ActionTypes.CONFIRM_ORDER,
    payload: { address },
  }
}

export function deleteOrderAction() {
  return {
    type: ActionTypes.DELETE_ORDER,
  }
}
