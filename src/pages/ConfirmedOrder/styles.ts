import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.main`
  display: flex;
  gap: 7rem;
  margin: 2.5rem 0;
`

export const OrderInfoGroup = styled.div`
  flex-direction: column;
`

export const Title = styled.div`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;

  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme.purple};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

export const OrderDetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 0;
  padding: 0.5rem;
  border-radius: 50%;

  color: ${(props) => props.theme.background};
`

export const MapPinIcon = styled(BaseIcon)`
  background: ${(props) => props.theme.purple};
`

export const TimerIcon = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow};
`

export const CurrencyDolarIcon = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`
