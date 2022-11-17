import {
  PaymentoInfoContainer,
  DeliveryAddress,
  Payment,
  TitleContainer,
  Title,
  Subtitle,
} from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentSelect } from './PaymentSelect'

export function PaymentoInfo() {
  const theme = useTheme()

  return (
    <PaymentoInfoContainer>
      <span>Complete seu pedido</span>
      <DeliveryAddress>
        <TitleContainer>
          <MapPinLine size={22} color={theme['yellow-dark']} />
          <div>
            <Title>Endereço de Entrega</Title>
            <Subtitle>
              Informe o endereço onde deseja receber seu pedido
            </Subtitle>
          </div>
        </TitleContainer>
        <AddressForm />
      </DeliveryAddress>
      <Payment>
        <TitleContainer>
          <CurrencyDollar size={22} color={theme.purple} />
          <div>
            <Title>Pagamento</Title>
            <Subtitle>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Subtitle>
          </div>
        </TitleContainer>
        <PaymentSelect />
      </Payment>
    </PaymentoInfoContainer>
  )
}
