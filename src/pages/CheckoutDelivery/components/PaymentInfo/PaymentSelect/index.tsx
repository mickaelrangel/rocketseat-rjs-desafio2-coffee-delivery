import { Bank, CreditCard, Money } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { OrderContext } from '../../../../../contexts/OrderContext'
import { PaymentTypes } from '../../../../../reducers/order/reducer'
import { PaymentContainer, SelectPayment } from './styles'

export function PaymentSelect() {
  const { order, setPaymentType } = useContext(OrderContext)
  const theme = useTheme()

  function isPaymentSelected(paymentType: string) {
    return order?.payment !== null && order?.payment === paymentType
  }

  function handleSetPaymentType(paymentType: string) {
    setPaymentType(paymentType)
  }

  return (
    <PaymentContainer>
      <SelectPayment
        isPaymentSelected={isPaymentSelected(PaymentTypes.CREDIT_CARD)}
        onClick={() => handleSetPaymentType(PaymentTypes.CREDIT_CARD)}
      >
        <CreditCard size={16} color={theme.purple} />
        CARTÃO DE CRÉDITO
      </SelectPayment>
      <SelectPayment
        isPaymentSelected={isPaymentSelected(PaymentTypes.DEBIT_CARD)}
        onClick={() => handleSetPaymentType(PaymentTypes.DEBIT_CARD)}
      >
        <Bank size={16} color={theme.purple} />
        CARTÃO DE DÉBITO
      </SelectPayment>
      <SelectPayment
        isPaymentSelected={isPaymentSelected(PaymentTypes.CASH)}
        onClick={() => handleSetPaymentType(PaymentTypes.CASH)}
      >
        <Money size={16} color={theme.purple} />
        DINHEIRO
      </SelectPayment>
    </PaymentContainer>
  )
}
