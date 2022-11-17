import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import delivery from '../../assets/delivery.svg'
import { OrderContext } from '../../contexts/OrderContext'
import {
  ConfirmedOrderContainer,
  CurrencyDolarIcon,
  MapPinIcon,
  OrderDetailDescription,
  OrderDetails,
  OrderInfo,
  OrderInfoGroup,
  Subtitle,
  TimerIcon,
  Title,
} from './styles'

export function ConfirmedOrder() {
  const { order } = useContext(OrderContext)

  return (
    <ConfirmedOrderContainer>
      <OrderInfoGroup>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>
        <OrderInfo>
          <OrderDetails>
            <MapPinIcon>
              <MapPin size={32} weight="fill" />
            </MapPinIcon>
            <OrderDetailDescription>
              <div>
                Entrega em Rua{' '}
                <span>
                  <strong>
                    {order.address.street}, {order.address.streetNumber}
                  </strong>
                </span>
              </div>
              <div>{order.address.complement}</div>
              <div>
                {order.address.district} - {order.address.city},{' '}
                {order.address.uf}
              </div>
            </OrderDetailDescription>
          </OrderDetails>
          <OrderDetails>
            <TimerIcon>
              <Timer size={32} weight="fill" />
            </TimerIcon>
            <OrderDetailDescription>
              <div>Previsão de entrega</div>
              <div>
                <strong>20 min - 30 min</strong>
              </div>
            </OrderDetailDescription>
          </OrderDetails>
          <OrderDetails>
            <CurrencyDolarIcon>
              <CurrencyDollar size={32} weight="fill" />
            </CurrencyDolarIcon>
            <OrderDetailDescription>
              <div>Pagamento na entrega</div>
              <div>
                <strong>{order.payment}</strong>
              </div>
            </OrderDetailDescription>
          </OrderDetails>
        </OrderInfo>
      </OrderInfoGroup>
      <img src={delivery} alt="" />
    </ConfirmedOrderContainer>
  )
}
