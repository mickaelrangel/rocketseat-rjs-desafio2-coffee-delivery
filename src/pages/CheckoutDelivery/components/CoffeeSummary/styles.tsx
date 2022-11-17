import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OrderSummary = styled.div`
  display: flex;
  width: 28rem;
  flex-direction: column;
  padding: 0 2.5rem;
  border: 0;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  background: ${(props) => props.theme['base-card']};
`

export const SelectedCoffee = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  width: 5.6rem;
  height: 2.3rem;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const Price = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`

export const ValueOrder = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

export const ValueOrderGroup = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
`

export const ValueItemDescription = styled.div`
  color: ${(props) => props.theme['base-text']};
`

export const ValueItem = styled.div`
  color: ${(props) => props.theme['base-text']};
`

export const TotalValueItems = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmOrder = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
`

export const ConfirmOrderButton = styled.button`
  width: 23rem;
  height: 2.87rem;
  border: 0;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
