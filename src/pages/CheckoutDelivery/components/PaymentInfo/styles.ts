import styled from 'styled-components'

export const PaymentoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const DeliveryAddress = styled.div`
  display: flex;
  width: 40rem;
  height: 23.25rem;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const Payment = styled.div`
  display: flex;
  width: 40rem;
  height: 12.95rem;
  flex-direction: column;
  padding: 2.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const Title = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
`
